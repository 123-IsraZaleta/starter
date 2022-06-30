import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'
import { IsEmail } from 'class-validator'
import { Post } from './Post';
import { Reaction } from './Reaction';
@ObjectType()
export class User {
    @Field((type) => ID)
    id: string

    @Field()
    @IsEmail()
    email: string

    @Field((type) => String, { nullable: true })
    name: string | null

    @Field((type) => Date)
    createdAt: Date

    @Field((type) => Date)
    updatedAt: Date

    @Field((type) => Post)
    post?: Post

    @Field((type) => Reaction)
    reaction?: Reaction[]

    @Field((type) => Comment)
    comments?: Comment[]
}