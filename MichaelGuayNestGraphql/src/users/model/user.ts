import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field()
  userId: string;
  // userId?: string;

  @Field()
  email: string;

  @Field()
  age: number;
  // age?: number;

  @Field()
  isSubscribed?: boolean;

  @Field()
  password?: string;
}
