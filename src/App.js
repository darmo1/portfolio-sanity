import { BrowserRouter, Switch, Route} from "react-router-dom";

//Components
import Home from "./components/Home";
import About from "./components/AboutUs";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import Project from "./components/Project";
import NotFound from "./components/NotFound";

//Layout
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/post/" component={Post} />
        <Route exact path="/post/:slug" component={SinglePost} />
        <Route exact path="/project" component={Project} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
