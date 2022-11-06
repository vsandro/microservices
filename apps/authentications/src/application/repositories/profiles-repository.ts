import { Profile } from "../../domain/profile";

export interface ProfilesRepository {
  findById(id: string): Promise<Profile | null>;
}