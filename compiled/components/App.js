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
  var deleteFromDb = function deleteFromDb(data) {
    $.post("remove", { taskname: data }, function (res) {
      console.log(res);
    });
  };

  var events = function events() {
    props.delete(props.data);
    deleteFromDb(props.data);
  };
  return React.createElement(
    'div',
    null,
    React.createElement(
      Button,
      { onClick: events.bind(undefined)
        // function(e){
        //   props.delete(props.data)
        //   deleteFromDb()
        // }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJKdW1ib3Ryb24iLCJSZWFjdEJvb3RzdHJhcCIsIkJ1dHRvbiIsIlF1aXpCb2R5IiwicHJvcHMiLCJzdGF0ZSIsInRhc2tzIiwidGFzayIsImZvckVhY2giLCJhY3Rpb24iLCJpIiwia2V5IiwibmV3TGlzdCIsInNwbGljZSIsInNldFN0YXRlIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCIkIiwiZ2V0IiwiZGF0YSIsInRhc2tEYXRhIiwicHVzaCIsInRhc2tuYW1lIiwiYmluZCIsImNvbmNhdCIsImZldGNoRGF0YSIsImFkZFRhc2siLCJtYXAiLCJlbGVtZW50IiwiZGVsZXRlVGFzayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiSW5wdXQiLCJ2YWx1ZSIsImUiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdCIsImZhaWwiLCJlcnIiLCJ0YXJnZXQiLCJhZGR0YXNrIiwiaGFuZGxlU3VibWl0IiwiYWRkVGFza1RvREIiLCJldmVudHMiLCJoYW5kbGVJbnB1dENoYW5nZSIsIlF1aXpRdWVzdGlvbiIsImRlbGV0ZUZyb21EYiIsInJlcyIsImRlbGV0ZSIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLFlBQVlDLGVBQWVELFNBQS9CO0FBQ0EsSUFBSUUsU0FBU0QsZUFBZUMsTUFBNUI7O0lBRU1DLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsb0hBQ1ZBLEtBRFU7O0FBR2hCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFNLENBQUMsRUFBQ0MsTUFBSyxNQUFOLEVBQUQsRUFBZSxFQUFDQSxNQUFLLEtBQU4sRUFBZixFQUE0QixFQUFDQSxNQUFLLE9BQU4sRUFBNUIsRUFBMkMsRUFBQ0EsTUFBSyxLQUFOLEVBQTNDO0FBREssS0FBYjtBQUhnQjtBQU1qQjs7OzsrQkFDVUEsSSxFQUFLO0FBQUE7O0FBQ2QsV0FBS0YsS0FBTCxDQUFXQyxLQUFYLENBQWlCRSxPQUFqQixDQUF5QixVQUFDQyxNQUFELEVBQVNDLENBQVQsRUFBYztBQUNyQyxhQUFJLElBQUlDLEdBQVIsSUFBZUYsTUFBZixFQUFzQjtBQUNwQixjQUFJQSxPQUFPRSxHQUFQLE1BQWdCSixJQUFwQixFQUF5QjtBQUN2QixnQkFBSUssVUFBVSxPQUFLUCxLQUFMLENBQVdDLEtBQXpCO0FBQ0FNLG9CQUFRQyxNQUFSLENBQWVILENBQWYsRUFBa0IsQ0FBbEI7QUFDQSxtQkFBS0ksUUFBTCxDQUFjO0FBQ1pSLHFCQUFPTTtBQURLLGFBQWQ7QUFHRDtBQUNGO0FBRUYsT0FYRDtBQWFEOzs7OEJBRVNHLE8sRUFBUTtBQUNoQkMsY0FBUUMsR0FBUixDQUFZRixPQUFaO0FBQ0VHLFFBQUVDLEdBQUYsQ0FBTyxPQUFQLEVBQWdCLFVBQVNDLElBQVQsRUFBYztBQUM5QjtBQUNBLFlBQUlDLFdBQVcsRUFBZjtBQUNBRCxhQUFLWixPQUFMLENBQWEsVUFBQ0QsSUFBRCxFQUFTO0FBQUVjLG1CQUFTQyxJQUFULENBQWMsRUFBQ2YsTUFBS0EsS0FBS2dCLFFBQVgsRUFBZDtBQUFvQyxTQUE1RDtBQUNBUCxnQkFBUUMsR0FBUixDQUFZSSxRQUFaO0FBQ0EsYUFBS1AsUUFBTCxDQUFjO0FBQ1pSLGlCQUFNZTtBQURNLFNBQWQ7QUFHQSxlQUFPQSxRQUFQO0FBQ0QsT0FUaUIsQ0FTaEJHLElBVGdCLENBU1gsSUFUVyxDQUFoQjtBQVdIOzs7NEJBRU9qQixJLEVBQUs7QUFDWFMsY0FBUUMsR0FBUixDQUFZVixJQUFaO0FBQ0EsV0FBS08sUUFBTCxDQUFjO0FBQ1pSLGVBQU8sS0FBS0QsS0FBTCxDQUFXQyxLQUFYLENBQWlCbUIsTUFBakIsQ0FBd0IsRUFBQ2xCLE1BQU1BLElBQVAsRUFBeEI7QUFESyxPQUFkO0FBR0Q7Ozs2QkFFTztBQUFBOztBQUNOLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUc7QUFBQyxrQkFBRDtBQUFBLGNBQVEsU0FBUSxTQUFoQixFQUEwQixTQUFTLEtBQUttQixTQUFMLENBQWVGLElBQWYsQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsQ0FBbkM7QUFBQTtBQUFBO0FBQUgsU0FERjtBQUVFLDRCQUFDLEtBQUQsSUFBTyxTQUFTLEtBQUtHLE9BQUwsQ0FBYUgsSUFBYixDQUFrQixJQUFsQixDQUFoQixHQUZGO0FBR0csYUFBS25CLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQnNCLEdBQWpCLENBQXNCLFVBQUNDLE9BQUQ7QUFBQSxpQkFDckIsb0JBQUMsWUFBRCxJQUFjLE1BQU1BLFFBQVF0QixJQUE1QjtBQUNjLHNCQUFRLE9BQUt1QixVQUFMLENBQWdCTixJQUFoQixRQUR0QixHQURxQjtBQUFBLFNBQXRCO0FBSEgsT0FERjtBQVNEOzs7O0VBeERvQk8sTUFBTUMsUzs7SUE0RHZCQyxLOzs7QUFDSixpQkFBWTdCLEtBQVosRUFBa0I7QUFBQTs7QUFBQSwrR0FDVkEsS0FEVTs7QUFHaEIsV0FBS0MsS0FBTCxHQUFhO0FBQ1g2QixhQUFRO0FBREcsS0FBYjtBQUhnQjtBQU1qQjs7OztnQ0FDV0MsQyxFQUFFO0FBQ1puQixjQUFRQyxHQUFSLENBQVltQixLQUFLQyxTQUFMLENBQWUsRUFBQzlCLE1BQUssS0FBS0YsS0FBTCxDQUFXNkIsS0FBakIsRUFBZixDQUFaLEVBQXFELG9CQUFyRDtBQUNBLFVBQUlkLE9BQU8sRUFBQ2IsTUFBSyxLQUFLRixLQUFMLENBQVc2QixLQUFqQixFQUFYO0FBQ0FoQixRQUFFb0IsSUFBRixDQUFRLEtBQVIsRUFBZWxCLElBQWYsRUFBcUIsWUFBVTtBQUM3QkosZ0JBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNELE9BRkQsRUFFR3NCLElBRkgsQ0FFUSxVQUFTQyxHQUFULEVBQWE7QUFBQ3hCLGdCQUFRQyxHQUFSLENBQVl1QixHQUFaO0FBQWlCLE9BRnZDLEVBR0EsRUFBQyxnQkFBZ0Isa0JBQWpCLEVBSEE7QUFLRDs7O3NDQUNpQkwsQyxFQUFHO0FBQ25CLFdBQUtyQixRQUFMLENBQWM7QUFDWm9CLGVBQU9DLEVBQUVNLE1BQUYsQ0FBU1A7QUFESixPQUFkO0FBR0Q7OztpQ0FDWUMsQyxFQUFFO0FBQ2I7QUFDQSxVQUFJNUIsT0FBTyxLQUFLRixLQUFMLENBQVc2QixLQUF0QjtBQUNBLFdBQUs5QixLQUFMLENBQVdzQyxPQUFYLENBQW1CbkMsSUFBbkI7QUFDRDs7OzZCQUVPO0FBQ04sV0FBS29DLFlBQUwsQ0FBa0JuQixJQUFsQixDQUF1QixJQUF2QjtBQUNBLFdBQUtvQixXQUFMLENBQWlCcEIsSUFBakIsQ0FBc0IsSUFBdEI7QUFDRDs7OzZCQUVPO0FBQ04sYUFFSTtBQUFBO0FBQUE7QUFDQTtBQUFDLGdCQUFEO0FBQUEsWUFBUSxTQUFRLFNBQWhCO0FBQ0EscUJBQVMsS0FBS3FCLE1BQUwsQ0FBWXJCLElBQVosQ0FBaUIsSUFBakI7QUFDVDtBQUNBO0FBSEE7QUFBQTtBQUFBLFNBREE7QUFNRTtBQUNFLHFCQUFVLGNBRFo7QUFFRSxnQkFBSyxNQUZQO0FBR0UsaUJBQU8sS0FBS3BCLEtBQUwsQ0FBVzhCLEtBSHBCO0FBSUUsb0JBQVUsS0FBS1ksaUJBQUwsQ0FBdUJ0QixJQUF2QixDQUE0QixJQUE1QjtBQUpaO0FBTkYsT0FGSjtBQW1CRDs7OztFQXJEaUJPLE1BQU1DLFM7O0FBMEQxQixJQUFJZSxlQUFlLFNBQWZBLFlBQWUsQ0FBQzNDLEtBQUQsRUFBVztBQUM1QixNQUFJNEMsZUFBZSxTQUFmQSxZQUFlLENBQVM1QixJQUFULEVBQWM7QUFDL0JGLE1BQUVvQixJQUFGLENBQU8sUUFBUCxFQUFnQixFQUFDZixVQUFTSCxJQUFWLEVBQWhCLEVBQWdDLFVBQVU2QixHQUFWLEVBQWdCO0FBQzlDakMsY0FBUUMsR0FBUixDQUFZZ0MsR0FBWjtBQUNELEtBRkQ7QUFHRCxHQUpEOztBQU1BLE1BQUlKLFNBQVMsU0FBVEEsTUFBUyxHQUFVO0FBQ3JCekMsVUFBTThDLE1BQU4sQ0FBYTlDLE1BQU1nQixJQUFuQjtBQUNBNEIsaUJBQWE1QyxNQUFNZ0IsSUFBbkI7QUFDRCxHQUhEO0FBSUEsU0FDSTtBQUFBO0FBQUE7QUFDQTtBQUFDLFlBQUQ7QUFBQSxRQUFRLFNBQ0F5QixPQUFPckIsSUFBUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUxSO0FBT0VwQixZQUFNZ0I7QUFQUjtBQURBLEdBREo7QUFhRCxDQXhCRDs7SUEwQk0rQixHOzs7QUFDSixlQUFZL0MsS0FBWixFQUFrQjtBQUFBOztBQUFBLHFHQUNWQSxLQURVO0FBRWpCOzs7OzZCQUlPO0FBQ04sYUFDSTtBQUFBO0FBQUE7QUFDQztBQUFDLG1CQUFEO0FBQUE7QUFFRztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkg7QUFJQyw4QkFBQyxRQUFELElBQVUsTUFBTSxLQUFLQSxLQUFMLENBQVdnQixJQUEzQjtBQUpEO0FBREQsT0FESjtBQVVEOzs7O0VBbEJlVyxNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBKdW1ib3Ryb24gPSBSZWFjdEJvb3RzdHJhcC5KdW1ib3Ryb25cbnZhciBCdXR0b24gPSBSZWFjdEJvb3RzdHJhcC5CdXR0b25cblxuY2xhc3MgUXVpekJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGFza3M6W3t0YXNrOidqdW1wJ30se3Rhc2s6J2J1eSd9LHt0YXNrOidoZWxsbyd9LHt0YXNrOid5ZXMnfV1cbiAgICB9XG4gIH1cbiAgZGVsZXRlVGFzayh0YXNrKXtcbiAgICB0aGlzLnN0YXRlLnRhc2tzLmZvckVhY2goKGFjdGlvbiwgaSkgPT57XG4gICAgICBmb3IodmFyIGtleSBpbiBhY3Rpb24pe1xuICAgICAgICBpZiAoYWN0aW9uW2tleV0gPT09IHRhc2spe1xuICAgICAgICAgIHZhciBuZXdMaXN0ID0gdGhpcy5zdGF0ZS50YXNrc1xuICAgICAgICAgIG5ld0xpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0YXNrczogbmV3TGlzdFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pXG5cbiAgfVxuXG4gIGZldGNoRGF0YShjb250ZXh0KXtcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KVxuICAgICAgJC5nZXQoIFwiZmV0Y2hcIiwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgdmFyIHRhc2tEYXRhID0gW107XG4gICAgICBkYXRhLmZvckVhY2goKHRhc2spID0+eyB0YXNrRGF0YS5wdXNoKHt0YXNrOnRhc2sudGFza25hbWV9KX0pXG4gICAgICBjb25zb2xlLmxvZyh0YXNrRGF0YSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0YXNrczp0YXNrRGF0YVxuICAgICAgfSlcbiAgICAgIHJldHVybiB0YXNrRGF0YVxuICAgIH0uYmluZCh0aGlzKSlcblxuICB9XG5cbiAgYWRkVGFzayh0YXNrKXtcbiAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGFza3M6IHRoaXMuc3RhdGUudGFza3MuY29uY2F0KHt0YXNrOiB0YXNrfSlcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+PEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuZmV0Y2hEYXRhLmJpbmQodGhpcywgdGhpcyl9PlN0YXJ0PC9CdXR0b24+PC9wPlxuICAgICAgICA8SW5wdXQgYWRkdGFzaz17dGhpcy5hZGRUYXNrLmJpbmQodGhpcyl9Lz5cbiAgICAgICAge3RoaXMuc3RhdGUudGFza3MubWFwKCAoZWxlbWVudCkgPT5cbiAgICAgICAgKCA8UXVpelF1ZXN0aW9uIGRhdGE9e2VsZW1lbnQudGFza31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5kZWxldGVUYXNrLmJpbmQodGhpcyl9Lz4pICl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZSA6IFwiXCJcbiAgICB9XG4gIH1cbiAgYWRkVGFza1RvREIoZSl7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoe3Rhc2s6dGhpcy5zdGF0ZS52YWx1ZX0pLCAnLS0tLS0tLS0gc29tZXdoZXJlJylcbiAgICB2YXIgZGF0YSA9IHt0YXNrOnRoaXMuc3RhdGUudmFsdWV9XG4gICAgJC5wb3N0KCBcImFkZFwiLCBkYXRhLCBmdW5jdGlvbigpe1xuICAgICAgY29uc29sZS5sb2coJ3Bvc3Qgc3VjY2Vzc2Z1bCcpXG4gICAgfSkuZmFpbChmdW5jdGlvbihlcnIpe2NvbnNvbGUubG9nKGVycil9LFxuICAgIHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn1cbiAgICApXG4gIH1cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlU3VibWl0KGUpe1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsdWUpXG4gICAgdmFyIHRhc2sgPSB0aGlzLnN0YXRlLnZhbHVlXG4gICAgdGhpcy5wcm9wcy5hZGR0YXNrKHRhc2spXG4gIH1cblxuICBldmVudHMoKXtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpKClcbiAgICB0aGlzLmFkZFRhc2tUb0RCLmJpbmQodGhpcykoKVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT0ncHJpbWFyeSdcbiAgICAgICAgb25DbGljaz17dGhpcy5ldmVudHMuYmluZCh0aGlzKX1cbiAgICAgICAgLy8gb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX1cbiAgICAgICAgLy8gb25DbGljaz17dGhpcy5hZGRUYXNrVG9EQi5iaW5kKHRoaXMpfVxuICAgICAgICA+IEFkZDwvQnV0dG9uPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAvPlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG5cbiAgfVxufVxuXG5cblxudmFyIFF1aXpRdWVzdGlvbiA9IChwcm9wcykgPT4ge1xuICB2YXIgZGVsZXRlRnJvbURiID0gZnVuY3Rpb24oZGF0YSl7XG4gICAgJC5wb3N0KFwicmVtb3ZlXCIse3Rhc2tuYW1lOmRhdGF9LGZ1bmN0aW9uKCByZXMgKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgfSk7XG4gIH1cblxuICB2YXIgZXZlbnRzID0gZnVuY3Rpb24oKXtcbiAgICBwcm9wcy5kZWxldGUocHJvcHMuZGF0YSlcbiAgICBkZWxldGVGcm9tRGIocHJvcHMuZGF0YSlcbiAgfVxuICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgZXZlbnRzLmJpbmQodGhpcylcbiAgICAgICAgICAgICAgLy8gZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgIC8vICAgcHJvcHMuZGVsZXRlKHByb3BzLmRhdGEpXG4gICAgICAgICAgICAgIC8vICAgZGVsZXRlRnJvbURiKClcbiAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuICAgICAgPntwcm9wcy5kYXRhfVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG5cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICA8SnVtYm90cm9uPlxuXG4gICAgICAgICAgICA8aDE+VG8gRG8gQXBwPC9oMT5cblxuICAgICAgICAgIDxRdWl6Qm9keSBkYXRhPXt0aGlzLnByb3BzLmRhdGF9Lz5cbiAgICAgICAgICA8L0p1bWJvdHJvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuIl19