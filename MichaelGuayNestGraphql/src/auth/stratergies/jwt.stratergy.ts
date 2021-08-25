import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/users/model/user";
import { UserService } from "src/users/users.service";

@Injectable()
export class JwtStratergy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "Secret",
    });
  }

  async validate(payload: {
    email: string;
    sub: string;
  }): Promise<User | null> {
    const user = this.userService.getUserByEmail(payload.email);
    return user;
  }
}
