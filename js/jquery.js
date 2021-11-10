$(function () {
    

    // Start Page Header
    
    // Image Profile Toggle
    $('.navbar .right-side .pers-img').click(function (e) { 
        e.preventDefault();
        $('.navbar .right-side .menu-list').toggleClass('active');
    });

    // Sidebar show toggle
    $('.page-header .oc-toggle').click(function (e) {
        e.preventDefault();
        $('.page-header .sidebar').toggleClass('show');
        $('.page-header .overlay').toggleClass('show');
    });
    $('.page-header .overlay').click(function (e) {
        e.preventDefault();
        $(this).removeClass('show');
        $('.page-header .sidebar').removeClass('show');
    });
    // Dropdown menu in sidebar
    $('.page-header .sidebar .item-link.dropdown-list').click(function (e) { 
        e.preventDefault();
        $(this).parent().toggleClass('active').siblings('.item').removeClass('active');
        $(this).next('.n-list').toggleClass('show').slideToggle(400, function () {
            $('.page-header .sidebar .n-list').not(this).slideUp();
        });
    });

});