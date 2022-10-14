export type User = {
  email: string
  name: string
  id: number
}

export type Task = {
  title: string,
  description: string,
  is_finished: boolean,
  id: number,
  owner: User,
  deadline: string,
  created_at: string
}

export type Token = {
  access_token: string,
  token_type: string
}