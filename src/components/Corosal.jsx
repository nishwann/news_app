const Corosal = ({ title, description, images, redirectUrl }) => {
    return (
      <div
        id="carouselExample"
        className="carousel slide mx-auto"
        data-bs-ride="carousel"
        style={{ maxWidth: "800px" }} // Restrict the overall width
      >
        <div className="carousel-inner">
          {images.map((imgSrc, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={imgSrc}
                className="d-block w-100 img-fluid"
                alt={`Slide ${index + 1}`}
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
              {/* Hyperlink Button */}
              <div
                className="carousel-caption d-none d-md-block"
                style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "5px" }}
              >
                <h5>{title}</h5>
                <p>{description}</p>
                <a
                  href={redirectUrl}
                  className="btn btn-primary mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
  
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
  
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  };
  
  export default Corosal;
  