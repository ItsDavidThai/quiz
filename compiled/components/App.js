'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    key: 'addTaskToDB',
    value: function addTaskToDB(e) {
      console.log(JSON.stringify({ task: this.state.value }), '-------- somewhere');
      var data = { task: this.state.value };
      $.post("add", data, function () {
        console.log('post successful');
      }).fail(function (err) {
        console.log(err);
      }, { "Content-Type": "application/json" });
    }
  }, {
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
          _defineProperty({ bsStyle: 'primary', onClick: this.handleSubmit.bind(this)
          }, 'onClick', this.addTaskToDB.bind(this)),
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
  var deleteFromDb = function deleteFromDb() {
    $.get("remove", function (data) {
      console.log(data);
    });
  };

  return React.createElement(
    'div',
    null,
    React.createElement(
      Button,
      _defineProperty({ onClick: function onClick(e) {
          props.delete(props.data);
        }
      }, 'onClick', deleteFromDb),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJKdW1ib3Ryb24iLCJSZWFjdEJvb3RzdHJhcCIsIkJ1dHRvbiIsIlF1aXpCb2R5IiwicHJvcHMiLCJzdGF0ZSIsInRhc2tzIiwidGFzayIsImZvckVhY2giLCJhY3Rpb24iLCJpIiwia2V5IiwibmV3TGlzdCIsInNwbGljZSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsImFkZFRhc2siLCJiaW5kIiwibWFwIiwiZWxlbWVudCIsImRlbGV0ZVRhc2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIklucHV0IiwidmFsdWUiLCJlIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCIkIiwicG9zdCIsImZhaWwiLCJlcnIiLCJ0YXJnZXQiLCJhZGR0YXNrIiwiaGFuZGxlU3VibWl0IiwiYWRkVGFza1RvREIiLCJoYW5kbGVJbnB1dENoYW5nZSIsIlF1aXpRdWVzdGlvbiIsImRlbGV0ZUZyb21EYiIsImdldCIsImRlbGV0ZSIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsWUFBWUMsZUFBZUQsU0FBL0I7QUFDQSxJQUFJRSxTQUFTRCxlQUFlQyxNQUE1Qjs7SUFFTUMsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSxvSEFDVkEsS0FEVTs7QUFHaEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU0sQ0FBQyxFQUFDQyxNQUFLLE1BQU4sRUFBRCxFQUFlLEVBQUNBLE1BQUssS0FBTixFQUFmLEVBQTRCLEVBQUNBLE1BQUssT0FBTixFQUE1QixFQUEyQyxFQUFDQSxNQUFLLEtBQU4sRUFBM0M7QUFESyxLQUFiO0FBSGdCO0FBTWpCOzs7OytCQUNVQSxJLEVBQUs7QUFBQTs7QUFDZCxXQUFLRixLQUFMLENBQVdDLEtBQVgsQ0FBaUJFLE9BQWpCLENBQXlCLFVBQUNDLE1BQUQsRUFBU0MsQ0FBVCxFQUFjO0FBQ3JDLGFBQUksSUFBSUMsR0FB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LEdBQUYsQ0FBTyxRQUFQLEVBQWlCLFVBQVVaLElBQVYsRUFBaUI7QUFDaENmLGNBQVFDLEdBQVIsQ0FBWWMsSUFBWjtBQUNELEtBRkQ7QUFHRCxHQUpEOztBQU1BLFNBQ0k7QUFBQTtBQUFBO0FBQ0E7QUFBQyxZQUFEO0FBQUEsd0JBQVEsU0FBUyxpQkFBU0gsQ0FBVCxFQUFXO0FBQ2xCdkIsZ0JBQU11QyxNQUFOLENBQWF2QyxNQUFNMEIsSUFBbkI7QUFDRDtBQUZULG9CQUlVVyxZQUpWO0FBTUVyQyxZQUFNMEI7QUFOUjtBQURBLEdBREo7QUFZRCxDQW5CRDs7SUFxQk1jLEc7OztBQUNKLGVBQVl4QyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEscUdBQ1ZBLEtBRFU7QUFFakI7Ozs7NkJBRU87QUFDTixhQUNJO0FBQUE7QUFBQTtBQUNDO0FBQUMsbUJBQUQ7QUFBQTtBQUVHO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSDtBQUdHO0FBQUE7QUFBQTtBQUFHO0FBQUMsb0JBQUQ7QUFBQSxnQkFBUSxTQUFRLFNBQWhCLEVBQTBCLFNBQVNXLFFBQVFDLEdBQVIsQ0FBWSxPQUFaLENBQW5DO0FBQUE7QUFBQTtBQUFILFdBSEg7QUFJQyw4QkFBQyxRQUFELElBQVUsTUFBTSxLQUFLWixLQUFMLENBQVcwQixJQUEzQjtBQUpEO0FBREQsT0FESjtBQVVEOzs7O0VBaEJlUCxNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBKdW1ib3Ryb24gPSBSZWFjdEJvb3RzdHJhcC5KdW1ib3Ryb25cbnZhciBCdXR0b24gPSBSZWFjdEJvb3RzdHJhcC5CdXR0b25cblxuY2xhc3MgUXVpekJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGFza3M6W3t0YXNrOidqdW1wJ30se3Rhc2s6J2J1eSd9LHt0YXNrOidoZWxsbyd9LHt0YXNrOid5ZXMnfV1cbiAgICB9XG4gIH1cbiAgZGVsZXRlVGFzayh0YXNrKXtcbiAgICB0aGlzLnN0YXRlLnRhc2tzLmZvckVhY2goKGFjdGlvbiwgaSkgPT57XG4gICAgICBmb3IodmFyIGtleSBpbiBhY3Rpb24pe1xuICAgICAgICBpZiAoYWN0aW9uW2tleV0gPT09IHRhc2spe1xuICAgICAgICAgIHZhciBuZXdMaXN0ID0gdGhpcy5zdGF0ZS50YXNrc1xuICAgICAgICAgIG5ld0xpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0YXNrczogbmV3TGlzdFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG5cbiAgICAvLyB9KVxuICB9XG5cbiAgYWRkVGFzayh0YXNrKXtcbiAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGFza3M6IHRoaXMuc3RhdGUudGFza3MuY29uY2F0KHt0YXNrOiB0YXNrfSlcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPElucHV0IGFkZHRhc2s9e3RoaXMuYWRkVGFzay5iaW5kKHRoaXMpfS8+XG4gICAgICAgIHt0aGlzLnN0YXRlLnRhc2tzLm1hcCggKGVsZW1lbnQpID0+XG4gICAgICAgICggPFF1aXpRdWVzdGlvbiBkYXRhPXtlbGVtZW50LnRhc2t9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuZGVsZXRlVGFzay5iaW5kKHRoaXMpfS8+KSApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWUgOiBcIlwiXG4gICAgfVxuICB9XG4gIGFkZFRhc2tUb0RCKGUpe1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHt0YXNrOnRoaXMuc3RhdGUudmFsdWV9KSwgJy0tLS0tLS0tIHNvbWV3aGVyZScpXG4gICAgdmFyIGRhdGEgPSB7dGFzazp0aGlzLnN0YXRlLnZhbHVlfVxuICAgICQucG9zdCggXCJhZGRcIiwgZGF0YSwgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnNvbGUubG9nKCdwb3N0IHN1Y2Nlc3NmdWwnKVxuICAgIH0pLmZhaWwoZnVuY3Rpb24oZXJyKXtjb25zb2xlLmxvZyhlcnIpfSxcbiAgICB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XG4gICAgKVxuICB9XG4gIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG4gIGhhbmRsZVN1Ym1pdChlKXtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlKVxuICAgIHZhciB0YXNrID0gdGhpcy5zdGF0ZS52YWx1ZVxuICAgIHRoaXMucHJvcHMuYWRkdGFzayh0YXNrKVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT0ncHJpbWFyeScgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX1cbiAgICAgICAgb25DbGljaz17dGhpcy5hZGRUYXNrVG9EQi5iaW5kKHRoaXMpfVxuICAgICAgICA+IEFkZDwvQnV0dG9uPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAvPlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG5cbiAgfVxufVxuXG5cblxudmFyIFF1aXpRdWVzdGlvbiA9IChwcm9wcykgPT4ge1xuICB2YXIgZGVsZXRlRnJvbURiID0gZnVuY3Rpb24oKXtcbiAgICAkLmdldCggXCJyZW1vdmVcIiwgZnVuY3Rpb24oIGRhdGEgKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgIDxCdXR0b24gb25DbGljaz17ZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgcHJvcHMuZGVsZXRlKHByb3BzLmRhdGEpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgIGRlbGV0ZUZyb21EYlxuICAgICAgICAgICAgICB9XG4gICAgICA+e3Byb3BzLmRhdGF9XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgPEp1bWJvdHJvbj5cblxuICAgICAgICAgICAgPGgxPlRvIERvIEFwcDwvaDE+XG4gICAgICAgICAgICA8cD48QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgb25DbGljaz17Y29uc29sZS5sb2coJ2hlbGxvJyl9PlN0YXJ0PC9CdXR0b24+PC9wPlxuICAgICAgICAgIDxRdWl6Qm9keSBkYXRhPXt0aGlzLnByb3BzLmRhdGF9Lz5cbiAgICAgICAgICA8L0p1bWJvdHJvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuIl19