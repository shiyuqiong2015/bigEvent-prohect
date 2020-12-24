function myAjax(type, url, data, callback) {
  let baseUrl = 'http://localhost:8080/api/v1';
  $.ajax({
    url: baseUrl + url,
    type: type,
    data: data,
    headers: {
      Authorization: localStorage.getItem('bigEvent_token')
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
