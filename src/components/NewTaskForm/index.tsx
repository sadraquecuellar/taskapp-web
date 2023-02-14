import { useState, useEffect } from 'react';
import { Check, CaretDown } from 'phosphor-react';
import { useTaskMutate } from '../../hooks/useTaskMutate';

export function NewTaskForm() {
  const [color, setColor] = useState('white')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const {mutate, isSuccess} = useTaskMutate()

  const handleSave = () => {
    const newTask = { 
      title,
      description,
      color,
      created_at: new Date(),
      done: false,
    }
    mutate(newTask)
  }


  return (
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Título da tarefa:
      </label>
      <input
        id="title"
        type="text"
        placeholder="ex.: Estudar estrutura de dados"
        autoFocus
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />
      <label htmlFor="title" className="font-semibold leading-tight mt-2">
        Descrição da tarefa:
      </label>
      <textarea
        id="description"
        placeholder="ex.: Estudar vetor, pilha, fila, árvore"
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      />
      <label htmlFor="title" className="font-semibold leading-tight mt-2">
        Cor do post-it:
      </label>
      <div className="w-full flex flex-row ">
        <div className="relative mt-2 mb-2 w-2/3">
          <select onChange={(e)=>{setColor(e.target.value)}} className="block appearance-none w-full bg-zinc-800  hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="">Aleatório</option>
            <option value="bg-yellow-500">Amarelo</option>
            <option value="bg-blue-500">Azul</option>
            <option value="bg-red-500">Vermelho</option>
            <option value="bg-green-500">Verde</option>
            <option value="bg-pink-500">Rosa</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <CaretDown color='white'/>
          </div>
        </div>
        <div className='w-1/3 flex items-center justify-end'>
          <div className={`h-8 w-20 rounded-lg ${color}`}></div>
        </div>
      </div>

      <button
        onClick={()=> handleSave()}
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
