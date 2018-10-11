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

var Post = function (_wepy$page) {
  _inherits(Post, _wepy$page);

  function Post() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Post);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Post.__proto__ || Object.getPrototypeOf(Post)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '足迹占领'
    }, _this.data = {
      content: '',
      locationName: '',
      nickName: '',
      avatar: '',
      dateString: '',
      imageUrl: '',
      canvasHeight: 100
    }, _this.methods = {
      saveImageToPhotosAlbum: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var saveRes, setting;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wepy2.default.saveImageToPhotosAlbum({
                    filePath: this.imageUrl
                  }).catch(function (err) {
                    return false;
                  });

                case 2:
                  saveRes = _context.sent;

                  if (!saveRes) {
                    _context.next = 7;
                    break;
                  }

                  _wepy2.default.showToast({
                    title: "已保存至相册",
                    icon: "none"
                  });
                  _context.next = 14;
                  break;

                case 7:
                  _wepy2.default.showToast({
                    title: "保存失败",
                    icon: "none"
                  });
                  _wepy2.default.showLoading({
                    title: '加载中',
                    mask: true
                  });
                  _context.next = 11;
                  return _wepy2.default.getSetting();

                case 11:
                  setting = _context.sent;

                  if (setting.authSetting["scope.writePhotosAlbum"] === false) {
                    this.showOpenSetting = true;
                    this.$apply();
                  }
                  _wepy2.default.hideLoading();

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function saveImageToPhotosAlbum() {
          return _ref2.apply(this, arguments);
        }

        return saveImageToPhotosAlbum;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Post, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
        var _this2 = this;

        var self, ctx, width, height;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.nickName = this.$parent.globalData.user.name;
                this.avatar = this.$parent.globalData.user.avatar;
                this.locationName = e.locationName;
                this.content = e.content;
                this.dateString = e.dateString;
                self = this;
                ctx = _wepy2.default.createCanvasContext('myCanvas');
                width = _wepy2.default.getSystemInfoSync().windowWidth;
                height = _wepy2.default.getSystemInfoSync().windowHeight - 50;

                this.canvasHeight = height;
                console.log("canvasHeight===========", this.canvasHeight);
                this.$apply();
                ctx.rect(5, 5, width - 10, height - 10);
                ctx.stroke();
                //   //const radius = width * 105/430
                ctx.setFontSize(14);
                ctx.fillText(this.nickName, 105, 35);
                ctx.fillText(this.content, 90, 65);
                ctx.fillText(this.dateString, 15, height - 80);
                ctx.fillText(this.locationName, 30, height - 40);
                ctx.save();
                ctx.restore();
                ctx.beginPath();
                ctx.drawImage("/static/images/test.jpg", 5, 85, width - 10, height - 180);
                ctx.drawImage("/static/images/address.png", 10, height - 55, 13, 20);
                ctx.stroke();

                ctx.save();
                ctx.beginPath();
                ctx.arc(45, 45, 35, 0, 2 * Math.PI);
                ctx.arc(width - 70, height - 45, 40, 0, 2 * Math.PI);
                // ctx.stroke();
                ctx.clip();
                ctx.drawImage(this.avatar, 10, 10, 70, 70);
                ctx.drawImage("/static/images/qrcode.jpg", width - 110, height - 85, 80, 80);
                ctx.save();
                ctx.draw(true, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var res;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return _wepy2.default.canvasToTempFilePath({
                            x: 0,
                            y: 0,
                            width: width,
                            height: height,
                            destWidth: width,
                            destHeight: height,
                            canvasId: 'myCanvas',
                            fileType: 'jpeg'
                          });

                        case 2:
                          res = _context2.sent;

                          self.imageUrl = res.tempFilePath;
                          self.$apply();

                        case 5:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, _this2);
                })));

              case 34:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onLoad(_x) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Post;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Post , 'pages/post'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuanMiXSwibmFtZXMiOlsiUG9zdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiY29udGVudCIsImxvY2F0aW9uTmFtZSIsIm5pY2tOYW1lIiwiYXZhdGFyIiwiZGF0ZVN0cmluZyIsImltYWdlVXJsIiwiY2FudmFzSGVpZ2h0IiwibWV0aG9kcyIsInNhdmVJbWFnZVRvUGhvdG9zQWxidW0iLCJ3ZXB5IiwiZmlsZVBhdGgiLCJjYXRjaCIsImVyciIsInNhdmVSZXMiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJzaG93TG9hZGluZyIsIm1hc2siLCJnZXRTZXR0aW5nIiwic2V0dGluZyIsImF1dGhTZXR0aW5nIiwic2hvd09wZW5TZXR0aW5nIiwiJGFwcGx5IiwiaGlkZUxvYWRpbmciLCJlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyIiwibmFtZSIsInNlbGYiLCJjdHgiLCJjcmVhdGVDYW52YXNDb250ZXh0Iiwid2lkdGgiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwiaGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInJlY3QiLCJzdHJva2UiLCJzZXRGb250U2l6ZSIsImZpbGxUZXh0Iiwic2F2ZSIsInJlc3RvcmUiLCJiZWdpblBhdGgiLCJkcmF3SW1hZ2UiLCJhcmMiLCJNYXRoIiwiUEkiLCJjbGlwIiwiZHJhdyIsImNhbnZhc1RvVGVtcEZpbGVQYXRoIiwieCIsInkiLCJkZXN0V2lkdGgiLCJkZXN0SGVpZ2h0IiwiY2FudmFzSWQiLCJmaWxlVHlwZSIsInJlcyIsInRlbXBGaWxlUGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZUFBUSxF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NkJBRE87O0FBV2I5QiwrQkFBS3pCLFFBQUwsR0FBZ0J1RCxJQUFJQyxZQUFwQjtBQUNBL0IsK0JBQUtQLE1BQUw7O0FBWmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFsRDhCZCxlQUFLcUQsSTs7a0JBQWxCbEUsSSIsImZpbGUiOiJwb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbiAgaW1wb3J0IHsgYmFzZVVybCwgYXBwSWR9IGZyb20gJ0AvY29uZmlnJ1xyXG4gIGltcG9ydCByZXEgZnJvbSAnQC9uZXR3b3JrJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Laz6L+55Y2g6aKGJ1xyXG4gICAgfSBcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGNvbnRlbnQ6JycsXHJcbiAgICAgIGxvY2F0aW9uTmFtZTonJyxcclxuICAgICAgbmlja05hbWU6ICcnLFxyXG4gICAgICBhdmF0YXI6JycsXHJcbiAgICAgIGRhdGVTdHJpbmc6JycsXHJcbiAgICAgIGltYWdlVXJsOicnLFxyXG4gICAgICBjYW52YXNIZWlnaHQ6MTAwXHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkxvYWQoZSkge1xyXG4gICAgICB0aGlzLm5pY2tOYW1lID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlci5uYW1lO1xyXG4gICAgICB0aGlzLmF2YXRhciA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIuYXZhdGFyO1xyXG4gICAgICB0aGlzLmxvY2F0aW9uTmFtZSA9IGUubG9jYXRpb25OYW1lO1xyXG4gICAgICB0aGlzLmNvbnRlbnQgPSBlLmNvbnRlbnQ7XHJcbiAgICAgIHRoaXMuZGF0ZVN0cmluZyA9IGUuZGF0ZVN0cmluZztcclxuICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcclxuICAgICAgY29uc3QgY3R4ID0gd2VweS5jcmVhdGVDYW52YXNDb250ZXh0KCdteUNhbnZhcycpO1xyXG4gICAgICBjb25zdCB3aWR0aCA9IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aDtcclxuICAgICAgY29uc3QgaGVpZ2h0ID0gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodC01MDtcclxuICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY2FudmFzSGVpZ2h0PT09PT09PT09PT1cIix0aGlzLmNhbnZhc0hlaWdodClcclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgY3R4LnJlY3QoNSw1LHdpZHRoLTEwLGhlaWdodC0xMClcclxuICAgICAgY3R4LnN0cm9rZSgpXHJcbiAgICAvLyAgIC8vY29uc3QgcmFkaXVzID0gd2lkdGggKiAxMDUvNDMwXHJcbiAgICAgIGN0eC5zZXRGb250U2l6ZSgxNCk7XHJcbiAgICAgIGN0eC5maWxsVGV4dCh0aGlzLm5pY2tOYW1lLDEwNSwzNSk7XHJcbiAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmNvbnRlbnQsOTAsNjUpO1xyXG4gICAgICBjdHguZmlsbFRleHQodGhpcy5kYXRlU3RyaW5nLDE1LCBoZWlnaHQtODApO1xyXG4gICAgICBjdHguZmlsbFRleHQodGhpcy5sb2NhdGlvbk5hbWUsMzAsIGhlaWdodC00MCk7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgICBjdHguZHJhd0ltYWdlKFwiL3N0YXRpYy9pbWFnZXMvdGVzdC5qcGdcIiw1LCA4NSwgd2lkdGgtMTAsIGhlaWdodC0xODApO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKFwiL3N0YXRpYy9pbWFnZXMvYWRkcmVzcy5wbmdcIiwxMCwgaGVpZ2h0LTU1LCAxMywgMjApO1xyXG4gICAgICBjdHguc3Ryb2tlKClcclxuICAgICAgXHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgICBjdHguYXJjKDQ1LCA0NSwgMzUsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgY3R4LmFyYyh3aWR0aC03MCwgaGVpZ2h0LTQ1LCA0MCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgIC8vIGN0eC5zdHJva2UoKTtcclxuICAgICAgY3R4LmNsaXAoKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmF2YXRhciwgMTAsIDEwLCA3MCwgNzApO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKFwiL3N0YXRpYy9pbWFnZXMvcXJjb2RlLmpwZ1wiLCB3aWR0aC0xMTAsIGhlaWdodC04NSwgODAsIDgwKTtcclxuICAgICAgY3R4LnNhdmUoKVxyXG4gICAgICBjdHguZHJhdyh0cnVlLCBhc3luYyAoKT0+e1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkuY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xyXG4gICAgICAgICAgeDowLFxyXG4gICAgICAgICAgeTowLFxyXG4gICAgICAgICAgd2lkdGg6d2lkdGgsXHJcbiAgICAgICAgICBoZWlnaHQ6aGVpZ2h0LFxyXG4gICAgICAgICAgZGVzdFdpZHRoOndpZHRoLFxyXG4gICAgICAgICAgZGVzdEhlaWdodDpoZWlnaHQsXHJcbiAgICAgICAgICBjYW52YXNJZDogJ215Q2FudmFzJyxcclxuICAgICAgICAgIGZpbGVUeXBlOiAnanBlZydcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxmLmltYWdlVXJsID0gcmVzLnRlbXBGaWxlUGF0aDtcclxuICAgICAgICBzZWxmLiRhcHBseSgpO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGFzeW5jIHNhdmVJbWFnZVRvUGhvdG9zQWxidW0oKXsgIFxyXG4gICAgICAgIGNvbnN0IHNhdmVSZXMgPSBhd2FpdCB3ZXB5LnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG4gICAgICAgICAgZmlsZVBhdGg6IHRoaXMuaW1hZ2VVcmxcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKHNhdmVSZXMpe1xyXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCLlt7Lkv53lrZjoh7Pnm7jlhoxcIixcclxuICAgICAgICAgICAgaWNvbjogXCJub25lXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCLkv53lrZjlpLHotKVcIixcclxuICAgICAgICAgICAgaWNvbjogXCJub25lXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgd2VweS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcclxuICAgICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCBzZXR0aW5nID0gYXdhaXQgd2VweS5nZXRTZXR0aW5nKCk7XHJcbiAgICAgICAgICBpZihzZXR0aW5nLmF1dGhTZXR0aW5nW1wic2NvcGUud3JpdGVQaG90b3NBbGJ1bVwiXSA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dPcGVuU2V0dGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=