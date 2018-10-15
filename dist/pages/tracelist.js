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

var Tracelist = function (_wepy$page) {
  _inherits(Tracelist, _wepy$page);

  function Tracelist() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tracelist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tracelist.__proto__ || Object.getPrototypeOf(Tracelist)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '足迹占领'
    }, _this.data = {
      scenic: '',
      list: [],
      isParised: false
    }, _this.methods = {
      startGame: function startGame() {
        wx.navigateTo({ url: '/pages/index' });
      },
      showTrace: function showTrace(traceId) {
        wx.navigateTo({ url: '/pages/traceshow?traceId=' + traceId });
      },
      changeParisecount: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(traceId, index) {
          var url, setData;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log("index==========", index);
                  if (this.isParised) {
                    this.list[index].parisecount--;
                    this.isParised = false;
                  } else {
                    this.list[index].parisecount++;
                    this.isParised = true;
                  }
                  this.$apply();
                  console.log(this.list[index].parisecount);
                  url = _config.baseUrl + ('/trace/updateTrace?id=' + traceId);
                  setData = { 'parisecount': this.list[index].parisecount };
                  _context.next = 8;
                  return _network2.default.post(url, setData).catch(function (err) {
                    console.log("updateAvatarError...", err.data);
                  });

                case 8:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function changeParisecount(_x, _x2) {
          return _ref2.apply(this, arguments);
        }

        return changeParisecount;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tracelist, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        var url, traces;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (e.scenic) {
                  this.scenic = e.scenic;
                }
                url = _config.baseUrl + ('/trace/getList?latitude=' + e.latitude + '&longitude=' + e.longitude);
                //console.log(this.latitude,this.longitude,this.range_x,this.range_y)

                _context2.next = 4;
                return _network2.default.get(url).catch(function (err) {
                  console.log("updateAvatarError...", err.data);
                });

              case 4:
                traces = _context2.sent;

                if (traces.data.data) {
                  this.list = traces.data.data;
                  this.$apply();
                }
                console.log("this.list", this.list);

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x3) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Tracelist;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Tracelist , 'pages/tracelist'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNlbGlzdC5qcyJdLCJuYW1lcyI6WyJUcmFjZWxpc3QiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNjZW5pYyIsImxpc3QiLCJpc1BhcmlzZWQiLCJtZXRob2RzIiwic3RhcnRHYW1lIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2hvd1RyYWNlIiwidHJhY2VJZCIsImNoYW5nZVBhcmlzZWNvdW50IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwicGFyaXNlY291bnQiLCIkYXBwbHkiLCJiYXNlVXJsIiwic2V0RGF0YSIsInJlcSIsInBvc3QiLCJjYXRjaCIsImVyciIsImUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImdldCIsInRyYWNlcyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBTyxFQURGO0FBRUxDLFlBQUssRUFGQTtBQUdMQyxpQkFBVTtBQUhMLEssUUFtQlBDLE8sR0FBVTtBQUNSQyxlQURRLHVCQUNJO0FBQ1ZDLFdBQUdDLFVBQUgsQ0FBYyxFQUFDQyxLQUFLLGNBQU4sRUFBZDtBQUNELE9BSE87QUFJUkMsZUFKUSxxQkFJRUMsT0FKRixFQUlVO0FBQ2hCSixXQUFHQyxVQUFILENBQWMsRUFBQ0MsbUNBQWlDRSxPQUFsQyxFQUFkO0FBQ0QsT0FOTztBQU9GQyx1QkFQRTtBQUFBLDZGQU9nQkQsT0FQaEIsRUFPeUJFLEtBUHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFOQywwQkFBUUMsR0FBUixDQUFZLGlCQUFaLEVBQThCRixLQUE5QjtBQUNBLHNCQUFHLEtBQUtULFNBQVIsRUFBa0I7QUFDaEIseUJBQUtELElBQUwsQ0FBVVUsS0FBVixFQUFpQkcsV0FBakI7QUFDQSx5QkFBS1osU0FBTCxHQUFpQixLQUFqQjtBQUNELG1CQUhELE1BR0s7QUFDSCx5QkFBS0QsSUFBTCxDQUFVVSxLQUFWLEVBQWlCRyxXQUFqQjtBQUNBLHlCQUFLWixTQUFMLEdBQWlCLElBQWpCO0FBQ0Q7QUFDRCx1QkFBS2EsTUFBTDtBQUNBSCwwQkFBUUMsR0FBUixDQUFZLEtBQUtaLElBQUwsQ0FBVVUsS0FBVixFQUFpQkcsV0FBN0I7QUFDSVAscUJBbEJFLEdBa0JJUyw4Q0FBbUNQLE9BQW5DLENBbEJKO0FBbUJBUSx5QkFuQkEsR0FtQlUsRUFBQyxlQUFlLEtBQUtoQixJQUFMLENBQVVVLEtBQVYsRUFBaUJHLFdBQWpDLEVBbkJWO0FBQUE7QUFBQSx5QkFvQkFJLGtCQUFJQyxJQUFKLENBQVNaLEdBQVQsRUFBY1UsT0FBZCxFQUF1QkcsS0FBdkIsQ0FBNkIsVUFBQ0MsR0FBRCxFQUFPO0FBQ3hDVCw0QkFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9DUSxJQUFJdEIsSUFBeEM7QUFBOEMsbUJBRDFDLENBcEJBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7OzRGQWRHdUIsQzs7Ozs7O0FBQ1gsb0JBQUdBLEVBQUV0QixNQUFMLEVBQVk7QUFDVix1QkFBS0EsTUFBTCxHQUFjc0IsRUFBRXRCLE1BQWhCO0FBQ0Q7QUFDR08sbUIsR0FBTVMsZ0RBQXFDTSxFQUFFQyxRQUF2QyxtQkFBNkRELEVBQUVFLFNBQS9ELEM7QUFDVjs7O3VCQUNxQk4sa0JBQUlPLEdBQUosQ0FBUWxCLEdBQVIsRUFBYWEsS0FBYixDQUFtQixVQUFDQyxHQUFELEVBQU87QUFDN0NULDBCQUFRQyxHQUFSLENBQVksc0JBQVosRUFBb0NRLElBQUl0QixJQUF4QztBQUE4QyxpQkFEM0IsQzs7O0FBQWYyQixzQjs7QUFFTixvQkFBSUEsT0FBTzNCLElBQVAsQ0FBWUEsSUFBaEIsRUFBc0I7QUFDcEIsdUJBQUtFLElBQUwsR0FBWXlCLE9BQU8zQixJQUFQLENBQVlBLElBQXhCO0FBQ0EsdUJBQUtnQixNQUFMO0FBQ0Q7QUFDREgsd0JBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXdCLEtBQUtaLElBQTdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBckJtQzBCLGVBQUtDLEk7O2tCQUF2QmhDLFMiLCJmaWxlIjoidHJhY2VsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbiAgaW1wb3J0IHsgYmFzZVVybCwgYXBwSWR9IGZyb20gJ0AvY29uZmlnJ1xyXG4gIGltcG9ydCByZXEgZnJvbSAnQC9uZXR3b3JrJ1xyXG4gIGltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2VsaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i2s+i/ueWNoOmihidcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHNjZW5pYzonJyxcclxuICAgICAgbGlzdDpbXSxcclxuICAgICAgaXNQYXJpc2VkOmZhbHNlXHJcbiAgICB9IFxyXG4gICAgYXN5bmMgb25Mb2FkKGUpIHtcclxuICAgICAgaWYoZS5zY2VuaWMpe1xyXG4gICAgICAgIHRoaXMuc2NlbmljID0gZS5zY2VuaWM7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHVybCA9IGJhc2VVcmwgKyBgL3RyYWNlL2dldExpc3Q/bGF0aXR1ZGU9JHtlLmxhdGl0dWRlfSZsb25naXR1ZGU9JHtlLmxvbmdpdHVkZX1gO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMubGF0aXR1ZGUsdGhpcy5sb25naXR1ZGUsdGhpcy5yYW5nZV94LHRoaXMucmFuZ2VfeSlcclxuICAgICAgY29uc3QgdHJhY2VzID0gYXdhaXQgcmVxLmdldCh1cmwpLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVBdmF0YXJFcnJvci4uLlwiLCBlcnIuZGF0YSl9KVxyXG4gICAgICBpZiAodHJhY2VzLmRhdGEuZGF0YSkge1xyXG4gICAgICAgIHRoaXMubGlzdCA9IHRyYWNlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcInRoaXMubGlzdFwiLHRoaXMubGlzdClcclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6ICcvcGFnZXMvaW5kZXgnfSlcclxuICAgICAgfSxcclxuICAgICAgc2hvd1RyYWNlKHRyYWNlSWQpe1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDogYC9wYWdlcy90cmFjZXNob3c/dHJhY2VJZD0ke3RyYWNlSWR9YH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGNoYW5nZVBhcmlzZWNvdW50KHRyYWNlSWQsIGluZGV4KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4PT09PT09PT09PVwiLGluZGV4KVxyXG4gICAgICAgIGlmKHRoaXMuaXNQYXJpc2VkKXtcclxuICAgICAgICAgIHRoaXMubGlzdFtpbmRleF0ucGFyaXNlY291bnQtLTtcclxuICAgICAgICAgIHRoaXMuaXNQYXJpc2VkID0gZmFsc2U7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLmxpc3RbaW5kZXhdLnBhcmlzZWNvdW50Kys7XHJcbiAgICAgICAgICB0aGlzLmlzUGFyaXNlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0W2luZGV4XS5wYXJpc2Vjb3VudCk7XHJcbiAgICAgICAgbGV0IHVybCA9IGJhc2VVcmwgKyBgL3RyYWNlL3VwZGF0ZVRyYWNlP2lkPSR7dHJhY2VJZH1gXHJcbiAgICAgICAgY29uc3Qgc2V0RGF0YSA9IHsncGFyaXNlY291bnQnOiB0aGlzLmxpc3RbaW5kZXhdLnBhcmlzZWNvdW50fVxyXG4gICAgICAgIGF3YWl0IHJlcS5wb3N0KHVybCwgc2V0RGF0YSkuY2F0Y2goKGVycik9PntcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlQXZhdGFyRXJyb3IuLi5cIiwgZXJyLmRhdGEpfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19