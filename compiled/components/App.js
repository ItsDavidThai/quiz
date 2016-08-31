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
    }
  }, {
    key: 'fetchData',
    value: function fetchData(context) {
      console.log(context);
      $.get("fetch", function (data) {
        // console.log(data)
        var taskData = [];
        data.forEach(function (task) {
          taskData.push({ task: task.taskname });
        });
        console.log(taskData);
        this.setState({
          tasks: taskData
        });
        return taskData;
      }.bind(this));
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
        React.createElement(
          'p',
          null,
          React.createElement(
            Button,
            { bsStyle: 'primary', onClick: this.fetchData.bind(this, this) },
            'Start'
          )
        ),
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
    key: 'events',
    value: function events() {
      this.handleSubmit.bind(this)();
      this.addTaskToDB.bind(this)();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          Button,
          { bsStyle: 'primary',
            onClick: this.events.bind(this)
            // onClick={this.handleSubmit.bind(this)}
            // onClick={this.addTaskToDB.bind(this)}
          },
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
      { onClick: function onClick(e) {
          props.delete(props.data);
          deleteFromDb;
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
          React.createElement(QuizBody, { data: this.props.data })
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJKdW1ib3Ryb24iLCJSZWFjdEJvb3RzdHJhcCIsIkJ1dHRvbiIsIlF1aXpCb2R5IiwicHJvcHMiLCJzdGF0ZSIsInRhc2tzIiwidGFzayIsImZvckVhY2giLCJhY3Rpb24iLCJpIiwia2V5IiwibmV3TGlzdCIsInNwbGljZSIsInNldFN0YXRlIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCIkIiwiZ2V0IiwiZGF0YSIsInRhc2tEYXRhIiwicHVzaCIsInRhc2tuYW1lIiwiYmluZCIsImNvbmNhdCIsImZldGNoRGF0YSIsImFkZFRhc2siLCJtYXAiLCJlbGVtZW50IiwiZGVsZXRlVGFzayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiSW5wdXQiLCJ2YWx1ZSIsImUiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdCIsImZhaWwiLCJlcnIiLCJ0YXJnZXQiLCJhZGR0YXNrIiwiaGFuZGxlU3VibWl0IiwiYWRkVGFza1RvREIiLCJldmVudHMiLCJoYW5kbGVJbnB1dENoYW5nZSIsIlF1aXpRdWVzdGlvbiIsImRlbGV0ZUZyb21EYiIsImRlbGV0ZSIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLFlBQVlDLGVBQWVELFNBQS9CO0FBQ0EsSUFBSUUsU0FBU0QsZUFBZUMsTUFBNUI7O0lBRU1DLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsb0hBQ1ZBLEtBRFU7O0FBR2hCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFNLENBQUMsRUFBQ0MsTUFBSyxNQUFOLEVBQUQsRUFBZSxFQUFDQSxNQUFLLEtBQU4sRUFBZixFQUE0QixFQUFDQSxNQUFLLE9BQU4sRUFBNUIsRUFBMkMsRUFBQ0EsTUFBSyxLQUFOLEVBQTNDO0FBREssS0FBYjtBQUhnQjtBQU1qQjs7OzsrQkFDVUEsSSxFQUFLO0FBQUE7O0FBQ2QsV0FBS0YsS0FBTCxDQUFXQyxLQUFYLENBQWlCRSxP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QUFBQTs7QUFBQSxxR0FDVkEsS0FEVTtBQUVqQjs7Ozs2QkFJTztBQUNOLGFBQ0k7QUFBQTtBQUFBO0FBQ0M7QUFBQyxtQkFBRDtBQUFBO0FBRUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZIO0FBSUMsOEJBQUMsUUFBRCxJQUFVLE1BQU0sS0FBS0EsS0FBTCxDQUFXZ0IsSUFBM0I7QUFKRDtBQURELE9BREo7QUFVRDs7OztFQWxCZVcsTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSnVtYm90cm9uID0gUmVhY3RCb290c3RyYXAuSnVtYm90cm9uXG52YXIgQnV0dG9uID0gUmVhY3RCb290c3RyYXAuQnV0dG9uXG5cbmNsYXNzIFF1aXpCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRhc2tzOlt7dGFzazonanVtcCd9LHt0YXNrOididXknfSx7dGFzazonaGVsbG8nfSx7dGFzazoneWVzJ31dXG4gICAgfVxuICB9XG4gIGRlbGV0ZVRhc2sodGFzayl7XG4gICAgdGhpcy5zdGF0ZS50YXNrcy5mb3JFYWNoKChhY3Rpb24sIGkpID0+e1xuICAgICAgZm9yKHZhciBrZXkgaW4gYWN0aW9uKXtcbiAgICAgICAgaWYgKGFjdGlvbltrZXldID09PSB0YXNrKXtcbiAgICAgICAgICB2YXIgbmV3TGlzdCA9IHRoaXMuc3RhdGUudGFza3NcbiAgICAgICAgICBuZXdMaXN0LnNwbGljZShpLCAxKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGFza3M6IG5ld0xpc3RcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KVxuXG4gIH1cblxuICBmZXRjaERhdGEoY29udGV4dCl7XG4gICAgY29uc29sZS5sb2coY29udGV4dClcbiAgICAgICQuZ2V0KCBcImZldGNoXCIsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgIHZhciB0YXNrRGF0YSA9IFtdO1xuICAgICAgZGF0YS5mb3JFYWNoKCh0YXNrKSA9PnsgdGFza0RhdGEucHVzaCh7dGFzazp0YXNrLnRhc2tuYW1lfSl9KVxuICAgICAgY29uc29sZS5sb2codGFza0RhdGEpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGFza3M6dGFza0RhdGFcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGFza0RhdGFcbiAgICB9LmJpbmQodGhpcykpXG5cbiAgfVxuXG4gIGFkZFRhc2sodGFzayl7XG4gICAgY29uc29sZS5sb2codGFzaylcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhc2tzOiB0aGlzLnN0YXRlLnRhc2tzLmNvbmNhdCh7dGFzazogdGFza30pXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPjxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmZldGNoRGF0YS5iaW5kKHRoaXMsIHRoaXMpfT5TdGFydDwvQnV0dG9uPjwvcD5cbiAgICAgICAgPElucHV0IGFkZHRhc2s9e3RoaXMuYWRkVGFzay5iaW5kKHRoaXMpfS8+XG4gICAgICAgIHt0aGlzLnN0YXRlLnRhc2tzLm1hcCggKGVsZW1lbnQpID0+XG4gICAgICAgICggPFF1aXpRdWVzdGlvbiBkYXRhPXtlbGVtZW50LnRhc2t9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuZGVsZXRlVGFzay5iaW5kKHRoaXMpfS8+KSApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWUgOiBcIlwiXG4gICAgfVxuICB9XG4gIGFkZFRhc2tUb0RCKGUpe1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHt0YXNrOnRoaXMuc3RhdGUudmFsdWV9KSwgJy0tLS0tLS0tIHNvbWV3aGVyZScpXG4gICAgdmFyIGRhdGEgPSB7dGFzazp0aGlzLnN0YXRlLnZhbHVlfVxuICAgICQucG9zdCggXCJhZGRcIiwgZGF0YSwgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnNvbGUubG9nKCdwb3N0IHN1Y2Nlc3NmdWwnKVxuICAgIH0pLmZhaWwoZnVuY3Rpb24oZXJyKXtjb25zb2xlLmxvZyhlcnIpfSxcbiAgICB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XG4gICAgKVxuICB9XG4gIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG4gIGhhbmRsZVN1Ym1pdChlKXtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlKVxuICAgIHZhciB0YXNrID0gdGhpcy5zdGF0ZS52YWx1ZVxuICAgIHRoaXMucHJvcHMuYWRkdGFzayh0YXNrKVxuICB9XG5cbiAgZXZlbnRzKCl7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKSgpXG4gICAgdGhpcy5hZGRUYXNrVG9EQi5iaW5kKHRoaXMpKClcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcblxuICAgICAgICA8ZGl2PlxuICAgICAgICA8QnV0dG9uIGJzU3R5bGU9J3ByaW1hcnknXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuZXZlbnRzLmJpbmQodGhpcyl9XG4gICAgICAgIC8vIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9XG4gICAgICAgIC8vIG9uQ2xpY2s9e3RoaXMuYWRkVGFza1RvREIuYmluZCh0aGlzKX1cbiAgICAgICAgPiBBZGQ8L0J1dHRvbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgLz5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuXG4gIH1cbn1cblxuXG5cbnZhciBRdWl6UXVlc3Rpb24gPSAocHJvcHMpID0+IHtcbiAgdmFyIGRlbGV0ZUZyb21EYiA9IGZ1bmN0aW9uKCl7XG4gICAgJC5nZXQoIFwicmVtb3ZlXCIsIGZ1bmN0aW9uKCBkYXRhICkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2Z1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIHByb3BzLmRlbGV0ZShwcm9wcy5kYXRhKVxuICAgICAgICAgICAgICAgIGRlbGV0ZUZyb21EYlxuICAgICAgICAgICAgICB9fVxuICAgICAgPntwcm9wcy5kYXRhfVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG5cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICA8SnVtYm90cm9uPlxuXG4gICAgICAgICAgICA8aDE+VG8gRG8gQXBwPC9oMT5cblxuICAgICAgICAgIDxRdWl6Qm9keSBkYXRhPXt0aGlzLnByb3BzLmRhdGF9Lz5cbiAgICAgICAgICA8L0p1bWJvdHJvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuIl19