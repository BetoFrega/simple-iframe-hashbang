var $ = require('jquery');

const urls = {
    uol: 'http://uol.com.br',
    terra: 'http://terra.com.br',
    vivo: 'http://vivo.com.br'
};


$(function () {
    $('iframe').attr('src', urls[document.location.hash.replace('#', '')]);
    $('nav a').click(function (e) {
        e.preventDefault();
        var hash = $(this).attr('href').replace('#', '');
        $('iframe').attr('src', urls[hash]);
        document.location.hash = hash;
    })
});