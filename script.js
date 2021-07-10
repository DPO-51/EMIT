var page = document.querySelector(".body");
var themeButton = document.querySelector(".themeButton");
themeButton.onclick = function() {
    page.classList.toggle("lightTheme");
    page.classList.toggle("darkTheme");
   if(themeButton.value == 'Тёмная тема') {
     themeButton.value = 'Светлая тема';
 } else {
     themeButton.value = 'Тёмная тема';
 }
};