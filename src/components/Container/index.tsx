import { useTaskData } from '../../hooks/useTaskData';
import { PostIt } from '../PostIt';

export function Container() {

  const { data, isLoading } = useTaskData()

  return (
    <div className="w-full h-ful rounded-lg mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {isLoading ? <p>Carregando</p>
            :
          data?.data.map((reminder) => (
            <PostIt
              id={reminder?.id}
              title={reminder?.title}
              description={reminder?.description}
              color={reminder.color}
              done={reminder?.done}
              created_at={reminder?.created_at}
            />
          ))
        }
        
    </div>
    </div>
  );
}
