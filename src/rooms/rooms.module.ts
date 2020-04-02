import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from './schemas/room.schema';
import { RoomsController } from './rooms.controller';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Room', schema: RoomSchema }])],
  providers: [RoomsService],
  controllers: [RoomsController],
})
export class RoomsModule {}
