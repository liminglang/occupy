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
      content: '',
      locationName: '',
      nickName: '',
      avatar: '',
      dateString: '',
      isOwner: false
    }, _this.methods = {
      getPost: function getPost() {
        wx.navigateTo({ url: '/pages/post?content=' + this.content + '&dateString=' + this.dateString + '&locationName=' + this.locationName });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Traceshow, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var url, result, trace, date, year, month, day;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(e.traceId);
                url = _config.baseUrl + ('/trace/getTrace?traceId=' + e.traceId);
                _context.next = 4;
                return _network2.default.get(url).catch(function (err) {
                  console.log(err.data);
                });

              case 4:
                result = _context.sent;
                trace = result.data.data;

                this.nickName = trace.name;
                this.avatar = trace.avatar;
                this.locationName = trace.scenic;
                this.content = trace.declaration;
                date = new Date(trace.created * 1000);
                year = date.getFullYear();
                month = date.getMonth() + 1;
                day = date.getDate();

                this.dateString = year + '.' + month + '.' + day;
                if (trace.userId == this.$parent.globalData.user.id) {
                  this.isOwner = true;
                }
                this.$apply();

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNlc2hvdy5qcyJdLCJuYW1lcyI6WyJUcmFjZXNob3ciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNvbnRlbnQiLCJsb2NhdGlvbk5hbWUiLCJuaWNrTmFtZSIsImF2YXRhciIsImRhdGVTdHJpbmciLCJpc093bmVyIiwibWV0aG9kcyIsImdldFBvc3QiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJlIiwiY29uc29sZSIsImxvZyIsInRyYWNlSWQiLCJiYXNlVXJsIiwicmVxIiwiZ2V0IiwiY2F0Y2giLCJlcnIiLCJyZXN1bHQiLCJ0cmFjZSIsIm5hbWUiLCJzY2VuaWMiLCJkZWNsYXJhdGlvbiIsImRhdGUiLCJEYXRlIiwiY3JlYXRlZCIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwidXNlcklkIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyIiwiaWQiLCIkYXBwbHkiLCJyZXMiLCJ0aXRsZSIsInBhdGgiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxlQUFRLEVBREg7QUFFTEMsb0JBQWEsRUFGUjtBQUdMQyxnQkFBVSxFQUhMO0FBSUxDLGNBQU8sRUFKRjtBQUtMQyxrQkFBVyxFQUxOO0FBTUxDLGVBQVE7QUFOSCxLLFFBdUNQQyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDRTtBQUNSQyxXQUFHQyxVQUFILENBQWMsRUFBQ0MsOEJBQTRCLEtBQUtWLE9BQWpDLG9CQUF1RCxLQUFLSSxVQUE1RCxzQkFBdUYsS0FBS0gsWUFBN0YsRUFBZDtBQUNEO0FBSE8sSzs7Ozs7OzJGQS9CR1UsQzs7Ozs7O0FBQ1hDLHdCQUFRQyxHQUFSLENBQVlGLEVBQUVHLE9BQWQ7QUFDSUosbUIsR0FBTUssZ0RBQXFDSixFQUFFRyxPQUF2QyxDOzt1QkFDV0Usa0JBQUlDLEdBQUosQ0FBUVAsR0FBUixFQUFhUSxLQUFiLENBQW1CLFVBQUNDLEdBQUQsRUFBTztBQUM3Q1AsMEJBQVFDLEdBQVIsQ0FBWU0sSUFBSXBCLElBQWhCO0FBQXNCLGlCQURILEM7OztBQUFmcUIsc0I7QUFFRkMscUIsR0FBUUQsT0FBT3JCLElBQVAsQ0FBWUEsSTs7QUFDeEIscUJBQUtHLFFBQUwsR0FBZ0JtQixNQUFNQyxJQUF0QjtBQUNBLHFCQUFLbkIsTUFBTCxHQUFja0IsTUFBTWxCLE1BQXBCO0FBQ0EscUJBQUtGLFlBQUwsR0FBb0JvQixNQUFNRSxNQUExQjtBQUNBLHFCQUFLdkIsT0FBTCxHQUFlcUIsTUFBTUcsV0FBckI7QUFDSUMsb0IsR0FBUSxJQUFJQyxJQUFKLENBQVNMLE1BQU1NLE9BQU4sR0FBYyxJQUF2QixDO0FBQ1JDLG9CLEdBQU9ILEtBQUtJLFdBQUwsRTtBQUNQQyxxQixHQUFRTCxLQUFLTSxRQUFMLEtBQWdCLEM7QUFDeEJDLG1CLEdBQU1QLEtBQUtRLE9BQUwsRTs7QUFDVixxQkFBSzdCLFVBQUwsR0FBa0J3QixPQUFPLEdBQVAsR0FBYUUsS0FBYixHQUFxQixHQUFyQixHQUEyQkUsR0FBN0M7QUFDQSxvQkFBR1gsTUFBTWEsTUFBTixJQUFnQixLQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLElBQXhCLENBQTZCQyxFQUFoRCxFQUFtRDtBQUNqRCx1QkFBS2pDLE9BQUwsR0FBZSxJQUFmO0FBQ0Q7QUFDRCxxQkFBS2tDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Y7Ozs7c0NBQ2tCQyxHLEVBQUs7QUFDckIsVUFBSUMsUUFBUSxTQUFTLEtBQUt4QyxZQUExQjtBQUNBLFVBQUl5QyxvQkFBSjtBQUNBLGFBQU87QUFDTEQsZUFBT0EsS0FERjtBQUVMQyxjQUFNQTtBQUZELE9BQVA7QUFJRDs7OztFQXpDb0NDLGVBQUtDLEk7O2tCQUF2QmhELFMiLCJmaWxlIjoidHJhY2VzaG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbiAgaW1wb3J0IHsgYmFzZVVybCwgYXBwSWR9IGZyb20gJ0AvY29uZmlnJ1xyXG4gIGltcG9ydCByZXEgZnJvbSAnQC9uZXR3b3JrJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNlc2hvdyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotrPov7nljaDpooYnXHJcbiAgICB9IFxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgY29udGVudDonJyxcclxuICAgICAgbG9jYXRpb25OYW1lOicnLFxyXG4gICAgICBuaWNrTmFtZTogJycsXHJcbiAgICAgIGF2YXRhcjonJyxcclxuICAgICAgZGF0ZVN0cmluZzonJyxcclxuICAgICAgaXNPd25lcjpmYWxzZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgb25Mb2FkKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZS50cmFjZUlkKTtcclxuICAgICAgbGV0IHVybCA9IGJhc2VVcmwgKyBgL3RyYWNlL2dldFRyYWNlP3RyYWNlSWQ9JHtlLnRyYWNlSWR9YDtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxLmdldCh1cmwpLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLmRhdGEpfSlcclxuICAgICAgbGV0IHRyYWNlID0gcmVzdWx0LmRhdGEuZGF0YTtcclxuICAgICAgdGhpcy5uaWNrTmFtZSA9IHRyYWNlLm5hbWU7XHJcbiAgICAgIHRoaXMuYXZhdGFyID0gdHJhY2UuYXZhdGFyO1xyXG4gICAgICB0aGlzLmxvY2F0aW9uTmFtZSA9IHRyYWNlLnNjZW5pYztcclxuICAgICAgdGhpcy5jb250ZW50ID0gdHJhY2UuZGVjbGFyYXRpb247XHJcbiAgICAgIGxldCBkYXRlICA9IG5ldyBEYXRlKHRyYWNlLmNyZWF0ZWQqMTAwMCk7XHJcbiAgICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkrMTtcclxuICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICB0aGlzLmRhdGVTdHJpbmcgPSB5ZWFyICsgJy4nICsgbW9udGggKyAnLicgKyBkYXk7XHJcbiAgICAgIGlmKHRyYWNlLnVzZXJJZCA9PSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyLmlkKXtcclxuICAgICAgICB0aGlzLmlzT3duZXIgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5YiG5LqrXHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcclxuICAgICAgbGV0IHRpdGxlID0gXCLmiJHljaDpoobkuoZcIiArIHRoaXMubG9jYXRpb25OYW1lO1xyXG4gICAgICBsZXQgcGF0aCA9IGBwYWdlcy9pbmRleGBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgcGF0aDogcGF0aFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGdldFBvc3QoKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3Bvc3Q/Y29udGVudD0ke3RoaXMuY29udGVudH0mZGF0ZVN0cmluZz0ke3RoaXMuZGF0ZVN0cmluZ30mbG9jYXRpb25OYW1lPSR7dGhpcy5sb2NhdGlvbk5hbWV9YH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==