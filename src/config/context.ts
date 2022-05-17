import { PrismaClient } from '@prisma/client';
import { User } from "../db/entities";
import { Reaction } from '../db/entities/Reaction';
import { Comments } from '../db/entities/Comments';

export const prisma = new PrismaClient();

export interface Context{
    prisma: PrismaClient;
    jwt?: string;
    user?: User;
    reaction?: Reaction;
    comments?: Comments;

}

export const context:Context = {
    prisma
}