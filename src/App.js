import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import TasksList from "./pages/TasksList";
import CreateTask from "./pages/CreateTask";
import BulkDelete from "./pages/BulkDelete";

class App extends Component { 

  render() {
    return(
      <React.Fragment>
        <Router>
          <Switch>
            
            <Route path="/list-tasks">
              <TasksList />
            </Route>
            <Route path="/create-task">
              <CreateTask />
            </Route>
            <Route path="/bulk-delete">
              <BulkDelete />
            </Route>
            <Route exact path="/">
              <Redirect to={{pathname: "/list-tasks"}}/>
            </Route>
            
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;
