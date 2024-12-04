document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);

/////////////////////////////////////////////////////////////////////me////////////////////////////////////////////////////////////////////////////////////////////
        
        
        gsap.fromTo(".me", {        
            opacity: 0
        }, {
            
            opacity: 1,
            
            scrollTrigger: {
                trigger: ".me",  // 监听 `.me` 元素的滚动
                start: "top top",  // 当 `.me` 顶部到达视口 80% 位置时开始
                end: "bottom 80%",    // 当 `.me` 顶部到达视口 30% 位置时结束
                scrub: true,       // 平滑滚动
                markers:true   // 可选，显示标记以调试
            }
        });

        gsap.to(".me", {
            scrollTrigger: {
                trigger: ".me", // 触发动画的元素
                start: "top top",  // 起始位置：元素顶部与视口顶部对齐时
                end: "+=250%",     // 滚动到多长时间后结束
                pin: true,         // 固定第一个画面
                pinSpacing: true,  // 保留滚动占位，确保第二个画面不过早上移
                scrub: true ,       // 滚动时动画会同步滚动
                markers: false,
            }
        });

        gsap.fromTo(".me img", {
            y: 100, // 初始位置在 100px 下方
            opacity: 0
        }, {
            y: 0, // 滚动到元素时回到原位
            opacity: 1,
            duration: 0.3,
            
            scrollTrigger: {
                trigger: ".me",  // 监听 `.me` 元素的滚动
                start: "top top",  // 当 `.me` 顶部到达视口 80% 位置时开始
                end: "bottom 30%",    // 当 `.me` 顶部到达视口 30% 位置时结束
                scrub: true,       // 平滑滚动
                markers:false     // 可选，显示标记以调试
            }
        });
       
        gsap.fromTo(".info", {
            y: 100, // 初始位置在 100px 下方
            opacity: 0
        }, {
            y: 0, // 滚动到元素时回到原位
            opacity: 1,
            duration: 0.3,
            
            scrollTrigger: {
                trigger: ".me",  // 监听 `.me` 元素的滚动
                start: "top top",  // 当 `.me` 顶部到达视口 80% 位置时开始
                end: "bottom 30%",    // 当 `.me` 顶部到达视口 30% 位置时结束
                scrub: true,       // 平滑滚动
                markers:false     // 可选，显示标记以调试
            }
        });

        gsap.fromTo(".gradient-overlay2", {
            y: 100, // 初始位置在 100px 下方
            opacity: 0
        }, {
            y: 0, // 滚动到元素时回到原位
            opacity: 1,
            duration: 0.3,
            
            scrollTrigger: {
                trigger: ".me",  // 监听 `.me` 元素的滚动
                start: "top top",  // 当 `.me` 顶部到达视口 80% 位置时开始
                end: "bottom 30%",    // 当 `.me` 顶部到达视口 30% 位置时结束
                scrub: true,       // 平滑滚动
                markers:false     // 可选，显示标记以调试
            }
        });

        gsap.fromTo(".me img", {
            y: 0, // 初始位置在 100px 下方
            opacity: 1
        }, {
            y: -100, // 滚动到元素时回到原位
            opacity: 0,
            
            scrollTrigger: {
                trigger: ".me ",  
                start: "bottom 90%",  // 当 `.me` 顶部到达视口 80% 位置时开始
                end: "bottom 1%",    // 当 `.me` 顶部到达视口 30% 位置时结束
                scrub: true,       // 平滑滚动
                markers:false     // 可选，显示标记以调试
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
                start: "bottom 90%",  // 当 `.me` 顶部到达视口 80% 位置时开始
                end: "bottom 1%",    // 当 `.me` 顶部到达视口 30% 位置时结束
                scrub: true,       // 平滑滚动
                markers:false     // 可选，显示标记以调试
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
                start: "bottom 90%",  // 当 `.me` 顶部到达视口 80% 位置时开始
                end: "bottom 1%",    // 当 `.me` 顶部到达视口 30% 位置时结束
                scrub: true,       // 平滑滚动
                markers:false     // 可选，显示标记以调试
            }
        });   
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
                markers:false    
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
    }
    
);





