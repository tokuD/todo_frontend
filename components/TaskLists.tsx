import React, { useEffect, useState } from "react"
import { backendUrl } from "../utils/backend"
import { Task } from "../utils/types"
import TaskItem from "./TaskItem"



type Props = {}

const TaskLists = (props: Props) => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const getTasks = async () => {
      const res = await fetch(backendUrl + "/tasks/")
      const data: Task[] = await res.json()
      setTasks(data)
    }
    getTasks()
  }, [])

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task}/>
      ))}
    </div>
  )
}

export default TaskLists
