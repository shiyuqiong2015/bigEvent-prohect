function get_datas(type, url, data, callback) {
  let baseUrl = 'http://localhost:8080/api/v1';
  $.ajax({
    type: type,
    url: baseUrl + url,
    data: data,
    success: function (resData) {
      callback(resData)
    }
  })
}
