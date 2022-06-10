import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import KRhome from "./components/KRhome";
import KRnavbar from './components/KRnavbar';

function App() {

  return (
      <div className="container-fluid">
        <KRnavbar />
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/home" exact component={KRhome} />
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
