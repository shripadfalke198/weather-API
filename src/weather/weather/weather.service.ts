import { Injectable } from '@nestjs/common';
import axios,{ AxiosInstance } from 'axios'
import { CitiesService } from 'src/cities/cities.service';
import { map, catchError } from 'rxjs';


@Injectable()
export class WeatherService {
    private client: AxiosInstance;

    constructor( private readonly citiesService:CitiesService ) {
        this.client = axios.create({
          baseURL: 'https://api.openweathermap.org/data/2.5/',
          params: {
            appid: 'e8487b61a6e15119448b05f80d74a618',
          },
        });
      }

      async getWeather(cityName: string): Promise<object> {
        const cityExisted = await this.citiesService.findOne(cityName)
        if(!cityExisted){
            return { message :'city doesnt exist,Please add to the database'}
        }
        const response = await this.client.get('weather', {
          params: { q: cityName },
        });
        return response.data;
      }


      async getWeatherOfBengaluru(){
        const urlString ='https://api.openweathermap.org/data/2.5/weather?appid=e8487b61a6e15119448b05f80d74a618&q=Bengaluru'
        const response = await axios({
            method:'GET',
            baseURL:urlString
        })
        return response.data;
        
      }
}

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}