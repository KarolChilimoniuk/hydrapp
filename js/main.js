!function(n){var e={};function t(c){if(e[c])return e[c].exports;var l=e[c]={i:c,l:!1,exports:{}};return n[c].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=n,t.c=e,t.d=function(n,e,c){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var l in n)t.d(c,l,function(e){return n[e]}.bind(null,l));return c},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function() {\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function(err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// place your code below\n\nconst addBtn = document.querySelector('.button-add--js');\nconst removeBtn = document.querySelector('.button-remove--js');\nconst clearBtn = document.querySelector('.button-clear--js');\nconst valueSpan = document.querySelector('.span-counter--js');\nconst key = new Date ().toISOString().slice(0, 10);\nconst waterColor = document.querySelector('.img__element--fill');\nconst teachIcon = document.querySelector('.img-teacher--js');\nconst previousIcon = document.querySelector('.img-previous--js');\nconst infoSection = document.querySelector('.section-info--js');\nconst tableBtn = document.querySelector('.img-table--js');\nconst tablePrevBtn = document.querySelector('.img-score-previous--js');\nconst scoreSection = document.querySelector('.section-score--js');\n\n// color changer for the water\n\nfunction colorChanger (x) {\n  if (valueSpan.innerHTML > 5) {\n     x.style.fill = \"#2E4272\";\n  } else {\n    x.style.fill = \"#BBD7EA\";\n  }\n}\n\ncolorChanger(waterColor);\n\n// getting items from Local Storage\n\nif (localStorage[key] >= 0) {\n  valueSpan.innerHTML = localStorage.getItem(key);\n} \n\n// setting items in Local Storage\n\naddBtn.addEventListener('click', function () {\n  valueSpan.innerHTML++;\n  localStorage.setItem(key, valueSpan.innerHTML);\n})\n\nremoveBtn.addEventListener('click', function () {\n  if (valueSpan.innerHTML < 1) {\n    valueSpan.innerHTML++;\n  }\n  valueSpan.innerHTML--;\n  localStorage.setItem(key, valueSpan.innerHTML);\n})\n\n//removing data from local storage\n\nclearBtn.addEventListener('click', function () {\n  valueSpan.innerHTML = 0;\n  localStorage.removeItem(key);\n})\n\n//sections and images\n\nteachIcon.addEventListener('click', function () {\n  infoSection.classList.toggle('section-info--left');\n  teachIcon.classList.toggle('img--display');\n  previousIcon.classList.toggle('img--display');\n})\n\npreviousIcon.addEventListener('click', function () {\n  infoSection.classList.toggle('section-info--left');\n  teachIcon.classList.toggle('img--display');\n  previousIcon.classList.toggle('img--display');\n})\n\ntableBtn.addEventListener('click', function () {\n  scoreSection.classList.toggle('section-score--left');\n  tableBtn.classList.toggle('img--display');\n  tablePrevBtn.classList.toggle('img--display');\n})\n\ntablePrevBtn.addEventListener('click', function () {\n  scoreSection.classList.toggle('section-score--left');\n  tableBtn.classList.toggle('img--display');\n  tablePrevBtn.classList.toggle('img--display');\n})\n\n// scores in table\n\nfunction getScore () {\n\n  const tableRow = document.createElement('tr');\n  tableRow.classList.add('table__row');\n  const tableBody = document.querySelector('.table__body--js')\n  tableBody.appendChild(tableRow);\n\n  // date \n  const dateRow = document.createElement('td')\n  dateRow.classList.add('table__detail-date');\n  tableRow.appendChild(dateRow);\n  dateRow.innerHtml = key.value;\n\n  //score\n  const scoreRow = document.createElement('td');\n  scoreRow.classList.add('table__detail-score');\n  tableRow.appendChild(scoreRow);\n  scoreRow.innerHTML = valueSpan.innerHTML;\n}\n\ngetScore ();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XG5cbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2V3b3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xuICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xuXG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWFkZC0tanMnKTtcbmNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tcmVtb3ZlLS1qcycpO1xuY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWNsZWFyLS1qcycpO1xuY29uc3QgdmFsdWVTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwYW4tY291bnRlci0tanMnKTtcbmNvbnN0IGtleSA9IG5ldyBEYXRlICgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuY29uc3Qgd2F0ZXJDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWdfX2VsZW1lbnQtLWZpbGwnKTtcbmNvbnN0IHRlYWNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctdGVhY2hlci0tanMnKTtcbmNvbnN0IHByZXZpb3VzSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctcHJldmlvdXMtLWpzJyk7XG5jb25zdCBpbmZvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLWluZm8tLWpzJyk7XG5jb25zdCB0YWJsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctdGFibGUtLWpzJyk7XG5jb25zdCB0YWJsZVByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLXNjb3JlLXByZXZpb3VzLS1qcycpO1xuY29uc3Qgc2NvcmVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tc2NvcmUtLWpzJyk7XG5cbi8vIGNvbG9yIGNoYW5nZXIgZm9yIHRoZSB3YXRlclxuXG5mdW5jdGlvbiBjb2xvckNoYW5nZXIgKHgpIHtcbiAgaWYgKHZhbHVlU3Bhbi5pbm5lckhUTUwgPiA1KSB7XG4gICAgIHguc3R5bGUuZmlsbCA9IFwiIzJFNDI3MlwiO1xuICB9IGVsc2Uge1xuICAgIHguc3R5bGUuZmlsbCA9IFwiI0JCRDdFQVwiO1xuICB9XG59XG5cbmNvbG9yQ2hhbmdlcih3YXRlckNvbG9yKTtcblxuLy8gZ2V0dGluZyBpdGVtcyBmcm9tIExvY2FsIFN0b3JhZ2VcblxuaWYgKGxvY2FsU3RvcmFnZVtrZXldID49IDApIHtcbiAgdmFsdWVTcGFuLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG59IFxuXG4vLyBzZXR0aW5nIGl0ZW1zIGluIExvY2FsIFN0b3JhZ2VcblxuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB2YWx1ZVNwYW4uaW5uZXJIVE1MKys7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWVTcGFuLmlubmVySFRNTCk7XG59KVxuXG5yZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGlmICh2YWx1ZVNwYW4uaW5uZXJIVE1MIDwgMSkge1xuICAgIHZhbHVlU3Bhbi5pbm5lckhUTUwrKztcbiAgfVxuICB2YWx1ZVNwYW4uaW5uZXJIVE1MLS07XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWVTcGFuLmlubmVySFRNTCk7XG59KVxuXG4vL3JlbW92aW5nIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlXG5cbmNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB2YWx1ZVNwYW4uaW5uZXJIVE1MID0gMDtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbn0pXG5cbi8vc2VjdGlvbnMgYW5kIGltYWdlc1xuXG50ZWFjaEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGluZm9TZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3NlY3Rpb24taW5mby0tbGVmdCcpO1xuICB0ZWFjaEljb24uY2xhc3NMaXN0LnRvZ2dsZSgnaW1nLS1kaXNwbGF5Jyk7XG4gIHByZXZpb3VzSWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdpbWctLWRpc3BsYXknKTtcbn0pXG5cbnByZXZpb3VzSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgaW5mb1NlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnc2VjdGlvbi1pbmZvLS1sZWZ0Jyk7XG4gIHRlYWNoSWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdpbWctLWRpc3BsYXknKTtcbiAgcHJldmlvdXNJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2ltZy0tZGlzcGxheScpO1xufSlcblxudGFibGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHNjb3JlU2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdzZWN0aW9uLXNjb3JlLS1sZWZ0Jyk7XG4gIHRhYmxlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2ltZy0tZGlzcGxheScpO1xuICB0YWJsZVByZXZCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaW1nLS1kaXNwbGF5Jyk7XG59KVxuXG50YWJsZVByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHNjb3JlU2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdzZWN0aW9uLXNjb3JlLS1sZWZ0Jyk7XG4gIHRhYmxlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2ltZy0tZGlzcGxheScpO1xuICB0YWJsZVByZXZCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaW1nLS1kaXNwbGF5Jyk7XG59KVxuXG4vLyBzY29yZXMgaW4gdGFibGVcblxuZnVuY3Rpb24gZ2V0U2NvcmUgKCkge1xuXG4gIGNvbnN0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgdGFibGVSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVfX2JvZHktLWpzJylcbiAgdGFibGVCb2R5LmFwcGVuZENoaWxkKHRhYmxlUm93KTtcblxuICAvLyBkYXRlIFxuICBjb25zdCBkYXRlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKVxuICBkYXRlUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19kZXRhaWwtZGF0ZScpO1xuICB0YWJsZVJvdy5hcHBlbmRDaGlsZChkYXRlUm93KTtcbiAgZGF0ZVJvdy5pbm5lckh0bWwgPSBrZXkudmFsdWU7XG5cbiAgLy9zY29yZVxuICBjb25zdCBzY29yZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIHNjb3JlUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19kZXRhaWwtc2NvcmUnKTtcbiAgdGFibGVSb3cuYXBwZW5kQ2hpbGQoc2NvcmVSb3cpO1xuICBzY29yZVJvdy5pbm5lckhUTUwgPSB2YWx1ZVNwYW4uaW5uZXJIVE1MO1xufVxuXG5nZXRTY29yZSAoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);