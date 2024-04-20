import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getGello(): string {
    return 'Hello World!'
    }
}
