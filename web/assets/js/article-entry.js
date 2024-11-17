document.addEventListener('DOMContentLoaded', function () {
document.getElementById('contentType').addEventListener('change', function () {
if (this.value == 1376) {

document.getElementById('googleSlides').disabled = false;

} else {
document.getElementById('googleSlides').disabled = true;

}
});
});

var editor = new FroalaEditor('#body');

function submitForm() {

  const titleValue = document.getElementById('title').value;

  const slugValue = titleValue.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  const form = document.getElementById('upload-form');
  
  const slugInput = document.createElement('input');
  slugInput.setAttribute('type', 'hidden');
  slugInput.setAttribute('name', 'slug');
  slugInput.setAttribute('value', slugValue);
  
  form.appendChild(slugInput);
  
  form.submit();
  
  }