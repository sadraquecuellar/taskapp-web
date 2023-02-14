import {useState} from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { useTaskData } from '../../hooks/useTaskData';
import { NewTaskForm } from '../NewTaskForm';
import { PostIt } from '../PostIt';

export function Container() {

  const { data, isLoading } = useTaskData()
  const [dataEdit, setDataEdit] = useState({})

  return (
    <div className="w-full h-ful rounded-lg mt-10">
      <Dialog.Root>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {isLoading ? <p>Carregando</p>
              :
            data?.data.map((reminder) => (
              <Dialog.Trigger key={reminder.id} onClick={() => setDataEdit(reminder)} className='text-left'>
                <PostIt
                  id={reminder?.id}
                  title={reminder?.title}
                  description={reminder?.description}
                  color={reminder.color}
                  done={reminder?.done}
                  created_at={reminder?.created_at}
                />
              </Dialog.Trigger>
              ))
            }
          
        </div>
        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
              <X size={24} aria-label="fechar" />
            </Dialog.Close>
            <Dialog.Title className="text-3xl leading-tight font-extrabold">
              Editar Tarefa
            </Dialog.Title>
            <NewTaskForm edit={true} dataEdit={dataEdit} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
