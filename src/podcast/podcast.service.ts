import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Podcast } from '@prisma/client';

@Injectable()
export class PodcastService {
  constructor(private prisma: PrismaService) {}

  async create(data: { title: string; description: string; audioUrl: string; quizId: string }): Promise<Podcast> {
    return this.prisma.podcast.create({ data });
  }

  async findAll(): Promise<Podcast[]> {
    return this.prisma.podcast.findMany({ include: { quiz: true } });
  }

  async findOne(id: string): Promise<Podcast> {
    const podcast = await this.prisma.podcast.findUnique({ where: { id }, include: { quiz: true } });
    if (!podcast) {
      throw new NotFoundException('Podcast not found');
    }
    return podcast;
  }

  async update(id: string, data: { title?: string; description?: string; audioUrl?: string; quizId?: string }): Promise<Podcast> {
    const existingPodcast = await this.prisma.podcast.findUnique({ where: { id } });
    if (!existingPodcast) {
      throw new NotFoundException('Podcast not found');
    }
    return this.prisma.podcast.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Podcast> {
    const existingPodcast = await this.prisma.podcast.findUnique({ where: { id } });
    if (!existingPodcast) {
      throw new NotFoundException('Podcast not found');
    }
    return this.prisma.podcast.delete({ where: { id } });
  }
}