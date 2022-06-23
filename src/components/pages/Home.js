import { Route, Switch } from "react-router-dom";
import Navbar from "../layout/Navbar";
import User from "../users/User";
import About from "./About";
import PageNotFound from "./PageNotFound";
import SearchBody from "./SearchBody";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={SearchBody} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/user/:login"
            render={(props) => <User {...props} />}
          />
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default Home;
