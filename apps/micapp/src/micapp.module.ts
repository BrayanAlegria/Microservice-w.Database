import { Module } from '@nestjs/common';
import { MicappController } from './micapp.controller';
import { MicappService } from './micapp.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entitites/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3309, 
      username: 'root',
      password: '',
      database: 'service',
      entities: [User], 
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [MicappController],
  providers: [MicappService],
})
export class MicappModule {}
