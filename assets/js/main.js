document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".backtotop");

    // Ẩn ban đầu
    btn.style.display = "none";

    // Khi scroll thì hiện nút
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });

    // Khi click → scroll lên đầu
    btn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});