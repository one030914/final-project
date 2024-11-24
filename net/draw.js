document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    // 点击按钮回到顶部
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0, // 滚动到顶部
            behavior: "smooth", // 平滑滚动
        });
    });
});