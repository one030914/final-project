document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".box-img");
    let index = 0;

    function showNextImage() {
        // 隐藏当前图片
        images[index].classList.remove("active");

        // 更新索引
        index = (index + 1) % images.length;

        // 显示下一张图片
        images[index].classList.add("active");
    }

    // 初始化轮播，设置第一张图片为可见
    images[index].classList.add("active");

    // 每隔3秒切换一张图片
    setInterval(showNextImage, 3000);
});
