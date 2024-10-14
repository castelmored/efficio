export function Header(props) {
  const { todos } = props;
  const todosLength = todos.length;

  const isTasksPlural = todosLength != 1;

  const taskOrTasks = isTasksPlural ? "tasks" : "task";

  return (
    <header>
      <h1 class="text-gradient">
        You have {todosLength} open {taskOrTasks}.
      </h1>
    </header>
  );
}
