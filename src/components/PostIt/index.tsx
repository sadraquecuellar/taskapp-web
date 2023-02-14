import { TaskData } from "../../interfaces/task-data";


export function PostIt({ color, title, description, created_at, done}: TaskData) {
  return (
    <div className={`${color} p-4 rounded-lg shadow-lg text-white hover:shadow-lg hover:scale-105 cursor-pointer `}>
      <p className="font-medium">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
}
