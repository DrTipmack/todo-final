import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Todo {
  readonly id: string;
  readonly owner: string;
  readonly name: string;
  readonly dueDateTime?: string;
  readonly passed?: boolean;
  readonly completed?: boolean;
  readonly description?: string;
  constructor(init: ModelInit<Todo>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}