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
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          Button,
          { bsStyle: 'primary'
            // onClick={this.addTaskToDB.bind(this)}
            , onClick: this.handleSubmit.bind(this)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJKdW1ib3Ryb24iLCJSZWFjdEJvb3RzdHJhcCIsIkJ1dHRvbiIsIlF1aXpCb2R5IiwicHJvcHMiLCJzdGF0ZSIsInRhc2tzIiwidGFzayIsImZvckVhY2giLCJhY3Rpb24iLCJpIiwia2V5IiwibmV3TGlzdCIsInNwbGljZSIsInNldFN0YXRlIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCIkIiwiZ2V0IiwiZGF0YSIsInRhc2tEYXRhIiwicHVzaCIsInRhc2tuYW1lIiwiYmluZCIsImNvbmNhdCIsImZldGNoRGF0YSIsImFkZFRhc2siLCJtYXAiLCJlbGVtZW50IiwiZGVsZXRlVGFzayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiSW5wdXQiLCJ2YWx1ZSIsImUiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdCIsImZhaWwiLCJlcnIiLCJ0YXJnZXQiLCJhZGR0YXNrIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJRdWl6UXVlc3Rpb24iLCJkZWxldGVGcm9tRGIiLCJkZWxldGUiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxZQUFZQyxlQUFlRCxTQUEvQjtBQUNBLElBQUlFLFNBQVNELGVBQWVDLE1BQTVCOztJQUVNQyxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLG9IQUNWQSxLQURVOztBQUdoQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTSxDQUFDLEVBQUNDLE1BQUssTUFBTixFQUFELEVBQWUsRUFBQ0EsTUFBSyxLQUFOLEVBQWYsRUFBNEIsRUFBQ0EsTUFBSyxPQUFOLEVBQTVCLEVBQTJDLEVBQUNBLE1BQUssS0FBTixFQUEzQztBQURLLEtBQWI7QUFIZ0I7QUFNakI7Ozs7K0JBQ1VBLEksRUFBSztBQUFBOztBQUNkLFdBQUtGLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkUsT0FBakIsQ0FBeUIsVUFBQ0MsTUFBRCxF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QUFVLE1BQU0sS0FBS0EsS0FBTCxDQUFXZ0IsSUFBM0I7QUFKRDtBQURELE9BREo7QUFVRDs7OztFQWxCZVcsTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSnVtYm90cm9uID0gUmVhY3RCb290c3RyYXAuSnVtYm90cm9uXG52YXIgQnV0dG9uID0gUmVhY3RCb290c3RyYXAuQnV0dG9uXG5cbmNsYXNzIFF1aXpCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRhc2tzOlt7dGFzazonanVtcCd9LHt0YXNrOididXknfSx7dGFzazonaGVsbG8nfSx7dGFzazoneWVzJ31dXG4gICAgfVxuICB9XG4gIGRlbGV0ZVRhc2sodGFzayl7XG4gICAgdGhpcy5zdGF0ZS50YXNrcy5mb3JFYWNoKChhY3Rpb24sIGkpID0+e1xuICAgICAgZm9yKHZhciBrZXkgaW4gYWN0aW9uKXtcbiAgICAgICAgaWYgKGFjdGlvbltrZXldID09PSB0YXNrKXtcbiAgICAgICAgICB2YXIgbmV3TGlzdCA9IHRoaXMuc3RhdGUudGFza3NcbiAgICAgICAgICBuZXdMaXN0LnNwbGljZShpLCAxKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGFza3M6IG5ld0xpc3RcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KVxuXG4gIH1cblxuICBmZXRjaERhdGEoY29udGV4dCl7XG4gICAgY29uc29sZS5sb2coY29udGV4dClcbiAgICAgICQuZ2V0KCBcImZldGNoXCIsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgIHZhciB0YXNrRGF0YSA9IFtdO1xuICAgICAgZGF0YS5mb3JFYWNoKCh0YXNrKSA9PnsgdGFza0RhdGEucHVzaCh7dGFzazp0YXNrLnRhc2tuYW1lfSl9KVxuICAgICAgY29uc29sZS5sb2codGFza0RhdGEpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGFza3M6dGFza0RhdGFcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGFza0RhdGFcbiAgICB9LmJpbmQodGhpcykpXG5cbiAgfVxuXG4gIGFkZFRhc2sodGFzayl7XG4gICAgY29uc29sZS5sb2codGFzaylcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhc2tzOiB0aGlzLnN0YXRlLnRhc2tzLmNvbmNhdCh7dGFzazogdGFza30pXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPjxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmZldGNoRGF0YS5iaW5kKHRoaXMsIHRoaXMpfT5TdGFydDwvQnV0dG9uPjwvcD5cbiAgICAgICAgPElucHV0IGFkZHRhc2s9e3RoaXMuYWRkVGFzay5iaW5kKHRoaXMpfS8+XG4gICAgICAgIHt0aGlzLnN0YXRlLnRhc2tzLm1hcCggKGVsZW1lbnQpID0+XG4gICAgICAgICggPFF1aXpRdWVzdGlvbiBkYXRhPXtlbGVtZW50LnRhc2t9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuZGVsZXRlVGFzay5iaW5kKHRoaXMpfS8+KSApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWUgOiBcIlwiXG4gICAgfVxuICB9XG4gIGFkZFRhc2tUb0RCKGUpe1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHt0YXNrOnRoaXMuc3RhdGUudmFsdWV9KSwgJy0tLS0tLS0tIHNvbWV3aGVyZScpXG4gICAgdmFyIGRhdGEgPSB7dGFzazp0aGlzLnN0YXRlLnZhbHVlfVxuICAgICQucG9zdCggXCJhZGRcIiwgZGF0YSwgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnNvbGUubG9nKCdwb3N0IHN1Y2Nlc3NmdWwnKVxuICAgIH0pLmZhaWwoZnVuY3Rpb24oZXJyKXtjb25zb2xlLmxvZyhlcnIpfSxcbiAgICB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XG4gICAgKVxuICB9XG4gIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG4gIGhhbmRsZVN1Ym1pdChlKXtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlKVxuICAgIHZhciB0YXNrID0gdGhpcy5zdGF0ZS52YWx1ZVxuICAgIHRoaXMucHJvcHMuYWRkdGFzayh0YXNrKVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT0ncHJpbWFyeSdcbiAgICAgICAgLy8gb25DbGljaz17dGhpcy5hZGRUYXNrVG9EQi5iaW5kKHRoaXMpfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfVxuICAgICAgICA+IEFkZDwvQnV0dG9uPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAvPlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG5cbiAgfVxufVxuXG5cblxudmFyIFF1aXpRdWVzdGlvbiA9IChwcm9wcykgPT4ge1xuICB2YXIgZGVsZXRlRnJvbURiID0gZnVuY3Rpb24oKXtcbiAgICAkLmdldCggXCJyZW1vdmVcIiwgZnVuY3Rpb24oIGRhdGEgKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgIDxCdXR0b24gb25DbGljaz17ZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgcHJvcHMuZGVsZXRlKHByb3BzLmRhdGEpXG4gICAgICAgICAgICAgICAgZGVsZXRlRnJvbURiXG4gICAgICAgICAgICAgIH19XG4gICAgICA+e3Byb3BzLmRhdGF9XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cblxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgIDxKdW1ib3Ryb24+XG5cbiAgICAgICAgICAgIDxoMT5UbyBEbyBBcHA8L2gxPlxuXG4gICAgICAgICAgPFF1aXpCb2R5IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0vPlxuICAgICAgICAgIDwvSnVtYm90cm9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG4iXX0=