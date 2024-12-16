document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    // **menu上移動畫** //
    // Navbar shrink function
    const navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector("#mainNav");
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove("shrink");
        } else {
            navbarCollapsible.classList.add("shrink");
        }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);

    // **backToTop** //
    gsap.fromTo(
        "#backToTop",
        { opacity: 0, y: 0 },
        {
            opacity: 1,
            y: -10,
            ease: "power1.in",
            scrollTrigger: {
                trigger: ".title",
                start: "bottom top",
                markers: false,
                toggleActions: "play none none reverse", // 切换回到顶部时，重置 opacity 和 y 值
                onEnter: () => {
                    document.querySelector("#backToTop").style.pointerEvents =
                        "auto";
                },
                onLeaveBack: () => {
                    document.querySelector("#backToTop").style.pointerEvents =
                        "none";
                },
            },
        }
    );
    // 点击按钮回到顶部
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0, // 滚动到顶部
            behavior: "smooth", // 平滑滚动
            opacity: 0,
        });
    });
});
