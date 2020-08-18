// $(document).ready(function () {
//     // catalog function
    
//     if (window.screen.width < 768) {
//         $('body').on('click', '.clickCatalogOpenClose', function () {
//             $(this).parent().toggleClass('active');
//             $('.clickCatalogName').removeClass('active');
//             $('.catalogSubMenu').removeClass('open');
//             $('.headerCatalog').toggle();
//             $('.arrowBackToCategories').hide();
//             $('.select-zone__nameCatalog').text('Բաժիններ');
//         });
//         $('body').on('click', '.arrowBackToCategories', function () {
//             $(this).hide();
//             $('.catalogSubMenu').removeClass('open');
//             $('.clickCatalogName').removeClass('active');
//             $('.select-zone__nameCatalog').text('Բաժիններ');
//         });
//     }

//     $("body").on('mouseover', '.clickCatalogName', function () {
//         let catalogList = $(this).parent();
//         let catalogItem = $(catalogList).parent();
//         let catalogItemOpen = $(catalogItem).find('.catalogSubMenu');
//         let catalogName = $(this).parent();
//         let subMenu = $(catalogName).find('.catalogSubMenu');
//         if ($(catalogItemOpen).hasClass('open')) {
//             $(catalogItemOpen).removeClass('open');
//         }
//         $(subMenu).addClass('open');

//         if (window.screen.width < 768) {
//             let child_select_name = $('body').find('.select-zone__nameCatalog');
//             let select_text = $(this).find('span').text();
//             console.log(select_text)
//             $(child_select_name).text(select_text);
//             $('.arrowBackToCategories').show();
//         }
//     });
//     $("body").on('mouseover', '.change_activeCatalog', function () {
//         let this_active = $('.change_activeCatalog');
//         $(this_active).removeClass('active');
//         $(this).addClass('active');
//     });
// });

$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 768) {
            // $('.sidenav').css({'overflow-y': 'auto'})
        }

        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'max-width': '100%', transition: '0.3s'});
            $('.menu-cnt').css({width: '100%', transition: '0.4s'});
            $('body').addClass('body_fix');
            var menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function () {
                time++;
                $(this).css({'transition-delay': '0.' + time + 's'});
                $(this).addClass('anim-menu')
            })
        } else {
            $('.menu-cnt').css({width: '0%'});
            $('body').removeClass('body_fix');
            time = 0;
            var menu_li = $(".sidenav ul li");
            $(menu_li).each(function () {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({'opacity': '0', transition: '0.2s'})
                }
            })
        }

    });

    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').css({width: '0%'});
        $('body').removeClass('body_fix');
        time = 0;
        var menu_li = $(".sidenav ul li");
        $(menu_li).each(function () {
            if ($(this).hasClass('anim-menu')) {
                $(this).removeClass('anim-menu');
                $(this).css({'opacity': '0', transition: '0.2s'})
            }
        })
    })
})