import { useMutation } from "react-query";
import { TaskData } from "../interfaces/task-data";
import api from "../services/api";

const putTask = async (data: TaskData)=> {
  return await api.put(`/task/${data?.id}`, data)
}

export function useTaskMutatePut(){
  const mutate = useMutation({
    mutationFn:putTask,
    mutationKey: ['put-task']
  })

  return mutate
}