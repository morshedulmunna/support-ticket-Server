import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';

@WebSocketGateway()
export class FeedbackGateway {
  constructor(private readonly feedbackService: FeedbackService) {}

  @SubscribeMessage('createFeedback')
  create(@MessageBody() createFeedbackDto: CreateFeedbackDto) {
    return this.feedbackService.create(createFeedbackDto);
  }

  @SubscribeMessage('findAllFeedback')
  findAll() {
    return this.feedbackService.findAll();
  }

  @SubscribeMessage('findOneFeedback')
  findOne(@MessageBody() id: number) {
    return this.feedbackService.findOne(id);
  }

  @SubscribeMessage('updateFeedback')
  update(@MessageBody() updateFeedbackDto: UpdateFeedbackDto) {
    return this.feedbackService.update(updateFeedbackDto.id, updateFeedbackDto);
  }

  @SubscribeMessage('removeFeedback')
  remove(@MessageBody() id: number) {
    return this.feedbackService.remove(id);
  }
}
