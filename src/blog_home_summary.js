class BlogHomeSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="grids-area-hny main-cont-wthree-fea row pt-3 mt-5">
        {[1, 2, 3].map(() => (
          <div className="col-lg-4 col-md-6 grids-feature">
            <div class="area-box">
              <a class="" href="index.html">
                <img
                  src="/assets/images/news.jpg"
                  alt="Your logo"
                  title="Your logo"
                  style={{ height: "250px" }}
                />
              </a>
              <h4>
                <a href="#feature" class="title-head">
                  Mr AASULE has done something good
                </a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet elit. Velit beatae rem ullam dolore
                nisi esse quasi sit amet.{" "}
              </p>
              <button type="button" class="btn btn-outline-info mt-3">
                Read More...
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

let domContainer = document.querySelector("#bloghomesummary");
ReactDOM.render(<BlogHomeSummary />, domContainer);
