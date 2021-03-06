function getLocation() {
    x = document.getElementById("cl");
    alert(x);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "该浏览器不支持定位";
    }
}
function showPosition(position) {
    x.innerHTML = "维度：" + position.coords.latitude + "<br>维度：" + position.coords.longitude;
}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "用户拒绝对获取地理位置的请求。";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "位置信息是不可用的。";
            break;
        case error.TIMEOUT:
            x.innerHTML = "请求用户地理位置超时。";
            break;
        default:
            break;
    }
}