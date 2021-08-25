import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GqlAuthGuard } from "src/auth/guards/gql-auth.guard";
import { GetUserArgs, GetUsersArgs } from "./dto/args/get-user.args";
import {
  CreateUserDto,
  DeleteUserDto,
  UpdateUserDto,
} from "./dto/inputs/user.input";
import { User } from "./model/user";
import { UserService } from "./users.service";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: "user" })
  async getUser(@Args() getUserArgs: GetUserArgs): Promise<User> {
    return this.userService.getUser(getUserArgs);
  }

  @Query(() => [User], { name: "users" })
  @UseGuards(GqlAuthGuard)
  async getUSers(@Args() getUsersArgs: GetUsersArgs): Promise<User[]> {
    return this.userService.getUsers(getUsersArgs);
  }

  @Mutation(() => User)
  async createUser(
    @Args("createUser") createUserDto: CreateUserDto
  ): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Mutation(() => User)
  async updateUser(
    @Args("updateUser") updateUserDto: UpdateUserDto
  ): Promise<User> {
    return this.userService.updateUser(updateUserDto);
  }

  @Mutation(() => User)
  async deleteUser(
    @Args("deleteUser") deleteUserDto: DeleteUserDto
  ): Promise<User> {
    return this.userService.deleteUser(deleteUserDto);
  }
}
