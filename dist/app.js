'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _config = require('./config/index.js');

var _network = require('./network/index.js');

var _network2 = _interopRequireDefault(_network);

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/ablum', 'pages/trace', 'pages/occupy', 'pages/location', 'pages/traceshow', 'pages/post', 'pages/tracelist'],
      tabBar: {
        color: '#666',
        selectedColor: '#5e9bf4',
        backgroundColor: '#fff',
        //  font:17px,
        //  borderStyle: 'black',
        list: [{
          pagePath: 'pages/index',
          //  selectedIconPath: './images/tabbars/me_pressed.png',
          //  iconPath: './images/tabbars/me.png',
          text: '足迹地图'
        }, {
          pagePath: 'pages/trace',
          //  selectedIconPath: './images/tabbars/home_pressed.png',
          //    iconPath: './images/tabbars/home.png',
          text: '我的足迹'
        }, {
          pagePath: 'pages/ablum',
          //  selectedIconPath: './images/tabbars/home_pressed.png',
          //    iconPath: './images/tabbars/home.png',
          text: '我的相册'
        }]
      },
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'login',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var self, globalData, needs_login, setting, info, data, old_user_id, old_auth_token, url, setData, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!e) {
                  e = {};
                }
                self = this;
                globalData = self.globalData;
                needs_login = false;

                if (globalData.userInfo) {
                  _context.next = 13;
                  break;
                }

                _context.next = 7;
                return _wepy2.default.getSetting();

              case 7:
                setting = _context.sent;

                if (!setting.authSetting['scope.userInfo']) {
                  _context.next = 13;
                  break;
                }

                _context.next = 11;
                return _wepy2.default.getUserInfo();

              case 11:
                info = _context.sent;

                self.globalData.userInfo = info.userInfo;

              case 13:
                if (!globalData.user) {
                  globalData.user = {};
                }
                if (!globalData.user.id || !globalData.user.auth_token) {
                  needs_login = true;
                }

                if (!globalData.is_login) {
                  needs_login = true;
                }

                if (!needs_login) {
                  _context.next = 28;
                  break;
                }

                _context.next = 19;
                return _wepy2.default.login();

              case 19:
                data = _context.sent;
                old_user_id = globalData.user._id || '';
                old_auth_token = globalData.user.auth_token || '';
                url = _config.baseUrl + '/auth/loginByWeixin';
                setData = { 'code': data.code };
                _context.next = 26;
                return _network2.default.post(url, setData).catch(function (err) {
                  console.log("cache error...", err);
                  return {};
                });

              case 26:
                res = _context.sent;

                if (res) {
                  globalData.user.name = res.data.data.userInfo.name;
                  globalData.user.gender = res.data.data.userInfo.gender;
                  globalData.user.avatar = res.data.data.userInfo.avatar;
                  globalData.user.id = res.data.data.userInfo.id;
                }

              case 28:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login(_x) {
        return _ref.apply(this, arguments);
      }

      return login;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiZSIsInNlbGYiLCJuZWVkc19sb2dpbiIsIndlcHkiLCJnZXRTZXR0aW5nIiwic2V0dGluZyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJpbmZvIiwidXNlciIsImlkIiwiYXV0aF90b2tlbiIsImlzX2xvZ2luIiwibG9naW4iLCJkYXRhIiwib2xkX3VzZXJfaWQiLCJfaWQiLCJvbGRfYXV0aF90b2tlbiIsInVybCIsImJhc2VVcmwiLCJzZXREYXRhIiwiY29kZSIsInJlcSIsInBvc3QiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJuYW1lIiwiZ2VuZGVyIiwiYXZhdGFyIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxzQkFBZDtBQUNBLHlCQUFTQSxLQUFUOzs7OztBQW9ERSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBakRmQyxNQWlEZSxHQWpETjtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLGFBRkssRUFHTCxhQUhLLEVBSUwsY0FKSyxFQUtMLGdCQUxLLEVBTUwsaUJBTkssRUFPTCxZQVBLLEVBUUwsaUJBUkssQ0FEQTtBQVdQQyxjQUFRO0FB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dUJzQyxNQUFoRDtBQUNBdkMsNkJBQVdpQixJQUFYLENBQWdCQyxFQUFoQixHQUFxQmtCLElBQUlkLElBQUosQ0FBU0EsSUFBVCxDQUFjckIsUUFBZCxDQUF1QmlCLEVBQTVDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF6R3NCUCxlQUFLNkIsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5pbXBvcnQgeyBiYXNlVXJsLCBhcHBJZH0gZnJvbSAnQC9jb25maWcnXHJcbmltcG9ydCByZXEgZnJvbSAnQC9uZXR3b3JrJ1xyXG5pbXBvcnQgeyBzZXRTdG9yZSB9IGZyb20gJ3dlcHktcmVkdXgnXHJcbmltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpXHJcbnNldFN0b3JlKHN0b3JlKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL2FibHVtJyxcclxuICAgICAgJ3BhZ2VzL3RyYWNlJyxcclxuICAgICAgJ3BhZ2VzL29jY3VweScsXHJcbiAgICAgICdwYWdlcy9sb2NhdGlvbicsXHJcbiAgICAgICdwYWdlcy90cmFjZXNob3cnLFxyXG4gICAgICAncGFnZXMvcG9zdCcsXHJcbiAgICAgICdwYWdlcy90cmFjZWxpc3QnLFxyXG4gICAgXSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBjb2xvcjogJyM2NjYnLFxyXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzVlOWJmNCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgLy8gIGZvbnQ6MTdweCxcclxuICAgIC8vICBib3JkZXJTdHlsZTogJ2JsYWNrJyxcclxuICAgICAgbGlzdDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9pbmRleCcsXHJcbiAgICAgIC8vICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZXMvdGFiYmFycy9tZV9wcmVzc2VkLnBuZycsXHJcbiAgICAgIC8vICBpY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvbWUucG5nJyxcclxuICAgICAgICB0ZXh0OiAn6Laz6L+55Zyw5Zu+JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvdHJhY2UnLFxyXG4gICAgICAvLyAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvaG9tZV9wcmVzc2VkLnBuZycsXHJcbiAgICAvLyAgICBpY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvaG9tZS5wbmcnLFxyXG4gICAgICAgIHRleHQ6ICfmiJHnmoTotrPov7knLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9hYmx1bScsXHJcbiAgICAgIC8vICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZXMvdGFiYmFycy9ob21lX3ByZXNzZWQucG5nJyxcclxuICAgIC8vICAgIGljb25QYXRoOiAnLi9pbWFnZXMvdGFiYmFycy9ob21lLnBuZycsXHJcbiAgICAgICAgdGV4dDogJ+aIkeeahOebuOWGjCcsXHJcbiAgICAgIH1dXHJcbiAgICB9LFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKTtcclxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKTtcclxuICB9XHJcbiAgb25MYXVuY2goKSB7XHJcbiAgfVxyXG5cclxuICBzbGVlcCAocykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXHJcbiAgICAgIH0sIHMgKiAxMDAwKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvZ2luKGUpIHtcclxuICAgIGlmKCFlKXtcclxuICAgICAgZSA9IHt9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZWxmID0gdGhpc1xyXG4gICAgbGV0IGdsb2JhbERhdGEgPSBzZWxmLmdsb2JhbERhdGFcclxuICAgIGxldCBuZWVkc19sb2dpbiA9IGZhbHNlXHJcbiAgICBpZiAoIWdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgY29uc3Qgc2V0dGluZyA9IGF3YWl0IHdlcHkuZ2V0U2V0dGluZygpXHJcbiAgICAgIGlmIChzZXR0aW5nLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG4gICAgICAgIHNlbGYuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGluZm8udXNlckluZm9cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFnbG9iYWxEYXRhLnVzZXIpIHtcclxuICAgICAgZ2xvYmFsRGF0YS51c2VyID0ge31cclxuICAgIH1cclxuICAgIGlmICghZ2xvYmFsRGF0YS51c2VyLmlkIHx8ICFnbG9iYWxEYXRhLnVzZXIuYXV0aF90b2tlbikge1xyXG4gICAgICBuZWVkc19sb2dpbiA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWdsb2JhbERhdGEuaXNfbG9naW4pIHtcclxuICAgICAgbmVlZHNfbG9naW4gPSB0cnVlXHJcbiAgICB9XHJcbiAgICBpZihuZWVkc19sb2dpbil7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZXB5LmxvZ2luKClcclxuICAgICAgY29uc3Qgb2xkX3VzZXJfaWQgPSBnbG9iYWxEYXRhLnVzZXIuX2lkIHx8ICcnXHJcbiAgICAgIGNvbnN0IG9sZF9hdXRoX3Rva2VuID0gZ2xvYmFsRGF0YS51c2VyLmF1dGhfdG9rZW4gfHwgJydcclxuICAgICAgbGV0IHVybCA9IGJhc2VVcmwrYC9hdXRoL2xvZ2luQnlXZWl4aW5gXHJcbiAgICAgIGNvbnN0IHNldERhdGEgPSB7J2NvZGUnOmRhdGEuY29kZX1cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLnBvc3QodXJsLHNldERhdGEpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNhY2hlIGVycm9yLi4uXCIsIGVycik7XHJcbiAgICAgICAgcmV0dXJuIHt9XHJcbiAgICAgIH0pXHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS51c2VyLm5hbWUgPSByZXMuZGF0YS5kYXRhLnVzZXJJbmZvLm5hbWVcclxuICAgICAgICBnbG9iYWxEYXRhLnVzZXIuZ2VuZGVyID0gcmVzLmRhdGEuZGF0YS51c2VySW5mby5nZW5kZXJcclxuICAgICAgICBnbG9iYWxEYXRhLnVzZXIuYXZhdGFyID0gcmVzLmRhdGEuZGF0YS51c2VySW5mby5hdmF0YXJcclxuICAgICAgICBnbG9iYWxEYXRhLnVzZXIuaWQgPSByZXMuZGF0YS5kYXRhLnVzZXJJbmZvLmlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19