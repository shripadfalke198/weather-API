import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cities, citiesSchema } from 'src/schema/cities.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
              name: Cities.name,
              schema: citiesSchema
            },
         ])
    ],
    providers: [CitiesService],
    controllers: [CitiesController],
    exports:[CitiesService]
})
export class CitiesModule {}
