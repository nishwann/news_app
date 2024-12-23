import { useEffect, useState } from "react";
import { getAllNews } from "../services/newsService";

const Navbar = ({setCategory, setSource, setSearch}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedArticles, setSearchedArticles] = useState([]);
  
  const onSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSeacrhedNews();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSeacrhedNews = async () => {
    if (!searchQuery) return;
    const searchResults = await getAllNews(searchQuery);
    setSearch(searchResults);
  };
  

    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News App</span></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className="nav-link active" aria-current="page" onClick={() => setCategory("general")}>Home</button>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="dropdown-item" onClick={() => setCategory("technology")}>Technology</div>
                    </li>
                    <li>
                      <div className="dropdown-item" onClick={() => setCategory("business")}>Business</div>
                    </li>                    
                    <li>
                      <a className="dropdown-item" onClick={() => setCategory("health")}>Health</a>
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={() => setCategory("sports")}>Sports</a>
                    </li>                    
                    <li>
                      <a className="dropdown-item" onClick={() => setCategory("entertainment")}>Entertainment</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filter
                  </a>
                  <ul className="dropdown-menu">
                    <div className="d-flex align-center">
                      <input className="m-2" placeholder="Source Name"></input>
                      <input className="m-2" type="date"></input>
                      <button className="m-2">submit</button>
                    </div>

                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => onSearchChange(e)}
                />
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  };
  
  export default Navbar;
  