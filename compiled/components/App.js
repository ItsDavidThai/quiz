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
      tasks: [{ task: 'jump' }, { task: 'buy' }, { task: 'hello' }, { task: 'yes' }]
    };
    return _this;
  }

  _createClass(QuizBody, [{
    key: 'deleteTask',
    value: function deleteTask(task) {
      var _this2 = this;

      this.state.tasks.forEach(function (action, i) {
        for (var key in action) {
          if (action[key] === task) {
            var newList = _this2.state.tasks;
            newList.splice(i, 1);
            _this2.setState({
              tasks: newList
            });
          }
        }
      });
      // this.setState({

      // })
    }
  }, {
    key: 'addTask',
    value: function addTask(task) {
      console.log(task);
      this.setState({
        tasks: this.state.tasks.concat({ task: task })
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(Input, { addtask: this.addTask.bind(this) }),
        this.state.tasks.map(function (element) {
          return React.createElement(QuizQuestion, { data: element.task,
            'delete': _this3.deleteTask.bind(_this3) });
        })
      );
    }
  }]);

  return QuizBody;
}(React.Component);

var Input = function (_React$Component2) {
  _inherits(Input, _React$Component2);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this4 = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this4.state = {
      value: ""
    };
    return _this4;
  }

  _createClass(Input, [{
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      // console.log(this.state.value)
      var task = this.state.value;
      this.props.addtask(task);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          Button,
          { bsStyle: 'primary', onClick: this.handleSubmit.bind(this) },
          ' Add'
        ),
        React.createElement('input', {
          className: 'form-control',
          type: 'text',
          value: this.props.value,
          onChange: this.handleInputChange.bind(this)
        })
      );
    }
  }]);

  return Input;
}(React.Component);

var QuizQuestion = function QuizQuestion(props) {

  return React.createElement(
    'div',
    null,
    React.createElement(
      Button,
      { onClick: function onClick(e) {
          props.delete(props.data);
        }
      },
      props.data
    )
  );
};

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

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
            null,
            'To Do App'
          ),
          React.createElement(
            'p',
            null,
            React.createElement(
              Button,
              { bsStyle: 'primary', onClick: console.log('hello') },
              'Start'
            )
          ),
          React.createElement(QuizBody, { data: this.props.data })
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJKdW1ib3Ryb24iLCJSZWFjdEJvb3RzdHJhcCIsIkJ1dHRvbiIsIlF1aXpCb2R5IiwicHJvcHMiLCJzdGF0ZSIsInRhc2tzIiwidGFzayIsImZvckVhY2giLCJhY3Rpb24iLCJpIiwia2V5IiwibmV3TGlzdCIsInNwbGljZSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsImFkZFRhc2siLCJiaW5kIiwibWFwIiwiZWxlbWVudCIsImRlbGV0ZVRhc2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIklucHV0IiwidmFsdWUiLCJlIiwidGFyZ2V0IiwiYWRkdGFzayIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiUXVpelF1ZXN0aW9uIiwiZGVsZXRlIiwiZGF0YSIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLFlBQVlDLGVBQWVELFNBQS9CO0FBQ0EsSUFBSUUsU0FBU0QsZUFBZUMsTUFBNUI7O0lBRU1DLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsb0hBQ1ZBLEtBRFU7O0FBR2hCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFNLENBQUMsRUFBQ0MsTUFBSyxNQUFOLEVBQUQsRUFBZSxFQUFDQSxNQUFLLEtBQU4sRUFBZixFQUE0QixFQUFDQSxNQUFLLE9BQU4sRUFBNUIsRUFBMkMsRUFBQ0EsTUFBSyxLQUFOLEVBQTNDO0FBREssS0FBYjtBQUhnQjtBQU1qQjs7OzsrQkFDVUEsSSxFQUFLO0FBQUE7O0FBQ2QsV0FBS0YsS0FBTCxDQUFXQyxLQUFYLENBQWlCRSxPQUFqQixDQUF5QixVQUFDQyxNQUFELEVBQVNDLENBQVQsRUFBYztBQUNyQyxhQUFJLElBQUlDLEdBQVIsSUFBZUYsTUFBZixFQUFzQjtBQUNwQixjQUFJQSxPQUFPRSxHQUFQLE1BQWdCSixJQUFwQixFQUF5QjtBQUN2QixnQkFBSUssVUFBVSxP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b24gPSBSZWFjdEJvb3RzdHJhcC5KdW1ib3Ryb25cbnZhciBCdXR0b24gPSBSZWFjdEJvb3RzdHJhcC5CdXR0b25cblxuY2xhc3MgUXVpekJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGFza3M6W3t0YXNrOidqdW1wJ30se3Rhc2s6J2J1eSd9LHt0YXNrOidoZWxsbyd9LHt0YXNrOid5ZXMnfV1cbiAgICB9XG4gIH1cbiAgZGVsZXRlVGFzayh0YXNrKXtcbiAgICB0aGlzLnN0YXRlLnRhc2tzLmZvckVhY2goKGFjdGlvbiwgaSkgPT57XG4gICAgICBmb3IodmFyIGtleSBpbiBhY3Rpb24pe1xuICAgICAgICBpZiAoYWN0aW9uW2tleV0gPT09IHRhc2spe1xuICAgICAgICAgIHZhciBuZXdMaXN0ID0gdGhpcy5zdGF0ZS50YXNrc1xuICAgICAgICAgIG5ld0xpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0YXNrczogbmV3TGlzdFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG5cbiAgICAvLyB9KVxuICB9XG5cbiAgYWRkVGFzayh0YXNrKXtcbiAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGFza3M6IHRoaXMuc3RhdGUudGFza3MuY29uY2F0KHt0YXNrOiB0YXNrfSlcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPElucHV0IGFkZHRhc2s9e3RoaXMuYWRkVGFzay5iaW5kKHRoaXMpfS8+XG4gICAgICAgIHt0aGlzLnN0YXRlLnRhc2tzLm1hcCggKGVsZW1lbnQpID0+XG4gICAgICAgICggPFF1aXpRdWVzdGlvbiBkYXRhPXtlbGVtZW50LnRhc2t9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuZGVsZXRlVGFzay5iaW5kKHRoaXMpfS8+KSApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWUgOiBcIlwiXG4gICAgfVxuICB9XG4gIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG4gIGhhbmRsZVN1Ym1pdChlKXtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlKVxuICAgIHZhciB0YXNrID0gdGhpcy5zdGF0ZS52YWx1ZVxuICAgIHRoaXMucHJvcHMuYWRkdGFzayh0YXNrKVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT0ncHJpbWFyeScgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+IEFkZDwvQnV0dG9uPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAvPlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG5cbiAgfVxufVxuXG5cblxudmFyIFF1aXpRdWVzdGlvbiA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2Z1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIHByb3BzLmRlbGV0ZShwcm9wcy5kYXRhKVxuICAgICAgICAgICAgICB9fVxuICAgICAgPntwcm9wcy5kYXRhfVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgIDxKdW1ib3Ryb24+XG5cbiAgICAgICAgICAgIDxoMT5UbyBEbyBBcHA8L2gxPlxuICAgICAgICAgICAgPHA+PEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2NvbnNvbGUubG9nKCdoZWxsbycpfT5TdGFydDwvQnV0dG9uPjwvcD5cbiAgICAgICAgICA8UXVpekJvZHkgZGF0YT17dGhpcy5wcm9wcy5kYXRhfS8+XG4gICAgICAgICAgPC9KdW1ib3Ryb24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbiJdfQ==