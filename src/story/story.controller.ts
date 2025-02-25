import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { StoryService } from './story.service';
import { CreateStoryDto, UpdateStoryDto } from './dto';

@Controller('stories')
export class StoryController {
    constructor(private readonly storyService: StoryService) {}

    @Get()
    getAllStories() {
        return this.storyService.getAllStories();
    }

    @Get(':id')
    getStoryById(@Param('id') id: string) {
        return this.storyService.getStoryById(id);
    }

    @Post()
    createStory(@Body() data: CreateStoryDto) {
        return this.storyService.createStory(data);
    }

    @Put(':id')
    updateStory(@Param('id') id: string, @Body() data: UpdateStoryDto) {
        return this.storyService.updateStory(id, data);
    }

    @Delete(':id')
    deleteStory(@Param('id') id: string) {
        return this.storyService.deleteStory(id);
    }
}
