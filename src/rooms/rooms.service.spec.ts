import { Test, TestingModule } from '@nestjs/testing';
import { RoomsService } from './rooms.service';
import { RoomsModule } from './rooms.module';
import { MongooseModule, InjectModel } from '@nestjs/mongoose';
import { RoomSchema } from './schemas/room.schema';
import { config } from 'dotenv';
import { AppModule } from '../app.module';
import { connections } from 'mongoose';
config();
describe('RoomsService', () => {
  let service: RoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(process.env.MONGO_CONNECTION, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }),
        MongooseModule.forFeature([{ name: 'Room', schema: RoomSchema }]),
      ],

      providers: [RoomsService],
      exports: [RoomsService],
    }).compile();

    service = module.get<RoomsService>(RoomsService);
  });

  it('should be defined', async () => {
    try {
      expect(service).toBeDefined();
    } catch (error) {
      console.log(error);
    }
  });

  afterEach(done => {
    connections[1].close(() => {
      done();
    });
  });
});
