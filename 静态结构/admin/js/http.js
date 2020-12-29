function myAjax(type, url, data, callback) {
  let baseUrl = 'http://localhost:8080/api/v1';
  //判断传过来的data是否为FormData的实例对象，如果是实例对象，就要设置contentType:false和processData:false,否则就默认true
  // let isDataFormData = data instanceof FormData;
  $.ajax({
    url: baseUrl + url,
    type: type,
    data: data,
    contentType: 'application/x-www-form-urlencoded',
    // processData: isDataFormData ? false : true,
    headers: {
      // Authorization: localStorage.getItem('bigEvent_token')
    },
    success: function (resData) {
      if (resData.code == 403) {
        window.parent.location = ' ./login.html';
        return;
      }
      callback(resData)
    }
  })
}
