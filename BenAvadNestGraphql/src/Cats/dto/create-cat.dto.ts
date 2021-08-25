import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateCatDto {
  @Field(() => ID)
  id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly age: number;

  @Field()
  readonly breed: string;
}

@InputType()
export class CatInput {
  @Field()
  readonly name: string;

  @Field(() => Int)
  readonly age: number;

  @Field()
  readonly breed: string;
}

// export class CreateCatDto {
//   readonly name: string;
//   readonly age: number;
//   readonly breed: string;
// }
