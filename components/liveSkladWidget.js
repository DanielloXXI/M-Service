// Задаем параметры виджета при загрузке
window.liveskladOptions = {
    // Ключ апи, индивидуально сгенерированный для вас
    api_key: "TSCLSxHsGH6sMFFtusfn"
};
(function () {
    var script = document.createElement('script');
    script.type = 'text/javascript'; script.async = true;
    script.src = ('https:' == document.location.protocol ? 'https://' : 'http://')
        + 'my.livesklad.com/static/widget.js';
    document.getElementsByTagName('head')[0].appendChild(script);
})();