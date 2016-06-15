import 'core-js/es6/symbol';
import 'core-js/fn/symbol/iterator';
import 'core-js/fn/object/assign';

// Polyfill Element.matches
(function (e) {
  e.matches || (e.matches = e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || function (s) {
      return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
    });
})(Element.prototype);
