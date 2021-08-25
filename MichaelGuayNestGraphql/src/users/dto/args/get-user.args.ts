import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetUserArgs {
  @Field(() => String)
  userId: string;
}

@ArgsType()
export class GetUsersArgs {
  @Field(() => [String])
  userIds: string[];
}
