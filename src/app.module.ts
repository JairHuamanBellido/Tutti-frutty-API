import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsGateway } from './events.gateway';
import {  MongooseModule} from "@nestjs/mongoose";

import {  config} from "dotenv";
import { RoomsModule } from './rooms/rooms.module';
config();
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_CONNECTION, {useNewUrlParser:true,useUnifiedTopology:true}), RoomsModule],
  controllers: [AppController],
  providers: [AppService, EventsGateway],

})
export class AppModule {}
