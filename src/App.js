import './App.css';
import { useEffect} from "react";
import { BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import WebFont from "webfontloader";
import React from "react";
import UsersList from "./component/UsersList";
import UserList1 from "./component/UserList1"
import UserList2 from "./component/UserList2"
import UserList3 from "./component/UserList3"
import UserList4 from "./component/UserList4"
import UserOptions from './component/UserOptions';
function App() {
  
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <Router>
      <UserOptions/>
      <Switch>
        <Route
          exact
          path="/"
          component={UsersList}
        />
         <Route
          exact
          path="/filter1"
          component={UserList1}
        />
        <Route
          exact
          path="/filter2"
          component={UserList2}
        />
        <Route
          exact
          path="/filter3"
          component={UserList3}
        />
        <Route
          exact
          path="/filter4"
          component={UserList4}
        />
      </Switch>
    </Router>
  );
}

export default App;
