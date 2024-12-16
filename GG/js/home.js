document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".box-img"); // 获取所有图片
    const prevButton = document.querySelector("#left"); // 左按钮
    const nextButton = document.querySelector("#right"); // 右按钮
    const video = document.getElementById("mp4");
    gsap.registerPlugin(ScrollTrigger);

    // **title** //
    let title = gsap.timeline({
        scrollTrigger: {
            trigger: ".title", // 触发动画的元素
            start: "top top", // 起始位置：元素顶部与视口顶部对齐时
            end: "+=100%", // 滚动到多长时间后结束
            pin: true, // 固定第一个画面
            pinSpacing: true, // 保留滚动占位，确保第二个画面不过早上移
            scrub: true, // 滚动时动画会同步滚动
            markers: false,
        },
    });

    title
        .to(".gradient-overlay", {
            scale: 2, // 放大两倍
            opacity: 0, // 渐渐消失
            ease: "power1.out", // 缓动效果
        })
        .to(
            ".title",
            {
                // 设置滚动触发的模糊效果
                filter: "blur(5px)", // 设置模糊效果，5px 是模糊的强度
                ease: "none", // 使用平滑的过渡
            },
            "+=3"
        ); //delay (seconds)

    // **video** //
    video.addEventListener("loadedmetadata", () => {
        video.currentTime = 0;
        ScrollTrigger.create({
            trigger: "#mp4", // 滾動觸發影片播放的區域
            start: "top top", // 開始點
            end: "bottom top", // 結束點
            onEnter: () => {
                video.currentTime = 0; // 重置影片時間
                video.play(); // 播放影片
            },
            onLeaveBack: () => {
                video.pause(); // 回滾暫停
                video.currentTime = 0; // 重置時間
            },
            markers: false,
        });
    });

    // **me** //
    let me = gsap.timeline({
        scrollTrigger: {
            trigger: ".me", // 设置滚动触发点
            start: "top +=80%", // 动画从 `.me` 顶部与视口顶部对齐开始
            end: "+=40%", // 动画持续滚动 250% 的内容高度
            scrub: true, // 平滑滚动
            pin: true, // 固定 `.me` 元素
            pinSpacing: true, // 保留滚动占位
            markers: false, // 调试时可以设置为 true
        },
    });

    me.fromTo(
        ".me", // 1. `.me` 整体渐显动画
        { opacity: 0 },
        { opacity: 1 }
    )
        .fromTo(
            ".me img", // 2. `.me img` 出现和消失动画
            { y: 100, opacity: 0 }, // 出现前：向下偏移 100px，透明
            { y: 0, opacity: 1 }, // 出现后：恢复原位，完全显示
            "<"
        )
        .fromTo(
            ".gradient-overlay2", // 4. `.gradient-overlay2` 出现和消失动画
            { y: 100, opacity: 0 }, // 出现前：向下偏移 100px，透明
            { y: 0, opacity: 1 }, // 出现后：恢复原位，完全显示
            "<"
        )
        .fromTo(
            ".info", // 3. `.info` 出现和消失动画
            { y: 100, opacity: 0 }, // 出现前：向下偏移 100px，透明
            { y: 0, opacity: 1 }, // 出现后：恢复原位，完全显示
            "<"
        );

    // **作品精選** //
    let index = 0; // 当前图片索引
    // 显示指定索引的图片
    function showImage(newIndex) {
        // 隐藏当前图片
        images[index].classList.remove("active");

        // 更新索引
        index = newIndex;

        // 显示新图片
        images[index].classList.add("active");
    }

    // 初始化轮播，设置第一张图片为可见
    images[index].classList.add("active");

    // 自动轮播
    setInterval(function () {
        const newIndex = (index + 1) % images.length; // 计算下一张索引
        showImage(newIndex);
    }, 3000);

    // 点击上一张按钮
    prevButton.addEventListener("click", function () {
        const newIndex = (index - 1 + images.length) % images.length; // 计算上一张索引
        showImage(newIndex);
    });

    // 点击下一张按钮
    nextButton.addEventListener("click", function () {
        const newIndex = (index + 1) % images.length; // 计算下一张索引
        showImage(newIndex);
    });

    // **social** //
    let social = gsap.timeline({
        scrollTrigger: {
            trigger: ".social",
            start: "top top+=90%",
            end: "top top+=90%",
            scrub: false,
            markers: false,
        },
    });

    social
        .fromTo(
            ".blur-color",
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
            }
        )
        .fromTo(
            ".content",
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
            },
            "<"
        )
        .fromTo(
            ".blur-overlay",
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
            },
            "<"
        );
});
