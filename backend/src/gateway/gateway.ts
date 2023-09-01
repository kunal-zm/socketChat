import { OnModuleInit } from "@nestjs/common";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io';
@WebSocketGateway({
    cors: { origin: ['http://localhost:3000'] }
})
export class gateway implements OnModuleInit {
    @WebSocketServer()
    server: Server

    onModuleInit() {
        this.server.on('connection', (socket) => {
            console.log(socket.id)
            console.log('connected')
        })
    }
    @SubscribeMessage('newMessage')
    onNewMessage(@MessageBody() Body: any) {
        const { combineId, value } = Body
        console.log(Body)
        const res = `${combineId.combineId}SUBSCRIBE`;
        console.log(res)
        this.server.emit(res, {
            msg: 'new message here',
            content: value
        })
    }
}