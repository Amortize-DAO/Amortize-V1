webpackHotUpdate_N_E("pages/auth/login",{

/***/ "./components/auth.js":
/*!****************************!*\
  !*** ./components/auth.js ***!
  \****************************/
/*! exports provided: userSession, storage, networkType, myStxAddress, authenticate, getUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSession", function() { return userSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "networkType", function() { return networkType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myStxAddress", function() { return myStxAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony import */ var _stacks_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stacks/connect */ "./node_modules/@stacks/connect/dist/index.esm.js");
/* harmony import */ var _stacks_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stacks/storage */ "./node_modules/@stacks/storage/dist/esm/index.js");
/* harmony import */ var _stacks_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stacks/network */ "./node_modules/@stacks/network/dist/esm/index.js");



var appConfig = new _stacks_connect__WEBPACK_IMPORTED_MODULE_0__["AppConfig"](['store_write', 'publish_data']); // Set this to true if you want to use Mainnet

var boolNetworkType = false;
var userSession = new _stacks_connect__WEBPACK_IMPORTED_MODULE_0__["UserSession"]({
  appConfig: appConfig
});
var storage = new _stacks_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]({
  userSession: userSession
});
function networkType() {
  if (boolNetworkType) return new _stacks_network__WEBPACK_IMPORTED_MODULE_2__["StacksMainnet"]();else return new _stacks_network__WEBPACK_IMPORTED_MODULE_2__["StacksTestnet"]();
}
function myStxAddress() {
  if (boolNetworkType) return getUserData().profile.stxAddress.mainnet;else return getUserData().profile.stxAddress.testnet;
}
function authenticate() {
  Object(_stacks_connect__WEBPACK_IMPORTED_MODULE_0__["showConnect"])({
    appDetails: {
      name: 'Amortize',
      icon: window.location.origin + '/assets/img/brand/Amortize_Logo1.png'
    },
    redirectTo: '/',
    onFinish: function onFinish() {
      // Get Access rights from smart contract
      console.log(window.location.origin);
    },
    userSession: userSession
  });
}
function getUserData() {
  return userSession.loadUserData();
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoLmpzIl0sIm5hbWVzIjpbImFwcENvbmZpZyIsIkFwcENvbmZpZyIsImJvb2xOZXR3b3JrVHlwZSIsInVzZXJTZXNzaW9uIiwiVXNlclNlc3Npb24iLCJzdG9yYWdlIiwiU3RvcmFnZSIsIm5ldHdvcmtUeXBlIiwiU3RhY2tzTWFpbm5ldCIsIlN0YWNrc1Rlc3RuZXQiLCJteVN0eEFkZHJlc3MiLCJnZXRVc2VyRGF0YSIsInByb2ZpbGUiLCJzdHhBZGRyZXNzIiwibWFpbm5ldCIsInRlc3RuZXQiLCJhdXRoZW50aWNhdGUiLCJzaG93Q29ubmVjdCIsImFwcERldGFpbHMiLCJuYW1lIiwiaWNvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwicmVkaXJlY3RUbyIsIm9uRmluaXNoIiwiY29uc29sZSIsImxvZyIsImxvYWRVc2VyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLElBQUlDLHlEQUFKLENBQWMsQ0FBQyxhQUFELEVBQWdCLGNBQWhCLENBQWQsQ0FBbEIsQyxDQUVBOztBQUNBLElBQU1DLGVBQWUsR0FBRyxLQUF4QjtBQUVPLElBQU1DLFdBQVcsR0FBRyxJQUFJQywyREFBSixDQUFnQjtBQUFFSixXQUFTLEVBQVRBO0FBQUYsQ0FBaEIsQ0FBcEI7QUFDQSxJQUFNSyxPQUFPLEdBQUcsSUFBSUMsdURBQUosQ0FBWTtBQUFFSCxhQUFXLEVBQVhBO0FBQUYsQ0FBWixDQUFoQjtBQUVBLFNBQVNJLFdBQVQsR0FBdUI7QUFDNUIsTUFBR0wsZUFBSCxFQUNFLE9BQU8sSUFBSU0sNkRBQUosRUFBUCxDQURGLEtBR0UsT0FBTyxJQUFJQyw2REFBSixFQUFQO0FBQ0g7QUFFTSxTQUFTQyxZQUFULEdBQXdCO0FBQzdCLE1BQUdSLGVBQUgsRUFDRSxPQUFPUyxXQUFXLEdBQUdDLE9BQWQsQ0FBc0JDLFVBQXRCLENBQWlDQyxPQUF4QyxDQURGLEtBR0UsT0FBT0gsV0FBVyxHQUFHQyxPQUFkLENBQXNCQyxVQUF0QixDQUFpQ0UsT0FBeEM7QUFDSDtBQUVNLFNBQVNDLFlBQVQsR0FBd0I7QUFDN0JDLHFFQUFXLENBQUM7QUFDVkMsY0FBVSxFQUFFO0FBQ1ZDLFVBQUksRUFBRSxVQURJO0FBRVZDLFVBQUksRUFBRUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixHQUF5QjtBQUZyQixLQURGO0FBS1ZDLGNBQVUsRUFBRSxHQUxGO0FBTVZDLFlBQVEsRUFBRSxvQkFBTTtBQUNkO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQTVCO0FBQ0QsS0FUUztBQVVWcEIsZUFBVyxFQUFFQTtBQVZILEdBQUQsQ0FBWDtBQVlEO0FBRU0sU0FBU1EsV0FBVCxHQUF1QjtBQUM1QixTQUFPUixXQUFXLENBQUN5QixZQUFaLEVBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL2xvZ2luLmFmNjI4NWE4MGNkZmUwN2YwMzI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBDb25maWcsIFVzZXJTZXNzaW9uLCBzaG93Q29ubmVjdCB9IGZyb20gJ0BzdGFja3MvY29ubmVjdCc7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAc3RhY2tzL3N0b3JhZ2UnO1xyXG5pbXBvcnQgeyBTdGFja3NNYWlubmV0LCBTdGFja3NUZXN0bmV0IH0gZnJvbSAnQHN0YWNrcy9uZXR3b3JrJztcclxuXHJcbmNvbnN0IGFwcENvbmZpZyA9IG5ldyBBcHBDb25maWcoWydzdG9yZV93cml0ZScsICdwdWJsaXNoX2RhdGEnXSk7XHJcblxyXG4vLyBTZXQgdGhpcyB0byB0cnVlIGlmIHlvdSB3YW50IHRvIHVzZSBNYWlubmV0XHJcbmNvbnN0IGJvb2xOZXR3b3JrVHlwZSA9IGZhbHNlOyBcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2Vzc2lvbiA9IG5ldyBVc2VyU2Vzc2lvbih7IGFwcENvbmZpZyB9KTtcclxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSh7IHVzZXJTZXNzaW9uIH0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtUeXBlKCkge1xyXG4gIGlmKGJvb2xOZXR3b3JrVHlwZSlcclxuICAgIHJldHVybiBuZXcgU3RhY2tzTWFpbm5ldCgpO1xyXG4gIGVsc2UgXHJcbiAgICByZXR1cm4gbmV3IFN0YWNrc1Rlc3RuZXQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG15U3R4QWRkcmVzcygpIHtcclxuICBpZihib29sTmV0d29ya1R5cGUpXHJcbiAgICByZXR1cm4gZ2V0VXNlckRhdGEoKS5wcm9maWxlLnN0eEFkZHJlc3MubWFpbm5ldDtcclxuICBlbHNlIFxyXG4gICAgcmV0dXJuIGdldFVzZXJEYXRhKCkucHJvZmlsZS5zdHhBZGRyZXNzLnRlc3RuZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhdXRoZW50aWNhdGUoKSB7XHJcbiAgc2hvd0Nvbm5lY3Qoe1xyXG4gICAgYXBwRGV0YWlsczoge1xyXG4gICAgICBuYW1lOiAnQW1vcnRpemUnLFxyXG4gICAgICBpY29uOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy9hc3NldHMvaW1nL2JyYW5kL0Ftb3J0aXplX0xvZ28xLnBuZycsXHJcbiAgICB9LFxyXG4gICAgcmVkaXJlY3RUbzogJy8nLFxyXG4gICAgb25GaW5pc2g6ICgpID0+IHtcclxuICAgICAgLy8gR2V0IEFjY2VzcyByaWdodHMgZnJvbSBzbWFydCBjb250cmFjdFxyXG4gICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcclxuICAgIH0sXHJcbiAgICB1c2VyU2Vzc2lvbjogdXNlclNlc3Npb24sXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyRGF0YSgpIHtcclxuICByZXR1cm4gdXNlclNlc3Npb24ubG9hZFVzZXJEYXRhKCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9