import logo from './logo.svg';
import './App.css';
import {store} from "./actions/store";
import {Provider} from "react-redux";
import JobDetail from "./components/JobDetail";
import { Container } from "@material-ui/core";
import JobForm from "./components/JobForm.js";
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

function App() {
  return (

    

    <Provider store={store}>
      <Router>
      <NavLink exact activeClassName="active" to="/">View Jobs</NavLink>
      <NavLink exact activeClassName="active" to="/JobForm">Add Jobs</NavLink>


<Switch>
<Route exact path="/" component={JobDetail}/>
<Route exact path="/JobForm" component={JobForm}/>

</Switch>
</Router>

      <Container maxWidth="lg">

</Container>



    </Provider>
    
  );
}

export default App;
