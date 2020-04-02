import { Test, TestingModule } from '@nestjs/testing';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { MongooseModule } from '@nestjs/mongoose';
import { config} from "dotenv";
import { RoomSchema } from './schemas/room.schema';
config();
describe('Rooms Controller', () => {
  let controller: RoomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ MongooseModule.forRoot(process.env.MONGO_CONNECTION, {useNewUrlParser:true,useUnifiedTopology:true}),
        MongooseModule.forFeature([
          { name: 'Room', schema: RoomSchema },
        ])],
      providers: [ RoomsService],
      controllers: [RoomsController],
      
    }).compile();

    controller = module.get<RoomsController>(RoomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
