import React, { useState } from "react";
import './styles.css'
import { FcPlus, FcTodoList } from 'react-icons/fc'
import { CardTodo } from "../../components/CardTodo/CardTodo";

export function Home() {

    const [tarefa, setTarefa] = useState()
    const [tarefas, setTarefas] = useState([])

    function handleAddTask() {
        const newTask = {
            name : tarefa,
            time: new Date().toLocaleTimeString('pt-br',{
                hour:'2-digit',
                minute:'2-digit',
                second:'2-digit'
            }),
        }
        setTarefas((prevState)=> [...prevState,newTask])
    }
    function handleDeleteTask() {

    }


    return (
        <div className="home">
            <header>
                <h1><FcTodoList />Todo List</h1>
            </header>
            <div className="form-home">
                <input
                    type='text'
                    placeholder="Digite sua Tarefa"
                    onChange={e => setTarefa(e.target.value)}
                />
                <button onClick={handleAddTask}><FcPlus className="icon-form-home" />Adicionar tarefa </button>
            </div>
            {
                tarefas.map((task) =>
                    <CardTodo key={task.time} tarefaList={task.name} horario={task.time} />
                )
            }
        </div>
    )
}