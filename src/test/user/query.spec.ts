import { User } from "@prisma/client";
import { faker } from '@faker-js/faker';
import { MockContext, Context, createMockContext } from "../../config/context";
import { UserQuery } from "../../resolvers/query";

const userClass = new UserQuery();
const userId = "";
const spyUserClass = jest.spyOn(userClass, 'userNameEmail');

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
    mockCtx = createMockContext();
    ctx = mockCtx as unknown as Context;
})

test('should find a user by id ', async() => {
    const expectUser: User = {
        id: faker.database.mongodbObjectId(),
        email: faker.internet.email(),
        name: faker.name.findName(),
        createdAt: new Date(),
        updatedAt: new Date()
    };
    mockCtx.prisma.user.findUnique.mockResolvedValue(expectUser);
    const response = userClass.userById(mockCtx, { userId: ""});
    await expect(response).resolves.toEqual(expectUser);
});


test('Given an userId when user exist the return a userName with email ', async() => {
    const expectUser: User = {
        id: faker.database.mongodbObjectId(),
        email: faker.internet.email(),
        name: faker.name.findName(),
        createdAt: new Date(),
        updatedAt: new Date()
    };
    const expectResponse = `${expectUser.name}-${expectUser.email}`;
    mockCtx.prisma.user.findUnique.mockResolvedValue(expectUser);
    const response = userClass.userNameEmail(mockCtx, { userId: expectUser.id });
    expect(spyUserClass).toBeCalledTimes(1);
    await expect(response).resolves.toEqual(expectUser);
});


test('should find a user by id ', async() => {
    const expectedErrorMessage = `user not found with id ${userId}`;
    mockCtx.prisma.user.findUnique.mockResolvedValue(null);
    const response = userClass.userById(mockCtx, { userId });
    await expect(response).rejects.toThrow(expectedErrorMessage);
});