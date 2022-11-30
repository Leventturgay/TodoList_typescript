interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

interface ITodoList {
  todos: TodoType[];
  toggleTodo: ToogleFn;
}
type AddFn = (text: string) => void;

type ToogleFn = (item: TodoType) => void;
