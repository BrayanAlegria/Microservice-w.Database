import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './entitites/user.entity';

@Injectable()
export class MicappService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(user: UserDto): Promise<User | null> {
    console.log(user)
    const newUser = await this.userRepository.create(user);
    const saveUser = await this.userRepository.save(newUser);
    return saveUser;
  }

  async findOne(id: number): Promise<User | null> {
    return await this.userRepository.findOne({
      where: { id: id }
    });
  }

  async update(user: UserDto): Promise<User | null> {
    const userData = {
      name: user.name,
      email: user.email,
      password: user.password
    }
    const id = user.id;

    await this.userRepository.update(id, userData);
    return await this.findOne(id);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}

