/**
 * Created by yuancheng.yuan on 2017/8/8.
 */

function ba(a, b, c, d, e, g) {
    a = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";";
    /*c instanceof Date && (a += "; expires=" + c.toGMTString());
     d && (a += "; path=" + d);
     e && (a += "; domain=" + e);
     g && (a += "; secure");*/
    return a;
}
var fa = function () {
    function a() {
        function a(a, b) {
            var c, d = 0;
            for (c = 0; c < b.length; c++)d |= h[c] << 8 * c;
            return a ^ d
        }

        var b = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36', f, g, h = [], k = 0;
        for (f = 0; f < b.length; f++)g = b.charCodeAt(f), h.unshift(g & 255), 4 <= h.length && (k = a(k, h), h = []);
        0 < h.length && (k = a(k, h));
        return k.toString(16)
    }

    function b() {
        for (var a = 1 * new Date, b = 0; a == 1 * new Date;)b++;
        return a.toString(16) + b.toString(16)
    }

    return function () {
        var c = ('1080' * '1920').toString(16);
        return b() + "-" + Math.random().toString(16).replace(".",
                "") + "-" + a() + "-" + c + "-" + b()
    }
}();

function updateCookie() {
    var c = fa(), d = new Date;
    d.setTime(d.getTime() + 157248E5);
    var e = 'www.aqistudy.cn'.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i);
    return ba('UM_distinctid', c, d, "/", e ? e[0] : "");
}

module.exports = updateCookie;
