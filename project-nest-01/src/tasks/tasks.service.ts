import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task }  from '../schemas/task.schema'
import { Model } from 'mongoose';
import { CreateTaskDto } from '../dto/create-task.dto'
import { UpdatesTaskDto } from 'src/dto/update-task.dto.ts';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

    findAll(){
        return this.taskModel.find()  
    }

    async create(createTask: CreateTaskDto ){
       const newTask = new this.taskModel(createTask)
       return newTask.save();
    }

    async findOne(id: string){
        return this.taskModel.findById(id)
    }

    async delete(id:string){
        return this.taskModel.findByIdAndDelete(id)
    }

    async update(id:string, task:UpdatesTaskDto){
        return this.taskModel.findByIdAndUpdate(id,task, {new: true})
    }
}
