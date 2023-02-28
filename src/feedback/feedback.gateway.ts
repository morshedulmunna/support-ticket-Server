import { Feedback } from './entities/feedback.entity';
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Req } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class FeedbackGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly feedbackService: FeedbackService) {}

  @SubscribeMessage('createFeedback')
  async create(
    @MessageBody() createFeedbackDto: CreateFeedbackDto,
    @Req() req,
  ) {
    const id: string = req.user.id;
    const feedback = await this.feedbackService.create(createFeedbackDto, id);

    this.server.emit('feedback', feedback);

    return feedback;
  }

  @SubscribeMessage('findAllFeedback')
  findAll() {
    return this.feedbackService.findAll();
  }

  @SubscribeMessage('join')
  joinRoom(
    @MessageBody('feedback') feedback: string,
    @ConnectedSocket() client: Socket,
  ) {
    return this.feedbackService.identify(feedback, client.id);
  }

  @SubscribeMessage('typing')
  async typing() {
    return this.feedbackService.findAll();
  }
}
