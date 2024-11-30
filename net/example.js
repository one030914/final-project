document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");
    const images = document.querySelectorAll(".box-img");// 获取所有图片
    const prevButton = document.querySelector(".box-left");// 左按钮
    const nextButton = document.querySelector(".box-right");// 右按钮
    const video = document.querySelector(".mp4");
    const videoElement = document.getElementById("myVideo");
    let index = 0;// 当前图片索引

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

    // 点击按钮回到顶部
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0, // 滚动到顶部
            behavior: "smooth", // 平滑滚动
        });
    });
    gsap.to(".title", {
        scrollTrigger: {
            trigger: ".title", // 触发动画的元素
            start: "top top",  // 起始位置：元素顶部与视口顶部对齐时
            end: "+=350%",     // 滚动到多长时间后结束
            pin: true,         // 固定第一个画面
            pinSpacing: true,  // 保留滚动占位，确保第二个画面不过早上移
            scrub: true        // 滚动时动画会同步滚动
        }
    });

    gsap.to("#text", {
        scrollTrigger: {
            trigger: ".title",  // 触发动画的元素
            start: "top 1%",   // 动画在滚动到 .title 的 20% 位置时开始
            end: "top -100%",    // 动画在滚动到 .title 的 -20% 位置时结束
            scrub: true,         // 平滑滚动动画
            toggleActions: "play reverse play reverse" // 动画在滚动时播放和反向播放
        },
        scale: 2,             // 放大两倍
        opacity: 0,           // 渐渐消失
        ease: "power1.out"    // 缓动效果
    });

    gsap.to(".gradient-overlay", {
        scrollTrigger: {
            trigger: ".title",  // 触发动画的元素
            start: "top 1%",   // 动画在滚动到 .title 的 20% 位置时开始
            end: "top -100%",    // 动画在滚动到 .title 的 -20% 位置时结束
            scrub: true,         // 平滑滚动动画
            toggleActions: "play reverse play reverse" // 动画在滚动时播放和反向播放
        },
        scale: 2,             // 放大两倍
        opacity: 0,           // 渐渐消失
        ease: "power1.out"    // 缓动效果
    });

    ScrollTrigger.create({
        trigger: ".title",   // 当 `.title` 区域触发时开始
        start: "top 1%",    // 从页面顶部开始
        end: "+=350%",       // 滚动到下一个画面时结束动画
        scrub: true,         // 平滑滚动时同步动画
        onEnter: () => {
            if (video.paused) {
                video.play();  // 进入页面时播放视频
            }
        },
        onLeave: () => {
            video.pause();    // 离开页面时暂停视频
        },
        onEnterBack: () => {
            if (video.paused) {
                video.play();  // 返回到第一屏时播放视频
            }
        },
        onLeaveBack: () => {
            video.pause();    // 离开页面时暂停视频
        }
    });

    // 监听滚动事件，确保在返回页面时播放视频
    ScrollTrigger.create({
        trigger: ".title",   // 再次使用 `.title` 区域作为触发器
        start: "top 1%",     // 当滚动到页面的 5% 位置时触发
        onEnterBack: () => {
            video.currentTime = 0;
            video.play();  // 在回到 5% 位置时重新播放视频
        }
    });

    // 在视频加载时隐藏控制器
    video.removeAttribute("controls");

    videoElement.addEventListener("ended", function () {
        // 在视频播放结束后隐藏控制器
        videoElement.controls = false;  // 隐藏控制器
    });

        // 平滑过渡到第二个画面
    gsap.fromTo(".me", 
        { opacity: 0, y: 100 }, 
        { 
            opacity: 1, y: 0, 
            scrollTrigger: {
                trigger: ".me",
                start: "top 100%",  // 第二个画面进入视口时触发
                end: "top 50%",     // 完全出现在视口中
                scrub: true
            }
        })
});





