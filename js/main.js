!function(n){var e={};function t(c){if(e[c])return e[c].exports;var l=e[c]={i:c,l:!1,exports:{}};return n[c].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=n,t.c=e,t.d=function(n,e,c){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var l in n)t.d(c,l,function(e){return n[e]}.bind(null,l));return c},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function() {\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function(err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// place your code below\n\nconst addBtn = document.querySelector('.button-add--js');\nconst removeBtn = document.querySelector('.button-remove--js');\nconst clearBtn = document.querySelector('.button-clear--js');\nconst valueSpan = document.querySelector('.span-counter--js');\nconst key = new Date ().toISOString().slice(0, 10);\nconst waterColor = document.querySelector('.img__element--fill');\n\nfunction colorChanger (x) {\n  if (valueSpan.innerHTML > 5) {\n     x.style.fill = \"#2E4272\";\n  } else {\n    x.style.fill = \"#BBD7EA\";\n  }\n}\n\nif (localStorage[key] >= 0) {\n  valueSpan.innerHTML = localStorage.getItem(key);\n} \n\ncolorChanger(waterColor);\n\naddBtn.addEventListener('click', function () {\n  valueSpan.innerHTML++;\n  localStorage.setItem(key, valueSpan.innerHTML);\n})\n\nremoveBtn.addEventListener('click', function () {\n  if (valueSpan.innerHTML < 1) {\n    valueSpan.innerHTML++;\n  }\n  valueSpan.innerHTML--;\n  localStorage.setItem(key, valueSpan.innerHTML);\n})\n\nclearBtn.addEventListener('click', function () {\n  valueSpan.innerHTML = 0;\n  localStorage.removeItem(key);\n})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcblxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XG5cbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tYWRkLS1qcycpO1xuY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1yZW1vdmUtLWpzJyk7XG5jb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY2xlYXItLWpzJyk7XG5jb25zdCB2YWx1ZVNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Bhbi1jb3VudGVyLS1qcycpO1xuY29uc3Qga2V5ID0gbmV3IERhdGUgKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5jb25zdCB3YXRlckNvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZ19fZWxlbWVudC0tZmlsbCcpO1xuXG5mdW5jdGlvbiBjb2xvckNoYW5nZXIgKHgpIHtcbiAgaWYgKHZhbHVlU3Bhbi5pbm5lckhUTUwgPiA1KSB7XG4gICAgIHguc3R5bGUuZmlsbCA9IFwiIzJFNDI3MlwiO1xuICB9IGVsc2Uge1xuICAgIHguc3R5bGUuZmlsbCA9IFwiI0JCRDdFQVwiO1xuICB9XG59XG5cbmlmIChsb2NhbFN0b3JhZ2Vba2V5XSA+PSAwKSB7XG4gIHZhbHVlU3Bhbi5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xufSBcblxuY29sb3JDaGFuZ2VyKHdhdGVyQ29sb3IpO1xuXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHZhbHVlU3Bhbi5pbm5lckhUTUwrKztcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZVNwYW4uaW5uZXJIVE1MKTtcbn0pXG5cbnJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHZhbHVlU3Bhbi5pbm5lckhUTUwgPCAxKSB7XG4gICAgdmFsdWVTcGFuLmlubmVySFRNTCsrO1xuICB9XG4gIHZhbHVlU3Bhbi5pbm5lckhUTUwtLTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZVNwYW4uaW5uZXJIVE1MKTtcbn0pXG5cbmNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB2YWx1ZVNwYW4uaW5uZXJIVE1MID0gMDtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);