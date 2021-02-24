import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

import { listTodos } from "./graphql/queries.js";

import Auth from "./components/signIn.js";

function App() {
  const [todos, updateTodos] = useState([]);
  const [user, updateUser] = useState(undefined);

  async function getTodos() {
    const todoData = await API.graphql(graphqlOperation(listTodos));
    console.log("data from Cloud: ", todos);
    updateTodos(todoData);
  }
  if (user !== undefined) {
    return (
      <div>
        <h5>Hi, {user.attributes.name}</h5>
      </div>
    );
  } else {
    return <Auth setUser={updateUser} />;
  }
}
export default App;
