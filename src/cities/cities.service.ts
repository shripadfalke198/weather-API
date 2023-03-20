import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cities, CitiesDocument } from 'src/schema/cities.schema';
import { createCitiesDto } from 'src/dto/create-cities.dto';

@Injectable()
export class CitiesService {
    constructor(@InjectModel(Cities.name) private readonly citiesModel: Model<CitiesDocument>){ }

    async createCity(createCitiesDto:createCitiesDto){
        const cityExist = await this.findOne(createCitiesDto.cityName)
        if(cityExist){
            // return cityExist
            return { 'message':'City already exist' } 
        }
        const cities = new this.citiesModel(createCitiesDto)
        return cities.save()
    }

    async findAll():Promise<CitiesDocument[]>{
        return this.citiesModel.find()
        .exec() 
    }

    async findOne(cityName:string){
        const cityExist =await this.citiesModel.findOne({cityName}).exec()
        // if(!cityExist){
        //     return { 'message':'City didnot exist' }
        // }
        return cityExist
    }

    async remove(cityName: string) {
        return this.citiesModel.findOneAndRemove({cityName}).exec();
    }
}
