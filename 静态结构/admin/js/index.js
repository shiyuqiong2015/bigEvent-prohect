$(function () {
  //侧边栏的背景颜色和字体颜色的样式切换
  $('.menu .level01,.menu .level02 li').click(function () {
    $('.menu .level01,.menu .level02 li').removeClass('active');
    $(this).addClass('active');
  })
  //文章管理二级菜单的展开和隐藏，以及箭头的旋转

  $('.level01.l2').click(function () {


    $('.level02').slideToggle();
    $('.menu .level01 b').toggleClass('rotate0')


  })

})
