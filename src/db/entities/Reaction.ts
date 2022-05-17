import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'
import { User } from './User';
import { Comments } from './Comments';

@ObjectType()
export class Reaction {
    @Field((type) => ID)
    id: number

    @Field((type) => User)
    author: User

    @Field((type) => Date)
    createdAt: Date

    @Field((type) => Date)
    updatedAt: Date

    @Field((type) => Comments)
    commment: Comments

}