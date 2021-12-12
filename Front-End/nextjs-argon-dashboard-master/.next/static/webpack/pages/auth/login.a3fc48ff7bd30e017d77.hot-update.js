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
      window.location.assign("/profile");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoLmpzIl0sIm5hbWVzIjpbImFwcENvbmZpZyIsIkFwcENvbmZpZyIsImJvb2xOZXR3b3JrVHlwZSIsInVzZXJTZXNzaW9uIiwiVXNlclNlc3Npb24iLCJzdG9yYWdlIiwiU3RvcmFnZSIsIm5ldHdvcmtUeXBlIiwiU3RhY2tzTWFpbm5ldCIsIlN0YWNrc1Rlc3RuZXQiLCJteVN0eEFkZHJlc3MiLCJnZXRVc2VyRGF0YSIsInByb2ZpbGUiLCJzdHhBZGRyZXNzIiwibWFpbm5ldCIsInRlc3RuZXQiLCJhdXRoZW50aWNhdGUiLCJzaG93Q29ubmVjdCIsImFwcERldGFpbHMiLCJuYW1lIiwiaWNvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwicmVkaXJlY3RUbyIsIm9uRmluaXNoIiwiYXNzaWduIiwibG9hZFVzZXJEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUcsSUFBSUMseURBQUosQ0FBYyxDQUFDLGFBQUQsRUFBZ0IsY0FBaEIsQ0FBZCxDQUFsQixDLENBRUE7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLEtBQXhCO0FBRU8sSUFBTUMsV0FBVyxHQUFHLElBQUlDLDJEQUFKLENBQWdCO0FBQUVKLFdBQVMsRUFBVEE7QUFBRixDQUFoQixDQUFwQjtBQUNBLElBQU1LLE9BQU8sR0FBRyxJQUFJQyx1REFBSixDQUFZO0FBQUVILGFBQVcsRUFBWEE7QUFBRixDQUFaLENBQWhCO0FBRUEsU0FBU0ksV0FBVCxHQUF1QjtBQUM1QixNQUFHTCxlQUFILEVBQ0UsT0FBTyxJQUFJTSw2REFBSixFQUFQLENBREYsS0FHRSxPQUFPLElBQUlDLDZEQUFKLEVBQVA7QUFDSDtBQUVNLFNBQVNDLFlBQVQsR0FBd0I7QUFDN0IsTUFBR1IsZUFBSCxFQUNFLE9BQU9TLFdBQVcsR0FBR0MsT0FBZCxDQUFzQkMsVUFBdEIsQ0FBaUNDLE9BQXhDLENBREYsS0FHRSxPQUFPSCxXQUFXLEdBQUdDLE9BQWQsQ0FBc0JDLFVBQXRCLENBQWlDRSxPQUF4QztBQUNIO0FBRU0sU0FBU0MsWUFBVCxHQUF3QjtBQUM3QkMscUVBQVcsQ0FBQztBQUNWQyxjQUFVLEVBQUU7QUFDVkMsVUFBSSxFQUFFLFVBREk7QUFFVkMsVUFBSSxFQUFFQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLEdBQXlCO0FBRnJCLEtBREY7QUFLVkMsY0FBVSxFQUFFLEdBTEY7QUFNVkMsWUFBUSxFQUFFLG9CQUFNO0FBQ2Q7QUFDQUosWUFBTSxDQUFDQyxRQUFQLENBQWdCSSxNQUFoQixDQUF1QixVQUF2QjtBQUVELEtBVlM7QUFXVnZCLGVBQVcsRUFBRUE7QUFYSCxHQUFELENBQVg7QUFhRDtBQUVNLFNBQVNRLFdBQVQsR0FBdUI7QUFDNUIsU0FBT1IsV0FBVyxDQUFDd0IsWUFBWixFQUFQO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9sb2dpbi5hM2ZjNDhmZjdiZDMwZTAxN2Q3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwQ29uZmlnLCBVc2VyU2Vzc2lvbiwgc2hvd0Nvbm5lY3QgfSBmcm9tICdAc3RhY2tzL2Nvbm5lY3QnO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQHN0YWNrcy9zdG9yYWdlJztcclxuaW1wb3J0IHsgU3RhY2tzTWFpbm5ldCwgU3RhY2tzVGVzdG5ldCB9IGZyb20gJ0BzdGFja3MvbmV0d29yayc7XHJcblxyXG5jb25zdCBhcHBDb25maWcgPSBuZXcgQXBwQ29uZmlnKFsnc3RvcmVfd3JpdGUnLCAncHVibGlzaF9kYXRhJ10pO1xyXG5cclxuLy8gU2V0IHRoaXMgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byB1c2UgTWFpbm5ldFxyXG5jb25zdCBib29sTmV0d29ya1R5cGUgPSBmYWxzZTsgXHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNlc3Npb24gPSBuZXcgVXNlclNlc3Npb24oeyBhcHBDb25maWcgfSk7XHJcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoeyB1c2VyU2Vzc2lvbiB9KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrVHlwZSgpIHtcclxuICBpZihib29sTmV0d29ya1R5cGUpXHJcbiAgICByZXR1cm4gbmV3IFN0YWNrc01haW5uZXQoKTtcclxuICBlbHNlIFxyXG4gICAgcmV0dXJuIG5ldyBTdGFja3NUZXN0bmV0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBteVN0eEFkZHJlc3MoKSB7XHJcbiAgaWYoYm9vbE5ldHdvcmtUeXBlKVxyXG4gICAgcmV0dXJuIGdldFVzZXJEYXRhKCkucHJvZmlsZS5zdHhBZGRyZXNzLm1haW5uZXQ7XHJcbiAgZWxzZSBcclxuICAgIHJldHVybiBnZXRVc2VyRGF0YSgpLnByb2ZpbGUuc3R4QWRkcmVzcy50ZXN0bmV0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXV0aGVudGljYXRlKCkge1xyXG4gIHNob3dDb25uZWN0KHtcclxuICAgIGFwcERldGFpbHM6IHtcclxuICAgICAgbmFtZTogJ0Ftb3J0aXplJyxcclxuICAgICAgaWNvbjogd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvYXNzZXRzL2ltZy9icmFuZC9BbW9ydGl6ZV9Mb2dvMS5wbmcnLFxyXG4gICAgfSxcclxuICAgIHJlZGlyZWN0VG86ICcvJyxcclxuICAgIG9uRmluaXNoOiAoKSA9PiB7XHJcbiAgICAgIC8vIEdldCBBY2Nlc3MgcmlnaHRzIGZyb20gc21hcnQgY29udHJhY3RcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihcIi9wcm9maWxlXCIpO1xyXG4gICAgIFxyXG4gICAgfSxcclxuICAgIHVzZXJTZXNzaW9uOiB1c2VyU2Vzc2lvbixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJEYXRhKCkge1xyXG4gIHJldHVybiB1c2VyU2Vzc2lvbi5sb2FkVXNlckRhdGEoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=