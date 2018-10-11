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
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log("onload=======================");
                _context3.next = 3;
                return this.$parent.login(e);

              case 3:
                this.height = _wepy2.default.getSystemInfoSync().windowHeight;
                // const location = await wepy.getLocation({
                //     type: 'gcj02'
                //   });
                // this.markers[0].latitude = location.latitude;
                // this.markers[0].longitude = location.longitude;
                // this.latitude = location.latitude;
                // this.longitude = location.longitude;
                // this.mapCtx = wx.createMapContext('map'); 
                // this.mapCtx.moveToLocation();
                _context3.next = 6;
                return this.getTraces();

              case 6:
                _context3.next = 8;
                return this.drawAvatar(this.markers);

              case 8:
                //根据经纬度和userid去trace表中查找，当前位置我是否已经占领了，如果占领了，就显示头像，否则显示占领按钮
                this.isOccupied = true;
                if (this.isOccupied) {
                  this.markers[0].iconPath = 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLPlaI4hfpwT2x1ePByeZibSl3snWZGNIhLGJ2Z39E7ea4v36rjP5xI7GZVBllHCAGtm8KpPdxoyWg/132';
                }
                console.log(this.markers);
                this.$apply();

              case 12:
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
        var self;
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
                self = this;
                _context9.next = 9;
                return this.mapCtx.getCenterLocation({
                  success: function success(res) {
                    self.latitude = res.latitude;
                    self.longitude = res.longitude;
                    console.log("res-------------------", res);
                    var url = _config.baseUrl + ('/trace/getTraces?latitude=' + self.latitude + '&longitude=' + self.longitude + '&range_x=' + self.range_x + '&range_y=' + self.range_y);
                    //console.log(this.latitude,this.longitude,this.range_x,this.range_y)
                    var traces = _network2.default.get(url).catch(function (err) {
                      console.log("updateAvatarError...", err.data);
                    });
                    if (traces.data) {
                      var data = traces.data.data;
                      var scenices = _underscore2.default.groupBy(data, function (obj) {
                        return obj.scenic;
                      });
                      console.log("scenices==============", scenices);
                      var k = 0;
                      for (var i in scenices) {
                        var marker = {};
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
                    self.$apply();
                  }
                });

              case 9:

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpc09jY3VwaWVkIiwiaW1hZ2VVcmwiLCJoZWlnaHQiLCJzY2FsZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwibWFya2VycyIsImljb25QYXRoIiwiaWQiLCJuYW1lIiwid2lkdGgiLCJ0cmFjZUlkcyIsImF2YXRhcnMiLCJjb250cm9scyIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImNsaWNrYWJsZSIsInJhbmdlX3giLCJyYW5nZV95IiwibWV0aG9kcyIsInN0YXJ0R2FtZSIsInd4Iiwic3dpdGNoVGFiIiwidXJsIiwidXNlckxvZ2luIiwiZSIsInVzZXJJbmZvIiwiZGV0YWlsIiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwid2VweSIsImdldFNldHRpbmciLCJzZXR0aW5nIiwiYXV0aFNldHRpbmciLCJnZXRVc2VySW5mbyIsImluZm8iLCJiYXNlVXJsIiwic2V0RGF0YSIsInVzZXIiLCJuaWNrTmFtZSIsImF2YXRhclVybCIsImdlbmRlciIsInJlcSIsInBvc3QiLCJjYXRjaCIsImVyciIsImF2YXRhciIsImdldENlbnRlckxvY2F0aW9uIiwibG9naW4iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd0hlaWdodCIsImdldFRyYWNlcyIsImRyYXdBdmF0YXIiLCIkYXBwbHkiLCJ0eXBlIiwibWFya2VySWQiLCJ0cmFjZUlkIiwibGVuZ3RoIiwibmF2aWdhdGVUbyIsImNvbnRyb2xJZCIsImdldFJlZ2lvbiIsInNlbGYiLCJtYXBDdHgiLCJzdWNjZXNzIiwicmVzIiwibm9ydGhlYXN0IiwicHVzaCIsImluaXRNYXJrZXJzIiwiY3JlYXRlTWFwQ29udGV4dCIsIm1vdmVUb0xvY2F0aW9uIiwidHJhY2VzIiwiZ2V0Iiwic2NlbmljZXMiLCJfIiwiZ3JvdXBCeSIsIm9iaiIsInNjZW5pYyIsImsiLCJpIiwibWFya2VyIiwicGx1Y2siLCJjdHgiLCJjcmVhdGVDYW52YXNDb250ZXh0IiwiYmVnaW5QYXRoIiwiaiIsImFyYyIsIk1hdGgiLCJQSSIsImNsaXAiLCJkcmF3SW1hZ2UiLCJzYXZlIiwiZHJhdyIsImNhbnZhc1RvVGVtcEZpbGVQYXRoIiwieCIsInkiLCJkZXN0V2lkdGgiLCJkZXN0SGVpZ2h0IiwiY2FudmFzSWQiLCJmaWxlVHlwZSIsInRlbXBGaWxlUGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBa0NUQyxJLEdBQU87QUFDTEMsa0JBQVcsS0FETjtBQUVMQyxnQkFBUyxFQUZKO0FBR0xDLGNBQU8sSUFIRjtBQUlMQyxhQUFNLEVBSkQ7QUFLTEMsZ0JBQVUsQ0FMTDtBQU1MQyxpQkFBVyxDQU5OO0FBT0xDLGVBQVEsQ0FBQyxFQUFLO0FBQ1pDLGtCQUFVLEdBREg7QUFFUEMsWUFBSSxDQUZHO0FBR1BDLGNBQU0sSUFIQztBQUlQTCxrQkFBVSxFQUpIO0FBS1BDLG1CQUFXLEVBTEo7QUFNUEssZUFBTyxFQU5BO0FBT1BSLGdCQUFRLEVBUEQ7QUFRUFMsa0JBQVUsRUFSSDtBQVNQQyxpQkFBUztBQVRGLE9BQUQsQ0FQSDtBQWtCTEMsZ0JBQVUsQ0FBQztBQUNUTCxZQUFJLENBREs7QUFFVEQsa0JBQVUsd0JBRkQ7QUFHVE8sa0JBQVU7QUFDVkMsZ0JBQU0sQ0FESTtBQUVWQyxlQUFLLE1BQU0sRUFGRDtBQUdWTixpQkFBTyxFQUhHO0FBSVZSLGtCQUFRO0FBSkUsU0FIRDtBQVNUZSxtQkFBVztBQVRGLE9BQUQsRUFXVjtBQUNFVCxZQUFJLENBRE47QUFFRUQsa0JBQVUseUJBRlo7QUFHRU8sa0JBQVU7QUFDVkMsZ0JBQU0sQ0FESTtBQUVWQyxlQUFLLE1BQU0sRUFGRDtBQUdWTixpQkFBTyxF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RUFBLElBQUlqRixRQUFRc0QsTUFGWjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlDQUdPM0IsZUFBSzhELG9CQUFMLENBQTBCO0FBQzFDQywrQkFBRSxDQUR3QztBQUUxQ0MsK0JBQUUsS0FBR1YsQ0FGcUM7QUFHMUM3RSxtQ0FBTSxLQUFHSixRQUFRaUYsQ0FBUixFQUFXM0UsT0FBWCxDQUFtQmdELE1BSGM7QUFJMUMxRCxvQ0FBTyxFQUptQztBQUsxQ2dHLHVDQUFVLEtBQUc1RixRQUFRaUYsQ0FBUixFQUFXM0UsT0FBWCxDQUFtQmdELE1BTFU7QUFNMUN1Qyx3Q0FBVyxFQU4rQjtBQU8xQ0Msc0NBQVUsVUFQZ0M7QUFRMUNDLHNDQUFVO0FBUmdDLDJCQUExQixDQUhQOztBQUFBO0FBR0xsQyw2QkFISzs7QUFhWDtBQUNFSCwrQkFBSy9ELFFBQUwsR0FBZ0JrRSxJQUFJbUMsWUFBcEI7QUFDQWhHLGtDQUFRaUYsQ0FBUixFQUFXLFVBQVgsSUFBeUJwQixJQUFJbUMsWUFBN0I7O0FBZlM7QUFFb0JmLDZCQUZwQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWY7O0FBbUJBO0FBQ0EscUJBQUsvQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBek8rQnZCLGVBQUtzRSxJOztrQkFBbkIzRyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcbiAgaW1wb3J0IHsgYmFzZVVybCwgYXBwSWR9IGZyb20gJ0AvY29uZmlnJ1xuICBpbXBvcnQgcmVxIGZyb20gJ0AvbmV0d29yaydcbiAgaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotrPov7nljaDpooYnXG4gICAgfVxuICAgIFxuICAgIGFzeW5jIG9uTG9hZChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9ubG9hZD09PT09PT09PT09PT09PT09PT09PT09XCIpXG4gICAgICBhd2FpdCB0aGlzLiRwYXJlbnQubG9naW4oZSk7XG4gICAgICB0aGlzLmhlaWdodCA9IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHRcbiAgICAgIC8vIGNvbnN0IGxvY2F0aW9uID0gYXdhaXQgd2VweS5nZXRMb2NhdGlvbih7XG4gICAgICAvLyAgICAgdHlwZTogJ2djajAyJ1xuICAgICAgLy8gICB9KTtcbiAgICAgIC8vIHRoaXMubWFya2Vyc1swXS5sYXRpdHVkZSA9IGxvY2F0aW9uLmxhdGl0dWRlO1xuICAgICAgLy8gdGhpcy5tYXJrZXJzWzBdLmxvbmdpdHVkZSA9IGxvY2F0aW9uLmxvbmdpdHVkZTtcbiAgICAgIC8vIHRoaXMubGF0aXR1ZGUgPSBsb2NhdGlvbi5sYXRpdHVkZTtcbiAgICAgIC8vIHRoaXMubG9uZ2l0dWRlID0gbG9jYXRpb24ubG9uZ2l0dWRlO1xuICAgICAgLy8gdGhpcy5tYXBDdHggPSB3eC5jcmVhdGVNYXBDb250ZXh0KCdtYXAnKTsgXG4gICAgICAvLyB0aGlzLm1hcEN0eC5tb3ZlVG9Mb2NhdGlvbigpO1xuICAgICAgYXdhaXQgdGhpcy5nZXRUcmFjZXMoKTtcbiAgICAgIGF3YWl0IHRoaXMuZHJhd0F2YXRhcih0aGlzLm1hcmtlcnMpO1xuICAgICAgLy/moLnmja7nu4/nuqzluqblkox1c2VyaWTljrt0cmFjZeihqOS4reafpeaJvu+8jOW9k+WJjeS9jee9ruaIkeaYr+WQpuW3sue7j+WNoOmihuS6hu+8jOWmguaenOWNoOmihuS6hu+8jOWwseaYvuekuuWktOWDj++8jOWQpuWImeaYvuekuuWNoOmihuaMiemSrlxuICAgICAgdGhpcy5pc09jY3VwaWVkID0gdHJ1ZTtcbiAgICAgIGlmKHRoaXMuaXNPY2N1cGllZCl7XG4gICAgICAgIHRoaXMubWFya2Vyc1swXS5pY29uUGF0aCA9ICdodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9RMGo0VHdHVGZUTFBsYUk0aGZwd1QyeDFlUEJ5ZVppYlNsM3NuV1pHTkloTEdKMlozOUU3ZWE0djM2cmpQNXhJN0daVkJsbEhDQUd0bThLcFBkeG95V2cvMTMyJ1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2codGhpcy5tYXJrZXJzKTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgb25TaG93KGUpIHtcbiAgICAvLyAgdGhpcy5tYXBDdHggPSB3eC5jcmVhdGVNYXBDb250ZXh0KCdtYXAnKTsgXG4gICAgLy8gIHRoaXMubWFwQ3R4Lm1vdmVUb0xvY2F0aW9uKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uc2hvdz09PT09PT09PT09PT09PT09PT09PT1cIilcbiAgICAgIGF3YWl0IHRoaXMuZ2V0VHJhY2VzKCk7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBpc09jY3VwaWVkOmZhbHNlLFxuICAgICAgaW1hZ2VVcmw6JycsXG4gICAgICBoZWlnaHQ6MTAwMCxcbiAgICAgIHNjYWxlOjE2LFxuICAgICAgbGF0aXR1ZGU6IDAsXG4gICAgICBsb25naXR1ZGU6IDAsXG4gICAgICBtYXJrZXJzOlt7ICAgIC8vbWFya2Vyc+eahOesrOS4gOS4quaVsOaNruawuOi/nOaYr+W9k+WJjeS9jee9ru+8jOWFtuS7lueahOaVsOaNruadpeiHqnRyYWNl6KGoXG4gICAgICAgIGljb25QYXRoOiBcIiBcIixcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6ICfljafmp70nLFxuICAgICAgICBsYXRpdHVkZTogJycsXG4gICAgICAgIGxvbmdpdHVkZTogJycsXG4gICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgdHJhY2VJZHM6IFtdLFxuICAgICAgICBhdmF0YXJzOiBbXVxuICAgICAgfV0sXG4gICAgICBjb250cm9sczogW3tcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGljb25QYXRoOiAnL3N0YXRpYy9pbWFnZXMvamlhLmpwZycsXG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogMzAwIC0gMzAsXG4gICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9LFxuICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBpY29uUGF0aDogJy9zdGF0aWMvaW1hZ2VzL2ppYW4uanBnJyxcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiAzMzAgLSAzMCxcbiAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0sXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgICAgXSxcbiAgICAgIHJhbmdlX3g6IDAsXG4gICAgICByYW5nZV95OiAwXG4gICAgfVxuICAgIGFzeW5jIHVwZGF0ZWQoZSkge1xuICAgICAgY29uc29sZS5sb2coZS50eXBlKVxuICAgICAgaWYoZS50eXBlID09ICdlbmQnKXtcbiAgICAgIC8vICBhd2FpdCB0aGlzLmdldENlbnRlckxvY2F0aW9uKCk7XG4gICAgICAvLyAgYXdhaXQgdGhpcy5nZXRUcmFjZXMoKTtcbiAgICAgIC8vICBhd2FpdCB0aGlzLmRyYXdBdmF0YXIodGhpcy5tYXJrZXJzKTtcbiAgICAgIH0gICAgICBcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICAgIG1hcmtlcnRhcChlKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm1hcmtlcnNbZS5tYXJrZXJJZF0udHJhY2VJZCk7XG4gICAgICBpZih0aGlzLmlzT2NjdXBpZWQpe1xuICAgICAgICBpZih0aGlzLm1hcmtlcnNbZS5tYXJrZXJJZF0udHJhY2VJZHMubGVuZ3RoPT0xKXtcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6IGAvcGFnZXMvdHJhY2VzaG93P3RyYWNlSWQ9JHt0aGlzLm1hcmtlcnNbZS5tYXJrZXJJZF0udHJhY2VJZHNbMF19YH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDogYC9wYWdlcy90cmFjZWxpc3Q/bGF0aXR1ZGU9JHt0aGlzLm1hcmtlcnNbZS5tYXJrZXJJZF0ubGF0aXR1ZGV9JmxvbmdpdHVkZT0ke3RoaXMubWFya2Vyc1tlLm1hcmtlcklkXS5sb25naXR1ZGV9YH0pXG4gICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6IGAvcGFnZXMvb2NjdXB5P2xhdGl0dWRlPSR7dGhpcy5sYXRpdHVkZX0mbG9uZ2l0dWRlPSR7dGhpcy5sb25naXR1ZGV9YH0pXG4gICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGNvbnRyb2x0YXAoZSkge1xuICAgICAgY29uc29sZS5sb2coZS5jb250cm9sSWQpXG4gICAgICBpZihlLmNvbnRyb2xJZCA9PSAxKXtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHRoaXMuc2NhbGUgKyAxO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLnNjYWxlIC0gMTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHRoaXMuZ2V0UmVnaW9uKCk7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICBhc3luYyBnZXRDZW50ZXJMb2NhdGlvbigpe1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgYXdhaXQgdGhpcy5tYXBDdHguZ2V0Q2VudGVyTG9jYXRpb24oe1xuICAgICAgICBzdWNjZXNzOmZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgc2VsZi5sYXRpdHVkZSA9IHJlcy5sYXRpdHVkZTtcbiAgICAgICAgICBzZWxmLmxvbmdpdHVkZSA9IHJlcy5sb25naXR1ZGU7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZXMtLS0tLS0tLS0tLS0tLS0tLS0tXCIscmVzKVxuICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIGFzeW5jIGdldFJlZ2lvbigpe1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgYXdhaXQgdGhpcy5tYXBDdHguZ2V0UmVnaW9uKHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgICBzZWxmLnJhbmdlX3ggPSByZXMubm9ydGhlYXN0LmxhdGl0dWRlO1xuICAgICAgICAgIHNlbGYucmFuZ2VfeSA9IHJlcy5ub3J0aGVhc3QubG9uZ2l0dWRlO1xuICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0TWFya2Vycygpe1xuICAgICAgdGhpcy5tYXJrZXJzID0gW11cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB0aGlzLm1hcmtlcnMucHVzaChcbiAgICAgICAgeyAgICAvL21hcmtlcnPnmoTnrKzkuIDkuKrmlbDmja7msLjov5zmmK/lvZPliY3kvY3nva7vvIzlhbbku5bnmoTmlbDmja7mnaXoh6p0cmFjZeihqFxuICAgICAgICAgIGljb25QYXRoOiBcIiBcIixcbiAgICAgICAgICBpZDogMCxcbiAgICAgICAgICBuYW1lOiAn5Y2n5qe9JyxcbiAgICAgICAgICBsYXRpdHVkZTogJycsXG4gICAgICAgICAgbG9uZ2l0dWRlOiAnJyxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICB0cmFjZUlkczogW10sXG4gICAgICAgICAgYXZhdGFyczogW11cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICAgIGFzeW5jIGdldFRyYWNlcygpe1xuICAgICAgdGhpcy5pbml0TWFya2VycygpO1xuICAgICAgdGhpcy5tYXBDdHggPSB3eC5jcmVhdGVNYXBDb250ZXh0KCdtYXAnKTsgXG4gICAgICB0aGlzLm1hcEN0eC5tb3ZlVG9Mb2NhdGlvbigpO1xuICAgICAgYXdhaXQgdGhpcy5nZXRSZWdpb24oKTtcbiAgICAvLyAgYXdhaXQgdGhpcy5nZXRDZW50ZXJMb2NhdGlvbigpO1xuICAgICAgaWYodGhpcy5yYW5nZV94Pj0xIHx8IHRoaXMucmFuZ2VfeT49MSl7XG4gICAgICAgIHRoaXMucmFuZ2VfeCA9IHRoaXMucmFuZ2VfeCAtIHRoaXMubGF0aXR1ZGU7XG4gICAgICAgIHRoaXMucmFuZ2VfeSA9IHRoaXMucmFuZ2VfeSAtIHRoaXMubG9uZ2l0dWRlO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfVxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgYXdhaXQgdGhpcy5tYXBDdHguZ2V0Q2VudGVyTG9jYXRpb24oe1xuICAgICAgICBzdWNjZXNzOmZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgc2VsZi5sYXRpdHVkZSA9IHJlcy5sYXRpdHVkZTtcbiAgICAgICAgICBzZWxmLmxvbmdpdHVkZSA9IHJlcy5sb25naXR1ZGU7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZXMtLS0tLS0tLS0tLS0tLS0tLS0tXCIscmVzKVxuICAgICAgICAgIGxldCB1cmwgPSBiYXNlVXJsICsgYC90cmFjZS9nZXRUcmFjZXM/bGF0aXR1ZGU9JHtzZWxmLmxhdGl0dWRlfSZsb25naXR1ZGU9JHtzZWxmLmxvbmdpdHVkZX0mcmFuZ2VfeD0ke3NlbGYucmFuZ2VfeH0mcmFuZ2VfeT0ke3NlbGYucmFuZ2VfeX1gO1xuICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5sYXRpdHVkZSx0aGlzLmxvbmdpdHVkZSx0aGlzLnJhbmdlX3gsdGhpcy5yYW5nZV95KVxuICAgICAgICAgIGNvbnN0IHRyYWNlcyA9IHJlcS5nZXQodXJsKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVBdmF0YXJFcnJvci4uLlwiLCBlcnIuZGF0YSl9KVxuICAgICAgICAgIGlmICh0cmFjZXMuZGF0YSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0cmFjZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgbGV0IHNjZW5pY2VzID0gXy5ncm91cEJ5KGRhdGEsZnVuY3Rpb24ob2JqKXtyZXR1cm4gb2JqLnNjZW5pY30pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzY2VuaWNlcz09PT09PT09PT09PT09XCIsc2NlbmljZXMpXG4gICAgICAgICAgICBsZXQgayA9IDA7XG4gICAgICAgICAgICBmb3IodmFyIGkgaW4gc2NlbmljZXMpIHtcbiAgICAgICAgICAgICAgbGV0IG1hcmtlciA9IHt9O1xuICAgICAgICAgICAgICBrID0gayArIDE7XG4gICAgICAgICAgICAgIG1hcmtlclsnaWQnXSA9IGs7XG4gICAgICAgICAgICAgIG1hcmtlclsnbGF0aXR1ZGUnXSA9IHNjZW5pY2VzW2ldWzBdLmxhdGl0dWRlO1xuICAgICAgICAgICAgICBtYXJrZXJbJ2xvbmdpdHVkZSddID0gc2NlbmljZXNbaV1bMF0ubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICBtYXJrZXJbJ3dpZHRoJ10gPSAzMDtcbiAgICAgICAgICAgICAgbWFya2VyWydoZWlnaHQnXSA9IDMwO1xuICAgICAgICAgICAgICBtYXJrZXJbJ25hbWUnXSA9IGk7XG4gICAgICAgICAgICAgIG1hcmtlclsndHJhY2VJZHMnXSA9IF8ucGx1Y2soc2NlbmljZXNbaV0sICdpZCcpO1xuICAgICAgICAgICAgICBtYXJrZXJbJ2F2YXRhcnMnXSA9IF8ucGx1Y2soc2NlbmljZXNbaV0sICdhdmF0YXInKTtcbiAgICAgICAgICAgICAgc2VsZi5tYXJrZXJzLnB1c2gobWFya2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgY29uc29sZS5sb2coXCJtYXJrZXJzPT09PT09PT09PVwiLHRoaXMubWFya2VycylcbiAgICAgLy8gYXdhaXQgdGhpcy5kcmF3QXZhdGFyKHRoaXMubWFya2Vycyk7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICBhc3luYyBkcmF3QXZhdGFyKG1hcmtlcnMpe1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBjdHggPSB3ZXB5LmNyZWF0ZUNhbnZhc0NvbnRleHQoJ215Q2FudmFzJyk7XG4gICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgIGZvcih2YXIgaj0wOyBqIDwgbWFya2Vycy5sZW5ndGg7IGorKyl7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpIDwgbWFya2Vyc1tqXS5hdmF0YXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICBjdHguYXJjKDE1K2kqMzAsIDE1K2oqMzAsIDE1LCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGN0eC5jbGlwKCk7XG4gICAgICBmb3IodmFyIGo9MDsgaiA8IG1hcmtlcnMubGVuZ3RoOyBqKyspe1xuICAgICAgICBmb3IodmFyIGk9MDsgaSA8IG1hcmtlcnNbal0uYXZhdGFycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShtYXJrZXJzW2pdLmF2YXRhcnNbaV0sIDArMzAqaSwgMzAqaiwgMzAsIDMwKTtcbiAgICAgICAgfVxuICAgICAgfSAgICAgIFxuICAgICAgY3R4LnNhdmUoKVxuICAgICAgY3R4LmRyYXcodHJ1ZSwgYXN5bmMgKCk9PntcbiAgICAgICAgLy/nu5jliLbmlrnms5VcbiAgICAgICAgZm9yKHZhciBqPTA7IGogPCBtYXJrZXJzLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LmNhbnZhc1RvVGVtcEZpbGVQYXRoKHtcbiAgICAgICAgICAgIHg6MCxcbiAgICAgICAgICAgIHk6MzAqaixcbiAgICAgICAgICAgIHdpZHRoOjMwKm1hcmtlcnNbal0uYXZhdGFycy5sZW5ndGgsXG4gICAgICAgICAgICBoZWlnaHQ6MzAsXG4gICAgICAgICAgICBkZXN0V2lkdGg6MzAqbWFya2Vyc1tqXS5hdmF0YXJzLmxlbmd0aCxcbiAgICAgICAgICAgIGRlc3RIZWlnaHQ6MzAsXG4gICAgICAgICAgICBjYW52YXNJZDogJ215Q2FudmFzJyxcbiAgICAgICAgICAgIGZpbGVUeXBlOiAnanBlZycsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gaWYobWFya2Vyc1tqXS5uYW1lPT0n5biC5pS/5bqcJyl7XG4gICAgICAgICAgICBzZWxmLmltYWdlVXJsID0gcmVzLnRlbXBGaWxlUGF0aFxuICAgICAgICAgICAgbWFya2Vyc1tqXVsnaWNvblBhdGgnXSA9IHJlcy50ZW1wRmlsZVBhdGhcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgXG4gICAgICAvLyBcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgd3guc3dpdGNoVGFiKHt1cmw6ICcvcGFnZXMvYWJsdW0nfSlcbiAgICAgIH0sXG4gICAgICBhc3luYyB1c2VyTG9naW4oZSkge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvO1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VySW5mbylcbiAgICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgICAgICAgY29uc3Qgc2V0dGluZyA9IGF3YWl0IHdlcHkuZ2V0U2V0dGluZygpXG4gICAgICAgICAgICBpZiAoc2V0dGluZy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXG4gICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gaW5mby51c2VySW5mb1xuICAgICAgICAgICAgICBsZXQgdXJsID0gYmFzZVVybCArICcvYXV0aC91cGRhdGVVc2VyJ1xuICAgICAgICAgICAgICBjb25zdCBzZXREYXRhID0geydpZCc6dGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlci5pZCwgJ25hbWUnOiBpbmZvLnVzZXJJbmZvLm5pY2tOYW1lLCAnYXZhdGFyJzogaW5mby51c2VySW5mby5hdmF0YXJVcmwsICdnZW5kZXInOiBpbmZvLnVzZXJJbmZvLmdlbmRlcn1cbiAgICAgICAgICAgICAgYXdhaXQgcmVxLnBvc3QodXJsLCBzZXREYXRhKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlQXZhdGFyRXJyb3IuLi5cIiwgZXJyLmRhdGEpfSlcbiAgICAgICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlci5uYW1lID0gaW5mby51c2VySW5mby5uaWNrTmFtZTtcbiAgICAgICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlci5hdmF0YXIgPSBpbmZvLnVzZXJJbmZvLmF2YXRhclVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7dXJsOiAnL3BhZ2VzL2FibHVtJ30pXG4gICAgICAgICAgfSAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFxuICAgICAgYXN5bmMgZ2V0Q2VudGVyTG9jYXRpb24oKXtcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRDZW50ZXJMb2NhdGlvbigpXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=