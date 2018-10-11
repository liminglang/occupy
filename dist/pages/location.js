'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Location = function (_wepy$page) {
  _inherits(Location, _wepy$page);

  function Location() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Location);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Location.__proto__ || Object.getPrototypeOf(Location)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '足迹占领'
    }, _this.methods = {
      startGame: function startGame() {
        _wepy2.default.navigateTo({ url: '/pages/index' });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Location, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(this.$parent.globalData.user.name);
                wx.chooseLocation({
                  success: function success(res) {
                    console.log(res, "111111111111");
                    console.log(res.name);
                    wx.navigateTo({ url: '/pages/occupy?locationName=' + res.name + '&latitude=' + res.latitude + '&longitude=' + res.longitude });
                  }
                });

              case 2:
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
  }]);

  return Location;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Location , 'pages/location'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLmpzIl0sIm5hbWVzIjpbIkxvY2F0aW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm1ldGhvZHMiLCJzdGFydEdhbWUiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImUiLCJjb25zb2xlIiwibG9nIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyIiwibmFtZSIsInd4IiwiY2hvb3NlTG9jYXRpb24iLCJzdWNjZXNzIiwicmVzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBY1RDLE8sR0FBVTtBQUNSQyxlQURRLHVCQUNJO0FBQ1ZDLHVCQUFLQyxVQUFMLENBQWdCLEVBQUNDLEtBQUssY0FBTixFQUFoQjtBQUNEO0FBSE8sSzs7Ozs7OzJGQVhHQyxDOzs7OztBQUNYQyx3QkFBUUMsR0FBUixDQUFZLEtBQUtDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsSUFBeEIsQ0FBNkJDLElBQXpDO0FBQ0FDLG1CQUFHQyxjQUFILENBQWtCO0FBQ2hCQywyQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCVCw0QkFBUUMsR0FBUixDQUFZUSxHQUFaLEVBQWdCLGNBQWhCO0FBQ0FULDRCQUFRQyxHQUFSLENBQVlRLElBQUlKLElBQWhCO0FBQ0FDLHVCQUFHVCxVQUFILENBQWMsRUFBQ0MscUNBQW1DVyxJQUFJSixJQUF2QyxrQkFBd0RJLElBQUlDLFFBQTVELG1CQUFrRkQsSUFBSUUsU0FBdkYsRUFBZDtBQUNEO0FBTGUsaUJBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBTmtDZixlQUFLZ0IsSTs7a0JBQXRCckIsUSIsImZpbGUiOiJsb2NhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Laz6L+55Y2g6aKGJ1xyXG4gICAgfSBcclxuICAgIGFzeW5jIG9uTG9hZChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIubmFtZSk7XHJcbiAgICAgIHd4LmNob29zZUxvY2F0aW9uKHtcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7ICAgIFxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLFwiMTExMTExMTExMTExXCIpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMubmFtZSlcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDogYC9wYWdlcy9vY2N1cHk/bG9jYXRpb25OYW1lPSR7cmVzLm5hbWV9JmxhdGl0dWRlPSR7cmVzLmxhdGl0dWRlfSZsb25naXR1ZGU9JHtyZXMubG9uZ2l0dWRlfWB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSkgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe3VybDogJy9wYWdlcy9pbmRleCd9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=