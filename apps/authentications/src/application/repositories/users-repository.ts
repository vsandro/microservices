import { User } from "../../domain/user";

export interface UsersRepository {
  create(User: User): Promise<void>;
}