function get_datas(type, url, data, callback) {
  let baseUrl = 'http://localhost:8080/api/v1';
  let isDataFormData = data instanceof FormData;
  $.ajax({
    type: type,
    url: baseUrl + url,
    data: data,
    contentType: isDataFormData ? false : 'application/x-www-form-urlencoded',
    processData: isDataFormData ? false : true,
    headers: {
      Authorization: localStorage.getItem('bigEvent_token')
    },
    success: function (resData) {
      callback(resData)
    }
  })
}
