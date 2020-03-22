import {
  SubscribeMessage,
  WebSocketGateway,
  MessageBody,
  WsResponse,
  ConnectedSocket,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway() 
export class EventsGateway {



  @SubscribeMessage('message')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: any,
  ) {

    
    client.broadcast.emit('new user', payload);
    
   
  }

  afterInit(server:Server){
    console.log("Alguien se unio")
    server.emit("new user");
  }


}
