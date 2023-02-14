import {useQuery} from 'react-query'

import api  from '../services/api'

import {AxiosPromise} from 'axios'
import {TaskResponse} from '../interfaces/task-data'

const fetchData = async (): AxiosPromise<TaskResponse> => {
  const response = await api.get<TaskResponse>('/tasks')
  return response
}

export function useTaskData(){
  const query = useQuery({
     queryFn: fetchData,
     queryKey: ['get-tasks']
  })

  return {
    ...query,
    data: query?.data?.data
  }
}