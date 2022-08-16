class Blogs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="grids-of-5 row mt-5 text-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => (
          <div className="col-lg-4 col-md-6">
            <div className="grids5-info">
              <a href="detail.html" className="d-block zoom">
                <img
                  src="/assets/images/news.jpg"
                  alt="Your logo"
                  title="Your logo"
                  style={{ height: "250px" }}
                  className="img-fluid radius-image"
                />
              </a>
              <div className="blog-info">
                <h4>
                  <a href="detail.html">
                    Engineer AASULE has done something great
                  </a>
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

let domContainer = document.querySelector("#blogs");
console.log(domContainer);
ReactDOM.render(<Blogs />, domContainer);
