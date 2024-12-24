import { useNavigate } from "react-router-dom";

const Navbar = ({ setSearchQuery, setCategory = () => {} }) => {
  const navigate = useNavigate();

  const onSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
    navigate("/category");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <span className="navbar-brand">
            <span className="badge bg-light text-dark fs-4">News App</span>
          </span>
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
                <button
                  className="nav-link active btn btn-link"
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </span>
                <ul className="dropdown-menu">
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => handleCategoryChange("technology")}
                    >
                      Technology
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => handleCategoryChange("business")}
                    >
                      Business
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => handleCategoryChange("health")}
                    >
                      Health
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => handleCategoryChange("sports")}
                    >
                      Sports
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => handleCategoryChange("entertainment")}
                    >
                      Entertainment
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter
                </span>
                <ul className="dropdown-menu">
                  <div className="d-flex align-items-center">
                    <input
                      className="m-2"
                      placeholder="Source Name"
                      type="text"
                    />
                    <input className="m-2" type="date" />
                    <button className="m-2 btn btn-primary">Submit</button>
                  </div>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={onSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={onSearchChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
