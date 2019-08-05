window.onload = function() {
    document.getElementById("test").onclick = function() {
        let date = new Date();
        let giaysinh = parseInt(document.getElementById("giaysinh").value);
        let phutsinh = parseInt(document.getElementById("phutsinh").value);
        let ngaysinh = parseInt(document.getElementById("ngaysinh").value);
        let giosinh = parseInt(document.getElementById("giosinh").value);
        let thangsinh = parseInt(document.getElementById("thangsinh").value);
        let namsinh = parseInt(document.getElementById("namsinh").value);
        let nam = date.getFullYear() - namsinh;
        let thang = date.getMonth() - thangsinh;
        let ngay = date.getDate() - ngaysinh;
        let gio = date.getHours() - giosinh;
        let phut = date.getMinutes() - phutsinh;
        let giay = date.getSeconds() - giaysinh;
        document.getElementById("nam").innerHTML = nam;
        document.getElementById("thang").innerHTML = nam * 12 + thang;
        document.getElementById("ngay").innerHTML = (nam * 12 + thang) * 365 + ngay;
        document.getElementById("gio").innerHTML = ((nam * 12 + thang) * 365 + ngay) * 24 + gio;
        document.getElementById("phut").innerHTML = (((nam * 12 + thang) * 365 + ngay) * 24 + gio) * 60 + phut;
        document.getElementById("giay").innerHTML = ((((nam * 12 + thang) * 365 + ngay) * 24 + gio) * 60 + phut) * 60 + giay;
    }
}