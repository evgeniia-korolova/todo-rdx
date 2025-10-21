import { useEffect, useState } from 'react'
import { TodoItem } from '../models/todo-item.interface'
import { Link, useNavigate, useParams } from 'react-router-dom'

interface ComponentProps {
  todos: TodoItem[]
}

export const ItemDetails = ({todos}: ComponentProps) => {

  const {id} = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<TodoItem>()

  useEffect(() => {
    const searchTodo = todos.find((todo) => String(todo.id) === id)
    if(searchTodo) {
      setTodo(searchTodo)
    } else {
      navigate('/NotFound')
    }
  }, [todos, id, navigate])
  return (
    <div className='container'>
      <h1>{todo?.title} </h1>
      <Link to='/'>Back Home</Link>
    </div>
  )
}


