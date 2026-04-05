$(document).ready(function () {
    // Bắt sự kiện click vào nút TIẾP TỤC (ID: btnRegister)
    $("#btnRegister").on("click", function () {
        // 1. Lấy dữ liệu từ các ô input theo đúng ID trong HTML của bạn
        let account = $("#txtAccount").val().trim();
        let password = $("#txtPassLogin").val().trim(); // Lưu ý: Bạn đang đặt ID này cho ô mật khẩu ở trang đăng ký
        let errorMsg = $("#login-error");

        // 2. Kiểm tra dữ liệu đầu vào
        if (account === "") {
            alert("Vui lòng nhập Email hoặc Số điện thoại!");
            $("#txtAccount").focus();
            return;
        }
        if (password === "") {
            alert("Vui lòng thiết lập mật khẩu!");
            $("#txtPassLogin").focus();
            return;
        }
        if (password.length < 6) {
           alert("Mật khẩu phải có ít nhất 6 ký tự!");
            return;
        }

        // 3. Lấy danh sách người dùng đã có từ LocalStorage
        let listUsers = JSON.parse(localStorage.getItem("users")) || [];

        // 4. Kiểm tra tài khoản đã tồn tại chưa
        let isExist = listUsers.some(user => user.account === account);
        if (isExist) {
           alert("Tài khoản này đã được đăng ký!");
            return;
        }

        // 5. Tạo Object người dùng mới và đẩy vào mảng
        let newUser = {
            account: account,
            password: password,
            regDate: new Date().toLocaleString()
        };

        listUsers.push(newUser);

        // 6. Lưu mảng mới trở lại LocalStorage
        localStorage.setItem("users", JSON.stringify(listUsers));

        // 7. Thông báo và chuyển hướng
        alert("Đăng ký thành công tài khoản: " + account);
        window.location.href = "login.html";
    });
});