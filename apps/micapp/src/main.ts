import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions} from '@nestjs/microservices'; 
import { MicappModule } from './micapp.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MicappModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
