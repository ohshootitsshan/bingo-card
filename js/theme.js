(function () {
  'use strict';

  var themeStorageKey = 'bingoSiteTheme';
  var themes = ['simple','medieval'];
  var themeLabels = {
    simple: 'Simple',
    medieval: 'Medieval'
  };

  function applyTheme(nextTheme) {
    var theme = themes.indexOf(nextTheme) >= 0 ? nextTheme : 'simple';
    document.body.dataset.theme = theme;
    localStorage.setItem(themeStorageKey, theme);
    document.querySelectorAll('.site-theme-picker').forEach(function (picker) {
      picker.value = theme;
      picker.setAttribute('aria-label', 'Site theme: ' + themeLabels[theme]);
    });
  }

  var savedTheme = localStorage.getItem(themeStorageKey);
  applyTheme(savedTheme);
  document.querySelectorAll('.site-theme-picker').forEach(function (picker) {
    picker.addEventListener('change', function (event) {
      applyTheme(event.target.value);
    });
  });
  window.addEventListener('storage', function (event) {
    if (event.key === themeStorageKey) applyTheme(event.newValue);
  });
})();