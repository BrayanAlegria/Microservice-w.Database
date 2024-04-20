import { Controller, Get} from '@nestjs/common';
import { MicappService } from './micapp.service';
import { MessagePattern } from '@nestjs/microservices';
import { UserDto } from './dto/user.dto';

@Controller()
export class MicappController {
  constructor(private readonly micappService: MicappService) {}

  @MessagePattern({cdm: 'create'})
  async create(userDto: UserDto) {
    console.log(userDto)
    return await this.micappService.create(userDto);
  }

  @MessagePattern({cdm: 'update'})
  async update(user: UserDto) {
    return await this.micappService.update(user);
  }

  @MessagePattern({cdm: 'findOne'}) 
  async findOne(id: number) {
    return await this.micappService.findOne(id);
  }

  @MessagePattern({cdm: 'remove'})
  async remove(id: number) {
    return await this.micappService.remove(id);
  }
}


