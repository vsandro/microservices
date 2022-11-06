import { ProfilesRepository } from "../../../../application/repositories/profiles-repository";
import { Profile } from "../../../../domain/profile";
import { prisma } from "../prisma";

export class PrismaProfilesRepository implements ProfilesRepository {
  async findById(id: string): Promise<Profile | null> {
    const profile = await prisma.profile.findUnique({
      where: { id: id },
    })

    if (!profile) {
      return null;
    }

    return new Profile({
      name: profile.name
    }, profile.id);
  }
}