import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStoryDto, UpdateStoryDto } from './dto/';

@Injectable()
export class StoryService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllStories() {
        return this.prisma.story.findMany({ include: { quiz: true } });
    }

    async getStoryById(id: string) {
        return this.prisma.story.findUnique({ where: { id }, include: { quiz: true } });
    }

    async createStory(data: CreateStoryDto) {
        return this.prisma.story.create({ data });
    }

    async updateStory(id: string, data: UpdateStoryDto) {
        return this.prisma.story.update({ where: { id }, data });
    }

    async deleteStory(id: string) {
        return this.prisma.story.delete({ where: { id } });
    }
}
