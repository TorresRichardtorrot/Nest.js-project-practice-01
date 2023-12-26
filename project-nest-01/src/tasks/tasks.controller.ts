import { 
    Controller,
    Get,
    Post,
    Delete,
    Put,
    Body,
    Param,
    ConflictException,
    NotFoundException,
    HttpCode
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdatesTaskDto } from 'src/dto/update-task.dto.ts';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

@Get()
findAll(){
    return this.tasksService.findAll();
}
@Get(':id')
 async finOne(@Param('id') id:string){
    const task =  await this.tasksService.findOne(id)
    if(!task) throw new NotFoundException('Task not found')
    return task
}

@Post()
 async create(@Body() body:CreateTaskDto){
    try {
        return await this.tasksService.create(body)
    } catch (error) {
        if(error.code === 11000){
            throw new ConflictException('Task already exists')
        }
        throw error;
    }
    
 }

@Delete(':id')
@HttpCode(204)
 async delete(@Param('id') id:string){
   const task = await this.tasksService.delete(id)
   if (!task) throw new NotFoundException('Task not found');
   return task
 }

@Put(':id')
 async update(@Param('id') id:string, @Body() body:UpdatesTaskDto){
   const task = await this.tasksService.update(id,body)
   if (!task) throw new NotFoundException('Task not found');
   return task
 }

}
