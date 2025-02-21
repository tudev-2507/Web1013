document.getElementById("loginForm").addEventListener("submit", function (stop) {
    stop.preventDefault();
    const adminUser = "admin";
    const adminPasss = "Vudinhtu12";
    // FORM
    const use = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (use === adminUser && pass === adminPasss) {
        alert("Đăng nhập thành công");
        window.location.href = "./trangchu.html";
    } else {
        alert("Đăng nhập thất bại");
        window.onload = function () {
            document.getElementById("username").focus();
        }
    }
});


