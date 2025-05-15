// Interface đại diện cho một Todo item
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Props cho TodoForm
export interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

// Props cho TodoList
export interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

// Props cho mỗi TodoItem
export interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}
