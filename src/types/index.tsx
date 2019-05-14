export interface TodoStore {
  id?: string;
  text?: string;
  created?: string;
  updated?: string;
  isCompleted?: boolean;
  urgency?: number;
}


export interface TodoStore extends Array<TodoStore>{}