import React from "react";
import './styles.css'

export function CardTodo(props) {
    return (
        <div className="home-card">
            <h3>{props.tarefaList}</h3>
            <strong>{props.horario}</strong>
            <button>Excluir Tarefa</button>
        </div>
    )
}