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
    // Stabilize navbar on mobile: lock body scroll to preserve position when menu is open
    const navCollapse = document.getElementById('navbarNav');
    let savedScrollY = 0;
    if (navCollapse) {
        navCollapse.addEventListener('show.bs.collapse', function () {
            savedScrollY = window.scrollY || window.pageYOffset || 0;
            document.body.classList.add('nav-open');
            document.body.classList.add('nav-opening');
            // Lock scroll without causing iOS Safari jump
            document.body.style.position = 'fixed';
            document.body.style.top = `-${savedScrollY}px`;
            document.body.style.width = '100%';
        });
        navCollapse.addEventListener('shown.bs.collapse', function () {
            // Remove opening state after CSS transition
            document.body.classList.remove('nav-opening');
        });
        // During closing animation keep lock to mirror open
        navCollapse.addEventListener('hide.bs.collapse', function () {
            // Reset panel scroll to top to avoid stutter at the end
            try { this.scrollTop = 0; } catch (e) {}
            // Temporarily disable smooth scroll to avoid visible jump
            document.documentElement.classList.add('no-smooth-scroll');
        // Trigger transform/opacity out animation
        document.body.classList.add('nav-hiding');
        });
        navCollapse.addEventListener('hidden.bs.collapse', function () {
            // Defer unlock to next frames to avoid stutter at the end of transition
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
            document.body.classList.remove('nav-hiding');
                    document.body.classList.remove('nav-open');
                    const y = savedScrollY;
                    document.body.style.position = '';
                    document.body.style.top = '';
                    document.body.style.width = '';
                    // Only scroll if we've actually moved
                    if (Math.abs((window.scrollY || window.pageYOffset || 0) - y) > 1) {
                        window.scrollTo(0, y);
                    }
                    // Re-enable smooth scroll after state is stable
                    document.documentElement.classList.remove('no-smooth-scroll');
                });
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // 让展开箭头状态与 Bootstrap 折叠组件真实状态保持同步
    const togglers = document.querySelectorAll('.session-speaker[data-bs-target]');

    togglers.forEach(toggler => {
        const targetSelector = toggler.getAttribute('data-bs-target');
        const target = document.querySelector(targetSelector);
        if (!target) return;

        const syncArrow = () => {
            if (target.classList.contains('show')) {
                toggler.classList.add('expanded');
            } else {
                toggler.classList.remove('expanded');
            }
        };

        // 初始化箭头方向
        syncArrow();

    // 在折叠/展开开始时立即同步箭头，提升响应速度
    target.addEventListener('show.bs.collapse', () => toggler.classList.add('expanded'));
    target.addEventListener('hide.bs.collapse', () => toggler.classList.remove('expanded'));
    // 结束时再兜底同步一次，防止异常导致状态不同步
    target.addEventListener('shown.bs.collapse', syncArrow);
    target.addEventListener('hidden.bs.collapse', syncArrow);
    });
});


// --- Schedule Page Scrolling ---
document.addEventListener('DOMContentLoaded', function() {
    const scheduleTabsContainer = document.querySelector('.schedule-tabs');
    if (scheduleTabsContainer) {
        const scheduleTabs = scheduleTabsContainer.querySelectorAll('.nav-link');

        scheduleTabs.forEach(tab => {
            tab.addEventListener('click', function(event) {
                // If this is the expand-all control, let its own handler manage and skip filter switching
                if (this.getAttribute('data-role') === 'expand-toggle') {
                    return; // expand-all has its own handler below
                }
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
    // Expand/Collapse all talks on schedule page
    const expandAllBtn = document.getElementById('expandAllTalks');
    if (expandAllBtn) {
        let expanded = false;
        const updateButtonLabel = () => {
            expandAllBtn.textContent = expanded ? '收起全部演讲' : '展开全部演讲';
            // also reflect active style like tabs without interfering with filter state
            if (expanded) expandAllBtn.classList.add('active'); else expandAllBtn.classList.remove('active');
        };
        updateButtonLabel();

        expandAllBtn.addEventListener('click', function(event) {
            event.preventDefault();
            const collapses = document.querySelectorAll('.session-list .collapse');
            collapses.forEach(el => {
                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(el, { toggle: false });
                if (!expanded) {
                    bsCollapse.show();
                } else {
                    bsCollapse.hide();
                }
            });
            expanded = !expanded;
            updateButtonLabel();

            // sync arrow state for all togglers
            document.querySelectorAll('.session-speaker[data-bs-target]').forEach(toggler => {
                const target = document.querySelector(toggler.getAttribute('data-bs-target'));
                if (target) {
                    if (expanded) toggler.classList.add('expanded'); else toggler.classList.remove('expanded');
                }
            });
        });
    }
});