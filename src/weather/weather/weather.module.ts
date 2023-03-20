import { Module } from '@nestjs/common';
import { CitiesModule } from 'src/cities/cities.module';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

@Module({
    controllers: [WeatherController],
    providers: [WeatherService],
    imports: [CitiesModule]
})
export class WeatherModule {  }
