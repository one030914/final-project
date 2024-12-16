document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // **title** //
    let title = gsap.timeline({
        scrollTrigger: {
            trigger: ".title", // 触发动画的元素
            start: "top top", // 起始位置：元素顶部与视口顶部对齐时
            end: "+=50%", // 滚动到多长时间后结束
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
            "<"
        ); //delay (seconds)

    // **work** //
    app = Vue.createApp({
        data() {
            return {
                works: [
                    {
                        title: "武士刀katana",
                        description:
                            "第一次用maya製作武器，花了很多時間研究製作武士刀模型的教程，也嘗試用maya貼膜貼出武士刀破舊的感覺",
                        image: "/final-project-main/img/武器彩圖.jpg",
                    },
                    {
                        title: "Maria",
                        description: "最近很喜歡的遊戲角色，又颯又美",
                        image: "/final-project-main/img/maria.JPG",
                    },
                    {
                        title: "Mercy",
                        description:
                            "有一款叫overwatch的遊戲裡，我最喜歡的角色",
                        image: "/final-project-main/img/天使.JPG",
                    },
                    {
                        title: "龍年賀圖",
                        description:
                            "第一次挑戰畫寫實的龍，花了很多時間研究跟摸索",
                        image: "/final-project-main/img/龍.JPG",
                    },
                    {
                        title: "風信與慕情",
                        description: "這是我很喜歡的一對小說角色",
                        image: "/final-project-main/img/風情.JPG",
                    },
                    {
                        title: "兵長",
                        description:
                            "之前很喜歡的一個動漫角色，我花了很多時間研究金屬的刻痕要怎麼繪製",
                        image: "/final-project-main/img/兵長賀圖.jpg",
                    },
                ],
            };
        },
    });
    app.mount("#app");

    const works = document.querySelectorAll(".work");
    works.forEach((work) => {
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: work,
                start: "top +=100px",
                end: "+=30%",
                scrub: true,
                pin: true,
                pinSpacing: true,
                markers: true,
            },
        });
        timeline
            .fromTo(work, { opacity: 0 }, { opacity: 1 })
            .fromTo(
                work.querySelector(".gradient-overlay2"),
                { y: 100, opacity: 0 }, // 出现前：向下偏移 100px，透明
                { y: 0, opacity: 1 }, // 出现后：恢复原位，完全显示
                "<"
            )
            .fromTo(
                work.querySelector(".text"),
                { y: 100, opacity: 0 }, // 出现前：向下偏移 100px，透明
                { y: 0, opacity: 1 }, // 出现后：恢复原位，完全显示
                "<"
            )
            .fromTo(
                work.querySelector(".box"),
                { y: 100, opacity: 0 }, // 出现前：向下偏移 100px，透明
                { y: 0, opacity: 1 }, // 出现后：恢复原位，完全显示
                "<"
            );
    });
});
