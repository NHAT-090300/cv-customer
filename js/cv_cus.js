$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide"
    });
    $(".flex-direction-nav").remove();
    $("ol").remove();
  });


$(window).load(function(){
    $('#pho').LineProgressbar({
        percentage: 60 // 90%
      });
    $('#pho').LineProgressbar({
        percentage: 60,
        ShowProgressCount: true
      });
    $('#pho').LineProgressbar({
        percentage: 60,
        duration: 1000
      });
    $('#pho').LineProgressbar({
        percentage: 60,
        fillBackgroundColor: '#313131',
        backgroundColor: '#ccc',
        radius: '0px',
        height: '40px',
        width: '100%'
      });  

      $('#ill').LineProgressbar({
        percentage: 55 // 90%
      });
    $('#ill').LineProgressbar({
        percentage: 55,
        ShowProgressCount: true
      });
    $('#ill').LineProgressbar({
        percentage: 55,
        duration: 1000
      });
    $('#ill').LineProgressbar({
        percentage: 55,
        fillBackgroundColor: '#313131',
        backgroundColor: '#ccc',
        radius: '0px',
        height: '40px',
        width: '100%'
      });
    
      $('#wor').LineProgressbar({
        percentage: 40 // 90%
      });
    $('#wor').LineProgressbar({
        percentage: 40,
        ShowProgressCount: true
      });
    $('#wor').LineProgressbar({
        percentage: 40,
        duration: 1000
      });
    $('#wor').LineProgressbar({
        percentage: 40,
        fillBackgroundColor: '#313131',
        backgroundColor: '#ccc',
        radius: '0px',
        height: '40px',
        width: '100%'
      });

      $('#css').LineProgressbar({
        percentage: 90 // 90%
      });
    $('#css').LineProgressbar({
        percentage: 90,
        ShowProgressCount: true
      });
    $('#css').LineProgressbar({
        percentage: 90,
        duration: 1000
      });
    $('#css').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#313131',
        backgroundColor: '#ccc',
        radius: '0px',
        height: '40px',
        width: '100%'
      });

      $('#html').LineProgressbar({
        percentage: 70 // 90%
      });
    $('#html').LineProgressbar({
        percentage: 70,
        ShowProgressCount: true
      });
    $('#html').LineProgressbar({
        percentage: 70,
        duration: 1000
      });
    $('#html').LineProgressbar({
        percentage: 70,
        fillBackgroundColor: '#313131',
        backgroundColor: '#ccc',
        radius: '0px',
        height: '40px',
        width: '100%'
      });

      $('#jqu').LineProgressbar({
        percentage: 40 // 90%
      });
    $('#jqu').LineProgressbar({
        percentage: 40,
        ShowProgressCount: true
      });
    $('#jqu').LineProgressbar({
        percentage: 40,
        duration: 1000
      });
    $('#jqu').LineProgressbar({
        percentage: 40,
        fillBackgroundColor: '#313131',
        backgroundColor: '#ccc',
        radius: '0px',
        height: '40px',
        width: '100%'
      });
});

$(window).load(function() {
  new WOW().init();
});

$(window).load(function() {
  $('.stickyMenu').smoothMenu({
    stickyMenu: true,
    slidingLine: true
  });
  $('.stickyMenu').smoothMenu({
    menuSpeedAnimate:600,
    btnClassMenu:'btn-menu',
    stickyMenu:false,
    stickyMenuClassName:'fixed',
    slidingLine:false,
    slidingLineClassName:'sliding-line',
    slidingLineClassNameActive:'active',
    slidingLineColor:'#fcf8e3',
    slidingLineHeight:'3px',
    slidingLineSpeedAnimate:200,
    winMobWidth:500,
    trackedClassName:'tracked'
  });
});


$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop()>700 || $(document).scrollTop()<200 ){
      $('.nav').css("display","block"); 
    } else {
      $('.nav').css("display","none");
    }
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
    if($(document).scrollTop()>700){
      $('.nav').addClass("hidden");
    }else{
      $('.nav').removeClass("hidden");
    }
  });
});


$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop()<700 &&  $(document).scrollTop()>-100){
      $('.s_1').addClass("active");
      $('.s_2').removeClass("active"); 
      $('.s_3').removeClass("active"); 
      $('.s_4').removeClass("active");
      $('.s_5').removeClass("active"); 
      $('.s_6').removeClass("active"); 
    }
    if ($(document).scrollTop()<1200 &&  $(document).scrollTop()>700 ){
      $('.s_2').addClass("active"); 
      $('.s_1').removeClass("active"); 
      $('.s_3').removeClass("active"); 
      $('.s_4').removeClass("active");
      $('.s_5').removeClass("active"); 
      $('.s_6').removeClass("active"); 
    }
    if ($(document).scrollTop()<2000 &&  $(document).scrollTop()>1200 ){
      $('.s_3').addClass("active");
      $('.s_2').removeClass("active"); 
      $('.s_1').removeClass("active"); 
      $('.s_4').removeClass("active");
      $('.s_5').removeClass("active"); 
      $('.s_6').removeClass("active"); 
    }
    if ($(document).scrollTop()<2500 &&  $(document).scrollTop()>2000 ){
      $('.s_4').addClass("active");
      $('.s_2').removeClass("active"); 
      $('.s_1').removeClass("active"); 
      $('.s_3').removeClass("active"); 
      $('.s_5').removeClass("active"); 
      $('.s_6').removeClass("active"); 
    }
    if ($(document).scrollTop()<4000 &&  $(document).scrollTop()>2500 ){
      $('.s_5').addClass("active");
      $('.s_2').removeClass("active"); 
      $('.s_1').removeClass("active"); 
      $('.s_3').removeClass("active"); 
      $('.s_4').removeClass("active"); 
      $('.s_6').removeClass("active"); 
    }
    if ($(document).scrollTop()>4000){
      $('.s_6').addClass("active");
      $('.s_2').removeClass("active"); 
      $('.s_1').removeClass("active"); 
      $('.s_3').removeClass("active"); 
      $('.s_4').removeClass("active"); 
      $('.s_5').removeClass("active"); 
    }
  });
});