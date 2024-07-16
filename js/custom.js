//Tab Hide and Show JS
function managementTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" activeTabMenu", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " activeTabMenu";
}

//Owl Carousel JS
$('.cstmPortfolioCarousel').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        450: {
            items: 2,
            nav: true
        },
        600: {
            items: 3,
            nav: true
        },
        1000: {
            items: 4,
            nav: true,
            loop: true
        }
    }
})

$('.feedbackSlider').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 1,
            nav: true,
            loop: true
        }
    }
})


//Header Fix JS
window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("stickyHeader");
    } else {
        header.classList.remove("stickyHeader");
    }
}


// Navigation Active and Inactive JS
$(function () {
    var url = window.location;
    var element = $('.cstmNavbarCollapse > ul a').filter(function () {
        return this.href == url;
    }).addClass('ActiveNav').parent().addClass('ActiveNavLi');
    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('ul_Active').slideDown(100).parent().addClass('activeCustome_Nav').children('a').addClass('ActiveNav');
        } else {
            break;
        }
    }
    $('.cstmNavbarCollapse > ul a').on('click', function (e) {

        if (!$(this).hasClass("ActiveNav")) {
            // hide any open menus and remove all other classes
            $("ul", $(this).parents("ul:first")).slideUp(200);
            $("ul", $(this).parents("ul:first")).removeClass("ulBock");
            $("a", $(this).parents("ul:first")).removeClass("ActiveNav");

            // open our new menu and add the open class
            $(this).next("ul").slideDown(100);
            $(this).next("ul").addClass("ulBock");
            $(this).addClass("ActiveNav");
        } else if ($(this).hasClass("ActiveNav")) {
            $(this).removeClass("ActiveNav");
            $(this).parents("ul:first").removeClass("ActiveNav");
            $(this).next("ul").slideUp(100);
            $(this).next("ul").removeClass("ulBock");
        }
    })
});