import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './User';
import { Reaction } from './Reaction';

@ObjectType()
export class Post {
    @Field((type) => ID)
    id: string

    @Field()
    title: string

    @Field((type) => String, { nullable: true})
    content: string | null

    @Field()
    published: boolean

    @Field((type) => User)
    autor: User

    @Field()
    authorId: string

    @Field((type) => Date)
    createdAt: Date

    @Field((type) => Date)
    updatedAt: Date

    @Field((type) => Reaction)
    reactions: Reaction

    @Field((type)=> Comment)
    comments: Comment
    
}