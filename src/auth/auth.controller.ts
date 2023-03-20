import { Body, Controller, Get, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthenticateDto } from 'src/dto/authenticate.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authServices : AuthService){}

    @Post()
    async login(@Res() res,@Body() authenticateDto:AuthenticateDto){
        try {
            const response = await this.authServices.authenticate(authenticateDto)
            return res.status(HttpStatus.OK).json({response})
        } catch (error) {
            return res.status(error.status).json(error.message)
        }
    }
}
