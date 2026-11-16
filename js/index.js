var ROOT_URL = "https://maihangroup.com/";
/////////////////////////////// carousel //////////////////////////
$(document).ready(function () {
  let owlCarouselFunction = (element, numDesk = 1, numMobile = 1, loop = false, autoplay = false, nav = true, dots = false, margin = 0, stagePadding = 0, lazyLoad = true) => {
    var carousel = $(`.${element} .owl-carousel`);
    carousel.owlCarousel({
      center: false,
      loop: loop,
      margin: margin,
      stagePadding: stagePadding,
      autoplay: autoplay,
      navSpeed: 800,
      autoplaySpeed: 800,
      nav: nav,
      dots: dots,
      autoplayTimeout: 5000,
      lazyLoad: lazyLoad,
      lazyLoadEager: 1,
      navText: [
        '<i class="fal fa-angle-left" aria-hidden="true"></i>',
        '<i class="fal fa-angle-right" aria-hidden="true"></i>'
      ],
      navContainer: `.${element} .custom-nav`,
      responsive: {
        0: {
          items: numMobile,
        },
        767: {
          items: numDesk,

        }
      }
    });
  }

  owlCarouselFunction('slider_desktop', 1, 1, true, true, false, true);
  owlCarouselFunction('slider_cat', 1, 1, true, true, true, false);
  owlCarouselFunction('slider_cat_m', 1, 1, true, true, false, false, 10, 50);
  //owlCarouselFunction('slider_feedback', 1, 1, true, true, true, false);
  owlCarouselFunction('slider_expert', 1, 1, true, true, true, false);
  owlCarouselFunction('carousel_edu', 9, 5, true, true, false, false, 10);
  owlCarouselFunction('carousel_ho', 6, 3, true, true, true, false, 10);
  owlCarouselFunction('carousel_action', 5, 3, true, true, true, false, 10);






  $('.slider_feedback .owl-carousel').owlCarousel({
    center: false,
    loop: true,
    autoplay: false,
    navSpeed: 800,
    autoplaySpeed: 800,
    nav: true,
    dots: false,
    autoplayTimeout: 5000,
    lazyLoad: true,
    lazyLoadEager: 1,
    navText: [
      '<i class="fal fa-angle-left" aria-hidden="true"></i>',
      '<i class="fal fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.slider_feedback .custom-nav',
    responsive: {
      0: {
        items: 1,
        margin: 10,
        stagePadding: 50
      },
      767: {
        items: 1

      }
    }
  });
  /* $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }
  }); */
  $('.visible').on('click', function () {
    let input = $(this).prev();
    if (input.attr('type') === 'password') {
      input.attr('type', 'text');
    } else if (input.attr('type') === 'text') {
      input.attr('type', 'password');
    }
  });



  //// cart ///////////
  $('.page_pay').hide();
  $('.go_payment').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 0, function () {
      $('.page_cart').fadeOut(function () {
        $('.page_pay').fadeIn();
      });
    });
  });

  $('.back_page_cart').click(function () {
    $('.page_pay').fadeOut(function () {
      $('.page_cart').fadeIn();
    });
  });


  $('.slider_about .owl-carousel').owlCarousel({
    center: false,
    loop: true,
    margin: 15,

    autoplay: false,
    navSpeed: 800,
    autoplaySpeed: 800,
    nav: true,
    dots: true,
    autoplayTimeout: 5000,
    lazyLoad: true,
    lazyLoadEager: 1,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.slider_about .custom-nav',
    responsive: {
      0: {
        items: 2,
        stagePadding: 80
      },
      767: {
        items: 3,
        stagePadding: 0

      }
    }
  });
  ////////// owl carousel thumbnail //////////////
  var bigimage = $('.carousel_3 .owl-carousel');
  var thumbs = $('.carousel_4 .owl-carousel');
  var skipAutoScroll = false;

  bigimage
    .owlCarousel({
      items: 1,
      smartSpeed: 800,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      dots: false,
      loop: true,
      lazyLoad: true
    })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function () {
      thumbs.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items: 4,
      dots: false,
      nav: true,
      navText: [
        '<i class="fal fa-angle-left"></i>',
        '<i class="fal fa-angle-right"></i>'
      ],
      loop: false,
      smartSpeed: 200,
      slideSpeed: 500,
      margin: 10,
      slideBy: 1,
      touchDrag: true,
      mouseDrag: true,
      lazyLoad: true
    });

  function syncPosition(el) {
    var count = el.item.count - 1;
    var current;

    if (el.item.count === 2) {
      current = el.item.index % 2;
    } else {
      current = Math.round(el.item.index - el.item.count / 2 - 0.5);
    }

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");

    if (skipAutoScroll) {
      skipAutoScroll = false;
      return;
    }

    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs.find(".owl-item.active").first().index();
    var end = thumbs.find(".owl-item.active").last().index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function (e) {
    e.preventDefault();
    skipAutoScroll = true;
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
  ////////// end owl carousel thumbnail //////////////


  $(document).ready(function () {

    $('ul.tabs li').click(function () {
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('current');
      if (document.documentElement.clientWidth > 797) {
        $('.tab-content').removeClass('current');
      }
      else {
        $('.tab-content').removeClass('currentm');
      }

      $(this).addClass('current');
      if (document.documentElement.clientWidth > 797) {
        $("#" + tab_id + "d").addClass('current');
      }
      else {
        $("#" + tab_id).addClass('currentm');
      }
    });
  });


  $(document).ready(function () {

    $('ul.tabs_faqs li').click(function () {
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs_faqs li').removeClass('current');

      $('.tab-content').removeClass('current');

      $(this).addClass('current');

      $("#" + tab_id).addClass('current');
    });
  });


  $(document).ready(function () {

    $('ul.tabs_pro_detail li').click(function () {
      var tab_id = $(this).attr('data-tab');
      $('ul.tabs_pro_detail li').removeClass('current');
      $('.tab-content').removeClass('current');
      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    });
  });



  ////////////////////////////////////SCROLL//////////////////////////
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 900) {
      $('.tab_scroll').addClass('fixed');
      $('.pr_scroll').addClass('fixed2');
      $('.pr_scroll').show();

    } else {
      $('.tab_scroll').removeClass('fixed');
      $('.pr_scroll').removeClass('fixed2');
      $('.pr_scroll').hide();
    }
  });

  $(".tab_con").click(function () {
    $('html, body').animate({
      scrollTop: $(".top_3").offset().top
    }, 500);
  });
  ////////////////////////////////////    Make head of dropdown link clickable in navbar    //////////////////////////
  $('.navbar-collapse .dropdown-toggle').hover(function () {
    if (document.documentElement.clientWidth > 1200) {
      $(this).addClass('disabled');
    }
    else {
      $(this).removeClass('disabled');
    }
  });

  $(window).on("orientationchange", function (event) {
    $('.navbar-collapse .dropdown-toggle').click(function () {
      $(this).removeClass('disabled');
    });
  });


  ////////////////////////////////////    amination dropdown menu    //////////////////////////

  if (document.documentElement.clientWidth > 1200) {
    $(".dropdown").hover(
      function () {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).fadeIn(500);
        $(this).toggleClass('open');
      },
      function () {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).fadeOut(100);
        $(this).toggleClass('open');
      }
    );
  }
  ////////////////  animate dropdown menu mobile ////////////
  $(document).ready(function () {
    $('.dropdown')
      .on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
      })
      .on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, false).slideUp(300, function () {
          $(this).parent().removeClass('open');
        });
      })
      .on('hidden.bs.dropdown', function () {
        $(this).addClass('open');
      });
  });

});

/////////////   Lazy load   /////////////////
$(function () {
  $('.lazy').lazy({
    effect: "fadeIn",
    effectTime: 500,
    threshold: 0
  });
});
$(function () {
  $('.lazy2').lazy({
    effect: "fadeIn",
    threshold: 500,
  });
});
////////////////* phu luc *///////////////
$(".phu_luc .show_hide").click(function () {
  var lable = $(".show_hide").html();
  //alert(lable);

  if (lable == '<i class="fa fa-chevron-up" aria-hidden="true"> </i>') {
    $(".show_hide").html('<i class="fa fa-chevron-down" aria-hidden="true"> </i>');
    $(".table_content").slideUp(200);
  } else {
    $(".show_hide").html('<i class="fa fa-chevron-up" aria-hidden="true"> </i>');
    $(".table_content").slideDown(400);
  }

});
$(document).on('click', '.phu_luc a[href^="#"]', function (event) {
  //event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 100
  }, 1000);
});
$(document).ready(function () {
  $('body .pcontent .phu_luc ul li').first().addClass('current');
  $('body .pcontent .phu_luc ul li').hover(function () {
    $('body .pcontent .phu_luc ul li').removeClass('current');
    $(this).addClass('current');
  }, function () {
    $(this).removeClass('current');
  });
});

//////////   menu mobile /////////
function open_search_mobile() {
  close_click_buy();
  $(".search_mobile").slideToggle();
  if ($('#close_search_mobile_body').length) {
    $("#close_search_mobile_body").remove();
  } else {
    $("body").append('<div id="close_search_mobile_body" onclick="close_search_mobile()"></div>');
    $('.search_mobile .input_text_search').focus();
  }
}

function close_search_mobile() {
  $(".search_mobile").slideUp();
  $("#close_search_mobile_body").remove();
  close_click_buy();
}

function open_menu(element) {
  close_search_mobile()
  $("." + element).css({ "left": "0px", "transition": "0.5s" });
  $("." + element).after('<div class="close_menu_body" onclick="close_menu()"></div>');
  $("." + element).addClass('active');
  $('.icon_menu').html('<a href="javascript:void(0);" onclick="close_menu()"><img src = "images/index_55.svg" alt = "img" title = "img" class= "img-responsive icon_menu" /></a > ');
  //$(".input_search").focus();
}

function close_menu() {
  $(".menu").css({ "left": "-330px" });
  $(".close_menu_body").remove();
  $(".navbar-ex1-collapse").removeClass('active');
  $(".sidebar_left").css({
    "right": "-300px"
  });
  $(".sidebar_left").removeClass('active');
  $('.icon_menu').html('<a href="javascript:void(0);" onclick="open_menu(\'navbar-ex1-collapse\')"><img src = "images/pageone_38.svg" alt = "img" title = "img" class= "img-responsive icon_menu" /></a > ');
}
function close_click_buy() {
  $('.bl_click_buy').css({ 'bottom': '-500px', "transition": "all ease 0.5s" });
  $(".bg_close_click_buy").remove();
  $(".popup_add_to_cart").hide();
  $('#btn_contact #menu-open').prop('checked', false);
  $("#btn_contact .owl-carousel").trigger('play.owl.autoplay', [1000]);
}

$(".btn_buy_popup").click(function (e) {
  e.preventDefault();
  close_click_buy();
  $('.bl_click_buy').css({ 'bottom': '0px', "transition": "all ease 0.5s" });
  $("body").append('<div class="bg_close_click_buy" onclick="close_click_buy()"></div>');
});
$(".btn_close_click_buy").click(function (e) {
  close_click_buy();
});
function open_filter() {
  $(".sidebar_left").css({
    "right": "0px"
  });
  $("body").append('<div class="close_menu_body" onclick="close_menu()"></div>');
  $(".sidebar_left").addClass('active');
}


////////////////    Fade in Caption Carousel    //////////////////////
$(document).ready(function () {
  var $carousel = $('#myCarousel');
  var $carouselCaptions = $carousel.find('.item .carousel-caption');
  var $carouselImages = $carousel.find('.item img');
  var carouselTimeout;

  $carousel.on('slid.bs.carousel', function () {
    var $item = $carousel.find('.item.active');
    carouselTimeout = setTimeout(function () { // start the delay
      carouselTimeout = false;
      $('.carousel-caption', $item).animate({ 'opacity': 1 }, 1000);
      //$('img', $item).animate({'opacity': 1}, 500);
    }, 100);
  }).on('slide.bs.carousel', function () {
    if (carouselTimeout) { // Carousel is sliding, stop pending animation if any
      clearTimeout(carouselTimeout);
      carouselTimeout = false;
    }
    // Reset styles
    $carouselCaptions.animate({ 'opacity': 0 }, 500);
    $carouselImages.animate({ 'opacity': 1 }, 500);
  });;

  $('#myCarousel').carousel({
    interval: 5000,
    cycle: true,
    pause: "false",
  }).trigger('slid.bs.carousel');

  /////////   Click to top     ///////////////////
  var btn = $('#button');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
})

/* ///////  rating  ////////// */
$('.rating').rating();
console.log('rating');

$('.rating_detail').rating({
  extendSymbol: function (rate) {
    $(this).tooltip({
      container: 'body',
      placement: 'top',
      title: rate + ' Sao'
    });
  }
});
$(document).ready(function () {
  $(".rating-symbol").click(function () {
    var point = $('.rating_detail').val();
    var alias = $('#alias').val();
    var rating = point;
    var link = "/rating.ajax/" + alias + "/" + rating;
    console.log(link);
    $.get(link).done(function (data) {
      $("#view-rating").html(data);
    });
  });

  function setCookie(name, value, days) {
    var expires;
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
    } else {
      expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
  }

  function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return false;
  }

  if (!readCookie("rating")) {
    //code init rating
  }
  setCookie("rating", 6, 6);

});
$(document).ready(function () {
  $(document).on('click', 'a.btn_click', function (e) {
    console.log(12345);
    //event.preventDefault();
    $('.close_menu_body').trigger('click');
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 100
    }, 1000);
  });
  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto',
    openEffect: 'elastic',
    closeEffect: 'elastic',
    afterClose: function () {
    }
  });

  ////////////////Popup Cart///////////////////////
  const showPopup = () => {
    clearTimeout($('.shopping_cart').data('timeoutId'));
    $('.popup_cart').stop(true, true).fadeIn();
  }

  const hidePopup = () => {
    let timeoutId = setTimeout(function () {
      $('.popup_cart').fadeOut();
    }, 500);
    $('.shopping_cart').data('timeoutId', timeoutId);
  }

  //$('.shopping_cart, .popup_cart').hover(showPopup, hidePopup);
  $('.nav-pills li').click(function () {
    $(this).find('input[type=radio]').prop('checked', true);
  });


  $(document).on("click", ".add_to_cart", function (e) {
    e.preventDefault();
    let id = $(this).attr('data-id');
    let num = $(this).attr('data-num');
    if (!num) {
      num = 1;
    }
    $.ajax({
      url: ROOT_URL + "index.php?module=ajaxCart",
      type: "POST",
      data: { "action": "addCart", "id": id, "num": num },
      success: function (data) {
        openFancyPopup('#popup-noti', 'Thêm vào giỏ hàng thành công !', 2000);
        loadInfoCart('count');
        loadInfoCart('loadInfoCart');
      }
    });
  });
  $(document).on("click", ".del_cart", function (e) {
    e.preventDefault();
    let id = $(this).attr('data-id');
    $.ajax({
      url: ROOT_URL + "index.php?module=ajaxCart",
      type: "POST",
      data: {
        "action": "delCart",
        "id": id
      },
      success: function (data) {
        loadInfoCart('count');
        loadInfoCart('loadInfoCart');
      }
    });
  });
  $(document).on("click", ".copyVc", function (e) {
    e.preventDefault();
    let div = $(this);
    let id = div.attr('data-id');
    let btn = div.children().first();
    $.ajax({
      url: ROOT_URL + "index.php?module=ajaxCart",
      type: "POST",
      data: {
        "action": "copyVc",
        "id": id
      },
      success: function (data) {
        btn.text('Đã chép');
        div.removeAttr('class');
        div.removeAttr('data-id');
      }
    });
  });
  ////////////////load more////////////////////
  loadMore = (btnLoad, tabId, element, num) => {
    let ele = "#" + tabId + " ." + element;
    let hidden = ele + ':hidden';
    let btn = "#" + tabId + " ." + btnLoad;
    if ($(ele).length <= num) {
      $(btn).hide();
    }
    $(ele).slice(num).hide();
    $(btn).on("click", function (e) {
      e.preventDefault();
      const $newlyShown = $(hidden).slice(0, num);
      $newlyShown.slideDown(100);
      loadLazyImages($newlyShown);
      if ($(hidden).length == 0) {
        $(btn).hide();
      }
    });
  }
  loadMore('loadmore', 'news_list', 'block_news', 16);

  //////////// danh mục sp /////////////////
  $(document).on("click", ".d_cat .t_1", function () {
    $(this).addClass("open").siblings(".t_1").removeClass("open");
    moveDot($(this));
    showTab($(this).data("tab"));
  });

  $(document).on("click", ".top_1 .block_product", function (e) {
    if ($(e.target).closest("a, select, button, input").length) {
      return;
    }
    const tab = $(this).closest("[data-tab]").data("tab") || $(this).data("tab");
    if (tab) {
      $(".d_cat .t_1[data-tab='" + tab + "']").trigger("click");
    }
  });

  $(window).on("load resize", initTabs);
});


////////// funtion ////////////
const lazyImg = (ele, timeOut = 0) => {
  setTimeout(function () {
    $(ele).each(function () {
      var src = $(this).attr('data-src');
      $(this).attr('src', src);
    });
  }, timeOut);
}
function moveDot($item) {
  if (!$item || !$item.length) return;
  const d = $item.closest(".d_1")[0];
  if (!d) return;
  d.style.setProperty("--dot-x", $item.position().left + $item.outerWidth() / 2 + "px");
  d.style.setProperty("--dot-y", $item.position().top + $item.outerHeight() / 2 + "px");
}
function loadLazyImages($container) {
  if (!$container || !$container.length) return;
  $container.find("img.lazy, img[data-src]").each(function () {
    const $img = $(this);
    const src = $img.attr("data-src");
    if (src) {
      $img.attr("src", src).removeClass("lazy").removeAttr("data-src");
    }
  });
}

function showTab(name) {
  if (!name) return;
  $(".top_1 .block_product").removeClass("active");
  $(".top_1 .d_panels .col-xs-6").removeClass("active");

  const $cols = $(".top_1 .d_panels .col-xs-6[data-tab='" + name + "']").addClass("active");
  const $target = $cols.find(".block_product").addClass("active");
  loadLazyImages($cols);

  if (window.innerWidth <= 767) {
    const $panels = $(".top_1 .d_panels");
    if ($panels.length) {
      $panels.stop().scrollLeft(0);
    }
  } else {
    loadLazyImages($(".top_1 .d_panels"));
    if ($target.length) {
      const $panels = $(".top_1 .d_panels");
      if ($panels.length) {
        const targetOffset = $target.first().offset().left - $panels.offset().left + $panels.scrollLeft();
        $panels.stop().animate({ scrollLeft: Math.max(0, targetOffset - 50) }, 400);
      }
    }
  }
}

function initTabs() {
  // nếu chưa có mục nào "open", tự gán cho mục đầu tiên
  $(".d_cat .d_1").each(function () {
    const $items = $(this).find(".t_1");
    if (!$items.filter(".open").length) {
      $items.first().addClass("open");
    }
  });

  $(".d_cat .t_1.open").each(function () {
    moveDot($(this));
  });

  const activeTab = $(".d_cat .t_1.open").first().data("tab");
  if (activeTab) {
    showTab(activeTab);
  }
}
const loadInfoCart = (action, data = null) => {
  $.ajax({
    url: ROOT_URL + "index.php?module=ajaxCart",
    type: "POST",
    data: { 'action': action, data },
    success: function (data) {
      if (action == 'count') {
        $(".num").text(data);
      }
      if (action == 'loadInfoCart') {
        $(".popup_cart").html(data);
      }
    }
  });
}


loadInfoCart('count');
//loadInfoCart('loadInfoCart');

////////////////// Modal ///////////////////
const openFancyPopup = (div, str = '', time = 0) => {
  if (str !== '') {
    $(div).find('p').html(str);
  }
  $.fancybox.open({
    src: div,
    type: 'inline'
  });
  if (time !== 0) {
    setTimeout(function () {
      $.fancybox.close();
    }, time);
  }
}
const openGiftModal = () => {
  if (window.innerWidth < 768) {
    //$('#giftModal').modal('show');
    openFancyPopup('#giftModal');
  }
  close_menu();
}
const loadMemberModal = (action) => {
  $.ajax({
    url: ROOT_URL + "member/",
    type: "POST",
    data: { 'action': action },
    success: function (data) {
      if (action == 'loadInfo') {
        $('#resultMember').html(data);
      }
    }
  });
}
const openMemberModal = () => {
  //loadMemberModal('loadInfo');
  openFancyPopup('#accountModal');
  close_menu();
}

////////////////popup////////////
const setupTime = (time) => {
  var now = new Date().getTime();
  localStorage.setItem(time, now);
}
const sessionCheck = (key, time, expire) => {
  var expire;
  var now = new Date().getTime();
  var setupTime = localStorage.getItem(time);
  console.log(now - setupTime - expire * 60 * 1000);
  if (now - setupTime > expire * 60 * 1000) {
    localStorage.removeItem(key);
    localStorage.setItem(time, now);
  }
}
const sessionGet = (key) => {
  var storage = localStorage.getItem(key) !== null ? localStorage.getItem(key) : 0;
  return storage;
}
const sessionLog = (key, message) => {
  var storage = sessionGet(key);
  console.log(message + ': ' + storage);
}
const initPopup = (strigger, t, formPopup, timeOut = 10000) => {
  console.log('initpopup');

  let namePopup = 'popup_' + t;
  let timePopup = 'time_popup_' + t;
  let nameRegister = 'register_' + t;
  let timeRegister = 'time_register_' + t;
  sessionCheck(namePopup, timePopup, 2 * 24 * 60);
  sessionCheck(nameRegister, timeRegister, 7 * 24 * 60);
  sessionLog(namePopup, 'localStorage ' + namePopup);
  sessionLog(nameRegister, 'localStorage register ' + namePopup);
  if (sessionGet(namePopup) < 2 && sessionGet(nameRegister) != 1) {
    setTimeout(function () {
      if (sessionGet('isFancyMTriggered') !== 'true') {
        $(strigger).eq(0).trigger('click');
      }
    }, timeOut);
  } else {
    $('.bl_popup_thumbnail').show();
  }
  $(strigger).fancybox({
    padding: 0,
    scrolling: 'auto',
    openEffect: 'elastic',
    closeEffect: 'elastic',
    afterClose: function () {
      localStorage.setItem(namePopup, +sessionGet(namePopup) + 1);
      setupTime(timePopup);
      sessionLog(namePopup, 'localStorage ' + namePopup);
    }
  });
  //init_cms_call(formPopup, 'Cám ơn quý khách!', true, t);
}


////////////// Tư vấn /////////////////
function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

function init_cms_call(selector, message, openPopup = false, isPopup = false, t = '') {
  $(selector).closest('form').submit(function (e) {
    e.preventDefault();

    let boot_selector = $(selector);
    let boot_form_cms_call = boot_selector.closest('form');

    let boot_referer = boot_selector.attr('data-referer');
    let boot_domain = boot_selector.attr('data-domain');
    let boot_link = boot_selector.attr('data-link');
    let boot_loader = boot_selector.attr("data-loadergif");

    let boot_note = boot_form_cms_call.find(boot_selector.attr('data-note'));
    let input_number_phone = boot_form_cms_call.find(boot_selector.attr('data-phone'));
    let boot_pname = boot_form_cms_call.find(boot_selector.attr("data-name"));
    let input_email = boot_form_cms_call.find(boot_selector.attr('data-email'));

    let sdt_tv = input_number_phone.val();
    let note_tv = boot_note.val();
    let name_tv = boot_pname.val();
    let email_reg = input_email.val();
    let csrf_token = $('#csrf_token').val();

    console.log("Phone input:", input_number_phone);
    console.log("Phone value:", sdt_tv);

    // kiểm tra email
    if (input_email.length > 0) {
      if (!validateEmail(email_reg)) {
        boot_selector.find('.status').html('Bạn vui lòng nhập chính xác email!');
        return;
      }
    }

    // kiểm tra số điện thoại
    if (sdt_tv.length != 10 || isNaN(sdt_tv)) {
      boot_selector.find('.status').html('Sai Số Điện Thoại');
      return;
    }

    boot_selector.find('#sub_tv').css('display', 'none');
    boot_selector.find('.status').html('Xin chờ!');

    $.post(ROOT_URL + 'support_api.php', {
      refer: boot_referer,
      domain: boot_domain,
      note: note_tv,
      html: 'md5',
      phone: sdt_tv,
      pname: name_tv,
      email: email_reg,
      link: boot_link,
      csrf_token: csrf_token
    })
      .done(function (data_check) {
        console.log("ok");
        console.log(data_check);
        if (data_check == 1) {
          boot_selector.find('.status').html(message);
          boot_selector.find('input[type=text]').val('');
          boot_selector.find('textarea').val('');
          boot_selector.find('.hide_when_success').hide();
          if (openPopup === true) {
            openFancyPopup('#popup-noti', message);
          }
          if (isPopup == true) {
            let nameRegister = 'register_' + t;
            let timeRegister = 'time_register_' + t;
            localStorage.setItem(nameRegister, 1);
            setupTime(timeRegister);
            sessionLog(nameRegister, 'localStorage register');
            setTimeout(function () {
              $(".fancybox-button").trigger('click');
            }, 10000);
          }
        } else {
          boot_selector.find('.status').addClass('fail')
            .html('Có lỗi, Vui lòng thử lại sau ít phút.');
        }
      })
      .fail(function () {
        boot_selector.find('.status').addClass('fail')
          .html('Có lỗi, Vui lòng thử lại sau ít phút.');
      });
  });
}



$(document).ready(function () {
  ///////////////// slider_mhg  ///////////////
  const carousels = [];
  $('.slider_mhg .owl-carousel').each(function () {
    var carousel = $(this);
    var first = carousel.find('.item').first();
    var match = first.find('img').attr('src').match(/^(.*?)(\d+)(\.\w+)$/);

    if (match) {
      var start = parseInt(match[2], 10);
      var html = '';
      for (var i = 1; i < 12; i++) {
        var clone = first.clone();
        clone.find('img').attr('src', match[1] + (start + i) + match[3]);
        html += clone.prop('outerHTML');
      }
      carousel.append(html);
    }

    carousel.owlCarousel({
      center: false,
      loop: true,
      margin: 0,
      stagePadding: 0,
      autoplay: false,
      navSpeed: 1000,
      autoplaySpeed: 1000,
      nav: false,
      dots: false,
      autoplayTimeout: 1500,
      lazyLoad: true,
      lazyLoadEager: 1,
      responsive: {
        0: { items: 1 },
        767: { items: 1 }
      }
    });

    carousels.push(carousel);
  });

  const step = (index) => {
    const carousel = carousels[index];
    const delay = parseInt(carousel.data('timeout'), 10) || 1500;

    carousel.trigger('next.owl.carousel', [1000]);

    setTimeout(() => step((index + 1) % carousels.length), delay);
  };

  if (carousels.length) {
    setTimeout(() => step(0), parseInt(carousels[0].data('timeout'), 10) || 1500);
  }


  ////////////////////      slider_partner          ////////////////////
  $('.slider_partner .owl-carousel').owlCarousel({
    center: false,
    loop: true,
    stagePadding: 0,
    autoplay: true,
    navSpeed: 1000,
    autoplaySpeed: 1000,
    nav: false,
    dots: false,
    autoplayTimeout: 2000,
    lazyLoad: true,
    lazyLoadEager: 1,
    responsive: {
      0: { items: 4, margin: 15 },
      767: { items: 8, margin: 30 }
    }
  });

  ////////////////////      slider_partner_plasma          ////////////////////
  $('.slider_partner_plasma .owl-carousel').owlCarousel({
    center: false,
    loop: true,
    stagePadding: 0,
    autoplay: true,
    navSpeed: 1000,
    autoplaySpeed: 1000,
    nav: false,
    dots: false,
    autoplayTimeout: 2000,
    lazyLoad: true,
    lazyLoadEager: 1,
    responsive: {
      0: { items: 4, margin: 15 },
      767: { items: 7, margin: 30 }
    }
  });


  ///////////    Count number   //////////
  $('.t_count').each(function () {
    var el = this;
    var end = parseInt($(el).data('count'), 10);
    var od = new Odometer({
      el: el,
      value: 0,
      format: 'd',
      duration: 2000
    });

    new IntersectionObserver(function (entries, observer) {
      if (entries[0].isIntersecting) {
        setTimeout(function () {
          od.update(end);
        }, parseInt($(el).data('delay'), 10) || 250);
        observer.disconnect();
      }
    }).observe(el);
  });


  ////////////    wow js      ///////
  new WOW().init();



  /////////////// Slider LDP REJU /////////////////
  $('.slider_ldp_reju .owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 0,
    autoplay: true,
    navSpeed: 1000,
    autoplaySpeed: 800,
    nav: false,
    dots: false,
    animateOut: 'fadeOut',
    autoplayTimeout: 3500,
    items: 1
  });

})
