import type { TodoListProps } from '../types';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggleComplete, onDelete, onEdit }: TodoListProps) {
  return (
    <ul className='w-[60%] mx-auto mt-6 bg-white rounded shadow'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
