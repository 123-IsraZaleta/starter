import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'
import { User } from './User';
import { Post } from './Post';

@ObjectType()
export class Comments {
    @Field((type) => ID)
    id: number
    
    @Field((type) => User)
    author: User

    @Field()
    commentBody: string

    @Field((type) => Date)
    createdAt: Date

    @Field((type) => Date)
    updatedAt: Date

    @Field((type) => Post)
    post: Post

}