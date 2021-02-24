/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      owner
      name
      passed
      completed
      dueDateTime
      description
      _version
      _deleted
      _lastChangedAt
      createdOn
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        name
        passed
        completed
        dueDateTime
        description
        _version
        _deleted
        _lastChangedAt
        createdOn
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        owner
        name
        passed
        completed
        dueDateTime
        description
        _version
        _deleted
        _lastChangedAt
        createdOn
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
