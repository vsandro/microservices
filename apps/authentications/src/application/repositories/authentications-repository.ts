import { Authorization } from "../../domain/authorization";

export interface AuthenticationsRepository {
  create(Authorization: Authorization): Promise<void>;
}