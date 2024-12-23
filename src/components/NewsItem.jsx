import image from "../assets/images/new.jpg"
const NewsItem = ({title, description, src, url}) => {
  debugger
    return (
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ width: "18rem" }}>
        <img src={src ? src : image} style={{height:"200px", width:"260px"}}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title ? title.slice(0,30):"Latest Breaking News"}</h5>
          <p className="card-text">{description ? description.slice(0,50): "Stay updated with the most recent and impactful news from around the world. Get the latest developments and breaking stories as they unfold."}</p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    );
  };
  
  export default NewsItem;
  