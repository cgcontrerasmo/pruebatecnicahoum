import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import DetailMovie from "../templates/detailMovie/DetailMovie";
import Home from "../templates/home/Home";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:id" component={DetailMovie} />
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesComponent;
