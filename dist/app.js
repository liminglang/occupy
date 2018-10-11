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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiZSIsInNlbGYiLCJuZWVkc19sb2dpbiIsIndlcHkiLCJnZXRTZXR0aW5nIiwic2V0dGluZyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJpbmZvIiwidXNlciIsImlkIiwiYXV0aF90b2tlbiIsImlzX2xvZ2luIiwibG9naW4iLCJkYXRhIiwib2xkX3VzZXJfaWQiLCJfaWQiLCJvbGRfYXV0aF90b2tlbiIsInVybCIsImJhc2VVcmwiLCJzZXREYXRhIiwiY29kZSIsInJlcSIsInBvc3QiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJuYW1lIiwiZ2VuZGVyIiwiYXZhdGFyIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxzQkFBZDtBQUNBLHlCQUFTQSxLQUFUOzs7OztBQW9ERSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBakRmQyxNQWlEZSxHQWpETjtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLGFBRkssRUFHTCxhQUhLLEVBSUwsY0FKSyxFQUtMLGdCQUxLLEVBTUwsaUJBTkssRUFPTCxZQVBLLEVBUUwsaUJBUkssQ0FEQTtBQVdQQyxjQUFRO0FB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dUJzQyxNQUFoRDtBQUNBdkMsNkJBQVdpQixJQUFYLENBQWdCQyxFQUFoQixHQUFxQmtCLElBQUlkLElBQUosQ0FBU0EsSUFBVCxDQUFjckIsUUFBZCxDQUF1QmlCLEVBQTVDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF6R3NCUCxlQUFLNkIsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5pbXBvcnQgeyBiYXNlVXJsLCBhcHBJZH0gZnJvbSAnQC9jb25maWcnXG5pbXBvcnQgcmVxIGZyb20gJ0AvbmV0d29yaydcbmltcG9ydCB7IHNldFN0b3JlIH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuL3N0b3JlJ1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ1N0b3JlKClcbnNldFN0b3JlKHN0b3JlKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2FibHVtJyxcbiAgICAgICdwYWdlcy90cmFjZScsXG4gICAgICAncGFnZXMvb2NjdXB5JyxcbiAgICAgICdwYWdlcy9sb2NhdGlvbicsXG4gICAgICAncGFnZXMvdHJhY2VzaG93JyxcbiAgICAgICdwYWdlcy9wb3N0JyxcbiAgICAgICdwYWdlcy90cmFjZWxpc3QnLFxuICAgIF0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBjb2xvcjogJyM2NjYnLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyM1ZTliZjQnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgLy8gIGZvbnQ6MTdweCxcbiAgICAvLyAgYm9yZGVyU3R5bGU6ICdibGFjaycsXG4gICAgICBsaXN0OiBbXG4gICAgICB7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5kZXgnLFxuICAgICAgLy8gIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL21lX3ByZXNzZWQucG5nJyxcbiAgICAgIC8vICBpY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvbWUucG5nJyxcbiAgICAgICAgdGV4dDogJ+i2s+i/ueWcsOWbvicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3RyYWNlJyxcbiAgICAgIC8vICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZXMvdGFiYmFycy9ob21lX3ByZXNzZWQucG5nJyxcbiAgICAvLyAgICBpY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvaG9tZS5wbmcnLFxuICAgICAgICB0ZXh0OiAn5oiR55qE6Laz6L+5JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvYWJsdW0nLFxuICAgICAgLy8gIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2hvbWVfcHJlc3NlZC5wbmcnLFxuICAgIC8vICAgIGljb25QYXRoOiAnLi9pbWFnZXMvdGFiYmFycy9ob21lLnBuZycsXG4gICAgICAgIHRleHQ6ICfmiJHnmoTnm7jlhownLFxuICAgICAgfV1cbiAgICB9LFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgIH1cbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKTtcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XG4gIH1cbiAgb25MYXVuY2goKSB7XG4gIH1cblxuICBzbGVlcCAocykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXG4gICAgICB9LCBzICogMTAwMClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgbG9naW4oZSkge1xuICAgIGlmKCFlKXtcbiAgICAgIGUgPSB7fVxuICAgIH1cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGxldCBnbG9iYWxEYXRhID0gc2VsZi5nbG9iYWxEYXRhXG4gICAgbGV0IG5lZWRzX2xvZ2luID0gZmFsc2VcbiAgICBpZiAoIWdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgIGNvbnN0IHNldHRpbmcgPSBhd2FpdCB3ZXB5LmdldFNldHRpbmcoKVxuICAgICAgaWYgKHNldHRpbmcuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxuICAgICAgICBzZWxmLmdsb2JhbERhdGEudXNlckluZm8gPSBpbmZvLnVzZXJJbmZvXG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZ2xvYmFsRGF0YS51c2VyKSB7XG4gICAgICBnbG9iYWxEYXRhLnVzZXIgPSB7fVxuICAgIH1cbiAgICBpZiAoIWdsb2JhbERhdGEudXNlci5pZCB8fCAhZ2xvYmFsRGF0YS51c2VyLmF1dGhfdG9rZW4pIHtcbiAgICAgIG5lZWRzX2xvZ2luID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmICghZ2xvYmFsRGF0YS5pc19sb2dpbikge1xuICAgICAgbmVlZHNfbG9naW4gPSB0cnVlXG4gICAgfVxuICAgIGlmKG5lZWRzX2xvZ2luKXtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZXB5LmxvZ2luKClcbiAgICAgIGNvbnN0IG9sZF91c2VyX2lkID0gZ2xvYmFsRGF0YS51c2VyLl9pZCB8fCAnJ1xuICAgICAgY29uc3Qgb2xkX2F1dGhfdG9rZW4gPSBnbG9iYWxEYXRhLnVzZXIuYXV0aF90b2tlbiB8fCAnJ1xuICAgICAgbGV0IHVybCA9IGJhc2VVcmwrYC9hdXRoL2xvZ2luQnlXZWl4aW5gXG4gICAgICBjb25zdCBzZXREYXRhID0geydjb2RlJzpkYXRhLmNvZGV9XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEucG9zdCh1cmwsc2V0RGF0YSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNhY2hlIGVycm9yLi4uXCIsIGVycik7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfSlcbiAgICAgIGlmKHJlcyl7XG4gICAgICAgIGdsb2JhbERhdGEudXNlci5uYW1lID0gcmVzLmRhdGEuZGF0YS51c2VySW5mby5uYW1lXG4gICAgICAgIGdsb2JhbERhdGEudXNlci5nZW5kZXIgPSByZXMuZGF0YS5kYXRhLnVzZXJJbmZvLmdlbmRlclxuICAgICAgICBnbG9iYWxEYXRhLnVzZXIuYXZhdGFyID0gcmVzLmRhdGEuZGF0YS51c2VySW5mby5hdmF0YXJcbiAgICAgICAgZ2xvYmFsRGF0YS51c2VyLmlkID0gcmVzLmRhdGEuZGF0YS51c2VySW5mby5pZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19