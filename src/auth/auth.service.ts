import { Injectable, NotFoundException } from '@nestjs/common';
import { faker } from '@faker-js/faker'
import { IAuthenticate, Role } from './interface/user.interface';
import { sign } from 'jsonwebtoken';
import { AuthenticateDto } from 'src/dto/authenticate.dto';

@Injectable()
export class AuthService {
    users =[
        {
            id:faker.datatype.uuid(),
            userName : 'Mahesh Dhawale',
            password:'mahesh',
            role : Role.Admin
        },
        {
            id:faker.datatype.uuid(),
            userName : 'Vedant Shende',
            password:'vedant',
            role : Role.User
        }
    ]

    authenticate(authenticateDto:AuthenticateDto):IAuthenticate{
        const user = this.users.find(
            (user)=>
            user.userName ===authenticateDto.userName &&
            user.password === authenticateDto.password
        );

        if(!user) throw new NotFoundException('Invalid Credentials')
        const token = sign({...user},'secret')

        return { token ,user }
    }
}
