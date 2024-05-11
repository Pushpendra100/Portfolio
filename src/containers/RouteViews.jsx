import {Routes,Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import My404Page from "../pages/My404Page";

const RouteViews = () => {
    return (
      <main>
        <Routes>
              <Route exact path="/portfolio" element={<HomePage/>} />
              <Route path='*' exact={true} element={<My404Page/>} />
          </Routes>
      </main>
    )
  }
  
  export default RouteViews;