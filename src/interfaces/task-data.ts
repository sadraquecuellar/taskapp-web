export interface TaskData {
  id: number;
  title: string;
  description: string;
  color: string;
  done: boolean;
  created_at: Date;
}

export interface TaskResponse{
  data: TaskData[]
}