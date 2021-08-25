import { Injectable } from "@nestjs/common";
import { GetUserArgs, GetUsersArgs } from "./dto/args/get-user.args";
import {
  CreateUserDto,
  DeleteUserDto,
  UpdateUserDto,
} from "./dto/inputs/user.input";
import { User } from "./model/user";

@Injectable()
export class UserService {
  private users: User[] = [
    {
      userId: "1",
      email: "tmadhumini9@gmail.com",
      password: "12365478963",
      age: 15,
    },
  ];

  createUser(createUserDto: CreateUserDto): User {
    const user: User = {
      userId: `${this.users.length + 1}`,
      ...createUserDto,
    };
    this.users.push(user);
    return user;
  }

  updateUser(updateUserDto: UpdateUserDto): User {
    const user = this.users.find(
      (user) => user.userId === updateUserDto.userId
    );
    Object.assign(user, updateUserDto);
    return user;
  } // I not understood error at first but it was because data was being stored in momory.

  getUser(getUserArgs: GetUserArgs): User {
    return this.users.find((user) => user.userId === getUserArgs.userId);
  }

  getUserByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  getUsers(getUsersArgs: GetUsersArgs): User[] {
    return getUsersArgs.userIds.map((userId) => this.getUser({ userId }));
  }

  deleteUser(deleteUserDto: DeleteUserDto): User {
    const userIndex = this.users.findIndex(
      (user) => user.userId === deleteUserDto.userId
    );
    const user = this.users[userIndex];
    this.users.splice(userIndex);
    return user;
  }
}
