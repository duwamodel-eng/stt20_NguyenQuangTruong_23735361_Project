$(document).ready(function () {
    $("#btnLogin").click(function () {
        // 1. Lấy dữ liệu người dùng nhập
        let account = $("#txtAccountLogin").val().trim();
        let password = $("#txtPassLogin").val().trim();
        let errorMsg = $("#login-error");

        // 2. Kiểm tra để trống
        if (account === "" || password === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        // 3. Lấy mảng users từ LocalStorage
        let listUsers = JSON.parse(localStorage.getItem("users")) || [];

        // 4. SỬA TẠI ĐÂY: Tìm user khớp CẢ account VÀ password
        // Dùng toán tử && (VÀ) để bắt buộc cả 2 phải đúng
        let userFound = listUsers.find(user => user.account === account && user.password === password);

        if (userFound) {
            // Đăng nhập thành công
            alert("Chào mừng " + account + " đã quay trở lại!");
            
            // Lưu thông tin user hiện tại
            localStorage.setItem("currentUser", JSON.stringify(userFound));

            // Chuyển về trang chủ
            window.location.href = "index.html";
        } else {
            // Nếu không tìm thấy user nào khớp cả 2 thông tin
            alert("Tài khoản hoặc mật khẩu không chính xác!");
        }
    });
});