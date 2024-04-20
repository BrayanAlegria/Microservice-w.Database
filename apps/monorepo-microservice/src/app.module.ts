import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices'; 
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      { 
        name: 'USERCRUD', 
        transport: Transport.TCP,
      }
    ]),
  ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
