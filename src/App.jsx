import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchItem from "./components/SearchItem";
import Category from "./components/Category";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchItem />} />
          <Route path="/category" element={<Category/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
};

export default App;
