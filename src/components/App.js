import Homepage from "../pages/Homepage";
import { BrowserRouter, Route } from "react-router-dom";
import PostDetailsPage from "../pages/PostDetailsPage";
import Page_404 from "../pages/404Page";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Homepage} />
      <Route path="/post/:post_id" exact component={PostDetailsPage} />
      <Route component={Page_404} />
    </BrowserRouter>
  );
};

export default App;
