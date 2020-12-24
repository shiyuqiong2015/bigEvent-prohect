// 入口函数
$(function () {
  //当用户点击submit提交表单的时候，获取到表单中的数据，并且发起ajax请求登录页面，获取服务器返回的token值保存到本地，实现页面加载动画

  $('#login_form').submit(function (e) {
    //阻止表单的默认提交行为
    e.preventDefault();
    // console.log(1111);
    //获取表单数据
    let pramas = $('#login_form').serialize();
    // console.log(pramas);
    var index;
    $.ajax({
      url: 'http://localhost:8080/api/v1/admin/user/login',
      type: 'POST',
      data: pramas,
      beforeSend: function () {
        index = layer.load();
      },
      complete: function () {
        layer.close(index);
      },
      success: function (resData) {
        // console.log(resData);
        if (resData.code !== 200) return alert(resData.msg)
        localStorage.setItem('bigEvent_token', resData.token);
        location.href = './index.html'
      }
    })
  })
})
