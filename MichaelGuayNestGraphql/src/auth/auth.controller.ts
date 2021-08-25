import { Controller, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { User } from "src/users/model/user";
import { AuthService } from "./auth.service";
import { LocalGuard } from "./guards/local-auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalGuard)
  @Post("login")
  login(@Req() req: Request): Promise<{ access_token: string }> {
    return this.authService.login(req.user as User);
  }
}
