import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";
import { AuthService } from "./auth.service";
import { JwtStratergy } from "./stratergies/jwt.stratergy";
import { LocalStratergy } from "./stratergies/local.stratergy";
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: "Secret",
      signOptions: { expiresIn: "3600s" },
    }),
  ],
  providers: [AuthService, JwtStratergy, LocalStratergy],
  controllers: [AuthController],
})
export class AuthModule {}
