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

var Login = function (_wepy$page) {
  _inherits(Login, _wepy$page);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '足迹占领'
    }, _this.methods = {
      userLogin: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var userInfo, setting, info, url, setData, userId;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  userInfo = e.detail.userInfo;

                  console.log(userInfo);

                  if (!userInfo) {
                    _context.next = 22;
                    break;
                  }

                  if (this.$parent.globalData.userInfo) {
                    _context.next = 21;
                    break;
                  }

                  _context.next = 6;
                  return _wepy2.default.getSetting();

                case 6:
                  setting = _context.sent;

                  if (!setting.authSetting['scope.userInfo']) {
                    _context.next = 19;
                    break;
                  }

                  _context.next = 10;
                  return _wepy2.default.getUserInfo();

                case 10:
                  info = _context.sent;

                  this.$parent.globalData.userInfo = info.userInfo;
                  url = _config.baseUrl + '/auth/updateUser';
                  setData = { 'id': this.$parent.globalData.user.id, 'name': info.userInfo.nickName, 'avatar': info.userInfo.avatarUrl, 'gender': info.userInfo.gender };
                  _context.next = 16;
                  return _network2.default.post(url, setData).catch(function (err) {
                    console.log("updateAvatarError...", err.data);
                  });

                case 16:
                  userId = _context.sent;

                  this.$parent.globalData.user.name = info.userInfo.nickName;
                  this.$parent.globalData.user.avatar = info.userInfo.avatarUrl;

                case 19:
                  _context.next = 22;
                  break;

                case 21:
                  wx.switchTab({ url: '/pages/ablum' });

                case 22:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function userLogin(_x) {
          return _ref2.apply(this, arguments);
        }

        return userLogin;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
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
  }]);

  return Login;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm1ldGhvZHMiLCJ1c2VyTG9naW4iLCJlIiwidXNlckluZm8iLCJkZXRhaWwiLCJjb25zb2xlIiwibG9nIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ3ZXB5IiwiZ2V0U2V0dGluZyIsInNldHRpbmciLCJhdXRoU2V0dGluZyIsImdldFVzZXJJbmZvIiwiaW5mbyIsInVybCIsImJhc2VVcmwiLCJzZXREYXRhIiwidXNlciIsImlkIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJnZW5kZXIiLCJyZXEiLCJwb3N0IiwiY2F0Y2giLCJlcnIiLCJkYXRhIiwidXNlcklkIiwibmFtZSIsImF2YXRhciIsInd4Iiwic3dpdGNoVGFiIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBTVRDLE8sR0FBVTtBQUNGQyxlQURFO0FBQUEsNkZBQ1FDLENBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUFDLDBCQUZBLEdBRVdELEVBQUVFLE1BQUYsQ0FBU0QsUUFGcEI7O0FBR05FLDBCQUFRQyxHQUFSLENBQVlILFFBQVo7O0FBSE0sdUJBSUZBLFFBSkU7QUFBQTtBQUFBO0FBQUE7O0FBQUEsc0JBS0MsS0FBS0ksT0FBTCxDQUFhQyxVQUFiLENBQXdCTCxRQUx6QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlCQU1rQk0sZUFBS0MsVUFBTCxFQU5sQjs7QUFBQTtBQU1FQyx5QkFORjs7QUFBQSx1QkFPQUEsUUFBUUMsV0FBUixDQUFvQixnQkFBcEIsQ0FQQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlCQVFtQkgsZUFBS0ksV0FBTCxFQVJuQjs7QUFBQTtBQVFNQyxzQkFSTjs7QUFTQSx1QkFBS1AsT0FBTCxDQUFhQyxVQUFiLENBQXdCTCxRQUF4QixHQUFtQ1csS0FBS1gsUUFBeEM7QUFDSVkscUJBVkosR0FVVUMsa0JBQVUsa0JBVnBCO0FBV01DLHlCQVhOLEdBV2dCLEVBQUMsTUFBSyxLQUFLVixPQUFMLENBQWFDLFVBQWIsQ0FBd0JVLElBQXhCLENBQTZCQyxFQUFuQyxFQUF1QyxRQUFRTCxLQUFLWCxRQUFMLENBQWNpQixRQUE3RCxFQUF1RSxVQUFVTixLQUFLWCxRQUFMLENBQWNrQixTQUEvRixFQUEwRyxVQUFVUCxLQUFLWCxRQUFMLENBQWNtQixNQUFsSSxFQVhoQjtBQUFBO0FBQUEseUJBWXFCQyxrQkFBSUMsSUFBSixDQUFTVCxHQUFULEVBQWNFLE9BQWQsRUFBdUJRLEtBQXZCLENBQTZCLFVBQUNDLEdBQUQsRUFBTztBQUN6RHJCLDRCQUFRQyxHQUFSLENBQVksc0JBQVosRUFBb0NvQixJQUFJQyxJQUF4QztBQUE4QyxtQkFEekIsQ0FackI7O0FBQUE7QUFZTUMsd0JBWk47O0FBY0EsdUJBQUtyQixPQUFMLENBQWFDLFVBQWIsQ0FBd0JVLElBQXhCLENBQTZCVyxJQUE3QixHQUFvQ2YsS0FBS1gsUUFBTCxDQUFjaUIsUUFBbEQ7QUFDQSx1QkFBS2IsT0FBTCxDQUFhQyxVQUFiLENBQXdCVSxJQUF4QixDQUE2QlksTUFBN0IsR0FBc0NoQixLQUFLWCxRQUFMLENBQWNrQixTQUFwRDs7QUFmQTtBQUFBO0FBQUE7O0FBQUE7QUFtQkpVLHFCQUFHQyxTQUFILENBQWEsRUFBQ2pCLEtBQUssY0FBTixFQUFiOztBQW5CSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs0RkFIR2IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSm9CTyxlQUFLd0IsSTs7a0JBQW5CcEMsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG4gIGltcG9ydCB7IGJhc2VVcmwsIGFwcElkfSBmcm9tICdAL2NvbmZpZydcclxuICBpbXBvcnQgcmVxIGZyb20gJ0AvbmV0d29yaydcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotrPov7nljaDpooYnXHJcbiAgICB9IFxyXG4gICAgYXN5bmMgb25Mb2FkKGUpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyLm5hbWUpXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBhc3luYyB1c2VyTG9naW4oZSkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm87XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlckluZm8pXHJcbiAgICAgICAgaWYgKHVzZXJJbmZvKSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgICAgICBjb25zdCBzZXR0aW5nID0gYXdhaXQgd2VweS5nZXRTZXR0aW5nKClcclxuICAgICAgICAgIGlmIChzZXR0aW5nLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG4gICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gaW5mby51c2VySW5mb1xyXG4gICAgICAgICAgICAgIGxldCB1cmwgPSBiYXNlVXJsICsgJy9hdXRoL3VwZGF0ZVVzZXInXHJcbiAgICAgICAgICAgICAgY29uc3Qgc2V0RGF0YSA9IHsnaWQnOnRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIuaWQsICduYW1lJzogaW5mby51c2VySW5mby5uaWNrTmFtZSwgJ2F2YXRhcic6IGluZm8udXNlckluZm8uYXZhdGFyVXJsLCAnZ2VuZGVyJzogaW5mby51c2VySW5mby5nZW5kZXJ9XHJcbiAgICAgICAgICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxLnBvc3QodXJsLCBzZXREYXRhKS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlQXZhdGFyRXJyb3IuLi5cIiwgZXJyLmRhdGEpfSlcclxuICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyLm5hbWUgPSBpbmZvLnVzZXJJbmZvLm5pY2tOYW1lO1xyXG4gICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIuYXZhdGFyID0gaW5mby51c2VySW5mby5hdmF0YXJVcmw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgd3guc3dpdGNoVGFiKHt1cmw6ICcvcGFnZXMvYWJsdW0nfSlcclxuICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=