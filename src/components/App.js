import Homepage from "../pages/Homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostDetailsPage from "../pages/PostDetailsPage";
import Page_404 from "../pages/404Page";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/post/:post_id" exact component={PostDetailsPage} />
        <Route exact component={Page_404} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
