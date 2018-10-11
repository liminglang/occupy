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
      dateString: ''
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
                console.log(this.$parent.globalData.user.name, e.traceId);
                url = _config.baseUrl + ('/trace/getTrace?traceId=' + e.traceId);
                _context.next = 4;
                return _network2.default.get(url).catch(function (err) {
                  console.log(err.data);
                });

              case 4:
                result = _context.sent;
                trace = result.data.data;

                this.nickName = this.$parent.globalData.user.name;
                this.avatar = this.$parent.globalData.user.avatar;
                this.locationName = trace.scenic;
                this.content = trace.declaration;
                date = new Date(trace.created * 1000);
                year = date.getFullYear();
                month = date.getMonth() + 1;
                day = date.getDate();

                this.dateString = year + '.' + month + '.' + day;

              case 15:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNlc2hvdy5qcyJdLCJuYW1lcyI6WyJUcmFjZXNob3ciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNvbnRlbnQiLCJsb2NhdGlvbk5hbWUiLCJuaWNrTmFtZSIsImF2YXRhciIsImRhdGVTdHJpbmciLCJtZXRob2RzIiwiZ2V0UG9zdCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImUiLCJjb25zb2xlIiwibG9nIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyIiwibmFtZSIsInRyYWNlSWQiLCJiYXNlVXJsIiwicmVxIiwiZ2V0IiwiY2F0Y2giLCJlcnIiLCJyZXN1bHQiLCJ0cmFjZSIsInNjZW5pYyIsImRlY2xhcmF0aW9uIiwiZGF0ZSIsIkRhdGUiLCJjcmVhdGVkIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJyZXMiLCJ0aXRsZSIsInBhdGgiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxlQUFRLEVBREg7QUFFTEMsb0JBQWEsRUFGUjtBQUdMQyxnQkFBVSxFQUhMO0FBSUxDLGNBQU8sRUFKRjtBQUtMQyxrQkFBVztBQUxOLEssUUFrQ1BDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNFO0FBQ1JDLFdBQUdDLFVBQUgsQ0FBYyxFQUFDQyw4QkFBNEIsS0FBS1QsT0FBakMsb0JBQXVELEtBQUtJLFVBQTVELHNCQUF1RixLQUFLSCxZQUE3RixFQUFkO0FBQ0Q7QUFITyxLOzs7Ozs7MkZBM0JHUyxDOzs7Ozs7QUFDWEMsd0JBQVFDLEdBQVIsQ0FBWSxLQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLElBQXhCLENBQTZCQyxJQUF6QyxFQUE4Q04sRUFBRU8sT0FBaEQ7QUFDSVIsbUIsR0FBTVMsZ0RBQXFDUixFQUFFTyxPQUF2QyxDOzt1QkFDV0Usa0JBQUlDLEdBQUosQ0FBUVgsR0FBUixFQUFhWSxLQUFiLENBQW1CLFVBQUNDLEdBQUQsRUFBTztBQUM3Q1gsMEJBQVFDLEdBQVIsQ0FBWVUsSUFBSXZCLElBQWhCO0FBQXNCLGlCQURILEM7OztBQUFmd0Isc0I7QUFFRkMscUIsR0FBUUQsT0FBT3hCLElBQVAsQ0FBWUEsSTs7QUFDeEIscUJBQUtHLFFBQUwsR0FBZ0IsS0FBS1csT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxJQUF4QixDQUE2QkMsSUFBN0M7QUFDQSxxQkFBS2IsTUFBTCxHQUFjLEtBQUtVLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsSUFBeEIsQ0FBNkJaLE1BQTNDO0FBQ0EscUJBQUtGLFlBQUwsR0FBb0J1QixNQUFNQyxNQUExQjtBQUNBLHFCQUFLekIsT0FBTCxHQUFld0IsTUFBTUUsV0FBckI7QUFDSUMsb0IsR0FBUSxJQUFJQyxJQUFKLENBQVNKLE1BQU1LLE9BQU4sR0FBYyxJQUF2QixDO0FBQ1JDLG9CLEdBQU9ILEtBQUtJLFdBQUwsRTtBQUNQQyxxQixHQUFRTCxLQUFLTSxRQUFMLEtBQWdCLEM7QUFDeEJDLG1CLEdBQU1QLEtBQUtRLE9BQUwsRTs7QUFDVixxQkFBSy9CLFVBQUwsR0FBa0IwQixPQUFPLEdBQVAsR0FBYUUsS0FBYixHQUFxQixHQUFyQixHQUEyQkUsR0FBN0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Y7Ozs7c0NBQ2tCRSxHLEVBQUs7QUFDckIsVUFBSUMsUUFBUSxTQUFTLEtBQUtwQyxZQUExQjtBQUNBLFVBQUlxQyxvQkFBSjtBQUNBLGFBQU87QUFDTEQsZUFBT0EsS0FERjtBQUVMQyxjQUFNQTtBQUZELE9BQVA7QUFJRDs7OztFQXBDb0NDLGVBQUtDLEk7O2tCQUF2QjVDLFMiLCJmaWxlIjoidHJhY2VzaG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbiAgaW1wb3J0IHsgYmFzZVVybCwgYXBwSWR9IGZyb20gJ0AvY29uZmlnJ1xyXG4gIGltcG9ydCByZXEgZnJvbSAnQC9uZXR3b3JrJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNlc2hvdyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotrPov7nljaDpooYnXHJcbiAgICB9IFxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgY29udGVudDonJyxcclxuICAgICAgbG9jYXRpb25OYW1lOicnLFxyXG4gICAgICBuaWNrTmFtZTogJycsXHJcbiAgICAgIGF2YXRhcjonJyxcclxuICAgICAgZGF0ZVN0cmluZzonJ1xyXG4gICAgfVxyXG4gICAgYXN5bmMgb25Mb2FkKGUpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlci5uYW1lLGUudHJhY2VJZCk7XHJcbiAgICAgIGxldCB1cmwgPSBiYXNlVXJsICsgYC90cmFjZS9nZXRUcmFjZT90cmFjZUlkPSR7ZS50cmFjZUlkfWA7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcS5nZXQodXJsKS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5kYXRhKX0pXHJcbiAgICAgIGxldCB0cmFjZSA9IHJlc3VsdC5kYXRhLmRhdGE7XHJcbiAgICAgIHRoaXMubmlja05hbWUgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyLm5hbWU7XHJcbiAgICAgIHRoaXMuYXZhdGFyID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlci5hdmF0YXI7XHJcbiAgICAgIHRoaXMubG9jYXRpb25OYW1lID0gdHJhY2Uuc2NlbmljO1xyXG4gICAgICB0aGlzLmNvbnRlbnQgPSB0cmFjZS5kZWNsYXJhdGlvbjtcclxuICAgICAgbGV0IGRhdGUgID0gbmV3IERhdGUodHJhY2UuY3JlYXRlZCoxMDAwKTtcclxuICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSsxO1xyXG4gICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgIHRoaXMuZGF0ZVN0cmluZyA9IHllYXIgKyAnLicgKyBtb250aCArICcuJyArIGRheTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDliIbkuqtcclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xyXG4gICAgICBsZXQgdGl0bGUgPSBcIuaIkeWNoOmihuS6hlwiICsgdGhpcy5sb2NhdGlvbk5hbWU7XHJcbiAgICAgIGxldCBwYXRoID0gYHBhZ2VzL2luZGV4YFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBwYXRoOiBwYXRoXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgZ2V0UG9zdCgpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6IGAvcGFnZXMvcG9zdD9jb250ZW50PSR7dGhpcy5jb250ZW50fSZkYXRlU3RyaW5nPSR7dGhpcy5kYXRlU3RyaW5nfSZsb2NhdGlvbk5hbWU9JHt0aGlzLmxvY2F0aW9uTmFtZX1gfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19