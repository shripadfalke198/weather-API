import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) {}

    @Roles('user')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Get()
    async getweather(@Query('city') city:string): Promise<object> {
        const response = await this.weatherService.getWeather(city);
        return response;
    }

    @Roles('user')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Get('/getweather')
    async getwe(){
        const resp = await this.weatherService.getWeatherOfBengaluru()
        return resp
    }
}
