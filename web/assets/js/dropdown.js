const button = document.getElementById('dropdownAvatarNameButton');
button.addEventListener('click', function () {
const dropdown = document.getElementById('dropdownAvatarName');
dropdown.classList.toggle('hidden');
});
document.addEventListener('click', function (event) {
const dropdown = document.getElementById('dropdownAvatarName');
if (! event.target.closest('#dropdownAvatarNameButton') && ! event.target.closest('#dropdownAvatarName')) {
dropdown.classList.add('hidden');
}
});
