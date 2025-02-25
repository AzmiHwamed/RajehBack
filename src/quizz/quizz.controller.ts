import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { QuizzService } from './quizz.service';
import { CreateQuizzDto, UpdateQuizzDto } from './dto';

@Controller('quizzes')
export class QuizzController {
    constructor(private readonly quizService: QuizzService) {}

    @Get()
    getAllQuizzes() {
        return this.quizService.getAllQuizzes();
    }

    @Get(':id')
    getQuizById(@Param('id') id: string) {
        return this.quizService.getQuizById(id);
    }

    @Post()
    createQuiz(@Body() data: CreateQuizzDto) {
        return this.quizService.createQuiz(data);
    }

    @Put(':id')
    updateQuiz(@Param('id') id: string, @Body() data: UpdateQuizzDto) {
        return this.quizService.updateQuiz(id, data);
    }

    @Delete(':id')
    deleteQuiz(@Param('id') id: string) {
        return this.quizService.deleteQuiz(id);
    }
}
