import { AuthenticationsRepository } from "../../../../application/repositories/authentications-repository";
import { Authorization } from "../../../../domain/authorization";
import { prisma } from "../prisma";

export class PrismaAuthenticationsRepository implements AuthenticationsRepository {
  async create(authorization: Authorization) {
    await prisma.authorization.create({
      data: {
        id: authorization.id,
        userId: authorization.userId,
        profileId: authorization.profileId,
        createdAt: authorization.createdAt,
      }
    })
  }
}