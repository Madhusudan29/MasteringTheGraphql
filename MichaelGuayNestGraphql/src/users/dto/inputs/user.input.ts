import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field(() => String)
  email: string;

  @Field(() => Number)
  age: number;
}

@InputType()
export class UpdateUserDto {
  @Field()
  userId: string;

  @Field()
  age?: number;

  @Field(() => Boolean, { nullable: true })
  isSubscribed?: boolean;
}

@InputType()
export class DeleteUserDto {
  @Field()
  userId: string;
}
