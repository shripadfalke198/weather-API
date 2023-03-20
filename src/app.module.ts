import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';
import { WeatherController } from './weather/weather/weather.controller';
import { WeatherService } from './weather/weather/weather.service';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/weather'),
    CitiesModule,
    PassportModule,
    AuthModule,
    JwtModule.register({ secret : 'secret' , signOptions : { expiresIn: '1d' }})
  ],
  controllers: [AppController,WeatherController,AuthController],
  providers: [AppService,WeatherService,AuthService,JwtStrategy],
})
export class AppModule {}
