'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Jumbotron = ReactBootstrap.Jumbotron;
var Button = ReactBootstrap.Button;

var QuizBody = function (_React$Component) {
  _inherits(QuizBody, _React$Component);

  function QuizBody(props) {
    _classCallCheck(this, QuizBody);

    var _this = _possibleConstructorReturn(this, (QuizBody.__proto__ || Object.getPrototypeOf(QuizBody)).call(this, props));

    _this.state = {
      clicked: false
    };
    return _this;
  }

  _createClass(QuizBody, [{
    key: 'wasClicked',
    value: function wasClicked() {
      this.setState({
        clicked: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        this.props.data.map(function (element) {
          return React.createElement(QuizQuestion, { data: element,
            click: _this2.wasClicked });
        })
      );
    }
  }]);

  return QuizBody;
}(React.Component);

var QuizQuestion = function QuizQuestion(props) {
  return React.createElement(
    'div',
    null,
    props.data
  );
};

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          Jumbotron,
          null,
          React.createElement(
            'h1',
            { onClick: function onClick() {
                console.log('hello');
              } },
            'Quizzer'
          ),
          React.createElement(
            'p',
            null,
            'Are you ready for some quizzes?! great!------'
          ),
          React.createElement(
            'p',
            null,
            React.createElement(
              Button,
              { bsStyle: 'primary', onClick: console.log('hello') },
              'Learn more'
            )
          ),
          React.createElement(QuizBody, { data: this.props.data })
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJKdW1ib3Ryb24iLCJSZWFjdEJvb3RzdHJhcCIsIkJ1dHRvbiIsIlF1aXpCb2R5IiwicHJvcHMiLCJzdGF0ZSIsImNsaWNrZWQiLCJzZXRTdGF0ZSIsImRhdGEiLCJtYXAiLCJlbGVtZW50Iiwid2FzQ2xpY2tlZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUXVpelF1ZXN0aW9uIiwiQXBwIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLFlBQVlDLGVBQWVELFNBQS9CO0FBQ0EsSUFBSUUsU0FBU0QsZUFBZUMsTUFBNUI7O0lBQ01DLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsb0hBQ1ZBLEtBRFU7O0FBR2hCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFRO0FBREcsS0FBYjtBQUhnQjtBQU1qQjs7OztpQ0FDVztBQUNWLFdBQUtDLFFBQUwsQ0FBYztBQUNaRCxpQkFBUTtBQURJLE9BQWQ7QUFHRDs7OzZCQUVPO0FBQUE7O0FBQ04sYUFDRTtBQUFBO0FBQUE7QUFDRyxhQUFLRixLQUFMLENBQVdJLElBQVgsQ0FBZ0JDLEdBQWhCLENBQXFCLFVBQUNDLE9BQUQ7QUFBQSxpQkFDcEIsb0JBQUMsWUFBRCxJQUFjLE1BQU1BLE9BQXBCO0FBQ2MsbUJBQU8sT0FBS0MsVUFEMUIsR0FEb0I7QUFBQSxTQUFyQjtBQURILE9BREY7QUFPRDs7OztFQXRCb0JDLE1BQU1DLFM7O0FBOEI3QixJQUFJQyxlQUFlLFNBQWZBLFlBQWUsQ0FBQ1YsS0FBRCxFQUFXO0FBQzVCLFNBRUk7QUFBQTtBQUFBO0FBQU1BLFVBQU1JO0FBQVosR0FGSjtBQUlELENBTEQ7O0lBT01PLEc7OztBQUNKLGVBQVlYLEtBQVosRUFBa0I7QUFBQTs7QUFBQSxxR0FDVkEsS0FEVTtBQUVqQjs7Ozs2QkFFTztBQUNOLGFBQ0k7QUFBQTtBQUFBO0FBQ0M7QUFBQyxtQkFBRDtBQUFBO0FBQ0c7QUFBQTtBQUFBLGNBQUksU0FBUyxtQkFBVTtBQUFDWSx3QkFBUUMsR0FBUixDQUFZLE9BQVo7QUFBcUIsZUFBN0M7QUFBQTtBQUFBLFdBREg7QUFFRztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkg7QUFHRztBQUFBO0FBQUE7QUFBRztBQUFDLG9CQUFEO0FBQUEsZ0JBQVEsU0FBUSxTQUFoQixFQUEwQixTQUFTRCxRQUFRQyxHQUFSLENBQVksT0FBWixDQUFuQztBQUFBO0FBQUE7QUFBSCxXQUhIO0FBSUMsOEJBQUMsUUFBRCxJQUFVLE1BQU0sS0FBS2IsS0FBTCxDQUFXSSxJQUEzQjtBQUpEO0FBREQsT0FESjtBQVVEOzs7O0VBaEJlSSxNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBKdW1ib3Ryb24gPSBSZWFjdEJvb3RzdHJhcC5KdW1ib3Ryb25cbnZhciBCdXR0b24gPSBSZWFjdEJvb3RzdHJhcC5CdXR0b25cbmNsYXNzIFF1aXpCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNsaWNrZWQ6ZmFsc2VcbiAgICB9XG4gIH1cbiAgd2FzQ2xpY2tlZCgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2xpY2tlZDp0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmRhdGEubWFwKCAoZWxlbWVudCkgPT5cbiAgICAgICAgKCA8UXVpelF1ZXN0aW9uIGRhdGE9e2VsZW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17dGhpcy53YXNDbGlja2VkfS8+KSApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5cblxuXG52YXIgUXVpelF1ZXN0aW9uID0gKHByb3BzKSA9PiB7XG4gIHJldHVybihcblxuICAgICAgPGRpdj57cHJvcHMuZGF0YX08L2Rpdj5cbiAgICApXG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgIDxKdW1ib3Ryb24+XG4gICAgICAgICAgICA8aDEgb25DbGljaz17ZnVuY3Rpb24oKXtjb25zb2xlLmxvZygnaGVsbG8nKX19PlF1aXp6ZXI8L2gxPlxuICAgICAgICAgICAgPHA+QXJlIHlvdSByZWFkeSBmb3Igc29tZSBxdWl6emVzPyEgZ3JlYXQhLS0tLS0tPC9wPlxuICAgICAgICAgICAgPHA+PEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2NvbnNvbGUubG9nKCdoZWxsbycpfT5MZWFybiBtb3JlPC9CdXR0b24+PC9wPlxuICAgICAgICAgIDxRdWl6Qm9keSBkYXRhPXt0aGlzLnByb3BzLmRhdGF9Lz5cbiAgICAgICAgICA8L0p1bWJvdHJvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuIl19