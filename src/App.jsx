import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
const App = () => {
  const [category,setCategory] = useState("general");
  const [source,setSource] = useState("");
  const [search,setSearch] = useState("");

  return (
    <>
      <Navbar setCategory={setCategory} setSource={setSource} setSearch={setSearch}/>
      <NewsBoard category={category} source={source} search={search} />
    </>
  );
};

export default App;
