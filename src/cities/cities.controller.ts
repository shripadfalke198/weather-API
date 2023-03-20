import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { createCitiesDto } from 'src/dto/create-cities.dto';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
    constructor(private readonly citiesService:CitiesService){ }

    @Roles('admin')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Post()
    create( @Body() createCitiesDto: createCitiesDto) {
        return this.citiesService.createCity(createCitiesDto);
    }

    @Roles('admin','user')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Get()
    findAll() {
        return this.citiesService.findAll();
    }

    @Roles('admin','user')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Get(':city')
    findOne(@Param('city') cityName: string) {
        return this.citiesService.findOne(cityName);
    }

    @Roles('admin')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Delete()
    deleteOne(@Param('city') cityName:string){
        return this.citiesService.remove(cityName)
    }

}
