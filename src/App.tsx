import "./App.css";
import {
  Header,
  Home,
  NewCars,
  NotFound,
  DetailsPage,
  ScrollToTop,
} from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newcars" element={<NewCars />} />
          <Route path="/usedcars" element={<NewCars />} />
          <Route path="/cars/:id" element={<DetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
