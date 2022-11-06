import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import { PrismaUsersRepository } from '../database/prisma/repositories/prisma-users-repository';
import { PrismaProfilesRepository } from '../database/prisma/repositories/prisma-profiles-repository';
import { PrismaAuthenticationsRepository } from '../database/prisma/repositories/prisma-authentications-repository';
import { AuthenticationProfile } from '../../application/usecases/authentication-profile';
import { KafkaMessagingAdapter } from '../messaging/kafka/adapters/kafka-messaging-adapter';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.json({ ok: true })
})

app.post('/Authentications', async (request, response) => {
  const { profileId, name, email } = request.body;

  const prismaUsersRepository = new PrismaUsersRepository();
  const prismaProfilesRepository = new PrismaProfilesRepository();
  const prismaAuthenticationsRepository = new PrismaAuthenticationsRepository();
  const kafkaMessagingAdapter = new KafkaMessagingAdapter()

  const AuthenticationProfileUseCase = new AuthenticationProfile(
    prismaUsersRepository, 
    prismaProfilesRepository,
    prismaAuthenticationsRepository,
    kafkaMessagingAdapter
  )

  try {
    await AuthenticationProfileUseCase.execute({
      name,
      email,
      profileId,
    })

    return response.status(201).send();
  } catch (err) {
    console.error(err);

    return response.status(400).json({
      error: 'Error while creating a new purchase'
    })
  }
})

app.listen(process.env.PORT || 3333, () => {
  console.log('[Authentications] Server running');
});