import { UsersRepository } from "../../../../application/repositories/users-repository";
import { User } from "../../../../domain/user";
import { prisma } from "../prisma";

export class PrismaUsersRepository implements UsersRepository {
  async create(user: User) {
    await prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      }
    })
  }
}