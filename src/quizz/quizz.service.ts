import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateQuizzDto, UpdateQuizzDto } from '../quizz/dto';

@Injectable()
export class QuizzService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllQuizzes() {
        return this.prisma.quiz.findMany({ include: { questions: true } });
    }

    async getQuizById(id: string) {
        return this.prisma.quiz.findUnique({ where: { id }, include: { questions: true } });
    }

    async createQuiz(data: CreateQuizzDto) {
        return this.prisma.quiz.create({ data });
    }

    async updateQuiz(id: string, data: UpdateQuizzDto) {
        return this.prisma.quiz.update({ where: { id }, data });
    }

    async deleteQuiz(id: string) {
        return this.prisma.quiz.delete({ where: { id } });
    }
}
