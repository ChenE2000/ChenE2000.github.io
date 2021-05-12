// 将数据存入数据库
function sendVisitInfo() {
    var ip = returnCitySN["cip"]
    var location = returnCitySN["cname"]
    console.log(ip + "-" + location)

    $.ajax({
        url: 'https://service-0rsjs773-1302396367.sh.apigw.tencentcs.com/release/send_visit',
        type: 'POST',
        contentType: 'text/json,charset=utf-8',
        headers: {
            'Content-Type': 'application/json;charset=utf8',
            // 'token': "U2PGBjguSuJg",
            // 'version': "1.0",
            'from': "Origin: http://example.com",
        },
        data: ip + "-" + location,
        // {
        //     'data': ip + "-" + encodeURI(location)
        // },
        success: function(data) {
            console.log('Welcome', data)
        }
    })
}

$(function() {
    sendVisitInfo()
})