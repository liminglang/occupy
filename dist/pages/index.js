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
        iconPath: " ",
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
      range_y: 0
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
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
        var location;
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
                this.$apply();
                // this.mapCtx = wx.createMapContext('map'); 
                // this.mapCtx.moveToLocation();
                _context3.next = 12;
                return this.getTraces();

              case 12:
                _context3.next = 14;
                return this.drawAvatar(this.markers);

              case 14:
                //根据经纬度和userid去trace表中查找，当前位置我是否已经占领了，如果占领了，就显示头像，否则显示占领按钮
                this.isOccupied = true;
                if (this.isOccupied) {
                  this.markers[0].iconPath = 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLPlaI4hfpwT2x1ePByeZibSl3snWZGNIhLGJ2Z39E7ea4v36rjP5xI7GZVBllHCAGtm8KpPdxoyWg/132';
                }
                console.log(this.markers);
                this.$apply();

              case 18:
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
                //  this.mapCtx = wx.createMapContext('map'); 
                //  this.mapCtx.moveToLocation();
                console.log("onshow======================");
                _context4.next = 3;
                return this.getTraces();

              case 3:
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
      console.log(this.markers[e.markerId].traceId);
      if (this.isOccupied) {
        if (this.markers[e.markerId].traceIds.length == 1) {
          wx.navigateTo({ url: '/pages/traceshow?traceId=' + this.markers[e.markerId].traceIds[0] });
        } else {
          wx.navigateTo({ url: '/pages/tracelist?latitude=' + this.markers[e.markerId].latitude + '&longitude=' + this.markers[e.markerId].longitude });
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
                  }
                });

              case 3:
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
        iconPath: " ",
        id: 0,
        name: '卧槽',
        latitude: '',
        longitude: '',
        width: 30,
        height: 30,
        traceIds: [],
        avatars: []
      });
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
                this.mapCtx = wx.createMapContext('map');
                this.mapCtx.moveToLocation();
                _context9.next = 5;
                return this.getRegion();

              case 5:
                //  await this.getCenterLocation();
                if (this.range_x >= 1 || this.range_y >= 1) {
                  this.range_x = this.range_x - this.latitude;
                  this.range_y = this.range_y - this.longitude;
                  this.$apply();
                }
                url = _config.baseUrl + ('/trace/getTraces?latitude=' + this.latitude + '&longitude=' + this.longitude + '&range_x=' + this.range_x + '&range_y=' + this.range_y);
                //console.log(this.latitude,this.longitude,this.range_x,this.range_y)

                traces = _network2.default.get(url).catch(function (err) {
                  console.log("updateAvatarError...", err.data);
                });

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
                console.log("markers==========", this.markers);
                // await this.drawAvatar(this.markers);
                this.$apply();

              case 11:
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
                self = this;
                ctx = _wepy2.default.createCanvasContext('myCanvas');

                ctx.beginPath();
                for (j = 0; j < markers.length; j++) {
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
                  var j, res;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          j = 0;

                        case 1:
                          if (!(j < markers.length)) {
                            _context10.next = 10;
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
                          self.imageUrl = res.tempFilePath;
                          markers[j]['iconPath'] = res.tempFilePath;

                        case 7:
                          j++;
                          _context10.next = 1;
                          break;

                        case 10:
                        case 'end':
                          return _context10.stop();
                      }
                    }
                  }, _callee10, _this2);
                })));

                // 
                this.$apply();

              case 9:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpc09jY3VwaWVkIiwiaW1hZ2VVcmwiLCJoZWlnaHQiLCJzY2FsZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwibWFya2VycyIsImljb25QYXRoIiwiaWQiLCJuYW1lIiwid2lkdGgiLCJ0cmFjZUlkcyIsImF2YXRhcnMiLCJjb250cm9scyIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImNsaWNrYWJsZSIsInJhbmdlX3giLCJyYW5nZV95IiwibWV0aG9kcyIsInN0YXJ0R2FtZSIsInd4Iiwic3dpdGNoVGFiIiwidXJsIiwidXNlckxvZ2luIiwiZSIsInVzZXJJbmZvIiwiZGV0YWlsIiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwid2VweSIsImdldFNldHRpbmciLCJzZXR0aW5nIiwiYXV0aFNldHRpbmciLCJnZXRVc2VySW5mbyIsImluZm8iLCJiYXNlVXJsIiwic2V0RGF0YSIsInVzZXIiLCJuaWNrTmFtZSIsImF2YXRhclVybCIsImdlbmRlciIsInJlcSIsInBvc3QiLCJjYXRjaCIsImVyciIsImF2YXRhciIsImdldENlbnRlckxvY2F0aW9uIiwibG9naW4iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd0hlaWdodCIsImdldExvY2F0aW9uIiwidHlwZSIsImxvY2F0aW9uIiwiJGFwcGx5IiwiZ2V0VHJhY2VzIiwiZHJhd0F2YXRhciIsIm1hcmtlcklkIiwidHJhY2VJZCIsImxlbmd0aCIsIm5hdmlnYXRlVG8iLCJjb250cm9sSWQiLCJnZXRSZWdpb24iLCJzZWxmIiwibWFwQ3R4Iiwic3VjY2VzcyIsInJlcyIsIm5vcnRoZWFzdCIsInB1c2giLCJpbml0TWFya2VycyIsImNyZWF0ZU1hcENvbnRleHQiLCJtb3ZlVG9Mb2NhdGlvbiIsInRyYWNlcyIsImdldCIsInNjZW5pY2VzIiwiXyIsImdyb3VwQnkiLCJvYmoiLCJzY2VuaWMiLCJrIiwiaSIsIm1hcmtlciIsInBsdWNrIiwiY3R4IiwiY3JlYXRlQ2FudmFzQ29udGV4dCIsImJlZ2luUGF0aCIsImoiLCJhcmMiLCJNYXRoIiwiUEkiLCJjbGlwIiwiZHJhd0ltYWdlIiwic2F2ZSIsImRyYXciLCJjYW52YXNUb1RlbXBGaWxlUGF0aCIsIngiLCJ5IiwiZGVzdFdpZHRoIiwiZGVzdEhlaWdodCIsImNhbnZhc0lkIiwiZmlsZVR5cGUiLCJ0ZW1wRmlsZVBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQWlDVEMsSSxHQUFPO0FBQ0xDLGtCQUFXLEtBRE47QUFFTEMsZ0JBQVMsRUFGSjtBQUdMQyxjQUFPLElBSEY7QUFJTEMsYUFBTSxFQUpEO0FBS0xDLGdCQUFVLENBTEw7QUFNTEMsaUJBQVcsQ0FOTjtBQU9MQyxlQUFRLENBQUMsRUFBSztBQUNaQyxrQkFBVSxHQURIO0FBRVBDLFlBQUksQ0FGRztBQUdQQyxjQUFNLElBSEM7QUFJUEwsa0JBQVUsRUFKSDtBQUtQQyxtQkFBVyxFQUxKO0FBTVBLLGVBQU8sRUFOQTtBQU9QUixnQkFBUSxFQVBEO0FBUVBTLGtCQUFVLEVBUkg7QUFTUEMsaUJBQVM7QUFURixPQUFELENBUEg7QUFrQkxDLGdCQUFVLENBQUM7QUFDVEwsWUFBSSxDQURLO0FBRVRELGtCQUFVLHdCQUZEO0FBR1RPLGtCQUFVO0FBQ1ZDLGdCQUFNLENBREk7QUFFVkMsZUFBSyxNQUFNLEVBRkQ7QUFHVk4saUJBQU8sRUFIRztBQUlWUixrQkFBUTtBQUpFLFNBSEQ7QUFTVGUsbUJBQVc7QUFURixPQUFELEVBV1Y7QUFDRVQsWUFBSSxDQUROO0FBRUVELGtCQUFVLHlCQUZaO0FBR0VPLGtCQUFVO0FBQ1ZDLGdCQUFNLENBREk7QUFFVkMsZUFB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QUcxQy9FLG1DQUFNLEtBQUdKLFFBQVFtRixDQUFSLEVBQVc3RSxPQUFYLENBQW1Ca0QsTUFIYztBQUkxQzVELG9DQUFPLEVBSm1DO0FBSzFDa0csdUNBQVUsS0FBRzlGLFFBQVFtRixDQUFSLEVBQVc3RSxPQUFYLENBQW1Ca0QsTUFMVTtBQU0xQ3VDLHdDQUFXLEVBTitCO0FBTzFDQyxzQ0FBVSxVQVBnQztBQVExQ0Msc0NBQVU7QUFSZ0MsMkJBQTFCLENBSFA7O0FBQUE7QUFHTGxDLDZCQUhLOztBQWFYO0FBQ0VILCtCQUFLakUsUUFBTCxHQUFnQm9FLElBQUltQyxZQUFwQjtBQUNBbEcsa0NBQVFtRixDQUFSLEVBQVcsVUFBWCxJQUF5QnBCLElBQUltQyxZQUE3Qjs7QUFmUztBQUVvQmYsNkJBRnBCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZjs7QUFtQkE7QUFDQSxxQkFBS2hDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE5TitCeEIsZUFBS3dFLEk7O2tCQUFuQjdHLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuICBpbXBvcnQgeyBiYXNlVXJsLCBhcHBJZH0gZnJvbSAnQC9jb25maWcnXHJcbiAgaW1wb3J0IHJlcSBmcm9tICdAL25ldHdvcmsnXHJcbiAgaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotrPov7nljaDpooYnXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFzeW5jIG9uTG9hZChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25sb2FkPT09PT09PT09PT09PT09PT09PT09PT1cIilcclxuICAgICAgYXdhaXQgdGhpcy4kcGFyZW50LmxvZ2luKGUpO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHRcclxuICAgICAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCB3ZXB5LmdldExvY2F0aW9uKHtcclxuICAgICAgICAgIHR5cGU6ICdnY2owMidcclxuICAgICAgICB9KTtcclxuICAgICAgdGhpcy5sYXRpdHVkZSA9IGxvY2F0aW9uLmxhdGl0dWRlO1xyXG4gICAgICB0aGlzLmxvbmdpdHVkZSA9IGxvY2F0aW9uLmxvbmdpdHVkZTtcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAvLyB0aGlzLm1hcEN0eCA9IHd4LmNyZWF0ZU1hcENvbnRleHQoJ21hcCcpOyBcclxuICAgICAgLy8gdGhpcy5tYXBDdHgubW92ZVRvTG9jYXRpb24oKTtcclxuICAgICAgYXdhaXQgdGhpcy5nZXRUcmFjZXMoKTtcclxuICAgICAgYXdhaXQgdGhpcy5kcmF3QXZhdGFyKHRoaXMubWFya2Vycyk7XHJcbiAgICAgIC8v5qC55o2u57uP57qs5bqm5ZKMdXNlcmlk5Y67dHJhY2XooajkuK3mn6Xmib7vvIzlvZPliY3kvY3nva7miJHmmK/lkKblt7Lnu4/ljaDpoobkuobvvIzlpoLmnpzljaDpoobkuobvvIzlsLHmmL7npLrlpLTlg4/vvIzlkKbliJnmmL7npLrljaDpoobmjInpkq5cclxuICAgICAgdGhpcy5pc09jY3VwaWVkID0gdHJ1ZTtcclxuICAgICAgaWYodGhpcy5pc09jY3VwaWVkKXtcclxuICAgICAgICB0aGlzLm1hcmtlcnNbMF0uaWNvblBhdGggPSAnaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTBqNFR3R1RmVExQbGFJNGhmcHdUMngxZVBCeWVaaWJTbDNzbldaR05JaExHSjJaMzlFN2VhNHYzNnJqUDV4STdHWlZCbGxIQ0FHdG04S3BQZHhveVdnLzEzMidcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm1hcmtlcnMpO1xyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uU2hvdyhlKSB7XHJcbiAgICAvLyAgdGhpcy5tYXBDdHggPSB3eC5jcmVhdGVNYXBDb250ZXh0KCdtYXAnKTsgXHJcbiAgICAvLyAgdGhpcy5tYXBDdHgubW92ZVRvTG9jYXRpb24oKTtcclxuICAgICAgY29uc29sZS5sb2coXCJvbnNob3c9PT09PT09PT09PT09PT09PT09PT09XCIpXHJcbiAgICAgIGF3YWl0IHRoaXMuZ2V0VHJhY2VzKCk7XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBpc09jY3VwaWVkOmZhbHNlLFxyXG4gICAgICBpbWFnZVVybDonJyxcclxuICAgICAgaGVpZ2h0OjEwMDAsXHJcbiAgICAgIHNjYWxlOjE2LFxyXG4gICAgICBsYXRpdHVkZTogMCxcclxuICAgICAgbG9uZ2l0dWRlOiAwLFxyXG4gICAgICBtYXJrZXJzOlt7ICAgIC8vbWFya2Vyc+eahOesrOS4gOS4quaVsOaNruawuOi/nOaYr+W9k+WJjeS9jee9ru+8jOWFtuS7lueahOaVsOaNruadpeiHqnRyYWNl6KGoXHJcbiAgICAgICAgaWNvblBhdGg6IFwiIFwiLFxyXG4gICAgICAgIGlkOiAwLFxyXG4gICAgICAgIG5hbWU6ICfljafmp70nLFxyXG4gICAgICAgIGxhdGl0dWRlOiAnJyxcclxuICAgICAgICBsb25naXR1ZGU6ICcnLFxyXG4gICAgICAgIHdpZHRoOiAzMCxcclxuICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgIHRyYWNlSWRzOiBbXSxcclxuICAgICAgICBhdmF0YXJzOiBbXVxyXG4gICAgICB9XSxcclxuICAgICAgY29udHJvbHM6IFt7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgaWNvblBhdGg6ICcvc3RhdGljL2ltYWdlcy9qaWEuanBnJyxcclxuICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgdG9wOiAzMDAgLSAzMCxcclxuICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgaGVpZ2h0OiAzMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBpY29uUGF0aDogJy9zdGF0aWMvaW1hZ2VzL2ppYW4uanBnJyxcclxuICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgdG9wOiAzMzAgLSAzMCxcclxuICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgaGVpZ2h0OiAzMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgcmFuZ2VfeDogMCxcclxuICAgICAgcmFuZ2VfeTogMFxyXG4gICAgfVxyXG4gICAgYXN5bmMgdXBkYXRlZChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUudHlwZSlcclxuICAgICAgaWYoZS50eXBlID09ICdlbmQnKXtcclxuICAgICAgLy8gIGF3YWl0IHRoaXMuZ2V0Q2VudGVyTG9jYXRpb24oKTtcclxuICAgICAgLy8gIGF3YWl0IHRoaXMuZ2V0VHJhY2VzKCk7XHJcbiAgICAgIC8vICBhd2FpdCB0aGlzLmRyYXdBdmF0YXIodGhpcy5tYXJrZXJzKTtcclxuICAgICAgfSAgICAgIFxyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG4gICAgbWFya2VydGFwKGUpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5tYXJrZXJzW2UubWFya2VySWRdLnRyYWNlSWQpO1xyXG4gICAgICBpZih0aGlzLmlzT2NjdXBpZWQpe1xyXG4gICAgICAgIGlmKHRoaXMubWFya2Vyc1tlLm1hcmtlcklkXS50cmFjZUlkcy5sZW5ndGg9PTEpe1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3RyYWNlc2hvdz90cmFjZUlkPSR7dGhpcy5tYXJrZXJzW2UubWFya2VySWRdLnRyYWNlSWRzWzBdfWB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3RyYWNlbGlzdD9sYXRpdHVkZT0ke3RoaXMubWFya2Vyc1tlLm1hcmtlcklkXS5sYXRpdHVkZX0mbG9uZ2l0dWRlPSR7dGhpcy5tYXJrZXJzW2UubWFya2VySWRdLmxvbmdpdHVkZX1gfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDogYC9wYWdlcy9vY2N1cHk/bGF0aXR1ZGU9JHt0aGlzLmxhdGl0dWRlfSZsb25naXR1ZGU9JHt0aGlzLmxvbmdpdHVkZX1gfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgY29udHJvbHRhcChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUuY29udHJvbElkKVxyXG4gICAgICBpZihlLmNvbnRyb2xJZCA9PSAxKXtcclxuICAgICAgICB0aGlzLnNjYWxlID0gdGhpcy5zY2FsZSArIDE7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLnNjYWxlIC0gMTtcclxuICAgICAgfVxyXG4gICAgICBhd2FpdCB0aGlzLmdldFJlZ2lvbigpO1xyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0Q2VudGVyTG9jYXRpb24oKXtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBhd2FpdCB0aGlzLm1hcEN0eC5nZXRDZW50ZXJMb2NhdGlvbih7XHJcbiAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgc2VsZi5sYXRpdHVkZSA9IHJlcy5sYXRpdHVkZTtcclxuICAgICAgICAgIHNlbGYubG9uZ2l0dWRlID0gcmVzLmxvbmdpdHVkZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzLS0tLS0tLS0tLS0tLS0tLS0tLVwiLHJlcylcclxuICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0UmVnaW9uKCl7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgYXdhaXQgdGhpcy5tYXBDdHguZ2V0UmVnaW9uKHtcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgc2VsZi5yYW5nZV94ID0gcmVzLm5vcnRoZWFzdC5sYXRpdHVkZTtcclxuICAgICAgICAgIHNlbGYucmFuZ2VfeSA9IHJlcy5ub3J0aGVhc3QubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaW5pdE1hcmtlcnMoKXtcclxuICAgICAgdGhpcy5tYXJrZXJzID0gW11cclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgdGhpcy5tYXJrZXJzLnB1c2goXHJcbiAgICAgICAgeyAgICAvL21hcmtlcnPnmoTnrKzkuIDkuKrmlbDmja7msLjov5zmmK/lvZPliY3kvY3nva7vvIzlhbbku5bnmoTmlbDmja7mnaXoh6p0cmFjZeihqFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiIFwiLFxyXG4gICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICBuYW1lOiAn5Y2n5qe9JyxcclxuICAgICAgICAgIGxhdGl0dWRlOiAnJyxcclxuICAgICAgICAgIGxvbmdpdHVkZTogJycsXHJcbiAgICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgdHJhY2VJZHM6IFtdLFxyXG4gICAgICAgICAgYXZhdGFyczogW11cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRUcmFjZXMoKXtcclxuICAgICAgdGhpcy5pbml0TWFya2VycygpO1xyXG4gICAgICB0aGlzLm1hcEN0eCA9IHd4LmNyZWF0ZU1hcENvbnRleHQoJ21hcCcpOyBcclxuICAgICAgdGhpcy5tYXBDdHgubW92ZVRvTG9jYXRpb24oKTtcclxuICAgICAgYXdhaXQgdGhpcy5nZXRSZWdpb24oKTtcclxuICAgIC8vICBhd2FpdCB0aGlzLmdldENlbnRlckxvY2F0aW9uKCk7XHJcbiAgICAgIGlmKHRoaXMucmFuZ2VfeD49MSB8fCB0aGlzLnJhbmdlX3k+PTEpe1xyXG4gICAgICAgIHRoaXMucmFuZ2VfeCA9IHRoaXMucmFuZ2VfeCAtIHRoaXMubGF0aXR1ZGU7XHJcbiAgICAgICAgdGhpcy5yYW5nZV95ID0gdGhpcy5yYW5nZV95IC0gdGhpcy5sb25naXR1ZGU7XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgdXJsID0gYmFzZVVybCArIGAvdHJhY2UvZ2V0VHJhY2VzP2xhdGl0dWRlPSR7dGhpcy5sYXRpdHVkZX0mbG9uZ2l0dWRlPSR7dGhpcy5sb25naXR1ZGV9JnJhbmdlX3g9JHt0aGlzLnJhbmdlX3h9JnJhbmdlX3k9JHt0aGlzLnJhbmdlX3l9YDtcclxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmxhdGl0dWRlLHRoaXMubG9uZ2l0dWRlLHRoaXMucmFuZ2VfeCx0aGlzLnJhbmdlX3kpXHJcbiAgICAgIGNvbnN0IHRyYWNlcyA9IHJlcS5nZXQodXJsKS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlQXZhdGFyRXJyb3IuLi5cIiwgZXJyLmRhdGEpfSlcclxuICAgICAgaWYgKHRyYWNlcy5kYXRhKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0cmFjZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgIGxldCBzY2VuaWNlcyA9IF8uZ3JvdXBCeShkYXRhLGZ1bmN0aW9uKG9iail7cmV0dXJuIG9iai5zY2VuaWN9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNjZW5pY2VzPT09PT09PT09PT09PT1cIixzY2VuaWNlcylcclxuICAgICAgICBsZXQgayA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHNjZW5pY2VzKSB7XHJcbiAgICAgICAgICBsZXQgbWFya2VyID0ge307XHJcbiAgICAgICAgICBrID0gayArIDE7XHJcbiAgICAgICAgICBtYXJrZXJbJ2lkJ10gPSBrO1xyXG4gICAgICAgICAgbWFya2VyWydsYXRpdHVkZSddID0gc2NlbmljZXNbaV1bMF0ubGF0aXR1ZGU7XHJcbiAgICAgICAgICBtYXJrZXJbJ2xvbmdpdHVkZSddID0gc2NlbmljZXNbaV1bMF0ubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgbWFya2VyWyd3aWR0aCddID0gMzA7XHJcbiAgICAgICAgICBtYXJrZXJbJ2hlaWdodCddID0gMzA7XHJcbiAgICAgICAgICBtYXJrZXJbJ25hbWUnXSA9IGk7XHJcbiAgICAgICAgICBtYXJrZXJbJ3RyYWNlSWRzJ10gPSBfLnBsdWNrKHNjZW5pY2VzW2ldLCAnaWQnKTtcclxuICAgICAgICAgIG1hcmtlclsnYXZhdGFycyddID0gXy5wbHVjayhzY2VuaWNlc1tpXSwgJ2F2YXRhcicpO1xyXG4gICAgICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJtYXJrZXJzPT09PT09PT09PVwiLHRoaXMubWFya2VycylcclxuICAgICAvLyBhd2FpdCB0aGlzLmRyYXdBdmF0YXIodGhpcy5tYXJrZXJzKTtcclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGRyYXdBdmF0YXIobWFya2Vycyl7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICBjb25zdCBjdHggPSB3ZXB5LmNyZWF0ZUNhbnZhc0NvbnRleHQoJ215Q2FudmFzJyk7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgICBmb3IodmFyIGo9MDsgaiA8IG1hcmtlcnMubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpIDwgbWFya2Vyc1tqXS5hdmF0YXJzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgIGN0eC5hcmMoMTUraSozMCwgMTUraiozMCwgMTUsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY3R4LmNsaXAoKTtcclxuICAgICAgZm9yKHZhciBqPTA7IGogPCBtYXJrZXJzLmxlbmd0aDsgaisrKXtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaSA8IG1hcmtlcnNbal0uYXZhdGFycy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKG1hcmtlcnNbal0uYXZhdGFyc1tpXSwgMCszMCppLCAzMCpqLCAzMCwgMzApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSAgICAgIFxyXG4gICAgICBjdHguc2F2ZSgpXHJcbiAgICAgIGN0eC5kcmF3KHRydWUsIGFzeW5jICgpPT57XHJcbiAgICAgICAgLy/nu5jliLbmlrnms5VcclxuICAgICAgICBmb3IodmFyIGo9MDsgaiA8IG1hcmtlcnMubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5jYW52YXNUb1RlbXBGaWxlUGF0aCh7XHJcbiAgICAgICAgICAgIHg6MCxcclxuICAgICAgICAgICAgeTozMCpqLFxyXG4gICAgICAgICAgICB3aWR0aDozMCptYXJrZXJzW2pdLmF2YXRhcnMubGVuZ3RoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6MzAsXHJcbiAgICAgICAgICAgIGRlc3RXaWR0aDozMCptYXJrZXJzW2pdLmF2YXRhcnMubGVuZ3RoLFxyXG4gICAgICAgICAgICBkZXN0SGVpZ2h0OjMwLFxyXG4gICAgICAgICAgICBjYW52YXNJZDogJ215Q2FudmFzJyxcclxuICAgICAgICAgICAgZmlsZVR5cGU6ICdqcGVnJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8gaWYobWFya2Vyc1tqXS5uYW1lPT0n5biC5pS/5bqcJyl7XHJcbiAgICAgICAgICAgIHNlbGYuaW1hZ2VVcmwgPSByZXMudGVtcEZpbGVQYXRoXHJcbiAgICAgICAgICAgIG1hcmtlcnNbal1bJ2ljb25QYXRoJ10gPSByZXMudGVtcEZpbGVQYXRoXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgIFxyXG4gICAgICAvLyBcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHd4LnN3aXRjaFRhYih7dXJsOiAnL3BhZ2VzL2FibHVtJ30pXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIHVzZXJMb2dpbihlKSB7XHJcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mbztcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VySW5mbylcclxuICAgICAgICBpZiAodXNlckluZm8pIHtcclxuICAgICAgICAgIGlmICghdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZyA9IGF3YWl0IHdlcHkuZ2V0U2V0dGluZygpXHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5nLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG4gICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gaW5mby51c2VySW5mb1xyXG4gICAgICAgICAgICAgIGxldCB1cmwgPSBiYXNlVXJsICsgJy9hdXRoL3VwZGF0ZVVzZXInXHJcbiAgICAgICAgICAgICAgY29uc3Qgc2V0RGF0YSA9IHsnaWQnOnRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIuaWQsICduYW1lJzogaW5mby51c2VySW5mby5uaWNrTmFtZSwgJ2F2YXRhcic6IGluZm8udXNlckluZm8uYXZhdGFyVXJsLCAnZ2VuZGVyJzogaW5mby51c2VySW5mby5nZW5kZXJ9XHJcbiAgICAgICAgICAgICAgYXdhaXQgcmVxLnBvc3QodXJsLCBzZXREYXRhKS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVBdmF0YXJFcnJvci4uLlwiLCBlcnIuZGF0YSl9KVxyXG4gICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIubmFtZSA9IGluZm8udXNlckluZm8ubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlci5hdmF0YXIgPSBpbmZvLnVzZXJJbmZvLmF2YXRhclVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgd3guc3dpdGNoVGFiKHt1cmw6ICcvcGFnZXMvYWJsdW0nfSlcclxuICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcclxuICAgICAgYXN5bmMgZ2V0Q2VudGVyTG9jYXRpb24oKXtcclxuICAgICAgICBhd2FpdCB0aGlzLmdldENlbnRlckxvY2F0aW9uKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19