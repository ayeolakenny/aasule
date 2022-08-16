var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogHomeSummary = function (_React$Component) {
  _inherits(BlogHomeSummary, _React$Component);

  function BlogHomeSummary(props) {
    _classCallCheck(this, BlogHomeSummary);

    return _possibleConstructorReturn(this, (BlogHomeSummary.__proto__ || Object.getPrototypeOf(BlogHomeSummary)).call(this, props));
  }

  _createClass(BlogHomeSummary, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "grids-area-hny main-cont-wthree-fea row pt-3 mt-5" },
        [1, 2, 3].map(function () {
          return React.createElement(
            "div",
            { className: "col-lg-4 col-md-6 grids-feature" },
            React.createElement(
              "div",
              { "class": "area-box" },
              React.createElement(
                "a",
                { "class": "", href: "index.html" },
                React.createElement("img", {
                  src: "/assets/images/news.jpg",
                  alt: "Your logo",
                  title: "Your logo",
                  style: { height: "250px" }
                })
              ),
              React.createElement(
                "h4",
                null,
                React.createElement(
                  "a",
                  { href: "#feature", "class": "title-head" },
                  "Mr AASULE has done something good"
                )
              ),
              React.createElement(
                "p",
                null,
                "Lorem ipsum dolor sit amet elit. Velit beatae rem ullam dolore nisi esse quasi sit amet.",
                " "
              ),
              React.createElement(
                "button",
                { type: "button", "class": "btn btn-outline-info mt-3" },
                "Read More..."
              )
            )
          );
        })
      );
    }
  }]);

  return BlogHomeSummary;
}(React.Component);

var domContainer = document.querySelector("#bloghomesummary");
ReactDOM.render(React.createElement(BlogHomeSummary, null), domContainer);