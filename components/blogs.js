var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Blogs = function (_React$Component) {
  _inherits(Blogs, _React$Component);

  function Blogs(props) {
    _classCallCheck(this, Blogs);

    return _possibleConstructorReturn(this, (Blogs.__proto__ || Object.getPrototypeOf(Blogs)).call(this, props));
  }

  _createClass(Blogs, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "grids-of-5 row mt-5 text-center" },
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function () {
          return React.createElement(
            "div",
            { className: "col-lg-4 col-md-6" },
            React.createElement(
              "div",
              { className: "grids5-info" },
              React.createElement(
                "a",
                { href: "detail.html", className: "d-block zoom" },
                React.createElement("img", {
                  src: "/assets/images/news.jpg",
                  alt: "Your logo",
                  title: "Your logo",
                  style: { height: "250px" },
                  className: "img-fluid radius-image"
                })
              ),
              React.createElement(
                "div",
                { className: "blog-info" },
                React.createElement(
                  "h4",
                  null,
                  React.createElement(
                    "a",
                    { href: "detail.html" },
                    "Engineer AASULE has done something great"
                  )
                )
              )
            )
          );
        })
      );
    }
  }]);

  return Blogs;
}(React.Component);

var domContainer = document.querySelector("#blogs");
console.log(domContainer);
ReactDOM.render(React.createElement(Blogs, null), domContainer);