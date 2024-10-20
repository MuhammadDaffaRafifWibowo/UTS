document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.sidebar ul li a');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            navItems.forEach(navItem => navItem.style.color = 'white');
            this.style.color = 'var(--light-blue)';
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        console.log("helo")
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
        }
    });
});