import {TaskItem} from "./TaskItem.tsx";
interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
}
interface TaskBoard {
    tasks: Task[];
}
function TaskList({ tasks }: TaskBoard) {
    if (tasks.length === 0) {
        return <p>Нет задач</p>;
    }
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    )
}
export default TaskList;