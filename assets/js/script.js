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

document.addEventListener('DOMContentLoaded', function() {
    const speakerElements = document.querySelectorAll('.session-speaker');
    
    speakerElements.forEach(element => {
        element.addEventListener('click', function() {
            const targetId = this.getAttribute('data-bs-target');
            const targetElement = document.querySelector(targetId);
            const isExpanded = targetElement.classList.contains('show');
            
            // 切换展开/收起状态
            if (isExpanded) {
                this.classList.remove('expanded');
            } else {
                this.classList.add('expanded');
            }
        });
    });
});


// --- Schedule Page Scrolling ---
document.addEventListener('DOMContentLoaded', function() {
    const scheduleTabsContainer = document.querySelector('.schedule-tabs');
    if (scheduleTabsContainer) {
        const scheduleTabs = scheduleTabsContainer.querySelectorAll('.nav-link');

        scheduleTabs.forEach(tab => {
            tab.addEventListener('click', function(event) {
                event.preventDefault();

                // Update active class
                scheduleTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                // Scroll to target
                const targetSelector = this.getAttribute('data-target');
                const targetElement = document.querySelector(targetSelector);

                if (targetElement) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20; // 20px extra space

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
});