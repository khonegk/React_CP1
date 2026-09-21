export interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
}
export function TaskItem({task}: {task: Task}) {
    return(
        <li key={task.id} style={{textDecoration: task.isCompleted ? 'line-through' : 'none',}}>
            {task.title}
        </li>
    )
}