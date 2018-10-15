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

var _underscore = require('./../npm/underscore/underscore.js');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '足迹占领'
    }, _this.data = {
      isOccupied: false,
      imageUrl: '',
      height: 1000,
      scale: 16,
      latitude: 0,
      longitude: 0,
      markers: [{ //markers的第一个数据永远是当前位置，其他的数据来自trace表
        iconPath: '',
        id: 0,
        name: '卧槽',
        latitude: '',
        longitude: '',
        width: 30,
        height: 30,
        traceIds: [],
        avatars: []
      }],
      controls: [{
        id: 1,
        iconPath: '/static/images/jia.jpg',
        position: {
          left: 0,
          top: 300 - 30,
          width: 30,
          height: 30
        },
        clickable: true
      }, {
        id: 2,
        iconPath: '/static/images/jian.jpg',
        position: {
          left: 0,
          top: 330 - 30,
          width: 30,
          height: 30
        },
        clickable: true
      }],
      range_x: 0,
      range_y: 0,
      isDisplay: true,
      buttonContent: '不显示占领者'
    }, _this.methods = {
      startGame: function startGame() {
        wx.switchTab({ url: '/pages/ablum' });
      },
      userLogin: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var userInfo, setting, info, url, setData;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  userInfo = e.detail.userInfo;

                  console.log(userInfo);

                  if (!userInfo) {
                    _context.next = 21;
                    break;
                  }

                  if (this.$parent.globalData.userInfo) {
                    _context.next = 20;
                    break;
                  }

                  _context.next = 6;
                  return _wepy2.default.getSetting();

                case 6:
                  setting = _context.sent;

                  if (!setting.authSetting['scope.userInfo']) {
                    _context.next = 18;
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
                  this.$parent.globalData.user.name = info.userInfo.nickName;
                  this.$parent.globalData.user.avatar = info.userInfo.avatarUrl;

                case 18:
                  _context.next = 21;
                  break;

                case 20:
                  wx.switchTab({ url: '/pages/ablum' });

                case 21:
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
      }(),
      getCenterLocation: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.getCenterLocation();

                case 2:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function getCenterLocation() {
          return _ref3.apply(this, arguments);
        }

        return getCenterLocation;
      }(),
      disPlay: function disPlay() {
        if (this.isDisplay) {
          this.isDisplay = false;
          this.buttonContent = '显示占领者';
        } else {
          this.isDisplay = true;
          this.buttonContent = '不显示占领者';
        }
        this.$apply();
        this.initMarkers();
        this.onLoad();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
        var location, self;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log("onload=======================");
                _context3.next = 3;
                return this.$parent.login(e);

              case 3:
                this.height = _wepy2.default.getSystemInfoSync().windowHeight;
                _context3.next = 6;
                return _wepy2.default.getLocation({
                  type: 'gcj02'
                });

              case 6:
                location = _context3.sent;

                this.latitude = location.latitude;
                this.longitude = location.longitude;
                this.mapCtx = wx.createMapContext('map');
                this.mapCtx.moveToLocation();
                _context3.next = 13;
                return this.getRegion();

              case 13:
                this.$apply();
                console.log(this.latitude, this.longitude);
                // this.mapCtx = wx.createMapContext('map'); 
                // this.mapCtx.moveToLocation();

                //根据经纬度和userid去trace表中查找，当前位置我是否已经占领了，如果占领了，就显示头像，否则显示占领按钮
                this.isOccupied = true;
                self = this;

                if (this.isDisplay) {
                  setTimeout(function () {
                    self.getTraces();
                  }, 200);
                  setTimeout(function () {
                    self.drawAvatar(self.markers);
                  }, 1000);
                }
                this.$apply();

              case 19:
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
    key: 'onShow',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onShow(_x3) {
        return _ref5.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'updated',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log(e.type);
                if (e.type == 'end') {
                  //  await this.getCenterLocation();
                  //  await this.getTraces();
                  //  await this.drawAvatar(this.markers);
                }
                this.$apply();

              case 3:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function updated(_x4) {
        return _ref6.apply(this, arguments);
      }

      return updated;
    }()
  }, {
    key: 'markertap',
    value: function markertap(e) {
      console.log(666666666666666);
      if (this.isOccupied) {
        if (this.markers[e.markerId].traceIds.length == 1) {
          wx.navigateTo({ url: '/pages/traceshow?traceId=' + this.markers[e.markerId].traceIds[0] });
        } else {
          wx.navigateTo({ url: '/pages/tracelist?latitude=' + this.markers[e.markerId].latitude + '&longitude=' + this.markers[e.markerId].longitude + '&scenic=' + this.markers[e.markerId].name });
        }
      } else {
        wx.navigateTo({ url: '/pages/occupy?latitude=' + this.latitude + '&longitude=' + this.longitude });
      }
    }
  }, {
    key: 'controltap',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                console.log(e.controlId);
                if (e.controlId == 1) {
                  this.scale = this.scale + 1;
                } else {
                  this.scale = this.scale - 1;
                }
                _context6.next = 4;
                return this.getRegion();

              case 4:
                this.$apply();

              case 5:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function controltap(_x5) {
        return _ref7.apply(this, arguments);
      }

      return controltap;
    }()
  }, {
    key: 'getCenterLocation',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var self;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                self = this;
                _context7.next = 3;
                return this.mapCtx.getCenterLocation({
                  success: function success(res) {
                    self.latitude = res.latitude;
                    self.longitude = res.longitude;
                    console.log("res-------------------", res);
                    self.$apply();
                  }
                });

              case 3:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getCenterLocation() {
        return _ref8.apply(this, arguments);
      }

      return getCenterLocation;
    }()
  }, {
    key: 'getRegion',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var self;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                self = this;
                _context8.next = 3;
                return this.mapCtx.getRegion({
                  success: function success(res) {
                    self.range_x = res.northeast.latitude;
                    self.range_y = res.northeast.longitude;
                    self.$apply();
                    console.log("region======1111", self.range_x, self.range_y);
                  }
                });

              case 3:
                console.log("region======", this.range_x, this.range_y);

              case 4:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getRegion() {
        return _ref9.apply(this, arguments);
      }

      return getRegion;
    }()
  }, {
    key: 'initMarkers',
    value: function initMarkers() {
      this.markers = [];
      this.$apply();
      this.markers.push({ //markers的第一个数据永远是当前位置，其他的数据来自trace表
        iconPath: "",
        id: 0,
        name: '卧槽',
        latitude: this.latitude,
        longitude: this.longitude,
        width: 30,
        height: 30,
        traceIds: [],
        avatars: []
      });
      if (this.isOccupied) {
        this.markers[0].avatars.push('https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLPlaI4hfpwT2x1ePByeZibSl3snWZGNIhLGJ2Z39E7ea4v36rjP5xI7GZVBllHCAGtm8KpPdxoyWg/132');
      }
      this.$apply();
    }
  }, {
    key: 'getTraces',
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var url, traces, data, scenices, k, i, marker;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.initMarkers();
                //  await this.getCenterLocation();
                if (this.range_x >= 1 || this.range_y >= 1) {
                  this.range_x = this.range_x - this.latitude;
                  this.range_y = this.range_y - this.longitude;
                  this.$apply();
                }
                url = _config.baseUrl + ('/trace/getTraces?latitude=' + this.latitude + '&longitude=' + this.longitude + '&range_x=' + this.range_x + '&range_y=' + this.range_y);
                //console.log(this.latitude,this.longitude,this.range_x,this.range_y)

                _context9.next = 5;
                return _network2.default.get(url).catch(function (err) {
                  console.log("updateAvatarError...", err.data);
                });

              case 5:
                traces = _context9.sent;

                if (traces.data) {
                  data = traces.data.data;
                  scenices = _underscore2.default.groupBy(data, function (obj) {
                    return obj.scenic;
                  });

                  console.log("scenices==============", scenices);
                  k = 0;

                  for (i in scenices) {
                    marker = {};

                    k = k + 1;
                    marker['id'] = k;
                    marker['latitude'] = scenices[i][0].latitude;
                    marker['longitude'] = scenices[i][0].longitude;
                    marker['width'] = 30;
                    marker['height'] = 30;
                    marker['name'] = i;
                    marker['traceIds'] = _underscore2.default.pluck(scenices[i], 'id');
                    marker['avatars'] = _underscore2.default.pluck(scenices[i], 'avatar');
                    this.markers.push(marker);
                  }
                }
                // await this.drawAvatar(this.markers);
                this.$apply();

              case 8:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getTraces() {
        return _ref10.apply(this, arguments);
      }

      return getTraces;
    }()
  }, {
    key: 'drawAvatar',
    value: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(markers) {
        var _this2 = this;

        var self, ctx, j, i;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                console.log("4444444444444", markers);
                self = this;
                ctx = _wepy2.default.createCanvasContext('myCanvas');

                ctx.beginPath();
                console.log(markers.length);
                for (j = 0; j < markers.length; j++) {
                  console.log(markers[j].avatars[0]);
                  for (i = 0; i < markers[j].avatars.length; i++) {
                    ctx.arc(15 + i * 30, 15 + j * 30, 15, 0, 2 * Math.PI);
                  }
                }
                ctx.clip();
                for (j = 0; j < markers.length; j++) {
                  for (i = 0; i < markers[j].avatars.length; i++) {
                    ctx.drawImage(markers[j].avatars[i], 0 + 30 * i, 30 * j, 30, 30);
                  }
                }
                ctx.save();
                ctx.draw(true, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                  var j, res, saveRes;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          j = 0;

                        case 1:
                          if (!(j < markers.length)) {
                            _context10.next = 15;
                            break;
                          }

                          _context10.next = 4;
                          return _wepy2.default.canvasToTempFilePath({
                            x: 0,
                            y: 30 * j,
                            width: 30 * markers[j].avatars.length,
                            height: 30,
                            destWidth: 30 * markers[j].avatars.length,
                            destHeight: 30,
                            canvasId: 'myCanvas',
                            fileType: 'jpeg'
                          });

                        case 4:
                          res = _context10.sent;

                          // if(markers[j].name=='市政府'){
                          console.log("res.tempFilePath===================", res.tempFilePath);
                          self.imageUrl = res.tempFilePath;
                          markers[j]['iconPath'] = res.tempFilePath;
                          _context10.next = 10;
                          return _wepy2.default.saveImageToPhotosAlbum({
                            filePath: res.tempFilePath
                          }).catch(function (err) {
                            return false;
                          });

                        case 10:
                          saveRes = _context10.sent;

                          if (saveRes) {
                            _wepy2.default.showToast({
                              title: "已保存至相册",
                              icon: "none"
                            });
                          }

                        case 12:
                          j++;
                          _context10.next = 1;
                          break;

                        case 15:
                        case 'end':
                          return _context10.stop();
                      }
                    }
                  }, _callee10, _this2);
                })));

                console.log("********************", this.markers);
                this.$apply();

              case 12:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function drawAvatar(_x6) {
        return _ref11.apply(this, arguments);
      }

      return drawAvatar;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpc09jY3VwaWVkIiwiaW1hZ2VVcmwiLCJoZWlnaHQiLCJzY2FsZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwibWFya2VycyIsImljb25QYXRoIiwiaWQiLCJuYW1lIiwid2lkdGgiLCJ0cmFjZUlkcyIsImF2YXRhcnMiLCJjb250cm9scyIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImNsaWNrYWJsZSIsInJhbmdlX3giLCJyYW5nZV95IiwiaXNEaXNwbGF5IiwiYnV0dG9uQ29udGVudCIsIm1ldGhvZHMiLCJzdGFydEdhbWUiLCJ3eCIsInN3aXRjaFRhYiIsInVybCIsInVzZXJMb2dpbiIsImUiLCJ1c2VySW5mbyIsImRldGFpbCIsImNvbnNvbGUiLCJsb2ciLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIndlcHkiLCJnZXRTZXR0aW5nIiwic2V0dGluZyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJpbmZvIiwiYmFzZVVybCIsInNldERhdGEiLCJ1c2VyIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJnZW5kZXIiLCJyZXEiLCJwb3N0IiwiY2F0Y2giLCJlcnIiLCJhdmF0YXIiLCJnZXRDZW50ZXJMb2NhdGlvbiIsImRpc1BsYXkiLCIkYXBwbHkiLCJpbml0TWFya2VycyIsIm9uTG9hZCIsImxvZ2luIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dIZWlnaHQiLCJnZXRMb2NhdGlvbiIsInR5cGUiLCJsb2NhdGlvbiIsIm1hcEN0eCIsImNyZWF0ZU1hcENvbnRleHQiLCJtb3ZlVG9Mb2NhdGlvbiIsImdldFJlZ2lvbiIsInNlbGYiLCJzZXRUaW1lb3V0IiwiZ2V0VHJhY2VzIiwiZHJhd0F2YXRhciIsIm1hcmtlcklkIiwibGVuZ3RoIiwibmF2aWdhdGVUbyIsImNvbnRyb2xJZCIsInN1Y2Nlc3MiLCJyZXMiLCJub3J0aGVhc3QiLCJwdXNoIiwiZ2V0IiwidHJhY2VzIiwic2NlbmljZXMiLCJfIiwiZ3JvdXBCeSIsIm9iaiIsInNjZW5pYyIsImsiLCJpIiwibWFya2VyIiwicGx1Y2siLCJjdHgiLCJjcmVhdGVDYW52YXNDb250ZXh0IiwiYmVnaW5QYXRoIiwiaiIsImFyYyIsIk1hdGgiLCJQSSIsImNsaXAiLCJkcmF3SW1hZ2UiLCJzYXZlIiwiZHJhdyIsImNhbnZhc1RvVGVtcEZpbGVQYXRoIiwieCIsInkiLCJkZXN0V2lkdGgiLCJkZXN0SGVpZ2h0IiwiY2FudmFzSWQiLCJmaWxlVHlwZSIsInRlbXBGaWxlUGF0aCIsInNhdmVJbWFnZVRvUGhvdG9zQWxidW0iLCJmaWxlUGF0aCIsInNhdmVSZXMiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQXlDVEMsSSxHQUFPO0FBQ0xDLGtCQUFXLEtBRE47QUFFTEMsZ0JBQVMsRUFGSjtBQUdMQyxjQUFPLElBSEY7QUFJTEMsYUFBTSxFQUpEO0FBS0xDLGdCQUFVLENBTEw7QUFNTEMsaUJBQVcsQ0FOTjtBQU9MQyxlQUFRLENBQUMsRUFBSztBQUNaQyxrQkFBVSxFQURIO0FBRVBDLFlBQUksQ0FGRztBQUdQQyxjQUFNLElBSEM7QUFJUEwsa0JBQVUsRUFKSDtBQUtQQyxtQkFBVyxFQUxKO0FBTVBLLGVBQU8sRUFOQTtBQU9QUixnQkFBUSxFQVBEO0FBUVBTLGtCQUFVLEVBUkg7QUFTUEMsaUJBQVM7QUFURixPQUFELENBUEg7QUFrQkxDLGdCQUFVLENBQUM7QUFDVEwsWUFBSSxDQURLO0FBRVRELGtCQUFVLHdCQUZEO0FBR1RPLGtCQUFVO0FBQ1ZDLGdCQUFNLENBREk7QUFFVkMsZUFBSyxNQUFNLEVBRkQ7QUFHVk4saUJBQU8sRUFI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LEVBTitCO0FBTzFDQyxzQ0FBVSxVQVBnQztBQVExQ0Msc0NBQVU7QUFSZ0MsMkJBQTFCLENBSFA7O0FBQUE7QUFHTC9CLDZCQUhLOztBQWFYO0FBQ0E3QyxrQ0FBUUMsR0FBUixDQUFZLHFDQUFaLEVBQWtENEMsSUFBSWdDLFlBQXREO0FBQ0F6QywrQkFBS2xFLFFBQUwsR0FBZ0IyRSxJQUFJZ0MsWUFBcEI7QUFDQXRHLGtDQUFRdUYsQ0FBUixFQUFXLFVBQVgsSUFBeUJqQixJQUFJZ0MsWUFBN0I7QUFoQlc7QUFBQSxpQ0FpQld6RSxlQUFLMEUsc0JBQUwsQ0FBNEI7QUFDaERDLHNDQUFVbEMsSUFBSWdDO0FBRGtDLDJCQUE1QixFQUVuQjNELEtBRm1CLENBRWIsVUFBQ0MsR0FBRCxFQUFPO0FBQ2QsbUNBQU8sS0FBUDtBQUNELDJCQUpxQixDQWpCWDs7QUFBQTtBQWlCTDZELGlDQWpCSzs7QUFzQlgsOEJBQUdBLE9BQUgsRUFBVztBQUNUNUUsMkNBQUs2RSxTQUFMLENBQWU7QUFDYkMscUNBQU8sUUFETTtBQUViQyxvQ0FBTTtBQUZPLDZCQUFmO0FBSUQ7O0FBM0JVO0FBRW9CckIsNkJBRnBCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZjs7QUErQkE5RCx3QkFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW1DLEtBQUsxQixPQUF4QztBQUNBLHFCQUFLZ0QsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhQK0JuQixlQUFLZ0YsSTs7a0JBQW5CdkgsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG4gIGltcG9ydCB7IGJhc2VVcmwsIGFwcElkfSBmcm9tICdAL2NvbmZpZydcclxuICBpbXBvcnQgcmVxIGZyb20gJ0AvbmV0d29yaydcclxuICBpbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i2s+i/ueWNoOmihidcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXN5bmMgb25Mb2FkKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvbmxvYWQ9PT09PT09PT09PT09PT09PT09PT09PVwiKVxyXG4gICAgICBhd2FpdCB0aGlzLiRwYXJlbnQubG9naW4oZSk7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodFxyXG4gICAgICBjb25zdCBsb2NhdGlvbiA9IGF3YWl0IHdlcHkuZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgICAgdHlwZTogJ2djajAyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxhdGl0dWRlID0gbG9jYXRpb24ubGF0aXR1ZGU7XHJcbiAgICAgIHRoaXMubG9uZ2l0dWRlID0gbG9jYXRpb24ubG9uZ2l0dWRlO1xyXG4gICAgICB0aGlzLm1hcEN0eCA9IHd4LmNyZWF0ZU1hcENvbnRleHQoJ21hcCcpOyBcclxuICAgICAgdGhpcy5tYXBDdHgubW92ZVRvTG9jYXRpb24oKTtcclxuICAgICAgYXdhaXQgdGhpcy5nZXRSZWdpb24oKTtcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmxhdGl0dWRlLHRoaXMubG9uZ2l0dWRlKVxyXG4gICAgICAvLyB0aGlzLm1hcEN0eCA9IHd4LmNyZWF0ZU1hcENvbnRleHQoJ21hcCcpOyBcclxuICAgICAgLy8gdGhpcy5tYXBDdHgubW92ZVRvTG9jYXRpb24oKTtcclxuICAgICAgXHJcbiAgICAgIC8v5qC55o2u57uP57qs5bqm5ZKMdXNlcmlk5Y67dHJhY2XooajkuK3mn6Xmib7vvIzlvZPliY3kvY3nva7miJHmmK/lkKblt7Lnu4/ljaDpoobkuobvvIzlpoLmnpzljaDpoobkuobvvIzlsLHmmL7npLrlpLTlg4/vvIzlkKbliJnmmL7npLrljaDpoobmjInpkq5cclxuICAgICAgdGhpcy5pc09jY3VwaWVkID0gdHJ1ZTtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBpZih0aGlzLmlzRGlzcGxheSl7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZWxmLmdldFRyYWNlcygpXHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xyXG4gICAgICAgICAgc2VsZi5kcmF3QXZhdGFyKHNlbGYubWFya2VycylcclxuICAgICAgICB9LDEwMDApO1xyXG4gICAgICB9ICAgICAgXHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25TaG93KGUpIHtcclxuICAgIC8vICB0aGlzLm1hcEN0eCA9IHd4LmNyZWF0ZU1hcENvbnRleHQoJ21hcCcpOyBcclxuICAgIC8vICB0aGlzLm1hcEN0eC5tb3ZlVG9Mb2NhdGlvbigpO1xyXG4gICAvLyAgIGNvbnNvbGUubG9nKFwib25zaG93PT09PT09PT09PT09PT09PT09PT09PVwiKVxyXG4gICAvLyAgIGF3YWl0IHRoaXMuZ2V0VHJhY2VzKCk7XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBpc09jY3VwaWVkOmZhbHNlLFxyXG4gICAgICBpbWFnZVVybDonJyxcclxuICAgICAgaGVpZ2h0OjEwMDAsXHJcbiAgICAgIHNjYWxlOjE2LFxyXG4gICAgICBsYXRpdHVkZTogMCxcclxuICAgICAgbG9uZ2l0dWRlOiAwLFxyXG4gICAgICBtYXJrZXJzOlt7ICAgIC8vbWFya2Vyc+eahOesrOS4gOS4quaVsOaNruawuOi/nOaYr+W9k+WJjeS9jee9ru+8jOWFtuS7lueahOaVsOaNruadpeiHqnRyYWNl6KGoXHJcbiAgICAgICAgaWNvblBhdGg6ICcnLFxyXG4gICAgICAgIGlkOiAwLFxyXG4gICAgICAgIG5hbWU6ICfljafmp70nLFxyXG4gICAgICAgIGxhdGl0dWRlOiAnJyxcclxuICAgICAgICBsb25naXR1ZGU6ICcnLFxyXG4gICAgICAgIHdpZHRoOiAzMCxcclxuICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgIHRyYWNlSWRzOiBbXSxcclxuICAgICAgICBhdmF0YXJzOiBbXVxyXG4gICAgICB9XSxcclxuICAgICAgY29udHJvbHM6IFt7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgaWNvblBhdGg6ICcvc3RhdGljL2ltYWdlcy9qaWEuanBnJyxcclxuICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgdG9wOiAzMDAgLSAzMCxcclxuICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgaGVpZ2h0OiAzMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBpY29uUGF0aDogJy9zdGF0aWMvaW1hZ2VzL2ppYW4uanBnJyxcclxuICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgdG9wOiAzMzAgLSAzMCxcclxuICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgaGVpZ2h0OiAzMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgcmFuZ2VfeDogMCxcclxuICAgICAgcmFuZ2VfeTogMCxcclxuICAgICAgaXNEaXNwbGF5OnRydWUsXHJcbiAgICAgIGJ1dHRvbkNvbnRlbnQ6J+S4jeaYvuekuuWNoOmihuiAhSdcclxuICAgIH1cclxuICAgIGFzeW5jIHVwZGF0ZWQoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLnR5cGUpXHJcbiAgICAgIGlmKGUudHlwZSA9PSAnZW5kJyl7XHJcbiAgICAgIC8vICBhd2FpdCB0aGlzLmdldENlbnRlckxvY2F0aW9uKCk7XHJcbiAgICAgIC8vICBhd2FpdCB0aGlzLmdldFRyYWNlcygpO1xyXG4gICAgICAvLyAgYXdhaXQgdGhpcy5kcmF3QXZhdGFyKHRoaXMubWFya2Vycyk7XHJcbiAgICAgIH0gICAgICBcclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuICAgIG1hcmtlcnRhcChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKDY2NjY2NjY2NjY2NjY2Nik7XHJcbiAgICAgIGlmKHRoaXMuaXNPY2N1cGllZCl7XHJcbiAgICAgICAgaWYodGhpcy5tYXJrZXJzW2UubWFya2VySWRdLnRyYWNlSWRzLmxlbmd0aD09MSl7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6IGAvcGFnZXMvdHJhY2VzaG93P3RyYWNlSWQ9JHt0aGlzLm1hcmtlcnNbZS5tYXJrZXJJZF0udHJhY2VJZHNbMF19YH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6IGAvcGFnZXMvdHJhY2VsaXN0P2xhdGl0dWRlPSR7dGhpcy5tYXJrZXJzW2UubWFya2VySWRdLmxhdGl0dWRlfSZsb25naXR1ZGU9JHt0aGlzLm1hcmtlcnNbZS5tYXJrZXJJZF0ubG9uZ2l0dWRlfSZzY2VuaWM9JHt0aGlzLm1hcmtlcnNbZS5tYXJrZXJJZF0ubmFtZX1gfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDogYC9wYWdlcy9vY2N1cHk/bGF0aXR1ZGU9JHt0aGlzLmxhdGl0dWRlfSZsb25naXR1ZGU9JHt0aGlzLmxvbmdpdHVkZX1gfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgY29udHJvbHRhcChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUuY29udHJvbElkKVxyXG4gICAgICBpZihlLmNvbnRyb2xJZCA9PSAxKXtcclxuICAgICAgICB0aGlzLnNjYWxlID0gdGhpcy5zY2FsZSArIDE7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLnNjYWxlIC0gMTtcclxuICAgICAgfVxyXG4gICAgICBhd2FpdCB0aGlzLmdldFJlZ2lvbigpO1xyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0Q2VudGVyTG9jYXRpb24oKXtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBhd2FpdCB0aGlzLm1hcEN0eC5nZXRDZW50ZXJMb2NhdGlvbih7XHJcbiAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgc2VsZi5sYXRpdHVkZSA9IHJlcy5sYXRpdHVkZTtcclxuICAgICAgICAgIHNlbGYubG9uZ2l0dWRlID0gcmVzLmxvbmdpdHVkZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzLS0tLS0tLS0tLS0tLS0tLS0tLVwiLHJlcylcclxuICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0UmVnaW9uKCl7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgYXdhaXQgdGhpcy5tYXBDdHguZ2V0UmVnaW9uKHtcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgc2VsZi5yYW5nZV94ID0gcmVzLm5vcnRoZWFzdC5sYXRpdHVkZTtcclxuICAgICAgICAgIHNlbGYucmFuZ2VfeSA9IHJlcy5ub3J0aGVhc3QubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVnaW9uPT09PT09MTExMVwiLHNlbGYucmFuZ2VfeCxzZWxmLnJhbmdlX3kpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJyZWdpb249PT09PT1cIix0aGlzLnJhbmdlX3gsdGhpcy5yYW5nZV95KVxyXG4gICAgfVxyXG4gICAgaW5pdE1hcmtlcnMoKXtcclxuICAgICAgdGhpcy5tYXJrZXJzID0gW11cclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgdGhpcy5tYXJrZXJzLnB1c2goXHJcbiAgICAgICAgeyAgICAvL21hcmtlcnPnmoTnrKzkuIDkuKrmlbDmja7msLjov5zmmK/lvZPliY3kvY3nva7vvIzlhbbku5bnmoTmlbDmja7mnaXoh6p0cmFjZeihqFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiXCIsXHJcbiAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgIG5hbWU6ICfljafmp70nLFxyXG4gICAgICAgICAgbGF0aXR1ZGU6IHRoaXMubGF0aXR1ZGUsXHJcbiAgICAgICAgICBsb25naXR1ZGU6IHRoaXMubG9uZ2l0dWRlLFxyXG4gICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICAgIHRyYWNlSWRzOiBbXSxcclxuICAgICAgICAgIGF2YXRhcnM6W11cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmKHRoaXMuaXNPY2N1cGllZCl7XHJcbiAgICAgICAgdGhpcy5tYXJrZXJzWzBdLmF2YXRhcnMucHVzaCgnaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTBqNFR3R1RmVExQbGFJNGhmcHdUMngxZVBCeWVaaWJTbDNzbldaR05JaExHSjJaMzlFN2VhNHYzNnJqUDV4STdHWlZCbGxIQ0FHdG04S3BQZHhveVdnLzEzMicpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGdldFRyYWNlcygpe1xyXG4gICAgICB0aGlzLmluaXRNYXJrZXJzKCk7XHJcbiAgICAvLyAgYXdhaXQgdGhpcy5nZXRDZW50ZXJMb2NhdGlvbigpO1xyXG4gICAgICBpZih0aGlzLnJhbmdlX3g+PTEgfHwgdGhpcy5yYW5nZV95Pj0xKXtcclxuICAgICAgICB0aGlzLnJhbmdlX3ggPSB0aGlzLnJhbmdlX3ggLSB0aGlzLmxhdGl0dWRlO1xyXG4gICAgICAgIHRoaXMucmFuZ2VfeSA9IHRoaXMucmFuZ2VfeSAtIHRoaXMubG9uZ2l0dWRlO1xyXG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHVybCA9IGJhc2VVcmwgKyBgL3RyYWNlL2dldFRyYWNlcz9sYXRpdHVkZT0ke3RoaXMubGF0aXR1ZGV9JmxvbmdpdHVkZT0ke3RoaXMubG9uZ2l0dWRlfSZyYW5nZV94PSR7dGhpcy5yYW5nZV94fSZyYW5nZV95PSR7dGhpcy5yYW5nZV95fWA7XHJcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5sYXRpdHVkZSx0aGlzLmxvbmdpdHVkZSx0aGlzLnJhbmdlX3gsdGhpcy5yYW5nZV95KVxyXG4gICAgICBjb25zdCB0cmFjZXMgPSBhd2FpdCByZXEuZ2V0KHVybCkuY2F0Y2goKGVycik9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZUF2YXRhckVycm9yLi4uXCIsIGVyci5kYXRhKX0pXHJcbiAgICAgIGlmICh0cmFjZXMuZGF0YSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gdHJhY2VzLmRhdGEuZGF0YTtcclxuICAgICAgICBsZXQgc2NlbmljZXMgPSBfLmdyb3VwQnkoZGF0YSxmdW5jdGlvbihvYmope3JldHVybiBvYmouc2NlbmljfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzY2VuaWNlcz09PT09PT09PT09PT09XCIsc2NlbmljZXMpXHJcbiAgICAgICAgbGV0IGsgPSAwO1xyXG4gICAgICAgIGZvcih2YXIgaSBpbiBzY2VuaWNlcykge1xyXG4gICAgICAgICAgbGV0IG1hcmtlciA9IHt9O1xyXG4gICAgICAgICAgayA9IGsgKyAxO1xyXG4gICAgICAgICAgbWFya2VyWydpZCddID0gaztcclxuICAgICAgICAgIG1hcmtlclsnbGF0aXR1ZGUnXSA9IHNjZW5pY2VzW2ldWzBdLmxhdGl0dWRlO1xyXG4gICAgICAgICAgbWFya2VyWydsb25naXR1ZGUnXSA9IHNjZW5pY2VzW2ldWzBdLmxvbmdpdHVkZTtcclxuICAgICAgICAgIG1hcmtlclsnd2lkdGgnXSA9IDMwO1xyXG4gICAgICAgICAgbWFya2VyWydoZWlnaHQnXSA9IDMwO1xyXG4gICAgICAgICAgbWFya2VyWyduYW1lJ10gPSBpO1xyXG4gICAgICAgICAgbWFya2VyWyd0cmFjZUlkcyddID0gXy5wbHVjayhzY2VuaWNlc1tpXSwgJ2lkJyk7XHJcbiAgICAgICAgICBtYXJrZXJbJ2F2YXRhcnMnXSA9IF8ucGx1Y2soc2NlbmljZXNbaV0sICdhdmF0YXInKTtcclxuICAgICAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgLy8gYXdhaXQgdGhpcy5kcmF3QXZhdGFyKHRoaXMubWFya2Vycyk7XHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBkcmF3QXZhdGFyKG1hcmtlcnMpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcIjQ0NDQ0NDQ0NDQ0NDRcIixtYXJrZXJzKVxyXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgY29uc3QgY3R4ID0gd2VweS5jcmVhdGVDYW52YXNDb250ZXh0KCdteUNhbnZhcycpO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKClcclxuICAgICAgY29uc29sZS5sb2cobWFya2Vycy5sZW5ndGgpXHJcbiAgICAgIGZvcih2YXIgaj0wOyBqIDwgbWFya2Vycy5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWFya2Vyc1tqXS5hdmF0YXJzWzBdKVxyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpIDwgbWFya2Vyc1tqXS5hdmF0YXJzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgIGN0eC5hcmMoMTUraSozMCwgMTUraiozMCwgMTUsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY3R4LmNsaXAoKTtcclxuICAgICAgZm9yKHZhciBqPTA7IGogPCBtYXJrZXJzLmxlbmd0aDsgaisrKXtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaSA8IG1hcmtlcnNbal0uYXZhdGFycy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKG1hcmtlcnNbal0uYXZhdGFyc1tpXSwgMCszMCppLCAzMCpqLCAzMCwgMzApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSAgICAgIFxyXG4gICAgICBjdHguc2F2ZSgpXHJcbiAgICAgIGN0eC5kcmF3KHRydWUsIGFzeW5jICgpPT57XHJcbiAgICAgICAgLy/nu5jliLbmlrnms5VcclxuICAgICAgICBmb3IodmFyIGo9MDsgaiA8IG1hcmtlcnMubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5jYW52YXNUb1RlbXBGaWxlUGF0aCh7XHJcbiAgICAgICAgICAgIHg6MCxcclxuICAgICAgICAgICAgeTozMCpqLFxyXG4gICAgICAgICAgICB3aWR0aDozMCptYXJrZXJzW2pdLmF2YXRhcnMubGVuZ3RoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6MzAsXHJcbiAgICAgICAgICAgIGRlc3RXaWR0aDozMCptYXJrZXJzW2pdLmF2YXRhcnMubGVuZ3RoLFxyXG4gICAgICAgICAgICBkZXN0SGVpZ2h0OjMwLFxyXG4gICAgICAgICAgICBjYW52YXNJZDogJ215Q2FudmFzJyxcclxuICAgICAgICAgICAgZmlsZVR5cGU6ICdqcGVnJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8gaWYobWFya2Vyc1tqXS5uYW1lPT0n5biC5pS/5bqcJyl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcy50ZW1wRmlsZVBhdGg9PT09PT09PT09PT09PT09PT09XCIscmVzLnRlbXBGaWxlUGF0aClcclxuICAgICAgICAgIHNlbGYuaW1hZ2VVcmwgPSByZXMudGVtcEZpbGVQYXRoXHJcbiAgICAgICAgICBtYXJrZXJzW2pdWydpY29uUGF0aCddID0gcmVzLnRlbXBGaWxlUGF0aFxyXG4gICAgICAgICAgY29uc3Qgc2F2ZVJlcyA9IGF3YWl0IHdlcHkuc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XHJcbiAgICAgICAgICAgIGZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoXHJcbiAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmKHNhdmVSZXMpe1xyXG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwi5bey5L+d5a2Y6Iez55u45YaMXCIsXHJcbiAgICAgICAgICAgICAgaWNvbjogXCJub25lXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgIFxyXG4gICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqXCIsdGhpcy5tYXJrZXJzKSBcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHd4LnN3aXRjaFRhYih7dXJsOiAnL3BhZ2VzL2FibHVtJ30pXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIHVzZXJMb2dpbihlKSB7XHJcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mbztcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VySW5mbylcclxuICAgICAgICBpZiAodXNlckluZm8pIHtcclxuICAgICAgICAgIGlmICghdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZyA9IGF3YWl0IHdlcHkuZ2V0U2V0dGluZygpXHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5nLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG4gICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gaW5mby51c2VySW5mb1xyXG4gICAgICAgICAgICAgIGxldCB1cmwgPSBiYXNlVXJsICsgJy9hdXRoL3VwZGF0ZVVzZXInXHJcbiAgICAgICAgICAgICAgY29uc3Qgc2V0RGF0YSA9IHsnaWQnOnRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIuaWQsICduYW1lJzogaW5mby51c2VySW5mby5uaWNrTmFtZSwgJ2F2YXRhcic6IGluZm8udXNlckluZm8uYXZhdGFyVXJsLCAnZ2VuZGVyJzogaW5mby51c2VySW5mby5nZW5kZXJ9XHJcbiAgICAgICAgICAgICAgYXdhaXQgcmVxLnBvc3QodXJsLCBzZXREYXRhKS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVBdmF0YXJFcnJvci4uLlwiLCBlcnIuZGF0YSl9KVxyXG4gICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIubmFtZSA9IGluZm8udXNlckluZm8ubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlci5hdmF0YXIgPSBpbmZvLnVzZXJJbmZvLmF2YXRhclVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgd3guc3dpdGNoVGFiKHt1cmw6ICcvcGFnZXMvYWJsdW0nfSlcclxuICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcclxuICAgICAgYXN5bmMgZ2V0Q2VudGVyTG9jYXRpb24oKXtcclxuICAgICAgICBhd2FpdCB0aGlzLmdldENlbnRlckxvY2F0aW9uKClcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGRpc1BsYXkoKXtcclxuICAgICAgICBpZih0aGlzLmlzRGlzcGxheSl7XHJcbiAgICAgICAgICB0aGlzLmlzRGlzcGxheSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5idXR0b25Db250ZW50ID0gJ+aYvuekuuWNoOmihuiAhSc7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLmlzRGlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmJ1dHRvbkNvbnRlbnQgPSAn5LiN5pi+56S65Y2g6aKG6ICFJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdE1hcmtlcnMoKTtcclxuICAgICAgICB0aGlzLm9uTG9hZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuIl19