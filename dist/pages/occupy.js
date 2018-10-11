'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _network = require('./../network/index.js');

var _network2 = _interopRequireDefault(_network);

var _config = require('./../config/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Occupy = function (_wepy$page) {
  _inherits(Occupy, _wepy$page);

  function Occupy() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Occupy);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Occupy.__proto__ || Object.getPrototypeOf(Occupy)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '足迹占领'
    }, _this.data = {
      content: '',
      city: '',
      locationName: '',
      longitude: '',
      latitude: '',
      imageUrl: '/static/images/ic_menu_topic_nor.png'
    }, _this.methods = {
      startGame: function startGame() {
        wx.navigateTo({ url: '/pages/index' });
      },
      uploadPhoto: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wepy2.default.chooseImage({
                    count: 1,
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album', 'camera']
                  });

                case 2:
                  res = _context.sent;

                  console.log("tempFilePaths==============", res.tempFilePaths[0]);
                  this.imageUrl = res.tempFilePaths[0];
                  this.$apply();

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function uploadPhoto() {
          return _ref2.apply(this, arguments);
        }

        return uploadPhoto;
      }(),
      confirm: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
          var userInfo, setting, info, _url, _setData, url, setData;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  userInfo = e.detail.userInfo;

                  console.log(userInfo);

                  if (!userInfo) {
                    _context2.next = 18;
                    break;
                  }

                  if (this.$parent.globalData.userInfo) {
                    _context2.next = 18;
                    break;
                  }

                  _context2.next = 6;
                  return _wepy2.default.getSetting();

                case 6:
                  setting = _context2.sent;

                  if (!setting.authSetting['scope.userInfo']) {
                    _context2.next = 18;
                    break;
                  }

                  _context2.next = 10;
                  return _wepy2.default.getUserInfo();

                case 10:
                  info = _context2.sent;

                  this.$parent.globalData.userInfo = info.userInfo;
                  _url = _config.baseUrl + '/auth/updateUser';
                  _setData = { 'id': this.$parent.globalData.user.id, 'name': info.userInfo.nickName, 'avatar': info.userInfo.avatarUrl, 'gender': info.userInfo.gender };
                  _context2.next = 16;
                  return _network2.default.post(_url, _setData).catch(function (err) {
                    console.log("updateAvatarError...", err.data);
                  });

                case 16:
                  this.$parent.globalData.user.name = info.userInfo.nickName;
                  this.$parent.globalData.user.avatar = info.userInfo.avatarUrl;

                case 18:
                  url = _config.baseUrl + '/trace/addTrace';
                  setData = { 'userId': this.$parent.globalData.user.id, 'latitude': this.latitude, 'longitude': this.longitude, 'scenic': this.locationName, 'declaration': this.content, 'avatar': this.$parent.globalData.user.avatar };
                  _context2.next = 22;
                  return _network2.default.post(url, setData).catch(function (err) {
                    console.log("updateAvatarError...", err.data);
                  });

                case 22:
                  wx.switchTab({ url: '/pages/index' });

                case 23:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function confirm(_x) {
          return _ref3.apply(this, arguments);
        }

        return confirm;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Occupy, [{
    key: 'onLoad',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log(e);
                if (e.latitude && e.longitude) {
                  this.latitude = e.latitude;
                  this.longitude = e.longitude;
                }
                if (e.locationName) {
                  this.locationName = e.locationName;
                }
                this.content = this.$parent.globalData.user.name + '到此一游！';
                _context3.next = 6;
                return this.getCityNameFromTX(e.latitude, e.longitude);

              case 6:
                this.$apply();

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onLoad(_x2) {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'getCityNameFromTX',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(latitude, longitude) {
        var url, res;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                url = 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude + ',' + longitude + '&key=' + _config.txMapsKey;
                _context4.next = 3;
                return _wepy2.default.request({ url: url, method: 'GET' }).catch(function (err) {
                  console.log("error...", err.data);
                  return {};
                });

              case 3:
                res = _context4.sent;

                console.log(res.data.result);
                this.city = res.data.result.ad_info.city;
                if (!this.locationName) {
                  this.locationName = res.data.result.address_reference.famous_area.title;
                }

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getCityNameFromTX(_x3, _x4) {
        return _ref5.apply(this, arguments);
      }

      return getCityNameFromTX;
    }()
  }]);

  return Occupy;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Occupy , 'pages/occupy'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9jY3VweS5qcyJdLCJuYW1lcyI6WyJPY2N1cHkiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNvbnRlbnQiLCJjaXR5IiwibG9jYXRpb25OYW1lIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJpbWFnZVVybCIsIm1ldGhvZHMiLCJzdGFydEdhbWUiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ1cGxvYWRQaG90byIsIndlcHkiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwicmVzIiwiY29uc29sZSIsImxvZyIsInRlbXBGaWxlUGF0aHMiLCIkYXBwbHkiLCJjb25maXJtIiwiZSIsInVzZXJJbmZvIiwiZGV0YWlsIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJnZXRTZXR0aW5nIiwic2V0dGluZyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJpbmZvIiwiYmFzZVVybCIsInNldERhdGEiLCJ1c2VyIiwiaWQiLCJuaWNrTmFtZSIsImF2YXRhclVybCIsImdlbmRlciIsInJlcSIsInBvc3QiLCJjYXRjaCIsImVyciIsIm5hbWUiLCJhdmF0YXIiLCJzd2l0Y2hUYWIiLCJnZXRDaXR5TmFtZUZyb21UWCIsInR4TWFwc0tleSIsInJlcXVlc3QiLCJtZXRob2QiLCJyZXN1bHQiLCJhZF9pbmZvIiwiYWRkcmVzc19yZWZlcmVuY2UiLCJmYW1vdXNfYXJlYSIsInRpdGxlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxlQUFRLEVBREg7QUFFTEMsWUFBSyxFQUZBO0FBR0xDLG9CQUFhLEVBSFI7QUFJTEMsaUJBQVUsRUFKTDtBQUtMQyxnQkFBUyxFQUxKO0FBTUxDLGdCQUFTO0FBTkosSyxRQWtDUEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVkMsV0FBR0MsVUFBSCxDQUFjLEVBQUNDLEtBQUssY0FBTixFQUFkO0FBQ0QsT0FITztBQUlGQyxpQkFKRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBS1VDLGVBQUtDLFdBQUwsQ0FBaUI7QUFDL0JDLDJCQUFPLENBRHdCO0FBRS9CQyw4QkFBVSxDQUFDLFVBQUQsRUFBYSxZQUFiLENBRnFCO0FBRy9CQyxnQ0FBWSxDQUFDLE9BQUQsRUFBVSxRQUFWO0FBSG1CLG1CQUFqQixDQUxWOztBQUFBO0FBS0ZDLHFCQUxFOztBQVVOQywwQkFBUUMsR0FBUixDQUFZLDZCQUFaLEVBQTBDRixJQUFJRyxhQUFKLENBQWtCLENBQWxCLENBQTFDO0FBQ0EsdUJBQUtmLFFBQUwsR0FBZ0JZLElBQUlHLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBaEI7QUFDQSx1QkFBS0MsTUFBTDs7QUFaTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWNGQyxhQWRFO0FBQUEsOEZBY01DLENBZE47QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVBQywwQkFmQSxHQWVXRCxFQUFFRSxNQUFGLENBQVNELFFBZnBCOztBQWdCTk4sMEJBQVFDLEdBQVIsQ0FBWUssUUFBWjs7QUFoQk0sdUJBaUJGQSxRQWpCRTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxzQkFrQkMsS0FBS0UsT0FBTCxDQUFhQyxVQUFiLENBQXdCSCxRQWxCekI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5QkFtQm9CWixlQUFLZ0IsVUFBTCxFQW5CcEI7O0FBQUE7QUFtQklDLHlCQW5CSjs7QUFBQSx1QkFvQkVBLFFBQVFDLFdBQVIsQ0FBb0IsZ0JBQXBCLENBcEJGO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEseUJBcUJtQmxCLGVBQUttQixXQUFMLEVBckJuQjs7QUFBQTtBQXFCTUMsc0JBckJOOztBQXNCQSx1QkFBS04sT0FBTCxDQUFhQyxVQUFiLENBQXdCSCxRQUF4QixHQUFtQ1EsS0FBS1IsUUFBeEM7QUFDSWQsc0JBdkJKLEdBdUJVdUIsa0JBQVUsa0JBdkJwQjtBQXdCTUMsMEJBeEJOLEdBd0JnQixFQUFDLE1BQUssS0FBS1IsT0FBTCxDQUFhQyxVQUFiLENBQXdCUSxJQUF4QixDQUE2QkMsRUFBbkMsRUFBdUMsUUFBUUosS0FBS1IsUUFBTCxDQUFjYSxRQUE3RCxFQUF1RSxVQUFVTCxLQUFLUixRQUFMLENBQWNjLFNBQS9GLEVBQTBHLFVBQVVOLEtBQUtSLFFBQUwsQ0FBY2UsTUFBbEksRUF4QmhCO0FBQUE7QUFBQSx5QkF5Qk1DLGtCQUFJQyxJQUFKLENBQVMvQixJQUFULEVBQWN3QixRQUFkLEVBQXVCUSxLQUF2QixDQUE2QixVQUFDQyxHQUFELEVBQU87QUFDeEN6Qiw0QkFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9Dd0IsSUFBSTVDLElBQXhDO0FBQThDLG1CQUQxQyxDQXpCTjs7QUFBQTtBQTJCQSx1QkFBSzJCLE9BQUwsQ0FBYUMsVUFBYixDQUF3QlEsSUFBeEIsQ0FBNkJTLElBQTdCLEdBQW9DWixLQUFLUixRQUFMLENBQWNhLFFBQWxEO0FBQ0EsdUJBQUtYLE9BQUwsQ0FBYUMsVUFBYixDQUF3QlEsSUFBeEIsQ0FBNkJVLE1BQTdCLEdBQXNDYixLQUFLUixRQUFMLENBQWNjLFNBQXBEOztBQTVCQTtBQWdDRjVCLHFCQWhDRSxHQWdDSXVCLGtCQUFVLGlCQWhDZDtBQWlDQUMseUJBakNBLEdBaUNVLEVBQUMsVUFBUyxLQUFLUixPQUFMLENBQWFDLFVBQWIsQ0FBd0JRLElBQXhCLENBQTZCQyxFQUF2QyxFQUEyQyxZQUFZLEtBQUtoQyxRQUE1RCxFQUFzRSxhQUFhLEtBQUtELFNBQXhGLEVBQW1HLFVBQVUsS0FBS0QsWUFBbEgsRUFBZ0ksZUFBYyxLQUFLRixPQUFuSixFQUE0SixVQUFVLEtBQUswQixPQUFMLENBQWFDLFVBQWIsQ0FBd0JRLElBQXhCLENBQTZCVSxNQUFuTSxFQWpDVjtBQUFBO0FBQUEseUJBa0NBTCxrQkFBSUMsSUFBSixDQUFTL0IsR0FBVCxFQUFjd0IsT0FBZCxFQUF1QlEsS0FBdkIsQ0FBNkIsVUFBQ0MsR0FBRCxFQUFPO0FBQ3hDekIsNEJBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ3dCLElBQUk1QyxJQUF4QztBQUE4QyxtQkFEMUMsQ0FsQ0E7O0FBQUE7QUFvQ05TLHFCQUFHc0MsU0FBSCxDQUFhLEVBQUNwQyxLQUFLLGNBQU4sRUFBYjs7QUFwQ007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7NEZBMUJHYSxDOzs7OztBQUNYTCx3QkFBUUMsR0FBUixDQUFZSSxDQUFaO0FBQ0Esb0JBQUdBLEVBQUVuQixRQUFGLElBQWNtQixFQUFFcEIsU0FBbkIsRUFBNkI7QUFDM0IsdUJBQUtDLFFBQUwsR0FBZ0JtQixFQUFFbkIsUUFBbEI7QUFDQSx1QkFBS0QsU0FBTCxHQUFpQm9CLEVBQUVwQixTQUFuQjtBQUNEO0FBQ0Qsb0JBQUdvQixFQUFFckIsWUFBTCxFQUFrQjtBQUNoQix1QkFBS0EsWUFBTCxHQUFvQnFCLEVBQUVyQixZQUF0QjtBQUNEO0FBQ0QscUJBQUtGLE9BQUwsR0FBZSxLQUFLMEIsT0FBTCxDQUFhQyxVQUFiLENBQXdCUSxJQUF4QixDQUE2QlMsSUFBN0IsR0FBbUMsT0FBbEQ7O3VCQUNNLEtBQUtHLGlCQUFMLENBQXVCeEIsRUFBRW5CLFFBQXpCLEVBQWtDbUIsRUFBRXBCLFNBQXBDLEM7OztBQUNOLHFCQUFLa0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFFc0JqQixRLEVBQVVELFM7Ozs7OztBQUUxQk8sbUIseURBQTBETixRLFNBQVlELFMsYUFBaUI2QyxpQjs7dUJBQzNFcEMsZUFBS3FDLE9BQUwsQ0FBYSxFQUFDdkMsS0FBS0EsR0FBTixFQUFXd0MsUUFBUSxLQUFuQixFQUFiLEVBQXdDUixLQUF4QyxDQUE4QyxVQUFDQyxHQUFELEVBQU87QUFDckV6QiwwQkFBUUMsR0FBUixDQUFZLFVBQVosRUFBdUJ3QixJQUFJNUMsSUFBM0I7QUFDQSx5QkFBTyxFQUFQO0FBQ0QsaUJBSGlCLEM7OztBQUFaa0IsbUI7O0FBSU5DLHdCQUFRQyxHQUFSLENBQVlGLElBQUlsQixJQUFKLENBQVNvRCxNQUFyQjtBQUNBLHFCQUFLbEQsSUFBTCxHQUFZZ0IsSUFBSWxCLElBQUosQ0FBU29ELE1BQVQsQ0FBZ0JDLE9BQWhCLENBQXdCbkQsSUFBcEM7QUFDQSxvQkFBRyxDQUFDLEtBQUtDLFlBQVQsRUFBdUI7QUFDckIsdUJBQUtBLFlBQUwsR0FBb0JlLElBQUlsQixJQUFKLENBQVNvRCxNQUFULENBQWdCRSxpQkFBaEIsQ0FBa0NDLFdBQWxDLENBQThDQyxLQUFsRTtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcEMrQjNDLGVBQUs0QyxJOztrQkFBcEI1RCxNIiwiZmlsZSI6Im9jY3VweS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHJlcSBmcm9tICdAL25ldHdvcmsnXHJcbiAgaW1wb3J0IHsgYmFzZVVybCwgdHhNYXBzS2V5fSBmcm9tICdAL2NvbmZpZydcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBPY2N1cHkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Laz6L+55Y2g6aKGJ1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgY29udGVudDonJyxcclxuICAgICAgY2l0eTonJyxcclxuICAgICAgbG9jYXRpb25OYW1lOicnLFxyXG4gICAgICBsb25naXR1ZGU6JycsXHJcbiAgICAgIGxhdGl0dWRlOicnLFxyXG4gICAgICBpbWFnZVVybDonL3N0YXRpYy9pbWFnZXMvaWNfbWVudV90b3BpY19ub3IucG5nJ1xyXG4gICAgfVxyXG4gICAgYXN5bmMgb25Mb2FkKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgaWYoZS5sYXRpdHVkZSAmJiBlLmxvbmdpdHVkZSl7XHJcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IGUubGF0aXR1ZGU7XHJcbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBlLmxvbmdpdHVkZTtcclxuICAgICAgfVxyXG4gICAgICBpZihlLmxvY2F0aW9uTmFtZSl7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbk5hbWUgPSBlLmxvY2F0aW9uTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIubmFtZSArJ+WIsOatpOS4gOa4uO+8gSc7XHJcbiAgICAgIGF3YWl0IHRoaXMuZ2V0Q2l0eU5hbWVGcm9tVFgoZS5sYXRpdHVkZSxlLmxvbmdpdHVkZSk7XHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRDaXR5TmFtZUZyb21UWChsYXRpdHVkZSwgbG9uZ2l0dWRlKSB7XHJcblxyXG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGlzLm1hcC5xcS5jb20vd3MvZ2VvY29kZXIvdjEvP2xvY2F0aW9uPSR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfSZrZXk9JHt0eE1hcHNLZXl9YDtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHt1cmw6IHVybCwgbWV0aG9kOiAnR0VUJ30pLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvci4uLlwiLGVyci5kYXRhKTtcclxuICAgICAgICByZXR1cm4ge31cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLnJlc3VsdCk7XHJcbiAgICAgIHRoaXMuY2l0eSA9IHJlcy5kYXRhLnJlc3VsdC5hZF9pbmZvLmNpdHk7XHJcbiAgICAgIGlmKCF0aGlzLmxvY2F0aW9uTmFtZSkge1xyXG4gICAgICAgIHRoaXMubG9jYXRpb25OYW1lID0gcmVzLmRhdGEucmVzdWx0LmFkZHJlc3NfcmVmZXJlbmNlLmZhbW91c19hcmVhLnRpdGxlO1xyXG4gICAgICB9IFxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDogJy9wYWdlcy9pbmRleCd9KVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyB1cGxvYWRQaG90bygpe1xyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcclxuICAgICAgICAgIGNvdW50OiAxLFxyXG4gICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxyXG4gICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZW1wRmlsZVBhdGhzPT09PT09PT09PT09PT1cIixyZXMudGVtcEZpbGVQYXRoc1swXSk7XHJcbiAgICAgICAgdGhpcy5pbWFnZVVybCA9IHJlcy50ZW1wRmlsZVBhdGhzWzBdO1xyXG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGNvbmZpcm0oZSkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm87XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlckluZm8pXHJcbiAgICAgICAgaWYgKHVzZXJJbmZvKSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmcgPSBhd2FpdCB3ZXB5LmdldFNldHRpbmcoKVxyXG4gICAgICAgICAgICBpZiAoc2V0dGluZy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGluZm8udXNlckluZm9cclxuICAgICAgICAgICAgICBsZXQgdXJsID0gYmFzZVVybCArICcvYXV0aC91cGRhdGVVc2VyJ1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNldERhdGEgPSB7J2lkJzp0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyLmlkLCAnbmFtZSc6IGluZm8udXNlckluZm8ubmlja05hbWUsICdhdmF0YXInOiBpbmZvLnVzZXJJbmZvLmF2YXRhclVybCwgJ2dlbmRlcic6IGluZm8udXNlckluZm8uZ2VuZGVyfVxyXG4gICAgICAgICAgICAgIGF3YWl0IHJlcS5wb3N0KHVybCwgc2V0RGF0YSkuY2F0Y2goKGVycik9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlQXZhdGFyRXJyb3IuLi5cIiwgZXJyLmRhdGEpfSlcclxuICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyLm5hbWUgPSBpbmZvLnVzZXJJbmZvLm5pY2tOYW1lO1xyXG4gICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIuYXZhdGFyID0gaW5mby51c2VySW5mby5hdmF0YXJVcmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHVybCA9IGJhc2VVcmwgKyAnL3RyYWNlL2FkZFRyYWNlJztcclxuICAgICAgICBjb25zdCBzZXREYXRhID0geyd1c2VySWQnOnRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIuaWQsICdsYXRpdHVkZSc6IHRoaXMubGF0aXR1ZGUsICdsb25naXR1ZGUnOiB0aGlzLmxvbmdpdHVkZSwgJ3NjZW5pYyc6IHRoaXMubG9jYXRpb25OYW1lLCAnZGVjbGFyYXRpb24nOnRoaXMuY29udGVudCwgJ2F2YXRhcic6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIuYXZhdGFyICB9XHJcbiAgICAgICAgYXdhaXQgcmVxLnBvc3QodXJsLCBzZXREYXRhKS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVBdmF0YXJFcnJvci4uLlwiLCBlcnIuZGF0YSl9KSAgIFxyXG4gICAgICAgIHd4LnN3aXRjaFRhYih7dXJsOiAnL3BhZ2VzL2luZGV4J30pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==