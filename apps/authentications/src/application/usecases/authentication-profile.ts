import { User } from "../../domain/user";
import { Authorization } from "../../domain/authorization";
import { MessagingAdapter } from "../adapters/messaging-adapter";
import { UsersRepository } from "../repositories/users-repository";
import { ProfilesRepository } from "../repositories/profiles-repository";
import { AuthenticationsRepository } from "../repositories/authentications-repository";

interface AuthenticationProfileRequest {
  name: string;
  email: string;
  password: string;
  profileId: string;
}

export class AuthenticationProfile {
  constructor(
    private UsersRepository: UsersRepository,
    private ProfilesRepository: ProfilesRepository,
    private AuthenticationsRepository: AuthenticationsRepository,

    private messagingAdapter: MessagingAdapter,
  ) {}

  async execute({ name, email, password, profileId }: AuthenticationProfileRequest): Promise<void> {
    const profile = await this.ProfilesRepository.findById(profileId);

    const profileExists = !!profile;

    if (!profileExists) {
      throw new Error('Profile does not exists!');
    }
    else {
      const user = new User({
        name,
        email, 
        password,
      })
  
      await this.UsersRepository.create(user);
  
      const authorization = new Authorization({
        userId: user.id,
        profileId,
        createdAt: new Date(),
      })
  
      await this.AuthenticationsRepository.create(authorization);
  
      await this.messagingAdapter.sendMessage('Authentications.new-Authorization', {
        profile: {
          id: profile.id,
          name: profile.name,
        },
        user: {
          name: user.name,
          email: user.email,
          password: user.password,
        },
        AuthorizationId: authorization.id,
      })    
    }
  }
}