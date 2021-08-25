import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/model/user";
import { UserService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validate(email: string, password: string): Promise<User | null> {
    const user = this.userService.getUserByEmail(email);
    if (!user) {
      return null;
    }
    const passwordIsValidated = password === user.password;
    return passwordIsValidated ? user : null;
  }
  async login(user: User): Promise<{ access_token: string }> {
    const payload = {
      email: user.email,
      sub: user.userId,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  async verify(token: string): Promise<User> {
    const decoded = this.jwtService.verify(token, { secret: "Secret" });
    const user = this.userService.getUserByEmail(decoded.email);
    if (!user) {
      throw new Error("Unable to get the user from decoded token");
    }
    return user;
  }
}
