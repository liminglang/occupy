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
      isLoaded: false,
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
                // await this.getRegion();
                //  await this.getCenterLocation();
                this.$apply();
                console.log(this.latitude, this.longitude);
                // this.mapCtx = wx.createMapContext('map'); 
                // this.mapCtx.moveToLocation();

                //根据经纬度和userid去trace表中查找，当前位置我是否已经占领了，如果占领了，就显示头像，否则显示占领按钮
                this.isOccupied = false;
                self = this;

                if (!this.isDisplay) {
                  _context3.next = 19;
                  break;
                }

                console.log("1111111111111");
                _context3.next = 19;
                return this.getTraces();

              case 19:
                this.isLoaded = true;
                this.$apply();

              case 21:
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
        var self;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log(e.type);
                self = this;

                if (e.type == 'end') {
                  if (this.isDisplay && this.isLoaded) {
                    console.log("2222222222");
                    // setTimeout(() => {
                    //   self.getTraces()
                    // }, 500);
                    // setTimeout(() =>{
                    //   self.drawAvatar(self.markers)
                    // },1000);
                    // await this.getTraces();
                  }
                }
                this.$apply();

              case 4:
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
      if (e.markerId != 0) {
        if (this.markers[e.markerId].traceIds.length == 1) {
          wx.navigateTo({ url: '/pages/traceshow?traceId=' + this.markers[e.markerId].traceIds[0] });
        } else {
          wx.navigateTo({ url: '/pages/tracelist?latitude=' + this.markers[e.markerId].latitude + '&longitude=' + this.markers[e.markerId].longitude + '&scenic=' + this.markers[e.markerId].name });
        }
      } else if (this.isOccupied) {
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
        var self;
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
                self = this;

                if (!this.isDisplay) {
                  _context6.next = 7;
                  break;
                }

                // 
                console.log("33333333333333333");
                _context6.next = 7;
                return this.getTraces();

              case 7:
                this.$apply();

              case 8:
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
                    console.log("region======1111", res, self.range_x, self.range_y);
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
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var url, result;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.markers = [];
                url = _config.baseUrl + ('/trace/isOccupied?latitude=' + this.latitude + '&longitude=' + this.longitude + '&userId=' + this.$parent.globalData.user.id);
                _context9.next = 4;
                return _network2.default.get(url).catch(function (err) {
                  console.log("updateAvatarError...", err.data);
                });

              case 4:
                result = _context9.sent;

                if (!result.data.data.isOccupied) {
                  this.markers.push({ //markers的第一个数据永远是当前位置，其他的数据来自trace表
                    iconPath: "/static/images/occupy.png",
                    id: 0,
                    latitude: this.latitude,
                    longitude: this.longitude,
                    width: 30,
                    height: 30,
                    traceIds: [],
                    avatars: []
                  });
                  this.isOccupied = false;
                }
                this.$apply();

              case 7:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function initMarkers() {
        return _ref10.apply(this, arguments);
      }

      return initMarkers;
    }()
  }, {
    key: 'getTraces',
    value: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        var _this2 = this;

        var self;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                console.log("this.scale================", this.scale);
                _context12.next = 3;
                return this.getCenterLocation();

              case 3:
                _context12.next = 5;
                return this.getRegion();

              case 5:
                this.initMarkers();
                self = this;

                setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                  var url, traces, data, scenices, k, i, marker;
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          if (self.range_x >= 1 || self.range_y >= 1) {
                            self.range_x = self.range_x - self.latitude;
                            self.range_y = self.range_y - self.longitude;
                            self.$apply();
                          }
                          url = _config.baseUrl + ('/trace/getTraces?latitude=' + self.latitude + '&longitude=' + self.longitude + '&range_x=' + self.range_x + '&range_y=' + self.range_y);

                          console.log("11111111111122222222222222222");
                          console.log(self.latitude, self.longitude, self.range_x, self.range_y);
                          _context11.next = 6;
                          return _network2.default.get(url).catch(function (err) {
                            console.log("updateAvatarError...", err.data);
                          });

                        case 6:
                          traces = _context11.sent;

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
                              self.markers.push(marker);
                            }
                          }
                          setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                            return regeneratorRuntime.wrap(function _callee10$(_context10) {
                              while (1) {
                                switch (_context10.prev = _context10.next) {
                                  case 0:
                                    _context10.next = 2;
                                    return self.drawAvatar(_this2.markers);

                                  case 2:
                                  case 'end':
                                    return _context10.stop();
                                }
                              }
                            }, _callee10, _this2);
                          })), 200);
                          self.$apply();

                        case 10:
                        case 'end':
                          return _context11.stop();
                      }
                    }
                  }, _callee11, _this2);
                })), 1000);

                this.$apply();

              case 9:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getTraces() {
        return _ref11.apply(this, arguments);
      }

      return getTraces;
    }()
  }, {
    key: 'drawAvatar',
    value: function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(markers) {
        var _this3 = this;

        var self, ctx, j, i;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
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
                ctx.draw(true, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                  var j, res;
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          j = 0;

                        case 1:
                          if (!(j < markers.length)) {
                            _context13.next = 10;
                            break;
                          }

                          _context13.next = 4;
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
                          res = _context13.sent;

                          // if(markers[j].name=='市政府'){
                          self.imageUrl = res.tempFilePath;
                          markers[j]['iconPath'] = res.tempFilePath;
                          // const saveRes = await wepy.saveImageToPhotosAlbum({
                          //   filePath: res.tempFilePath
                          // }).catch((err)=>{
                          //   return false;
                          // });
                          // if(saveRes){
                          //   wepy.showToast({
                          //     title: "已保存至相册",
                          //     icon: "none"
                          //   });
                          // }

                        case 7:
                          j++;
                          _context13.next = 1;
                          break;

                        case 10:
                          self.markers = markers;
                          self.$apply();

                        case 12:
                        case 'end':
                          return _context13.stop();
                      }
                    }
                  }, _callee13, _this3);
                })));

                console.log("********************", this.markers);
                this.$apply();

              case 12:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function drawAvatar(_x6) {
        return _ref14.apply(this, arguments);
      }

      return drawAvatar;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpc09jY3VwaWVkIiwiaW1hZ2VVcmwiLCJoZWlnaHQiLCJzY2FsZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwibWFya2VycyIsImljb25QYXRoIiwiaWQiLCJuYW1lIiwid2lkdGgiLCJ0cmFjZUlkcyIsImF2YXRhcnMiLCJjb250cm9scyIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImNsaWNrYWJsZSIsInJhbmdlX3giLCJyYW5nZV95IiwiaXNEaXNwbGF5IiwiaXNMb2FkZWQiLCJidXR0b25Db250ZW50IiwibWV0aG9kcyIsInN0YXJ0R2FtZSIsInd4Iiwic3dpdGNoVGFiIiwidXJsIiwidXNlckxvZ2luIiwiZSIsInVzZXJJbmZvIiwiZGV0YWlsIiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwid2VweSIsImdldFNldHRpbmciLCJzZXR0aW5nIiwiYXV0aFNldHRpbmciLCJnZXRVc2VySW5mbyIsImluZm8iLCJiYXNlVXJsIiwic2V0RGF0YSIsInVzZXIiLCJuaWNrTmFtZSIsImF2YXRhclVybCIsImdlbmRlciIsInJlcSIsInBvc3QiLCJjYXRjaCIsImVyciIsImF2YXRhciIsImdldENlbnRlckxvY2F0aW9uIiwiZGlzUGxheSIsIiRhcHBseSIsImluaXRNYXJrZXJzIiwib25Mb2FkIiwibG9naW4iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd0hlaWdodCIsImdldExvY2F0aW9uIiwidHlwZSIsImxvY2F0aW9uIiwibWFwQ3R4IiwiY3JlYXRlTWFwQ29udGV4dCIsIm1vdmVUb0xvY2F0aW9uIiwic2VsZiIsImdldFRyYWNlcyIsIm1hcmtlcklkIiwibGVuZ3RoIiwibmF2aWdhdGVUbyIsImNvbnRyb2xJZCIsInN1Y2Nlc3MiLCJyZXMiLCJnZXRSZWdpb24iLCJub3J0aGVhc3QiLCJnZXQiLCJyZXN1bHQiLCJwdXNoIiwic2V0VGltZW91dCIsInRyYWNlcyIsInNjZW5pY2VzIiwiXyIsImdyb3VwQnkiLCJvYmoiLCJzY2VuaWMiLCJrIiwiaSIsIm1hcmtlciIsInBsdWNrIiwiZHJhd0F2YXRhciIsImN0eCIsImNyZWF0ZUNhbnZhc0NvbnRleHQiLCJiZWdpblBhdGgiLCJqIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xpcCIsImRyYXdJbWFnZSIsInNhdmUiLCJkcmF3IiwiY2FudmFzVG9UZW1wRmlsZVBhdGgiLCJ4IiwieSIsImRlc3RXaWR0aCIsImRlc3RIZWlnaHQiLCJjYW52YXNJZCIsImZpbGVUeXBlIiwidGVtcEZpbGVQYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUF1Q1RDLEksR0FBTztBQUNMQyxrQkFBVyxLQUROO0FBRUxDLGdCQUFTLEVBRko7QUFHTEMsY0FBTyxJQUhGO0FBSUxDLGFBQU0sRUFKRDtBQUtMQyxnQkFBVSxDQUxMO0FBTUxDLGlCQUFXLENBTk47QUFPTEMsZUFBUSxDQUFDLEVBQUs7QUFDWkMsa0JBQVUsRUFESDtBQUVQQyxZQUFJLENBRkc7QUFHUEMsY0FBTSxJQUhDO0FBSVBMLGtCQUFVLEVBSkg7QUFLUEMsbUJBQVcsRUFMSjtBQU1QSyxlQUFPLEVBTkE7QUFPUFIsZ0JBQVEsRUFQRDtBQVFQUyxrQkFBVSxFQVJIO0FBU1BDLGlCQUFTO0FBVEYsT0FBRCxDQVBIO0FBa0JMQyxnQkFBVSxDQUFDO0FBQ1RMLFlBQUksQ0FESztBQUVURCxrQkFBVSx3QkFGRDtBQUdUTyxrQkFBVTtBQUNWQyxnQkFBTSxDQURJO0FBRVZDLGVBQUssTUFBTSxFQUZEO0FBR1ZOLGlCQUFPLEVBSEc7QUFJVlIsa0JBQVE7QUFKRSxTQUhEO0FBU1RlLG1CQUFXO0FBVEYsT0FBRCxFQVdWO0FBQ0VULFlBQUksQ0FETjtBQUVFRCxrQkFBVSx5QkFGWjtBQUdFTyxrQkFBVTtBQUNWQyxnQkFBTSxDQURJO0FBRVZDLGVBQUssTUFBTSxFQUZEO0FBR1ZOLGlCQUFPLEVBSEc7QUFJVlIsa0JBQVE7QUFKRSxTQUhaO0FBU0VlLG1CQUFXO0FBVGIsT0FYVSxDQWxCTDtBQXlDTEMsZUFBUyxDQXpDSjtBQTBDTEMsZUFBUyxDQTFDSjtBQTJDTEMsaUJBQVUsSUEzQ0w7QUE0Q0xDLGdCQUFTLEtBNUNKO0FBNkNMQyxxQkFBYztBQTdDVCxLLFFBaVBQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNWQyxXQUFHQyxTQUFILENBQWEsRUFBQ0MsS0FBSyxjQUFOLEVBQWI7QUFDRCxPQUhPO0FBSUZDLGVBSkU7QUFBQSw2RkFJUUMsQ0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQUMsMEJBTEEsR0FLV0QsRUFBRUUsTUFBRixDQUFTRCxRQUxwQjs7QUFNTkUsMEJBQVFDLEdBQVIsQ0FBWUgsUUFBWjs7QUFOTSx1QkFPRkEsUUFQRTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxzQkFRQyxLQUFLSSxPQUFMLENBQWFDLFVBQWIsQ0FBd0JMLFFBUnpCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEseUJBU29CTSxlQUFLQyxVQUFMLEVBVHBCOztBQUFBO0FBU0lDLHlCQVRKOztBQUFBLHVCQVVFQSxRQUFRQyxXQUFSLENBQW9CLGdCQUFwQixDQVZGO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEseUJBV21CSCxlQUFLSSxXQUFMLEVBWG5COztBQUFBO0FBV01DLHNCQVhOOztBQVlBLHVCQUFLUCxPQUFMLENBQWFDLFVBQWIsQ0FBd0JMLFFBQXhCLEdBQW1DVyxLQUFLWCxRQUF4QztBQUNJSCxxQkFiSixHQWFVZSxrQkFBVSxrQkFicEI7QUFjTUMseUJBZE4sR0FjZ0IsRUFBQyxNQUFLLEtBQUtULE9BQUwsQ0FBYUMsVUFBYixDQUF3QlMsSUFBeEIsQ0FBNkJwQyxFQUFuQyxFQUF1QyxRQUFRaUMsS0FBS1gsUUFBTCxDQUFjZSxRQUE3RCxFQUF1RSxVQUFVSixLQUFLWCxRQUFMLENBQWNnQixTQUEvRixFQUEwRyxVQUFVTCxLQUFLWCxRQUFMLENBQWNpQixNQUFsSSxFQWRoQjtBQUFBO0FBQUEseUJBZU1DLGtCQUFJQyxJQUFKLENBQVN0QixHQUFULEVBQWNnQixPQUFkLEVBQXVCTyxLQUF2QixDQUE2QixVQUFDQyxHQUFELEVBQU87QUFDeENuQiw0QkFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9Da0IsSUFBSXBELElBQXhDO0FBQThDLG1CQUQxQyxDQWZOOztBQUFBO0FBaUJBLHVCQUFLbUMsT0FBTCxDQUFhQyxVQUFiLENBQXdCUyxJQUF4QixDQUE2Qm5DLElBQTdCLEdBQW9DZ0MsS0FBS1gsUUFBTCxDQUFjZSxRQUFsRDtBQUNBLHVCQUFLWCxPQUFMLENBQWFDLFVBQWIsQ0FBd0JTLElBQXhCLENBQTZCUSxNQUE3QixHQUFzQ1gsS0FBS1gsUUFBTCxDQUFjZ0IsU0FBcEQ7O0FBbEJBO0FBQUE7QUFBQTs7QUFBQTtBQXNCRnJCLHFCQUFHQyxTQUFILENBQWEsRUFBQ0MsS0FBSyxjQUFOLEVBQWI7O0FBdEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBMkJGMEIsdUJBM0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBNEJBLEtBQUtBLGlCQUFMLEVBNUJBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBK0JSQyxhQS9CUSxxQkErQkM7QUFDUCxZQUFHLEtBQUtsQyxTQUFSLEVBQWtCO0FBQ2hCLGVBQUtBLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxlQUFLRSxhQUFMLEdBQXFCLE9BQXJCO0FBQ0QsU0FIRCxNQUdLO0FBQ0gsZUFBS0YsU0FBTCxHQUFpQixJQUFqQjtBQUNBLGVBQUtFLGFBQUwsR0FBcUIsUUFBckI7QUFDRDtBQUNELGFBQUtpQyxNQUFMO0FBQ0EsYUFBS0MsV0FBTDtBQUNBLGFBQUtDLE1BQUw7QUFDRDtBQTFDTyxLOzs7Ozs7NEZBcFJHNUIsQzs7Ozs7O0FBQ1hHLHdCQUFRQyxHQUFSLENBQVksK0JBQVo7O3VCQUNNLEtBQUtDLE9BQUwsQ0FBYXdCLEtBQWIsQ0FBbUI3QixDQUFuQixDOzs7QUFDTixxQkFBSzNCLE1BQUwsR0FBY2tDLGVBQUt1QixpQkFBTCxHQUF5QkMsWUFBdkM7O3VCQUN1QnhCLGVBQUt5QixXQUFMLENBQWlCO0FBQ3BDQyx3QkFBTTtBQUQ4QixpQkFBakIsQzs7O0FBQWpCQyx3Qjs7QUFHTixxQkFBSzNELFFBQUwsR0FBZ0IyRCxTQUFTM0QsUUFBekI7QUFDQSxxQkFBS0MsU0FBTCxHQUFpQjBELFNBQVMxRCxTQUExQjtBQUNBLHFCQUFLMkQsTUFBTCxHQUFjdkMsR0FBR3dDLGdCQUFILENBQW9CLEtBQXBCLENBQWQ7QUFDQSxxQkFBS0QsTUFBTCxDQUFZRSxjQUFaO0FBQ0Q7QUFDRDtBQUNFLHFCQUFLWCxNQUFMO0FBQ0F2Qix3QkFBUUMsR0FBUixDQUFZLEtBQUs3QixRQUFqQixFQUEwQixLQUFLQyxTQUEvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBS0wsVUFBTCxHQUFrQixLQUFsQjtBQUNJbUUsb0IsR0FBTyxJOztxQkFDUixLQUFLL0MsUzs7Ozs7QUFDTlksd0JBQVFDLEdBQVIsQ0FBWSxlQUFaOzt1QkFDTSxLQUFLbUMsU0FBTCxFOzs7QUFFUixxQkFBSy9DLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxxQkFBS2tDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEZBR1cxQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEZBcURDQSxDOzs7Ozs7QUFDWkcsd0JBQVFDLEdBQVIsQ0FBWUosRUFBRWlDLElBQWQ7QUFDSUssb0IsR0FBTyxJOztBQUNYLG9CQUFHdEMsRUFBRWlDLElBQUYsSUFBVSxLQUFiLEVBQW1CO0FBQ2pCLHNCQUFHLEtBQUsxQyxTQUFMLElBQWdCLEtBQUtDLFFBQXhCLEVBQWlDO0FBQy9CVyw0QkFBUUMsR0FBUixDQUFZLFlBQVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNBO0FBQ0Y7QUFDRCxxQkFBS3NCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFFUTFCLEMsRUFBRztBQUNYRyxjQUFRQyxHQUFSLENBQVksZUFBWjtBQUNBLFVBQUdKLEVBQUV3QyxRQUFGLElBQVksQ0FBZixFQUFpQjtBQUNmLFlBQUcsS0FBSy9ELE9BQUwsQ0FBYXVCLEVBQUV3QyxRQUFmLEVBQXlCMUQsUUFBekIsQ0FBa0MyRCxNQUFsQyxJQUEwQyxDQUE3QyxFQUErQztBQUM3QzdDLGFBQUc4QyxVQUFILENBQWMsRUFBQzVDLG1DQUFpQyxLQUFLckIsT0FBTCxDQUFhdUIsRUFBRXdDLFFBQWYsRUFBeUIxRCxRQUF6QixDQUFrQyxDQUFsQyxDQUFsQyxFQUFkO0FBQ0QsU0FGRCxNQUVLO0FBQ0hjLGFBQUc4QyxVQUFILENBQWMsRUFBQzVDLG9DQUFrQyxLQUFLckIsT0FBTCxDQUFhdUIsRUFBRXdDLFFBQWYsRUFBeUJqRSxRQUEzRCxtQkFBaUYsS0FBS0UsT0FBTCxDQUFhdUIsRUFBRXdDLFFBQWYsRUFBeUJoRSxTQUExRyxnQkFBOEgsS0FBS0MsT0FBTCxDQUFhdUIsRUFBRXdDLFFBQWYsRUFBeUI1RCxJQUF4SixFQUFkO0FBQ0Q7QUFDRixPQU5ELE1BTU0sSUFBRyxLQUFLVCxVQUFSLEVBQW1CO0FBQ3ZCLFlBQUcsS0FBS00sT0FBTCxDQUFhdUIsRUFBRXdDLFFBQWYsRUFBeUIxRCxRQUF6QixDQUFrQzJELE1BQWxDLElBQTBDLENBQTdDLEVBQStDO0FBQzdDN0MsYUFBRzhDLFVBQUgsQ0FBYyxFQUFDNUMsbUNBQWlDLEtBQUtyQixPQUFMLENBQWF1QixFQUFFd0MsUUFBZixFQUF5QjFELFFBQXpCLENBQWtDLENBQWxDLENBQWxDLEVBQWQ7QUFDRCxTQUZELE1BRUs7QUFDSGMsYUFBRzhDLFVBQUgsQ0FBYyxFQUFDNUMsb0NBQWtDLEtBQUtyQixPQUFMLENBQWF1QixFQUFFd0MsUUFBZixFQUF5QmpFLFFBQTNELG1CQUFpRixLQUFLRSxPQUFMLENBQWF1QixFQUFFd0MsUUFBZixFQUF5QmhFLFNBQTFHLGdCQUE4SCxLQUFLQyxPQUFMLENBQWF1QixFQUFFd0MsUUFBZixFQUF5QjVELElBQXhKLEVBQWQ7QUFDRDtBQUNGLE9BTkssTUFNRDtBQUNGZ0IsV0FBRzhDLFVBQUgsQ0FBYyxFQUFDNUMsaUNBQStCLEtBQUt2QixRQUFwQyxtQkFBMEQsS0FBS0MsU0FBaEUsRUFBZDtBQUNGO0FBQ0Y7Ozs7NEZBQ2dCd0IsQzs7Ozs7O0FBQ2ZHLHdCQUFRQyxHQUFSLENBQVlKLEVBQUUyQyxTQUFkO0FBQ0Esb0JBQUczQyxFQUFFMkMsU0FBRixJQUFlLENBQWxCLEVBQW9CO0FBQ2xCLHVCQUFLckUsS0FBTCxHQUFhLEtBQUtBLEtBQUwsR0FBYSxDQUExQjtBQUNELGlCQUZELE1BRUs7QUFDSCx1QkFBS0EsS0FBTCxHQUFhLEtBQUtBLEtBQUwsR0FBYSxDQUExQjtBQUNEO0FBQ0dnRSxvQixHQUFPLEk7O3FCQUNSLEtBQUsvQyxTOzs7OztBQUNOO0FBQ0FZLHdCQUFRQyxHQUFSLENBQVksbUJBQVo7O3VCQUNNLEtBQUttQyxTQUFMLEU7OztBQUVSLHFCQUFLYixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0lZLG9CLEdBQU8sSTs7dUJBQ0wsS0FBS0gsTUFBTCxDQUFZWCxpQkFBWixDQUE4QjtBQUNsQ29CLDJCQUFRLGlCQUFTQyxHQUFULEVBQWE7QUFDbkJQLHlCQUFLL0QsUUFBTCxHQUFnQnNFLElBQUl0RSxRQUFwQjtBQUNBK0QseUJBQUs5RCxTQUFMLEdBQWlCcUUsSUFBSXJFLFNBQXJCO0FBQ0EyQiw0QkFBUUMsR0FBUixDQUFZLHdCQUFaLEVBQXFDeUMsR0FBckM7QUFDQVAseUJBQUtaLE1BQUw7QUFDRDtBQU5pQyxpQkFBOUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVGWSxvQixHQUFPLEk7O3VCQUNMLEtBQUtILE1BQUwsQ0FBWVcsU0FBWixDQUFzQjtBQUMxQkYsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYTtBQUNwQlAseUJBQUtqRCxPQUFMLEdBQWV3RCxJQUFJRSxTQUFKLENBQWN4RSxRQUE3QjtBQUNBK0QseUJBQUtoRCxPQUFMLEdBQWV1RCxJQUFJRSxTQUFKLENBQWN2RSxTQUE3QjtBQUNBOEQseUJBQUtaLE1BQUw7QUFDQXZCLDRCQUFRQyxHQUFSLENBQVksa0JBQVosRUFBK0J5QyxHQUEvQixFQUFtQ1AsS0FBS2pELE9BQXhDLEVBQWdEaUQsS0FBS2hELE9BQXJEO0FBQ0Q7QUFOeUIsaUJBQXRCLEM7OztBQVFOYSx3QkFBUUMsR0FBUixDQUFZLGNBQVosRUFBMkIsS0FBS2YsT0FBaEMsRUFBd0MsS0FBS0MsT0FBN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxxQkFBS2IsT0FBTCxHQUFlLEVBQWY7QUFDSXFCLG1CLEdBQU1lLG1EQUF3QyxLQUFLdEMsUUFBN0MsbUJBQW1FLEtBQUtDLFNBQXhFLGdCQUE0RixLQUFLNkIsT0FBTCxDQUFhQyxVQUFiLENBQXdCUyxJQUF4QixDQUE2QnBDLEVBQXpILEM7O3VCQUNXd0Msa0JBQUk2QixHQUFKLENBQVFsRCxHQUFSLEVBQWF1QixLQUFiLENBQW1CLFVBQUNDLEdBQUQsRUFBTztBQUM3Q25CLDBCQUFRQyxHQUFSLENBQVksc0JBQVosRUFBb0NrQixJQUFJcEQsSUFBeEM7QUFBOEMsaUJBRDNCLEM7OztBQUFmK0Usc0I7O0FBRU4sb0JBQUcsQ0FBQ0EsT0FBTy9FLElBQVAsQ0FBWUEsSUFBWixDQUFpQkMsVUFBckIsRUFBZ0M7QUFDNUIsdUJBQUtNLE9BQUwsQ0FBYXlFLElBQWIsQ0FDQSxFQUFLO0FBQ0h4RSw4QkFBVSwyQkFEWjtBQUVFQyx3QkFBSSxDQUZOO0FBR0VKLDhCQUFVLEtBQUtBLFFBSGpCO0FBSUVDLCtCQUFXLEtBQUtBLFNBSmxCO0FBS0VLLDJCQUFPLEVBTFQ7QUFNRVIsNEJBQVEsRUFOVjtBQU9FUyw4QkFBVSxFQVBaO0FBUUVDLDZCQUFRO0FBUlYsbUJBREE7QUFZRix1QkFBS1osVUFBTCxHQUFrQixLQUFsQjtBQUNEO0FBQ0QscUJBQUt1RCxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQXZCLHdCQUFRQyxHQUFSLENBQVksNEJBQVosRUFBeUMsS0FBSzlCLEtBQTlDOzt1QkFDTSxLQUFLa0QsaUJBQUwsRTs7Ozt1QkFDQSxLQUFLc0IsU0FBTCxFOzs7QUFDTixxQkFBS25CLFdBQUw7QUFDSVcsb0IsR0FBTyxJOztBQUNYYSxtRkFBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUCw4QkFBR2IsS0FBS2pELE9BQUwsSUFBYyxDQUFkLElBQW1CaUQsS0FBS2hELE9BQUwsSUFBYyxDQUFwQyxFQUFzQztBQUNwQ2dELGlDQUFLakQsT0FBTCxHQUFlaUQsS0FBS2pELE9BQUwsR0FBZWlELEtBQUsvRCxRQUFuQztBQUNBK0QsaUNBQUtoRCxPQUFMLEdBQWVnRCxLQUFLaEQsT0FBTCxHQUFlZ0QsS0FBSzlELFNBQW5DO0FBQ0E4RCxpQ0FBS1osTUFBTDtBQUNEO0FBQ0c1Qiw2QkFORyxHQU1HZSxrREFBdUN5QixLQUFLL0QsUUFBNUMsbUJBQWtFK0QsS0FBSzlELFNBQXZFLGlCQUE0RjhELEtBQUtqRCxPQUFqRyxpQkFBb0hpRCxLQUFLaEQsT0FBekgsQ0FOSDs7QUFPUGEsa0NBQVFDLEdBQVIsQ0FBWSwrQkFBWjtBQUNBRCxrQ0FBUUMsR0FBUixDQUFZa0MsS0FBSy9ELFFBQWpCLEVBQTBCK0QsS0FBSzlELFNBQS9CLEVBQXlDOEQsS0FBS2pELE9BQTlDLEVBQXNEaUQsS0FBS2hELE9BQTNEO0FBUk87QUFBQSxpQ0FTYzZCLGtCQUFJNkIsR0FBSixDQUFRbEQsR0FBUixFQUFhdUIsS0FBYixDQUFtQixVQUFDQyxHQUFELEVBQU87QUFDN0NuQixvQ0FBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9Da0IsSUFBSXBELElBQXhDO0FBQThDLDJCQUQzQixDQVRkOztBQUFBO0FBU0RrRixnQ0FUQzs7QUFXUCw4QkFBSUEsT0FBT2xGLElBQVgsRUFBaUI7QUFDWEEsZ0NBRFcsR0FDSmtGLE9BQU9sRixJQUFQLENBQVlBLElBRFI7QUFFWG1GLG9DQUZXLEdBRUFDLHFCQUFFQyxPQUFGLENBQVVyRixJQUFWLEVBQWUsVUFBU3NGLEdBQVQsRUFBYTtBQUFDLHFDQUFPQSxJQUFJQyxNQUFYO0FBQWtCLDZCQUEvQyxDQUZBOztBQUdmdEQsb0NBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFxQ2lELFFBQXJDO0FBQ0lLLDZCQUpXLEdBSVAsQ0FKTzs7QUFLZixpQ0FBUUMsQ0FBUixJQUFhTixRQUFiLEVBQXVCO0FBQ2pCTyxvQ0FEaUIsR0FDUixFQURROztBQUVyQkYsa0NBQUlBLElBQUksQ0FBUjtBQUNBRSxxQ0FBTyxJQUFQLElBQWVGLENBQWY7QUFDQUUscUNBQU8sVUFBUCxJQUFxQlAsU0FBU00sQ0FBVCxFQUFZLENBQVosRUFBZXBGLFFBQXBDO0FBQ0FxRixxQ0FBTyxXQUFQLElBQXNCUCxTQUFTTSxDQUFULEVBQVksQ0FBWixFQUFlbkYsU0FBckM7QUFDQW9GLHFDQUFPLE9BQVAsSUFBa0IsRUFBbEI7QUFDQUEscUNBQU8sUUFBUCxJQUFtQixFQUFuQjtBQUNBQSxxQ0FBTyxNQUFQLElBQWlCRCxDQUFqQjtBQUNBQyxxQ0FBTyxVQUFQLElBQXFCTixxQkFBRU8sS0FBRixDQUFRUixTQUFTTSxDQUFULENBQVIsRUFBcUIsSUFBckIsQ0FBckI7QUFDQUMscUNBQU8sU0FBUCxJQUFvQk4scUJBQUVPLEtBQUYsQ0FBUVIsU0FBU00sQ0FBVCxDQUFSLEVBQXFCLFFBQXJCLENBQXBCO0FBQ0FyQixtQ0FBSzdELE9BQUwsQ0FBYXlFLElBQWIsQ0FBa0JVLE1BQWxCO0FBQ0Q7QUFDRjtBQUNEVCw2RkFBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FDSGIsS0FBS3dCLFVBQUwsQ0FBZ0IsT0FBS3JGLE9BQXJCLENBREc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQVgsSUFFRSxHQUZGO0FBR0E2RCwrQkFBS1osTUFBTDs7QUFqQ087QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVgsSUFrQ0ksSUFsQ0o7O0FBcUNBLHFCQUFLQSxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhGQUVlakQsTzs7Ozs7Ozs7QUFDZjBCLHdCQUFRQyxHQUFSLENBQVksZUFBWixFQUE0QjNCLE9BQTVCO0FBQ0k2RCxvQixHQUFPLEk7QUFDTHlCLG1CLEdBQU14RCxlQUFLeUQsbUJBQUwsQ0FBeUIsVUFBekIsQzs7QUFDWkQsb0JBQUlFLFNBQUo7QUFDQTlELHdCQUFRQyxHQUFSLENBQVkzQixRQUFRZ0UsTUFBcEI7QUFDQSxxQkFBUXlCLENBQVIsR0FBVSxDQUFWLEVBQWFBLElBQUl6RixRQUFRZ0UsTUFBekIsRUFBaUN5QixHQUFqQyxFQUFxQztBQUNuQy9ELDBCQUFRQyxHQUFSLENBQVkzQixRQUFReUYsQ0FBUixFQUFXbkYsT0FBWCxDQUFtQixDQUFuQixDQUFaO0FBQ0EsdUJBQVE0RSxDQUFSLEdBQVUsQ0FBVixFQUFhQSxJQUFJbEYsUUFBUXlGLENBQVIsRUFBV25GLE9BQVgsQ0FBbUIwRCxNQUFwQyxFQUE0Q2tCLEdBQTVDLEVBQWdEO0FBQzlDSSx3QkFBSUksR0FBSixDQUFRLEtBQUdSLElBQUUsRUFBYixFQUFpQixLQUFHTyxJQUFFLEVBQXRCLEVBQTBCLEVBQTFCLEVBQThCLENBQTlCLEVBQWlDLElBQUlFLEtBQUtDLEVBQTFDO0FBQ0Q7QUFDRjtBQUNETixvQkFBSU8sSUFBSjtBQUNBLHFCQUFRSixDQUFSLEdBQVUsQ0FBVixFQUFhQSxJQUFJekYsUUFBUWdFLE1BQXpCLEVBQWlDeUIsR0FBakMsRUFBcUM7QUFDbkMsdUJBQVFQLENBQVIsR0FBVSxDQUFWLEVBQWFBLElBQUlsRixRQUFReUYsQ0FBUixFQUFXbkYsT0FBWCxDQUFtQjBELE1BQXBDLEVBQTRDa0IsR0FBNUMsRUFBZ0Q7QUFDOUNJLHdCQUFJUSxTQUFKLENBQWM5RixRQUFReUYsQ0FBUixFQUFXbkYsT0FBWCxDQUFtQjRFLENBQW5CLENBQWQsRUFBcUMsSUFBRSxLQUFHQSxDQUExQyxFQUE2QyxLQUFHTyxDQUFoRCxFQUFtRCxFQUFuRCxFQUF1RCxFQUF2RDtBQUNEO0FBQ0Y7QUFDREgsb0JBQUlTLElBQUo7QUFDQVQsb0JBQUlVLElBQUosQ0FBUyxJQUFULDBEQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVMUCwyQkFGSyxHQUVILENBRkc7O0FBQUE7QUFBQSxnQ0FFQUEsSUFBSXpGLFFBQVFnRSxNQUZaO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsaUNBR09sQyxlQUFLbUUsb0JBQUwsQ0FBMEI7QUFDMUNDLCtCQUFFLENBRHdDO0FBRTFDQywrQkFBRSxLQUFHVixDQUZxQztBQUcxQ3JGLG1DQUFNLEtBQUdKLFFBQVF5RixDQUFSLEVBQVduRixPQUFYLENBQW1CMEQsTUFIYztBQUkxQ3BFLG9DQUFPLEVBSm1DO0FBSzFDd0csdUNBQVUsS0FBR3BHLFFBQVF5RixDQUFSLEVBQVduRixPQUFYLENBQW1CMEQsTUFMVTtBQU0xQ3FDLHdDQUFXLEVBTitCO0FBTzFDQyxzQ0FBVSxVQVBnQztBQVExQ0Msc0NBQVU7QUFSZ0MsMkJBQTFCLENBSFA7O0FBQUE7QUFHTG5DLDZCQUhLOztBQWFYO0FBQ0FQLCtCQUFLbEUsUUFBTCxHQUFnQnlFLElBQUlvQyxZQUFwQjtBQUNBeEcsa0NBQVF5RixDQUFSLEVBQVcsVUFBWCxJQUF5QnJCLElBQUlvQyxZQUE3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBMUJXO0FBRW9CZiw2QkFGcEI7QUFBQTtBQUFBOztBQUFBO0FBNEJiNUIsK0JBQUs3RCxPQUFMLEdBQWVBLE9BQWY7QUFDQTZELCtCQUFLWixNQUFMOztBQTdCYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZjs7QUFnQ0F2Qix3QkFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW1DLEtBQUszQixPQUF4QztBQUNBLHFCQUFLaUQsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXZSK0JuQixlQUFLMkUsSTs7a0JBQW5CbkgsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG4gIGltcG9ydCB7IGJhc2VVcmwsIGFwcElkfSBmcm9tICdAL2NvbmZpZydcclxuICBpbXBvcnQgcmVxIGZyb20gJ0AvbmV0d29yaydcclxuICBpbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i2s+i/ueWNoOmihidcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXN5bmMgb25Mb2FkKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvbmxvYWQ9PT09PT09PT09PT09PT09PT09PT09PVwiKVxyXG4gICAgICBhd2FpdCB0aGlzLiRwYXJlbnQubG9naW4oZSk7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodFxyXG4gICAgICBjb25zdCBsb2NhdGlvbiA9IGF3YWl0IHdlcHkuZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgICAgdHlwZTogJ2djajAyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxhdGl0dWRlID0gbG9jYXRpb24ubGF0aXR1ZGU7XHJcbiAgICAgIHRoaXMubG9uZ2l0dWRlID0gbG9jYXRpb24ubG9uZ2l0dWRlO1xyXG4gICAgICB0aGlzLm1hcEN0eCA9IHd4LmNyZWF0ZU1hcENvbnRleHQoJ21hcCcpOyBcclxuICAgICAgdGhpcy5tYXBDdHgubW92ZVRvTG9jYXRpb24oKTtcclxuICAgICAvLyBhd2FpdCB0aGlzLmdldFJlZ2lvbigpO1xyXG4gICAgLy8gIGF3YWl0IHRoaXMuZ2V0Q2VudGVyTG9jYXRpb24oKTtcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmxhdGl0dWRlLHRoaXMubG9uZ2l0dWRlKVxyXG4gICAgICAvLyB0aGlzLm1hcEN0eCA9IHd4LmNyZWF0ZU1hcENvbnRleHQoJ21hcCcpOyBcclxuICAgICAgLy8gdGhpcy5tYXBDdHgubW92ZVRvTG9jYXRpb24oKTtcclxuICAgICAgXHJcbiAgICAgIC8v5qC55o2u57uP57qs5bqm5ZKMdXNlcmlk5Y67dHJhY2XooajkuK3mn6Xmib7vvIzlvZPliY3kvY3nva7miJHmmK/lkKblt7Lnu4/ljaDpoobkuobvvIzlpoLmnpzljaDpoobkuobvvIzlsLHmmL7npLrlpLTlg4/vvIzlkKbliJnmmL7npLrljaDpoobmjInpkq5cclxuICAgICAgdGhpcy5pc09jY3VwaWVkID0gZmFsc2U7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgaWYodGhpcy5pc0Rpc3BsYXkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiMTExMTExMTExMTExMVwiKVxyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0VHJhY2VzKClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uU2hvdyhlKSB7XHJcbiAgICAvLyAgdGhpcy5tYXBDdHggPSB3eC5jcmVhdGVNYXBDb250ZXh0KCdtYXAnKTsgXHJcbiAgICAvLyAgdGhpcy5tYXBDdHgubW92ZVRvTG9jYXRpb24oKTtcclxuICAgLy8gICBjb25zb2xlLmxvZyhcIm9uc2hvdz09PT09PT09PT09PT09PT09PT09PT1cIilcclxuICAgLy8gICBhd2FpdCB0aGlzLmdldFRyYWNlcygpO1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgaXNPY2N1cGllZDpmYWxzZSxcclxuICAgICAgaW1hZ2VVcmw6JycsXHJcbiAgICAgIGhlaWdodDoxMDAwLFxyXG4gICAgICBzY2FsZToxNixcclxuICAgICAgbGF0aXR1ZGU6IDAsXHJcbiAgICAgIGxvbmdpdHVkZTogMCxcclxuICAgICAgbWFya2VyczpbeyAgICAvL21hcmtlcnPnmoTnrKzkuIDkuKrmlbDmja7msLjov5zmmK/lvZPliY3kvY3nva7vvIzlhbbku5bnmoTmlbDmja7mnaXoh6p0cmFjZeihqFxyXG4gICAgICAgIGljb25QYXRoOiAnJyxcclxuICAgICAgICBpZDogMCxcclxuICAgICAgICBuYW1lOiAn5Y2n5qe9JyxcclxuICAgICAgICBsYXRpdHVkZTogJycsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiAnJyxcclxuICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICB0cmFjZUlkczogW10sXHJcbiAgICAgICAgYXZhdGFyczogW11cclxuICAgICAgfV0sXHJcbiAgICAgIGNvbnRyb2xzOiBbe1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGljb25QYXRoOiAnL3N0YXRpYy9pbWFnZXMvamlhLmpwZycsXHJcbiAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHRvcDogMzAwIC0gMzAsXHJcbiAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgIGhlaWdodDogMzBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgaWNvblBhdGg6ICcvc3RhdGljL2ltYWdlcy9qaWFuLmpwZycsXHJcbiAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHRvcDogMzMwIC0gMzAsXHJcbiAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgIGhlaWdodDogMzBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIHJhbmdlX3g6IDAsXHJcbiAgICAgIHJhbmdlX3k6IDAsXHJcbiAgICAgIGlzRGlzcGxheTp0cnVlLFxyXG4gICAgICBpc0xvYWRlZDpmYWxzZSxcclxuICAgICAgYnV0dG9uQ29udGVudDon5LiN5pi+56S65Y2g6aKG6ICFJ1xyXG4gICAgfVxyXG4gICAgYXN5bmMgdXBkYXRlZChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUudHlwZSlcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBpZihlLnR5cGUgPT0gJ2VuZCcpe1xyXG4gICAgICAgIGlmKHRoaXMuaXNEaXNwbGF5JiZ0aGlzLmlzTG9hZGVkKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjIyMjIyMjIyMlwiKVxyXG4gICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAvLyAgIHNlbGYuZ2V0VHJhY2VzKClcclxuICAgICAgICAgIC8vIH0sIDUwMCk7XHJcbiAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+e1xyXG4gICAgICAgICAgLy8gICBzZWxmLmRyYXdBdmF0YXIoc2VsZi5tYXJrZXJzKVxyXG4gICAgICAgICAgLy8gfSwxMDAwKTtcclxuICAgICAgICAgLy8gYXdhaXQgdGhpcy5nZXRUcmFjZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gICAgICBcclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuICAgIG1hcmtlcnRhcChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKDY2NjY2NjY2NjY2NjY2Nik7XHJcbiAgICAgIGlmKGUubWFya2VySWQhPTApe1xyXG4gICAgICAgIGlmKHRoaXMubWFya2Vyc1tlLm1hcmtlcklkXS50cmFjZUlkcy5sZW5ndGg9PTEpe1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3RyYWNlc2hvdz90cmFjZUlkPSR7dGhpcy5tYXJrZXJzW2UubWFya2VySWRdLnRyYWNlSWRzWzBdfWB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3RyYWNlbGlzdD9sYXRpdHVkZT0ke3RoaXMubWFya2Vyc1tlLm1hcmtlcklkXS5sYXRpdHVkZX0mbG9uZ2l0dWRlPSR7dGhpcy5tYXJrZXJzW2UubWFya2VySWRdLmxvbmdpdHVkZX0mc2NlbmljPSR7dGhpcy5tYXJrZXJzW2UubWFya2VySWRdLm5hbWV9YH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9ZWxzZSBpZih0aGlzLmlzT2NjdXBpZWQpe1xyXG4gICAgICAgIGlmKHRoaXMubWFya2Vyc1tlLm1hcmtlcklkXS50cmFjZUlkcy5sZW5ndGg9PTEpe1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3RyYWNlc2hvdz90cmFjZUlkPSR7dGhpcy5tYXJrZXJzW2UubWFya2VySWRdLnRyYWNlSWRzWzBdfWB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3RyYWNlbGlzdD9sYXRpdHVkZT0ke3RoaXMubWFya2Vyc1tlLm1hcmtlcklkXS5sYXRpdHVkZX0mbG9uZ2l0dWRlPSR7dGhpcy5tYXJrZXJzW2UubWFya2VySWRdLmxvbmdpdHVkZX0mc2NlbmljPSR7dGhpcy5tYXJrZXJzW2UubWFya2VySWRdLm5hbWV9YH0pXHJcbiAgICAgICAgfSAgICAgICBcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDogYC9wYWdlcy9vY2N1cHk/bGF0aXR1ZGU9JHt0aGlzLmxhdGl0dWRlfSZsb25naXR1ZGU9JHt0aGlzLmxvbmdpdHVkZX1gfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgY29udHJvbHRhcChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUuY29udHJvbElkKVxyXG4gICAgICBpZihlLmNvbnRyb2xJZCA9PSAxKXtcclxuICAgICAgICB0aGlzLnNjYWxlID0gdGhpcy5zY2FsZSArIDE7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLnNjYWxlIC0gMTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgIGlmKHRoaXMuaXNEaXNwbGF5KXtcclxuICAgICAgICAvLyBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjMzMzMzMzMzMzMzMzMzMzMzXCIpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRUcmFjZXMoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0Q2VudGVyTG9jYXRpb24oKXtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBhd2FpdCB0aGlzLm1hcEN0eC5nZXRDZW50ZXJMb2NhdGlvbih7XHJcbiAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgc2VsZi5sYXRpdHVkZSA9IHJlcy5sYXRpdHVkZTtcclxuICAgICAgICAgIHNlbGYubG9uZ2l0dWRlID0gcmVzLmxvbmdpdHVkZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzLS0tLS0tLS0tLS0tLS0tLS0tLVwiLHJlcylcclxuICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0UmVnaW9uKCl7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgYXdhaXQgdGhpcy5tYXBDdHguZ2V0UmVnaW9uKHtcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgc2VsZi5yYW5nZV94ID0gcmVzLm5vcnRoZWFzdC5sYXRpdHVkZTtcclxuICAgICAgICAgIHNlbGYucmFuZ2VfeSA9IHJlcy5ub3J0aGVhc3QubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVnaW9uPT09PT09MTExMVwiLHJlcyxzZWxmLnJhbmdlX3gsc2VsZi5yYW5nZV95KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVnaW9uPT09PT09XCIsdGhpcy5yYW5nZV94LHRoaXMucmFuZ2VfeSlcclxuICAgIH1cclxuICAgIGFzeW5jIGluaXRNYXJrZXJzKCl7XHJcbiAgICAgIHRoaXMubWFya2VycyA9IFtdXHJcbiAgICAgIGxldCB1cmwgPSBiYXNlVXJsICsgYC90cmFjZS9pc09jY3VwaWVkP2xhdGl0dWRlPSR7dGhpcy5sYXRpdHVkZX0mbG9uZ2l0dWRlPSR7dGhpcy5sb25naXR1ZGV9JnVzZXJJZD0ke3RoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIuaWR9YDtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxLmdldCh1cmwpLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVBdmF0YXJFcnJvci4uLlwiLCBlcnIuZGF0YSl9KVxyXG4gICAgICBpZighcmVzdWx0LmRhdGEuZGF0YS5pc09jY3VwaWVkKXtcclxuICAgICAgICAgIHRoaXMubWFya2Vycy5wdXNoKFxyXG4gICAgICAgICAgeyAgICAvL21hcmtlcnPnmoTnrKzkuIDkuKrmlbDmja7msLjov5zmmK/lvZPliY3kvY3nva7vvIzlhbbku5bnmoTmlbDmja7mnaXoh6p0cmFjZeihqFxyXG4gICAgICAgICAgICBpY29uUGF0aDogXCIvc3RhdGljL2ltYWdlcy9vY2N1cHkucG5nXCIsXHJcbiAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICBsYXRpdHVkZTogdGhpcy5sYXRpdHVkZSxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiB0aGlzLmxvbmdpdHVkZSxcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICB0cmFjZUlkczogW10sXHJcbiAgICAgICAgICAgIGF2YXRhcnM6W10gICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmlzT2NjdXBpZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0VHJhY2VzKCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5zY2FsZT09PT09PT09PT09PT09PT1cIix0aGlzLnNjYWxlKVxyXG4gICAgICBhd2FpdCB0aGlzLmdldENlbnRlckxvY2F0aW9uKCk7XHJcbiAgICAgIGF3YWl0IHRoaXMuZ2V0UmVnaW9uKCk7XHJcbiAgICAgIHRoaXMuaW5pdE1hcmtlcnMoKTtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+e1xyXG4gICAgICAgICAgaWYoc2VsZi5yYW5nZV94Pj0xIHx8IHNlbGYucmFuZ2VfeT49MSl7XHJcbiAgICAgICAgICAgIHNlbGYucmFuZ2VfeCA9IHNlbGYucmFuZ2VfeCAtIHNlbGYubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgIHNlbGYucmFuZ2VfeSA9IHNlbGYucmFuZ2VfeSAtIHNlbGYubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IHVybCA9IGJhc2VVcmwgKyBgL3RyYWNlL2dldFRyYWNlcz9sYXRpdHVkZT0ke3NlbGYubGF0aXR1ZGV9JmxvbmdpdHVkZT0ke3NlbGYubG9uZ2l0dWRlfSZyYW5nZV94PSR7c2VsZi5yYW5nZV94fSZyYW5nZV95PSR7c2VsZi5yYW5nZV95fWA7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIjExMTExMTExMTExMTIyMjIyMjIyMjIyMjIyMjIyXCIpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmxhdGl0dWRlLHNlbGYubG9uZ2l0dWRlLHNlbGYucmFuZ2VfeCxzZWxmLnJhbmdlX3kpXHJcbiAgICAgICAgICBjb25zdCB0cmFjZXMgPSBhd2FpdCByZXEuZ2V0KHVybCkuY2F0Y2goKGVycik9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVBdmF0YXJFcnJvci4uLlwiLCBlcnIuZGF0YSl9KVxyXG4gICAgICAgICAgaWYgKHRyYWNlcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdHJhY2VzLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgbGV0IHNjZW5pY2VzID0gXy5ncm91cEJ5KGRhdGEsZnVuY3Rpb24ob2JqKXtyZXR1cm4gb2JqLnNjZW5pY30pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNjZW5pY2VzPT09PT09PT09PT09PT1cIixzY2VuaWNlcylcclxuICAgICAgICAgICAgbGV0IGsgPSAwO1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgaW4gc2NlbmljZXMpIHtcclxuICAgICAgICAgICAgICBsZXQgbWFya2VyID0ge307XHJcbiAgICAgICAgICAgICAgayA9IGsgKyAxO1xyXG4gICAgICAgICAgICAgIG1hcmtlclsnaWQnXSA9IGs7XHJcbiAgICAgICAgICAgICAgbWFya2VyWydsYXRpdHVkZSddID0gc2NlbmljZXNbaV1bMF0ubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgICAgbWFya2VyWydsb25naXR1ZGUnXSA9IHNjZW5pY2VzW2ldWzBdLmxvbmdpdHVkZTtcclxuICAgICAgICAgICAgICBtYXJrZXJbJ3dpZHRoJ10gPSAzMDtcclxuICAgICAgICAgICAgICBtYXJrZXJbJ2hlaWdodCddID0gMzA7XHJcbiAgICAgICAgICAgICAgbWFya2VyWyduYW1lJ10gPSBpO1xyXG4gICAgICAgICAgICAgIG1hcmtlclsndHJhY2VJZHMnXSA9IF8ucGx1Y2soc2NlbmljZXNbaV0sICdpZCcpO1xyXG4gICAgICAgICAgICAgIG1hcmtlclsnYXZhdGFycyddID0gXy5wbHVjayhzY2VuaWNlc1tpXSwgJ2F2YXRhcicpO1xyXG4gICAgICAgICAgICAgIHNlbGYubWFya2Vycy5wdXNoKG1hcmtlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFRpbWVvdXQoYXN5bmMoKT0+e1xyXG4gICAgICAgICAgICBhd2FpdCBzZWxmLmRyYXdBdmF0YXIodGhpcy5tYXJrZXJzKTtcclxuICAgICAgICAgIH0sMjAwKSBcclxuICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XHJcbiAgICAgICAgfSwxMDAwKTtcclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBkcmF3QXZhdGFyKG1hcmtlcnMpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcIjQ0NDQ0NDQ0NDQ0NDRcIixtYXJrZXJzKVxyXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgY29uc3QgY3R4ID0gd2VweS5jcmVhdGVDYW52YXNDb250ZXh0KCdteUNhbnZhcycpO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKClcclxuICAgICAgY29uc29sZS5sb2cobWFya2Vycy5sZW5ndGgpXHJcbiAgICAgIGZvcih2YXIgaj0wOyBqIDwgbWFya2Vycy5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWFya2Vyc1tqXS5hdmF0YXJzWzBdKVxyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpIDwgbWFya2Vyc1tqXS5hdmF0YXJzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgIGN0eC5hcmMoMTUraSozMCwgMTUraiozMCwgMTUsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY3R4LmNsaXAoKTtcclxuICAgICAgZm9yKHZhciBqPTA7IGogPCBtYXJrZXJzLmxlbmd0aDsgaisrKXtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaSA8IG1hcmtlcnNbal0uYXZhdGFycy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKG1hcmtlcnNbal0uYXZhdGFyc1tpXSwgMCszMCppLCAzMCpqLCAzMCwgMzApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSAgICAgIFxyXG4gICAgICBjdHguc2F2ZSgpXHJcbiAgICAgIGN0eC5kcmF3KHRydWUsIGFzeW5jICgpPT57XHJcbiAgICAgICAgLy/nu5jliLbmlrnms5VcclxuICAgICAgICBmb3IodmFyIGo9MDsgaiA8IG1hcmtlcnMubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5jYW52YXNUb1RlbXBGaWxlUGF0aCh7XHJcbiAgICAgICAgICAgIHg6MCxcclxuICAgICAgICAgICAgeTozMCpqLFxyXG4gICAgICAgICAgICB3aWR0aDozMCptYXJrZXJzW2pdLmF2YXRhcnMubGVuZ3RoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6MzAsXHJcbiAgICAgICAgICAgIGRlc3RXaWR0aDozMCptYXJrZXJzW2pdLmF2YXRhcnMubGVuZ3RoLFxyXG4gICAgICAgICAgICBkZXN0SGVpZ2h0OjMwLFxyXG4gICAgICAgICAgICBjYW52YXNJZDogJ215Q2FudmFzJyxcclxuICAgICAgICAgICAgZmlsZVR5cGU6ICdqcGVnJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8gaWYobWFya2Vyc1tqXS5uYW1lPT0n5biC5pS/5bqcJyl7XHJcbiAgICAgICAgICBzZWxmLmltYWdlVXJsID0gcmVzLnRlbXBGaWxlUGF0aFxyXG4gICAgICAgICAgbWFya2Vyc1tqXVsnaWNvblBhdGgnXSA9IHJlcy50ZW1wRmlsZVBhdGhcclxuICAgICAgICAgIC8vIGNvbnN0IHNhdmVSZXMgPSBhd2FpdCB3ZXB5LnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG4gICAgICAgICAgLy8gICBmaWxlUGF0aDogcmVzLnRlbXBGaWxlUGF0aFxyXG4gICAgICAgICAgLy8gfSkuY2F0Y2goKGVycik9PntcclxuICAgICAgICAgIC8vICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAvLyBpZihzYXZlUmVzKXtcclxuICAgICAgICAgIC8vICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgLy8gICAgIHRpdGxlOiBcIuW3suS/neWtmOiHs+ebuOWGjFwiLFxyXG4gICAgICAgICAgLy8gICAgIGljb246IFwibm9uZVwiXHJcbiAgICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLm1hcmtlcnMgPSBtYXJrZXJzO1xyXG4gICAgICAgIHNlbGYuJGFwcGx5KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKipcIix0aGlzLm1hcmtlcnMpIFxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgd3guc3dpdGNoVGFiKHt1cmw6ICcvcGFnZXMvYWJsdW0nfSlcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgdXNlckxvZ2luKGUpIHtcclxuICAgICAgICBjb25zdCB1c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJbmZvKVxyXG4gICAgICAgIGlmICh1c2VySW5mbykge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5nID0gYXdhaXQgd2VweS5nZXRTZXR0aW5nKClcclxuICAgICAgICAgICAgaWYgKHNldHRpbmcuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXHJcbiAgICAgICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8gPSBpbmZvLnVzZXJJbmZvXHJcbiAgICAgICAgICAgICAgbGV0IHVybCA9IGJhc2VVcmwgKyAnL2F1dGgvdXBkYXRlVXNlcidcclxuICAgICAgICAgICAgICBjb25zdCBzZXREYXRhID0geydpZCc6dGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlci5pZCwgJ25hbWUnOiBpbmZvLnVzZXJJbmZvLm5pY2tOYW1lLCAnYXZhdGFyJzogaW5mby51c2VySW5mby5hdmF0YXJVcmwsICdnZW5kZXInOiBpbmZvLnVzZXJJbmZvLmdlbmRlcn1cclxuICAgICAgICAgICAgICBhd2FpdCByZXEucG9zdCh1cmwsIHNldERhdGEpLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZUF2YXRhckVycm9yLi4uXCIsIGVyci5kYXRhKX0pXHJcbiAgICAgICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlci5uYW1lID0gaW5mby51c2VySW5mby5uaWNrTmFtZTtcclxuICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyLmF2YXRhciA9IGluZm8udXNlckluZm8uYXZhdGFyVXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe3VybDogJy9wYWdlcy9hYmx1bSd9KVxyXG4gICAgICAgICAgfSAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgICBhc3luYyBnZXRDZW50ZXJMb2NhdGlvbigpe1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0Q2VudGVyTG9jYXRpb24oKVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgZGlzUGxheSgpe1xyXG4gICAgICAgIGlmKHRoaXMuaXNEaXNwbGF5KXtcclxuICAgICAgICAgIHRoaXMuaXNEaXNwbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmJ1dHRvbkNvbnRlbnQgPSAn5pi+56S65Y2g6aKG6ICFJztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuaXNEaXNwbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuYnV0dG9uQ29udGVudCA9ICfkuI3mmL7npLrljaDpoobogIUnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgdGhpcy5pbml0TWFya2VycygpO1xyXG4gICAgICAgIHRoaXMub25Mb2FkKCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=