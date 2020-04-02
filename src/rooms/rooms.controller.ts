import { Controller, Get, Res } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Response } from 'express';

@Controller('rooms')
export class RoomsController {


    constructor(private roomService:RoomsService){}


    @Get()
    async findAll(@Res() res:Response){


        // res.json( await this.roomService.findAll());
    }
}
