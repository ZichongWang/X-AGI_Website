document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');

    // 只在有导航栏时执行
    if (navbar) {
        window.addEventListener('scroll', function() {
            // 当页面滚动超过一屏（或一个较小的值，如50px）时，添加scrolled类
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 根据当前页面URL设置导航栏的active状态
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            // 移除所有链接的active类
            navLinks.forEach(l => l.classList.remove('active'));
            // 为当前页面链接添加active类
            link.classList.add('active');
        }
    });
});