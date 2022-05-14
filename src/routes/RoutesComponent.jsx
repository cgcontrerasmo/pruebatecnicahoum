import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailMovie from "../templates/detailMovie/DetailMovie";
import Home from "../templates/home/Home";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail/:id" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
