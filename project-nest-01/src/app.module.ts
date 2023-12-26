import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://caracas:2cTpN643tTOOux1W@cluster0.5m48tf4.mongodb.net/?retryWrites=true&w=majority'),
    TasksModule],
})
export class AppModule {}
