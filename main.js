document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle_btn');
    const closeBtn = document.querySelector('.close-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const headerContainer = document.querySelector('.header-container');
    let isMenuOpen = false;

    toggleBtn.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show-menu');
        isMenuOpen = !isMenuOpen; 
    });

    closeBtn.addEventListener('click', function() {
        dropdownMenu.classList.remove('show-menu');
        isMenuOpen = false; 
    });

    window.addEventListener('scroll', function() {
        const headerBottom = headerContainer.getBoundingClientRect().bottom;
        if (isMenuOpen) {
            dropdownMenu.style.top = '0';
            dropdownMenu.style.position = 'fixed';
            dropdownMenu.style.zIndex = '9999';
        } else {
            if (window.scrollY > headerBottom) {
                dropdownMenu.style.top = headerBottom + 'px';
                dropdownMenu.style.position = 'absolute';
                dropdownMenu.style.zIndex = 'auto';
            }
        }
    });
});


document.querySelector('.toggle_btn').addEventListener('click', function() {
    document.querySelector('.dropdown-menu').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.dropdown-menu').style.display = 'none';
});
