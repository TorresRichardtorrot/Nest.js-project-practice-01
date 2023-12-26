import { CreateTask,UpdateTask } from "../interfaces/task.interface"
const API = "http://localhost:3000/api"

const HTTP = (objet:CreateTask|UpdateTask,method:string)=>{
    return {
        method:method,
        body:JSON.stringify(objet),
        headers:{
            'Content-Type':'application/json'
        }
    }
}

export const createTaskRequest = async (task:CreateTask) =>{

  return await fetch(`${API}/tasks`,HTTP(task,'POST'))
}


export const getTaskRequest = () => fetch(`${API}/tasks`)

export const deleteTaskRequest = async (id:string) => {
    return await fetch(`${API}/tasks/${id}`,{
        method:"DELETE",
    });

}

export const updateTaskRequest = async (id:string, task:UpdateTask) =>{
    return await fetch(`${API}/tasks/${id}`,HTTP(task,'PUT'))
}