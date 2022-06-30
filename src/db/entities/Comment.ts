import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'
import { User } from './User';
import { Post } from './Post';

@ObjectType()
export class Comments {
    @Field((type) => ID)
    id: number
    
    @Field()
    content: string

    @Field((type) => User)
    author: User

    @Field((type) => ID)
    authorId: string

    @Field((type) => Post)
    post: Post

    @Field((type) => ID)
    postId: string

    @Field((type) => Date)
    createdAt: Date

    @Field((type) => Date)
    updatedAt: Date

}