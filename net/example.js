document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");
    const images = document.querySelectorAll(".box-img");// 获取所有图片
    const prevButton = document.querySelector(".box-left");// 左按钮
    const nextButton = document.querySelector(".box-right");// 右按钮
    const video = document.getElementById("mp4");
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.querySelector(".menu");
    gsap.registerPlugin(ScrollTrigger);

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

    /////////////////////////////////////////////////////////////////////header////////////////////////////////////////////////////////////////////////////////////////////

    // 函数封装动画逻辑
    function initAnimations() {
        if (window.innerWidth > 700) {
            gsap.to("header", {
                scrollTrigger: {
                    trigger: ".title",
                    start: "+=350%",
                    end: "bottom bottom",
                    scrub: 1.5,
                    markers: false
                },
                yPercent: -20,
                duration: 4
            });

            gsap.to("h1", {
                scrollTrigger: {
                    trigger: ".title",
                    start: "+=350%",
                    end: "bottom bottom",
                    scrub: 1.5,
                    markers: false
                },
                yPercent: 10,
                duration: 4
            });

            gsap.to("header ul", {
                scrollTrigger: {
                    trigger: ".title",
                    start: "+=350%",
                    end: "bottom bottom",
                    scrub: 1.5,
                    markers: false
                },
                yPercent: 10,
                duration: 4
            });
        }
    }
    
    /////////////////////////////////////////////////////////////////////影片動畫////////////////////////////////////////////////////////////////////////////////////////////

    // 初始化动画
    initAnimations();

    // 监听窗口调整大小事件，重新初始化动画
    window.addEventListener("resize", () => {
        // 在重新初始化前移除所有 ScrollTrigger
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        initAnimations();
    });

    // 确保视频加载完成后，可以播放
    video.addEventListener("canplay", () => {
        video.currentTime = 0;
        video.pause();
    });

    // 在视频加载时隐藏控制器
    video.removeAttribute("controls");

    // 避免未定义的 `videoElement` 报错
    video.addEventListener("ended", () => {
        video.controls = false; // 隐藏控制器
    });

    window.addEventListener("load", () => {
        video.muted = true; // 确保静音，符合 Chrome 自动播放策略
        video.currentTime = 0; // 视频从头开始
        video.pause(); // 确保初始状态暂停
    });
    /////////////////////////////////////////////////////////////////////head按鈕////////////////////////////////////////////////////////////////////////////////////////////


    // 綁定點擊事件
    let isOpen = false;

    gsap.set(menu, { height: 0, opacity: 0 });

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("show");
        if (isOpen) {
            gsap.to(menu, {
                height: 0,
                opacity: 0,
                y: -20,  // 添加向上的动画
                duration: 0.3,
                ease: "power1.out"
            });
        } else {
            gsap.fromTo(menu,
                { height: 0, opacity: 0, y: -20 }, // 初始位置稍微向上
                {
                    height: "auto",
                    opacity: 1,
                    y: 0, // 回到原位
                    duration: 0.3,
                    ease: "power1.in"
                }
            );
        }
        isOpen = !isOpen;
    });

    /////////////////////////////////////////////////////////////////////title////////////////////////////////////////////////////////////////////////////////////////////


    gsap.to(".title", {
        scrollTrigger: {
            trigger: ".title", // 触发动画的元素
            start: "top top",  // 起始位置：元素顶部与视口顶部对齐时
            end: "+=350%",     // 滚动到多长时间后结束
            pin: true,         // 固定第一个画面
            pinSpacing: true,  // 保留滚动占位，确保第二个画面不过早上移
            scrub: true,       // 滚动时动画会同步滚动
            markers: false,
        }
    });

    gsap.to("#text", {
        scrollTrigger: {
            trigger: ".title",  // 触发动画的元素
            start: "1px",   // 动画在滚动到 .title 的 20% 位置时开始
            end: "top 100%",    // 动画在滚动到 .title 的 -20% 位置时结束
            scrub: true,         // 平滑滚动动画
            toggleActions: "play reverse play reverse", // 动画在滚动时播放和反向播放
            markers: false,
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
            toggleActions: "play reverse play reverse", // 动画在滚动时播放和反向播放
            markers: false,
        },
        scale: 2,             // 放大两倍
        opacity: 0,           // 渐渐消失
        ease: "power1.out"    // 缓动效果
    });



    // 设置滚动触发的模糊效果
    gsap.to(".title", {
        scrollTrigger: {
            trigger: ".title",       // 触发的元素是 content
            start: "+=20%",           // 当滚动到内容区的 80% 位置时开始模糊
            end: "bottom 60%",          // 滚动到内容区的 20% 时结束模糊
            scrub: true,                // 平滑同步滚动
            markers: false,             // 可选: 添加标记用于调试
        },
        filter: "blur(5px)",            // 设置模糊效果，5px 是模糊的强度
        ease: "none"                    // 使用平滑的过渡
    });

    /////////////////////////////////////////////////////////////////////me////////////////////////////////////////////////////////////////////////////////////////////


    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".me", // 设置滚动触发点
            start: "top top", // 动画从 `.me` 顶部与视口顶部对齐开始
            end: "+=250%",   // 动画持续滚动 250% 的内容高度
            scrub: true,     // 平滑滚动
            pin: true,       // 固定 `.me` 元素
            pinSpacing: true, // 保留滚动占位
            markers: false,  // 调试时可以设置为 true
        },
    });

    // 1. `.me` 整体渐显动画
    gsap.fromTo(
        ".me",
        { opacity: 0 },
        {
            opacity: 1,
            scrollTrigger: {
                trigger: ".me",
                start: "top top",
                end: "bottom 80%",
                scrub: true, // 平滑滚动
                markers: false, // 显示标记用于调试
            },
        }
    );

    // 2. `.me img` 出现和消失动画
    gsap.fromTo(
        ".me img",
        { y: 100, opacity: 0 }, // 出现前：向下偏移 100px，透明
        {
            y: 0, opacity: 1, // 出现后：恢复原位，完全显示
            scrollTrigger: {
                trigger: ".me",
                start: "top top",
                end: "bottom 30%",
                scrub: true,
                markers: false,
            },
        }
    );

    // 3. `.info` 出现和消失动画
    gsap.fromTo(
        ".info",
        { y: 100, opacity: 0 }, // 出现前：向下偏移 100px，透明
        {
            y: 0, opacity: 1, // 出现后：恢复原位，完全显示
            scrollTrigger: {
                trigger: ".me",
                start: "top top",
                end: "bottom 30%",
                scrub: true,
                markers: false,
            },
        }
    );



    // 4. `.gradient-overlay2` 出现和消失动画
    gsap.fromTo(
        ".gradient-overlay2",
        { y: 100, opacity: 0 }, // 出现前：向下偏移 100px，透明
        {
            y: 0, opacity: 1, // 出现后：恢复原位，完全显示
            scrollTrigger: {
                trigger: ".me",
                start: "top top",
                end: "bottom 30%",
                scrub: true,
                markers: false,
            },
        }
    );

    gsap.fromTo(".me img", {
        y: 0, // 初始位置在 100px 下方
        opacity: 1
    }, {
        y: -100, // 滚动到元素时回到原位
        opacity: 0,

        scrollTrigger: {
            trigger: ".me ",
            start: "bottom 90%",  // 当 .me 顶部到达视口 80% 位置时开始
            end: "bottom 1%",    // 当 .me 顶部到达视口 30% 位置时结束
            scrub: true,       // 平滑滚动
            markers: true    // 可选，显示标记以调试
        }
    });

    gsap.fromTo(".info", {
        y: 0, // 初始位置在 100px 下方
        opacity: 1
    }, {
        y: -100, // 滚动到元素时回到原位
        opacity: 0,

        scrollTrigger: {
            trigger: ".me ",
            start: "bottom 90%",  // 当 .me 顶部到达视口 80% 位置时开始
            end: "bottom 1%",    // 当 .me 顶部到达视口 30% 位置时结束
            scrub: true,       // 平滑滚动
            markers: false     // 可选，显示标记以调试
        }
    });

    gsap.fromTo(".gradient-overlay2", {
        y: 0, // 初始位置在 100px 下方
        opacity: 1
    }, {
        y: -100, // 滚动到元素时回到原位
        opacity: 0,

        scrollTrigger: {
            trigger: ".me ",
            start: "bottom 90%",  // 当 .me 顶部到达视口 80% 位置时开始
            end: "bottom 1%",    // 当 .me 顶部到达视口 30% 位置时结束
            scrub: true,       // 平滑滚动
            markers: false     // 可选，显示标记以调试
        }
    });

    /////////////////////////////////////////////////////////////////////social////////////////////////////////////////////////////////////////////////////////////////////


    gsap.fromTo(".blur-overlay", {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 5,

        scrollTrigger: {
            trigger: ".social",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 3,
            markers: false
        }
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: ".social",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 5,
            markers: false
        }
    })
        .fromTo(".blur-color", {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8
        })
        .fromTo(".h2", {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8
        })
        .fromTo(".content", {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8
        });

// 初始化 ScrollTrigger
ScrollTrigger.create({
    trigger: ".w", // 当 `.w` 元素进入视口时触发
    start: "top 1%",
    end: "bottom bottom",
    scrub: true,
    markers: false,
    onEnter: () => {
        if (video.readyState >= 1) {
            video.play().catch((error) => {
                console.error("Video play was interrupted:", error);
            });
        }
    },
    onLeave: () => {
        video.pause();
    },
    onLeaveBack: () => {
        video.pause();
    },
});

// 监听滚动事件，确保在返回页面时播放视频
ScrollTrigger.create({
    trigger: ".w",   // 再次使用 .title 区域作为触发器
    start: "top 5%",     // 当滚动到页面的 5% 位置时触发
    end: "bottom bottom",
    markers: false,
    onEnterBack: () => {
        if (video.readyState >= 1) {
            video.play().catch((error) => {
                console.error("Video play was interrupted:", error);
            });
        }
    }
});


});












