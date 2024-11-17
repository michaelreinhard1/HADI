function filter(theme) {
  if (theme == '') {
  window.location.href = '/my-articles';
  } else {
  window.location.href = '/my-articles?filter=' + theme;
  }
}