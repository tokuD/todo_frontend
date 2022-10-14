import React from 'react'
import { Task } from '../utils/types'

type Props = {
  task: Task
}

const TaskItem = (props: Props) => {
  return (
    <div>{props.task.title}</div>
  )
}

export default TaskItem