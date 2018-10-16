'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../npm/wepy-async-function/index.js');

var _config = require('./../config/index.js');

var _network = require('./../network/index.js');

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Traceshow = function (_wepy$page) {
  _inherits(Traceshow, _wepy$page);

  function Traceshow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Traceshow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Traceshow.__proto__ || Object.getPrototypeOf(Traceshow)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '足迹占领'
    }, _this.data = {
      id: '',
      declaration: '',
      scenic: '',
      name: '',
      avatar: '',
      dateString: '',
      number: '',
      isOwner: false,
      isParised: false
    }, _this.methods = {
      getPost: function getPost() {
        wx.navigateTo({ url: '/pages/post?content=' + this.content + '&dateString=' + this.dateString + '&locationName=' + this.scenic });
      },
      changeParisecount: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(traceId) {
          var url, setData;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (this.isParised) {
                    this.parisecount--;
                    this.isParised = false;
                  } else {
                    this.parisecount++;
                    this.isParised = true;
                  }
                  this.$apply();
                  url = _config.baseUrl + ('/trace/updateTrace?id=' + traceId);
                  setData = { 'parisecount': this.parisecount };
                  _context.next = 6;
                  return _network2.default.post(url, setData).catch(function (err) {
                    console.log("updateAvatarError...", err.data);
                  });

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function changeParisecount(_x) {
          return _ref2.apply(this, arguments);
        }

        return changeParisecount;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Traceshow, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        var url, result, trace, date, year, month, day;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(e.traceId);
                if (e.traceId) {
                  this.id = e.traceId;
                }
                url = _config.baseUrl + ('/trace/getTrace?traceId=' + e.traceId);
                _context2.next = 5;
                return _network2.default.get(url).catch(function (err) {
                  console.log(err.data);
                });

              case 5:
                result = _context2.sent;
                trace = result.data.data;

                this.name = trace.name;
                this.avatar = trace.avatar;
                this.scenic = trace.scenic;
                this.declaration = trace.declaration;
                this.parisecount = trace.parisecount;
                this.number = trace.number;
                date = new Date(trace.created * 1000);
                year = date.getFullYear();
                month = date.getMonth() + 1;
                day = date.getDate();

                this.dateString = year + '.' + month + '.' + day;
                if (trace.userId == this.$parent.globalData.user.id) {
                  this.isOwner = true;
                }
                this.$apply();

              case 20:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x2) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()

    // 分享

  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      var title = "我占领了" + this.locationName;
      var path = 'pages/index';
      return {
        title: title,
        path: path
      };
    }
  }]);

  return Traceshow;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Traceshow , 'pages/traceshow'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNlc2hvdy5qcyJdLCJuYW1lcyI6WyJUcmFjZXNob3ciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImlkIiwiZGVjbGFyYXRpb24iLCJzY2VuaWMiLCJuYW1lIiwiYXZhdGFyIiwiZGF0ZVN0cmluZyIsIm51bWJlciIsImlzT3duZXIiLCJpc1BhcmlzZWQiLCJtZXRob2RzIiwiZ2V0UG9zdCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImNvbnRlbnQiLCJjaGFuZ2VQYXJpc2Vjb3VudCIsInRyYWNlSWQiLCJwYXJpc2Vjb3VudCIsIiRhcHBseSIsImJhc2VVcmwiLCJzZXREYXRhIiwicmVxIiwicG9zdCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImUiLCJnZXQiLCJyZXN1bHQiLCJ0cmFjZSIsImRhdGUiLCJEYXRlIiwiY3JlYXRlZCIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwidXNlcklkIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyIiwicmVzIiwidGl0bGUiLCJsb2NhdGlvbk5hbWUiLCJwYXRoIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsVUFBRyxFQURFO0FBRUxDLG1CQUFZLEVBRlA7QUFHTEMsY0FBTyxFQUhGO0FBSUxDLFlBQU0sRUFKRDtBQUtMQyxjQUFPLEVBTEY7QUFNTEMsa0JBQVcsRUFOTjtBQU9MQyxjQUFPLEVBUEY7QUFRTEMsZUFBUSxLQVJIO0FBU0xDLGlCQUFVO0FBVEwsSyxRQStDUEMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0U7QUFDUkMsV0FBR0MsVUFBSCxDQUFjLEVBQUNDLDhCQUE0QixLQUFLQyxPQUFqQyxvQkFBdUQsS0FBS1QsVUFBNUQsc0JBQXVGLEtBQUtILE1BQTdGLEVBQWQ7QUFDRCxPQUhPO0FBSUZhLHVCQUpFO0FBQUEsNkZBSWdCQyxPQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLTixzQkFBRyxLQUFLUixTQUFSLEVBQWtCO0FBQ2hCLHlCQUFLUyxXQUFMO0FBQ0EseUJBQUtULFNBQUwsR0FBaUIsS0FBakI7QUFDRCxtQkFIRCxNQUdLO0FBQ0gseUJBQUtTLFdBQUw7QUFDQSx5QkFBS1QsU0FBTCxHQUFpQixJQUFqQjtBQUNEO0FBQ0QsdUJBQUtVLE1BQUw7QUFDSUwscUJBYkUsR0FhSU0sOENBQW1DSCxPQUFuQyxDQWJKO0FBY0FJLHlCQWRBLEdBY1UsRUFBQyxlQUFlLEtBQUtILFdBQXJCLEVBZFY7QUFBQTtBQUFBLHlCQWVBSSxrQkFBSUMsSUFBSixDQUFTVCxHQUFULEVBQWNPLE9BQWQsRUFBdUJHLEtBQXZCLENBQTZCLFVBQUNDLEdBQUQsRUFBTztBQUN4Q0MsNEJBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0YsSUFBSXpCLElBQXhDO0FBQThDLG1CQUQxQyxDQWZBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7OzRGQXBDRzRCLEM7Ozs7OztBQUNYRix3QkFBUUMsR0FBUixDQUFZQyxFQUFFWCxPQUFkO0FBQ0Esb0JBQUdXLEVBQUVYLE9BQUwsRUFBYTtBQUNYLHVCQUFLaEIsRUFBTCxHQUFVMkIsRUFBRVgsT0FBWjtBQUNEO0FBQ0dILG1CLEdBQU1NLGdEQUFxQ1EsRUFBRVgsT0FBdkMsQzs7dUJBQ1dLLGtCQUFJTyxHQUFKLENBQVFmLEdBQVIsRUFBYVUsS0FBYixDQUFtQixVQUFDQyxHQUFELEVBQU87QUFDN0NDLDBCQUFRQyxHQUFSLENBQVlGLElBQUl6QixJQUFoQjtBQUFzQixpQkFESCxDOzs7QUFBZjhCLHNCO0FBRUZDLHFCLEdBQVFELE9BQU85QixJQUFQLENBQVlBLEk7O0FBQ3hCLHFCQUFLSSxJQUFMLEdBQVkyQixNQUFNM0IsSUFBbEI7QUFDQSxxQkFBS0MsTUFBTCxHQUFjMEIsTUFBTTFCLE1BQXBCO0FBQ0EscUJBQUtGLE1BQUwsR0FBYzRCLE1BQU01QixNQUFwQjtBQUNBLHFCQUFLRCxXQUFMLEdBQW1CNkIsTUFBTTdCLFdBQXpCO0FBQ0EscUJBQUtnQixXQUFMLEdBQW1CYSxNQUFNYixXQUF6QjtBQUNBLHFCQUFLWCxNQUFMLEdBQWN3QixNQUFNeEIsTUFBcEI7QUFDSXlCLG9CLEdBQVEsSUFBSUMsSUFBSixDQUFTRixNQUFNRyxPQUFOLEdBQWMsSUFBdkIsQztBQUNSQyxvQixHQUFPSCxLQUFLSSxXQUFMLEU7QUFDUEMscUIsR0FBUUwsS0FBS00sUUFBTCxLQUFnQixDO0FBQ3hCQyxtQixHQUFNUCxLQUFLUSxPQUFMLEU7O0FBQ1YscUJBQUtsQyxVQUFMLEdBQWtCNkIsT0FBTyxHQUFQLEdBQWFFLEtBQWIsR0FBcUIsR0FBckIsR0FBMkJFLEdBQTdDO0FBQ0Esb0JBQUdSLE1BQU1VLE1BQU4sSUFBZ0IsS0FBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxJQUF4QixDQUE2QjNDLEVBQWhELEVBQW1EO0FBQ2pELHVCQUFLTyxPQUFMLEdBQWUsSUFBZjtBQUNEO0FBQ0QscUJBQUtXLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Y7Ozs7c0NBQ2tCMEIsRyxFQUFLO0FBQ3JCLFVBQUlDLFFBQVEsU0FBUyxLQUFLQyxZQUExQjtBQUNBLFVBQUlDLG9CQUFKO0FBQ0EsYUFBTztBQUNMRixlQUFPQSxLQURGO0FBRUxFLGNBQU1BO0FBRkQsT0FBUDtBQUlEOzs7O0VBakRvQ0MsZUFBS0MsSTs7a0JBQXZCckQsUyIsImZpbGUiOiJ0cmFjZXNob3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuICBpbXBvcnQgeyBiYXNlVXJsLCBhcHBJZH0gZnJvbSAnQC9jb25maWcnXHJcbiAgaW1wb3J0IHJlcSBmcm9tICdAL25ldHdvcmsnXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2VzaG93IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i2s+i/ueWNoOmihidcclxuICAgIH0gXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBpZDonJyxcclxuICAgICAgZGVjbGFyYXRpb246JycsXHJcbiAgICAgIHNjZW5pYzonJyxcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIGF2YXRhcjonJyxcclxuICAgICAgZGF0ZVN0cmluZzonJyxcclxuICAgICAgbnVtYmVyOicnLFxyXG4gICAgICBpc093bmVyOmZhbHNlLFxyXG4gICAgICBpc1BhcmlzZWQ6ZmFsc2VcclxuICAgIH1cclxuICAgIGFzeW5jIG9uTG9hZChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUudHJhY2VJZCk7XHJcbiAgICAgIGlmKGUudHJhY2VJZCl7XHJcbiAgICAgICAgdGhpcy5pZCA9IGUudHJhY2VJZDtcclxuICAgICAgfVxyXG4gICAgICBsZXQgdXJsID0gYmFzZVVybCArIGAvdHJhY2UvZ2V0VHJhY2U/dHJhY2VJZD0ke2UudHJhY2VJZH1gO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXEuZ2V0KHVybCkuY2F0Y2goKGVycik9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIuZGF0YSl9KVxyXG4gICAgICBsZXQgdHJhY2UgPSByZXN1bHQuZGF0YS5kYXRhO1xyXG4gICAgICB0aGlzLm5hbWUgPSB0cmFjZS5uYW1lO1xyXG4gICAgICB0aGlzLmF2YXRhciA9IHRyYWNlLmF2YXRhcjtcclxuICAgICAgdGhpcy5zY2VuaWMgPSB0cmFjZS5zY2VuaWM7XHJcbiAgICAgIHRoaXMuZGVjbGFyYXRpb24gPSB0cmFjZS5kZWNsYXJhdGlvbjtcclxuICAgICAgdGhpcy5wYXJpc2Vjb3VudCA9IHRyYWNlLnBhcmlzZWNvdW50O1xyXG4gICAgICB0aGlzLm51bWJlciA9IHRyYWNlLm51bWJlcjtcclxuICAgICAgbGV0IGRhdGUgID0gbmV3IERhdGUodHJhY2UuY3JlYXRlZCoxMDAwKTtcclxuICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSsxO1xyXG4gICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgIHRoaXMuZGF0ZVN0cmluZyA9IHllYXIgKyAnLicgKyBtb250aCArICcuJyArIGRheTtcclxuICAgICAgaWYodHJhY2UudXNlcklkID09IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIuaWQpe1xyXG4gICAgICAgIHRoaXMuaXNPd25lciA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDliIbkuqtcclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xyXG4gICAgICBsZXQgdGl0bGUgPSBcIuaIkeWNoOmihuS6hlwiICsgdGhpcy5sb2NhdGlvbk5hbWU7XHJcbiAgICAgIGxldCBwYXRoID0gYHBhZ2VzL2luZGV4YFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBwYXRoOiBwYXRoXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgZ2V0UG9zdCgpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6IGAvcGFnZXMvcG9zdD9jb250ZW50PSR7dGhpcy5jb250ZW50fSZkYXRlU3RyaW5nPSR7dGhpcy5kYXRlU3RyaW5nfSZsb2NhdGlvbk5hbWU9JHt0aGlzLnNjZW5pY31gfSlcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgY2hhbmdlUGFyaXNlY291bnQodHJhY2VJZCl7XHJcbiAgICAgICAgaWYodGhpcy5pc1BhcmlzZWQpe1xyXG4gICAgICAgICAgdGhpcy5wYXJpc2Vjb3VudC0tO1xyXG4gICAgICAgICAgdGhpcy5pc1BhcmlzZWQgPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMucGFyaXNlY291bnQrKztcclxuICAgICAgICAgIHRoaXMuaXNQYXJpc2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICBsZXQgdXJsID0gYmFzZVVybCArIGAvdHJhY2UvdXBkYXRlVHJhY2U/aWQ9JHt0cmFjZUlkfWBcclxuICAgICAgICBjb25zdCBzZXREYXRhID0geydwYXJpc2Vjb3VudCc6IHRoaXMucGFyaXNlY291bnR9XHJcbiAgICAgICAgYXdhaXQgcmVxLnBvc3QodXJsLCBzZXREYXRhKS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVBdmF0YXJFcnJvci4uLlwiLCBlcnIuZGF0YSl9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=