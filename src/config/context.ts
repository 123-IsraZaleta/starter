import { PrismaClient } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { User } from "../db/entities";
import { Reaction } from '../db/entities/Reaction';
import { Comments } from '../db/entities/Comment';
import prisma from '../client';
export interface Context{
    prisma: PrismaClient;
    jwt?: string;
    user?: User;
    reaction?: Reaction;
    comments?: Comments;
}

export type MockContext = {
    prisma: DeepMockProxy<PrismaClient>;
}

export const createMockContext = (): MockContext => {
    return {
        prisma: mockDeep<PrismaClient>(),
    }
}

export const context:Context = {
    prisma
}