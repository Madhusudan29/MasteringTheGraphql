import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
// import { Strategy } from "passport";
import { User } from "src/users/model/user";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStratergy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: "email", passwordField: "password" });
  }
  async validate(email: string, password: string): Promise<User> {
    const user = this.authService.validate(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return await user;
  }
}
