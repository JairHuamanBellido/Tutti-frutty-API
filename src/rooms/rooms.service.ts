import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Room } from './room.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RoomsService {

    constructor(@InjectModel('Room') private room:Model<Room>){}


    async findAll(): Promise<any>{
        return this.room.find().exec();
    }
}
