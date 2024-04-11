let reg = '<head>';
let str = '<head>\
    <link rel="stylesheet" href="https://github.com/stoneluka49/shadowrocket/edit/main/369.user.css" type="text/css" />\
    <script type="text/javascript" async="async" src="https://limbopro.com/Adguard/Adblock4limbo.user.js"></script>'
let body = $response.body.replace(reg, str);
let headers = $response.headers;
headers['Content-Security-Policy'] = '';
$done({ headers, body })
