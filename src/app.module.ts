import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PodcastModule } from './podcast/podcast.module';
import { StoryModule } from './story/story.module';
import { QuizzModule } from './quizz/quizz.module';

@Module({
  imports: [PodcastModule, StoryModule, QuizzModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
