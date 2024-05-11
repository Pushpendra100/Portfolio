import {Routes,Route} from "react-router-dom";
import HomePage from "../pages/HomePage";

const RouteViews = () => {
    return (
      <main>
        <Routes>
              <Route exact path="/" element={<HomePage/>} />
          </Routes>
      </main>
    )
  }
  
  export default RouteViews;