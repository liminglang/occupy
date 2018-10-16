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
      imageUrl: '/static/images/ic_menu_topic_nor.png',
      imgbox: []
    }, _this.methods = {
      startGame: function startGame() {
        wx.navigateTo({ url: '/pages/index' });
      },
      uploadPhoto: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
          var _this2 = this;

          var self;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  self = this;

                  wx.showActionSheet({
                    itemList: ['从相册中选择', '拍照'],
                    success: function () {
                      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                        var imgbox, picid, that, n, _res;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (res.cancel) {
                                  _context.next = 14;
                                  break;
                                }

                                imgbox = self.imgbox;

                                console.log(imgbox);
                                picid = e.currentTarget.dataset.pic;

                                console.log(picid);
                                that = _this2;
                                n = 9;

                                if (9 > imgbox.length > 0) {
                                  n = 9 - imgbox.length;
                                } else if (imgbox.length == 9) {
                                  n = 1;
                                }
                                _context.next = 10;
                                return _wepy2.default.chooseImage({
                                  count: n,
                                  sizeType: ['original', 'compressed'],
                                  sourceType: ['album', 'camera']
                                });

                              case 10:
                                _res = _context.sent;

                                if (imgbox.length == 0) {
                                  imgbox = _res.tempFilePaths;
                                } else if (9 > imgbox.length) {
                                  imgbox = imgbox.concat(_res.tempFilePaths);
                                } else {
                                  imgbox[picid] = _res.tempFilePaths[0];
                                }
                                self.imgbox = imgbox;
                                self.$apply();

                              case 14:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        }, _callee, _this2);
                      }));

                      function success(_x2) {
                        return _ref3.apply(this, arguments);
                      }

                      return success;
                    }()
                  });
                  this.$apply();

                case 3:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function uploadPhoto(_x) {
          return _ref2.apply(this, arguments);
        }

        return uploadPhoto;
      }(),
      imgDelete: function imgDelete(e) {
        var index = e.currentTarget.dataset.deindex;
        this.imgbox.splice(index, 1);
        this.$apply();
      },
      confirm: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
          var userInfo, setting, info, _url, _setData, url, setData;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  userInfo = e.detail.userInfo;

                  console.log(userInfo);

                  if (!userInfo) {
                    _context3.next = 18;
                    break;
                  }

                  if (this.$parent.globalData.userInfo) {
                    _context3.next = 18;
                    break;
                  }

                  _context3.next = 6;
                  return _wepy2.default.getSetting();

                case 6:
                  setting = _context3.sent;

                  if (!setting.authSetting['scope.userInfo']) {
                    _context3.next = 18;
                    break;
                  }

                  _context3.next = 10;
                  return _wepy2.default.getUserInfo();

                case 10:
                  info = _context3.sent;

                  this.$parent.globalData.userInfo = info.userInfo;
                  _url = _config.baseUrl + '/auth/updateUser';
                  _setData = { 'id': this.$parent.globalData.user.id, 'name': info.userInfo.nickName, 'avatar': info.userInfo.avatarUrl, 'gender': info.userInfo.gender };
                  _context3.next = 16;
                  return _network2.default.post(_url, _setData).catch(function (err) {
                    console.log("updateAvatarError...", err.data);
                  });

                case 16:
                  this.$parent.globalData.user.name = info.userInfo.nickName;
                  this.$parent.globalData.user.avatar = info.userInfo.avatarUrl;

                case 18:
                  url = _config.baseUrl + '/trace/addTrace';
                  setData = { 'userId': this.$parent.globalData.user.id, 'latitude': this.latitude, 'longitude': this.longitude, 'scenic': this.locationName, 'declaration': this.content };
                  _context3.next = 22;
                  return _network2.default.post(url, setData).catch(function (err) {
                    console.log("updateAvatarError...", err.data);
                  });

                case 22:
                  wx.switchTab({ url: '/pages/index' });

                case 23:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function confirm(_x3) {
          return _ref4.apply(this, arguments);
        }

        return confirm;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Occupy, [{
    key: 'onLoad',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
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
                _context4.next = 6;
                return this.getCityNameFromTX(e.latitude, e.longitude);

              case 6:
                this.$apply();

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onLoad(_x4) {
        return _ref5.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'getCityNameFromTX',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(latitude, longitude) {
        var url, res;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                url = 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude + ',' + longitude + '&key=' + _config.txMapsKey;
                _context5.next = 3;
                return _wepy2.default.request({ url: url, method: 'GET' }).catch(function (err) {
                  console.log("error...", err.data);
                  return {};
                });

              case 3:
                res = _context5.sent;

                console.log(res.data.result);
                this.city = res.data.result.ad_info.city;
                if (!this.locationName) {
                  this.locationName = res.data.result.address_reference.famous_area.title;
                }

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getCityNameFromTX(_x5, _x6) {
        return _ref6.apply(this, arguments);
      }

      return getCityNameFromTX;
    }()
  }]);

  return Occupy;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Occupy , 'pages/occupy'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9jY3VweS5qcyJdLCJuYW1lcyI6WyJPY2N1cHkiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNvbnRlbnQiLCJjaXR5IiwibG9jYXRpb25OYW1lIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJpbWFnZVVybCIsImltZ2JveCIsIm1ldGhvZHMiLCJzdGFydEdhbWUiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ1cGxvYWRQaG90byIsImUiLCJzZWxmIiwic2hvd0FjdGlvblNoZWV0IiwiaXRlbUxpc3QiLCJzdWNjZXNzIiwicmVzIiwiY2FuY2VsIiwiY29uc29sZSIsImxvZyIsInBpY2lkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJwaWMiLCJ0aGF0IiwibiIsImxlbmd0aCIsIndlcHkiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwidGVtcEZpbGVQYXRocyIsImNvbmNhdCIsIiRhcHBseSIsImltZ0RlbGV0ZSIsImluZGV4IiwiZGVpbmRleCIsInNwbGljZSIsImNvbmZpcm0iLCJ1c2VySW5mbyIsImRldGFpbCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiZ2V0U2V0dGluZyIsInNldHRpbmciLCJhdXRoU2V0dGluZyIsImdldFVzZXJJbmZvIiwiaW5mbyIsImJhc2VVcmwiLCJzZXREYXRhIiwidXNlciIsImlkIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJnZW5kZXIiLCJyZXEiLCJwb3N0IiwiY2F0Y2giLCJlcnIiLCJuYW1lIiwiYXZhdGFyIiwic3dpdGNoVGFiIiwiZ2V0Q2l0eU5hbWVGcm9tVFgiLCJ0eE1hcHNLZXkiLCJyZXF1ZXN0IiwibWV0aG9kIiwicmVzdWx0IiwiYWRfaW5mbyIsImFkZHJlc3NfcmVmZXJlbmNlIiwiZmFtb3VzX2FyZWEiLCJ0aXRsZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7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QUtpQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQUVzQmhDLFEsRUFBVUQsUzs7Ozs7O0FBRTFCUSxtQix5REFBMERQLFEsU0FBWUQsUyxhQUFpQitELGlCOzt1QkFDM0VyQyxlQUFLc0MsT0FBTCxDQUFhLEVBQUN4RCxLQUFLQSxHQUFOLEVBQVd5RCxRQUFRLEtBQW5CLEVBQWIsRUFBd0NSLEtBQXhDLENBQThDLFVBQUNDLEdBQUQsRUFBTztBQUNyRXpDLDBCQUFRQyxHQUFSLENBQVksVUFBWixFQUF1QndDLElBQUk5RCxJQUEzQjtBQUNBLHlCQUFPLEVBQVA7QUFDRCxpQkFIaUIsQzs7O0FBQVptQixtQjs7QUFJTkUsd0JBQVFDLEdBQVIsQ0FBWUgsSUFBSW5CLElBQUosQ0FBU3NFLE1BQXJCO0FBQ0EscUJBQUtwRSxJQUFMLEdBQVlpQixJQUFJbkIsSUFBSixDQUFTc0UsTUFBVCxDQUFnQkMsT0FBaEIsQ0FBd0JyRSxJQUFwQztBQUNBLG9CQUFHLENBQUMsS0FBS0MsWUFBVCxFQUF1QjtBQUNyQix1QkFBS0EsWUFBTCxHQUFvQmdCLElBQUluQixJQUFKLENBQVNzRSxNQUFULENBQWdCRSxpQkFBaEIsQ0FBa0NDLFdBQWxDLENBQThDQyxLQUFsRTtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBckMrQjVDLGVBQUs2QyxJOztrQkFBcEI5RSxNIiwiZmlsZSI6Im9jY3VweS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHJlcSBmcm9tICdAL25ldHdvcmsnXHJcbiAgaW1wb3J0IHsgYmFzZVVybCwgdHhNYXBzS2V5fSBmcm9tICdAL2NvbmZpZydcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBPY2N1cHkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Laz6L+55Y2g6aKGJ1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgY29udGVudDonJyxcclxuICAgICAgY2l0eTonJyxcclxuICAgICAgbG9jYXRpb25OYW1lOicnLFxyXG4gICAgICBsb25naXR1ZGU6JycsXHJcbiAgICAgIGxhdGl0dWRlOicnLFxyXG4gICAgICBpbWFnZVVybDonL3N0YXRpYy9pbWFnZXMvaWNfbWVudV90b3BpY19ub3IucG5nJyxcclxuICAgICAgaW1nYm94OltdXHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkxvYWQoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICBpZihlLmxhdGl0dWRlICYmIGUubG9uZ2l0dWRlKXtcclxuICAgICAgICB0aGlzLmxhdGl0dWRlID0gZS5sYXRpdHVkZTtcclxuICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IGUubG9uZ2l0dWRlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGUubG9jYXRpb25OYW1lKXtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uTmFtZSA9IGUubG9jYXRpb25OYW1lXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlci5uYW1lICsn5Yiw5q2k5LiA5ri477yBJztcclxuICAgICAgYXdhaXQgdGhpcy5nZXRDaXR5TmFtZUZyb21UWChlLmxhdGl0dWRlLGUubG9uZ2l0dWRlKTtcclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGdldENpdHlOYW1lRnJvbVRYKGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcclxuXHJcbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaXMubWFwLnFxLmNvbS93cy9nZW9jb2Rlci92MS8/bG9jYXRpb249JHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9JmtleT0ke3R4TWFwc0tleX1gO1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe3VybDogdXJsLCBtZXRob2Q6ICdHRVQnfSkuY2F0Y2goKGVycik9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLi4uXCIsZXJyLmRhdGEpO1xyXG4gICAgICAgIHJldHVybiB7fVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEucmVzdWx0KTtcclxuICAgICAgdGhpcy5jaXR5ID0gcmVzLmRhdGEucmVzdWx0LmFkX2luZm8uY2l0eTtcclxuICAgICAgaWYoIXRoaXMubG9jYXRpb25OYW1lKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbk5hbWUgPSByZXMuZGF0YS5yZXN1bHQuYWRkcmVzc19yZWZlcmVuY2UuZmFtb3VzX2FyZWEudGl0bGU7XHJcbiAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDogJy9wYWdlcy9pbmRleCd9KVxyXG4gICAgICB9LFxyXG4gICAgICBcclxuICAgICAgYXN5bmMgdXBsb2FkUGhvdG8oZSl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHd4LnNob3dBY3Rpb25TaGVldCh7XHJcbiAgICAgICAgICBpdGVtTGlzdDogWyfku47nm7jlhozkuK3pgInmi6knLCAn5ouN54WnJ10sXHJcbiAgICAgICAgICBzdWNjZXNzOiBhc3luYyAocmVzKT0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGltZ2JveCA9IHNlbGYuaW1nYm94O1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZ2JveClcclxuICAgICAgICAgICAgICB2YXIgcGljaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5waWM7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocGljaWQpXHJcbiAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgIHZhciBuID0gOTtcclxuICAgICAgICAgICAgICBpZiAoOSA+IGltZ2JveC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBuID0gOSAtIGltZ2JveC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbWdib3gubGVuZ3RoID09IDkpIHtcclxuICAgICAgICAgICAgICAgIG4gPSAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcclxuICAgICAgICAgICAgICAgIGNvdW50OiBuLFxyXG4gICAgICAgICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxyXG4gICAgICAgICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgaWYgKGltZ2JveC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaW1nYm94ID0gcmVzLnRlbXBGaWxlUGF0aHNcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKDkgPiBpbWdib3gubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdib3ggPSBpbWdib3guY29uY2F0KHJlcy50ZW1wRmlsZVBhdGhzKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW1nYm94W3BpY2lkXSA9IHJlcy50ZW1wRmlsZVBhdGhzWzBdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBzZWxmLmltZ2JveCA9IGltZ2JveDtcclxuICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBcclxuICAgICAgaW1nRGVsZXRlKGUpe1xyXG4gICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmRlaW5kZXg7XHJcbiAgICAgICAgdGhpcy5pbWdib3guc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgYXN5bmMgY29uZmlybShlKSB7XHJcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mbztcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VySW5mbylcclxuICAgICAgICBpZiAodXNlckluZm8pIHtcclxuICAgICAgICAgIGlmICghdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZyA9IGF3YWl0IHdlcHkuZ2V0U2V0dGluZygpXHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5nLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG4gICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gaW5mby51c2VySW5mb1xyXG4gICAgICAgICAgICAgIGxldCB1cmwgPSBiYXNlVXJsICsgJy9hdXRoL3VwZGF0ZVVzZXInXHJcbiAgICAgICAgICAgICAgY29uc3Qgc2V0RGF0YSA9IHsnaWQnOnRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIuaWQsICduYW1lJzogaW5mby51c2VySW5mby5uaWNrTmFtZSwgJ2F2YXRhcic6IGluZm8udXNlckluZm8uYXZhdGFyVXJsLCAnZ2VuZGVyJzogaW5mby51c2VySW5mby5nZW5kZXJ9XHJcbiAgICAgICAgICAgICAgYXdhaXQgcmVxLnBvc3QodXJsLCBzZXREYXRhKS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVBdmF0YXJFcnJvci4uLlwiLCBlcnIuZGF0YSl9KVxyXG4gICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIubmFtZSA9IGluZm8udXNlckluZm8ubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlci5hdmF0YXIgPSBpbmZvLnVzZXJJbmZvLmF2YXRhclVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdXJsID0gYmFzZVVybCArICcvdHJhY2UvYWRkVHJhY2UnO1xyXG4gICAgICAgIGNvbnN0IHNldERhdGEgPSB7J3VzZXJJZCc6dGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlci5pZCwgJ2xhdGl0dWRlJzogdGhpcy5sYXRpdHVkZSwgJ2xvbmdpdHVkZSc6IHRoaXMubG9uZ2l0dWRlLCAnc2NlbmljJzogdGhpcy5sb2NhdGlvbk5hbWUsICdkZWNsYXJhdGlvbic6dGhpcy5jb250ZW50fVxyXG4gICAgICAgIGF3YWl0IHJlcS5wb3N0KHVybCwgc2V0RGF0YSkuY2F0Y2goKGVycik9PntcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlQXZhdGFyRXJyb3IuLi5cIiwgZXJyLmRhdGEpfSkgICBcclxuICAgICAgICB3eC5zd2l0Y2hUYWIoe3VybDogJy9wYWdlcy9pbmRleCd9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=