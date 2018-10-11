'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

var Request = function () {
  function Request() {
    _classCallCheck(this, Request);

    this._header = {
      token: null
    };
    this._baseUrl = null;
    this._appId = null;
    this.interceptors = {
      request: null,
      response: null
    };

    var token = wx.getStorageSync('token');
    if (token) {
      this._header.token = token;
    }
  }

  _createClass(Request, [{
    key: 'request',
    value: function request(params) {
      var _this = this;

      console.log(this._header);

      var _ref = this.interceptors.request ? this.interceptors.request(params) : params,
          url = _ref.url,
          method = _ref.method,
          header = _ref.header,
          data = _ref.data;

      return _wepy2.default.request({
        url: (this._baseUrl || '') + url,
        method: method || METHOD.GET,
        data: data,
        header: _extends({
          appId: this._appId
        }, this._header, header)
      }).then(function (res) {
        return _this.interceptors.response ? _this.interceptors.response(res) : res;
      });
    }
  }, {
    key: 'get',
    value: function get(url, data, header) {
      return this.request({ url: url, method: METHOD.GET, header: header, data: data });
    }
  }, {
    key: 'post',
    value: function post(url, data, header) {
      return this.request({ url: url, method: METHOD.POST, header: header, data: data });
    }
  }, {
    key: 'put',
    value: function put(url, data, header) {
      return this.request({ url: url, method: METHOD.PUT, header: header, data: data });
    }
  }, {
    key: 'delete',
    value: function _delete(url, data, header) {
      return this.request({ url: url, method: METHOD.DELETE, header: header, data: data });
    }
  }, {
    key: 'token',
    value: function token(_token) {
      this._header.token = _token;
      return this;
    }
  }, {
    key: 'header',
    value: function header(_header) {
      this._header = _header;
      console.log("this._header", this._header);
      return this;
    }
  }, {
    key: 'baseUrl',
    value: function baseUrl(_baseUrl) {
      this._baseUrl = _baseUrl;
      return this;
    }
  }, {
    key: 'appId',
    value: function appId(_appId) {
      this._appId = _appId;
      return this;
    }
  }, {
    key: 'interceptor',
    value: function interceptor(request, response) {
      if (typeof request === 'function') {
        this.interceptors.request = request;
      }
      if (typeof request === 'function') {
        this.interceptors.response = response;
      }
      return this;
    }
  }]);

  return Request;
}();

exports.default = new Request();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1FVEhPRCIsIkdFVCIsIlBPU1QiLCJQVVQiLCJERUxFVEUiLCJSZXF1ZXN0IiwiX2hlYWRlciIsInRva2VuIiwiX2Jhc2VVcmwiLCJfYXBwSWQiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsInVybCIsIm1ldGhvZCIsImhlYWRlciIsImRhdGEiLCJ3ZXB5IiwiYXBwSWQiLCJ0aGVuIiwicmVzIiwiYmFzZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVM7QUFDYkMsT0FBSyxLQURRO0FBRWJDLFFBQU0sTUFGTztBQUdiQyxPQUFLLEtBSFE7QUFJYkMsVUFBUTtBQUpLLENBQWY7O0lBTU1DLE87QUFhSixxQkFBYztBQUFBOztBQUFBLFNBWmRDLE9BWWMsR0FaSjtBQUNSQyxhQUFPO0FBREMsS0FZSTtBQUFBLFNBVGRDLFFBU2MsR0FUSCxJQVNHO0FBQUEsU0FQZEMsTUFPYyxHQVBMLElBT0s7QUFBQSxTQUxkQyxZQUtjLEdBTEM7QUFDYkMsZUFBUyxJQURJO0FBRWJDLGdCQUFVO0FBRkcsS0FLRDs7QUFDWixRQUFNTCxRQUFRTSxHQUFHQyxjQUFILENBQWtCLE9BQWxCLENBQWQ7QUFDQSxRQUFJUCxLQUFKLEVBQVc7QUFDVCxXQUFLRCxPQUFMLENBQWFDLEtBQWIsR0FBcUJBLEtBQXJCO0FBQ0Q7QUFDRjs7Ozs0QkFFT1EsTSxFQUFRO0FBQUE7O0FBQ2RDLGNBQVFDLEdBQVIsQ0FBWSxLQUFLWCxPQUFqQjs7QUFEYyxpQkFFd0IsS0FBS0ksWUFBTCxDQUFrQkMsT0FBbEIsR0FBNEIsS0FBS0QsWUFBTCxDQUFrQkMsT0FBbEIsQ0FBMEJJLE1BQTFCLENBQTVCLEdBQWdFQSxNQUZ4RjtBQUFBLFVBRU5HLEdBRk0sUUFFTkEsR0FGTTtBQUFBLFVBRURDLE1BRkMsUUFFREEsTUFGQztBQUFBLFVBRU9DLE1BRlAsUUFFT0EsTUFGUDtBQUFBLFVBRWVDLElBRmYsUUFFZUEsSUFGZjs7QUFHZCxhQUFPQyxlQUFLWCxPQUFMLENBQWE7QUFDbEJPLGFBQUssQ0FBQyxLQUFLVixRQUFMLElBQWlCLEVBQWxCLElBQXdCVSxHQURYO0FBRWxCQyxnQkFBUUEsVUFBVW5CLE9BQU9DLEdBRlA7QUFHbEJvQixjQUFNQSxJQUhZO0FBSWxCRDtBQUNFRyxpQkFBTyxLQUFLZDtBQURkLFdBRUssS0FBS0gsT0FGVixFQUdLYyxNQUhMO0FBSmtCLE9BQWIsRUFTSkksSUFUSSxDQVNDO0FBQUEsZUFBTyxNQUFLZCxZQUFMLENBQWtCRSxRQUFsQixHQUE2QixNQUFLRixZQUFMLENBQWtCRSxRQUFsQixDQUEyQmEsR0FBM0IsQ0FBN0IsR0FBK0RBLEdBQXRFO0FBQUEsT0FURCxDQUFQO0FBVUQ7Ozt3QkFFR1AsRyxFQUFLRyxJLEVBQU1ELE0sRUFBUTtBQUNyQixhQUFPLEtBQUtULE9BQUwsQ0FBYSxFQUFFTyxRQUFGLEVBQU9DLFFBQVFuQixPQUFPQyxHQUF0QixFQUEyQm1CLGNBQTNCLEVBQW1DQyxVQUFuQyxFQUFiLENBQVA7QUFDRDs7O3lCQUNJSCxHLEVBQUtHLEksRUFBTUQsTSxFQUFRO0FBQ3RCLGFBQU8sS0FBS1QsT0FBTCxDQUFhLEVBQUVPLFFBQUYsRUFBT0MsUUFBUW5CLE9BQU9FLElBQXRCLEVBQTRCa0IsY0FBNUIsRUFBb0NDLFVBQXBDLEVBQWIsQ0FBUDtBQUNEOzs7d0JBQ0dILEcsRUFBS0csSSxFQUFNRCxNLEVBQVE7QUFDckIsYUFBTyxLQUFLVCxPQUFMLENBQWEsRUFBRU8sUUFBRixFQUFPQyxRQUFRbkIsT0FBT0csR0FBdEIsRUFBMkJpQixjQUEzQixFQUFtQ0MsVUFBbkMsRUFBYixDQUFQO0FBQ0Q7Ozs0QkFDTUgsRyxFQUFLRyxJLEVBQU1ELE0sRUFBUTtBQUN4QixhQUFPLEtBQUtULE9BQUwsQ0FBYSxFQUFFTyxRQUFGLEVBQU9DLFFBQVFuQixPQUFPSSxNQUF0QixFQUE4QmdCLGNBQTlCLEVBQXNDQyxVQUF0QyxFQUFiLENBQVA7QUFDRDs7OzBCQUVLZCxNLEVBQU87QUFDWCxXQUFLRCxPQUFMLENBQWFDLEtBQWIsR0FBcUJBLE1BQXJCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OzsyQkFDTWEsTyxFQUFRO0FBQ2IsV0FBS2QsT0FBTCxHQUFlYyxPQUFmO0FBQ0FKLGNBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCLEtBQUtYLE9BQWpDO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7Ozs0QkFDT29CLFEsRUFBUztBQUNmLFdBQUtsQixRQUFMLEdBQWdCa0IsUUFBaEI7QUFDQSxhQUFPLElBQVA7QUFDRDs7OzBCQUNLSCxNLEVBQU87QUFDWCxXQUFLZCxNQUFMLEdBQWNjLE1BQWQ7QUFDQSxhQUFPLElBQVA7QUFDRDs7O2dDQUNXWixPLEVBQVNDLFEsRUFBVTtBQUM3QixVQUFJLE9BQU9ELE9BQVAsS0FBbUIsVUFBdkIsRUFBbUM7QUFDakMsYUFBS0QsWUFBTCxDQUFrQkMsT0FBbEIsR0FBNEJBLE9BQTVCO0FBQ0Q7QUFDRCxVQUFJLE9BQU9BLE9BQVAsS0FBbUIsVUFBdkIsRUFBbUM7QUFDakMsYUFBS0QsWUFBTCxDQUFrQkUsUUFBbEIsR0FBNkJBLFFBQTdCO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRDs7Ozs7O2tCQUVZLElBQUlQLE9BQUosRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5jb25zdCBNRVRIT0QgPSB7XHJcbiAgR0VUOiAnR0VUJyxcclxuICBQT1NUOiAnUE9TVCcsXHJcbiAgUFVUOiAnUFVUJyxcclxuICBERUxFVEU6ICdERUxFVEUnXHJcbn1cclxuY2xhc3MgUmVxdWVzdCB7XHJcbiAgX2hlYWRlciA9IHtcclxuICAgIHRva2VuOiBudWxsXHJcbiAgfVxyXG4gIF9iYXNlVXJsID0gbnVsbFxyXG5cclxuICBfYXBwSWQgPSBudWxsXHJcblxyXG4gIGludGVyY2VwdG9ycyA9IHtcclxuICAgIHJlcXVlc3Q6IG51bGwsXHJcbiAgICByZXNwb25zZTogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgdGhpcy5faGVhZGVyLnRva2VuID0gdG9rZW5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QocGFyYW1zKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9oZWFkZXIpXHJcbiAgICBjb25zdCB7IHVybCwgbWV0aG9kLCBoZWFkZXIsIGRhdGEgfSA9IHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QgPyB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0KHBhcmFtcykgOiBwYXJhbXNcclxuICAgIHJldHVybiB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6ICh0aGlzLl9iYXNlVXJsIHx8ICcnKSArIHVybCxcclxuICAgICAgbWV0aG9kOiBtZXRob2QgfHwgTUVUSE9ELkdFVCxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgYXBwSWQ6IHRoaXMuX2FwcElkLFxyXG4gICAgICAgIC4uLnRoaXMuX2hlYWRlcixcclxuICAgICAgICAuLi5oZWFkZXJcclxuICAgICAgfVxyXG4gICAgfSkudGhlbihyZXMgPT4gdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UgPyB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZShyZXMpIDogcmVzKVxyXG4gIH1cclxuXHJcbiAgZ2V0KHVybCwgZGF0YSwgaGVhZGVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHsgdXJsLCBtZXRob2Q6IE1FVEhPRC5HRVQsIGhlYWRlciwgZGF0YSB9KVxyXG4gIH1cclxuICBwb3N0KHVybCwgZGF0YSwgaGVhZGVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHsgdXJsLCBtZXRob2Q6IE1FVEhPRC5QT1NULCBoZWFkZXIsIGRhdGEgfSlcclxuICB9XHJcbiAgcHV0KHVybCwgZGF0YSwgaGVhZGVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHsgdXJsLCBtZXRob2Q6IE1FVEhPRC5QVVQsIGhlYWRlciwgZGF0YSB9KVxyXG4gIH1cclxuICBkZWxldGUodXJsLCBkYXRhLCBoZWFkZXIpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoeyB1cmwsIG1ldGhvZDogTUVUSE9ELkRFTEVURSwgaGVhZGVyLCBkYXRhIH0pXHJcbiAgfVxyXG5cclxuICB0b2tlbih0b2tlbikge1xyXG4gICAgdGhpcy5faGVhZGVyLnRva2VuID0gdG9rZW5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIGhlYWRlcihoZWFkZXIpIHtcclxuICAgIHRoaXMuX2hlYWRlciA9IGhlYWRlclxyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLl9oZWFkZXJcIiwgdGhpcy5faGVhZGVyKVxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgYmFzZVVybChiYXNlVXJsKSB7XHJcbiAgICB0aGlzLl9iYXNlVXJsID0gYmFzZVVybFxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgYXBwSWQoYXBwSWQpIHtcclxuICAgIHRoaXMuX2FwcElkID0gYXBwSWRcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIGludGVyY2VwdG9yKHJlcXVlc3QsIHJlc3BvbnNlKSB7XHJcbiAgICBpZiAodHlwZW9mIHJlcXVlc3QgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdCA9IHJlcXVlc3RcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgcmVxdWVzdCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZSA9IHJlc3BvbnNlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUmVxdWVzdCgpXHJcbiJdfQ==