import { useMutation } from "react-query";
import { TaskData } from "../interfaces/task-data";
import api from "../services/api";

const postTask = async (data: TaskData)=> {
  return await api.post('/task', data)
}

export function useTaskMutatePost(){
  const mutate = useMutation({
    mutationFn:postTask,
    mutationKey: ['post-task']
  })

  return mutate
}