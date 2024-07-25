import {create} from 'zustand';
import {Todo} from './types';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TodoStore = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, updatedTodo: Partial<Todo>) => void;
  handleComplete: (id: number) => void;
};

const useTodoStore = create<TodoStore>(
  persist(
    set => ({
      todos: [],
      addTodo: todo => set(state => ({todos: [...state.todos, todo]})),
      deleteTodo: id =>
        set(state => ({todos: state.todos.filter(todo => todo.id !== id)})),
      editTodo: (id, updatedTodo) =>
        set(state => ({
          todos: state.todos.map(todo =>
            todo.id === id ? {...todo, ...updatedTodo} : todo,
          ),
        })),
      handleComplete: id =>
        set(state => ({
          todos: state.todos.map(todo =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo,
          ),
        })),
    }),
    {name: 'todo-storage', storage: createJSONStorage(() => AsyncStorage)},
  ),
);

export default useTodoStore;
