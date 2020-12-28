$(function () {
  get_article_catelist();
  get_hot_pictures();
  get_hot_rank();
  get_lates_news();
  get_lates_comments();
  get_focus();
  $('.search_btn').click(function () {
    get_articleList_by_searchText()
  })
})
//需求1.当页面加载的时候，获取文章类型，并渲然到页面上
function get_article_catelist() {
  get_datas('GET', '/index/category', {}, function (resData) {

    if (resData.code !== 200) return alert(resData.msg);
    //调用模板，渲染数据1
    let toolBarHtml = template('tool_bar_temp', resData);
    $('.tool_bar').append(toolBarHtml)
    //调用模板，渲染数据2
    let menuListHtml = template('menu_list_temp', resData);
    $('.menu_list').html(toolBarHtml)
  })



}
//需求2.获取热门图片，并渲染至页面上
function get_hot_pictures() {
  get_datas('GET', '/index/hotpic', {}, function (resData) {
    if (resData.code !== 200) return alert(resData.msg);
    //调用模板，渲染小图的数据
    let obj = {};
    obj.data1 = [];
    obj.data2 = resData.data.slice(1);
    obj.data1.push(resData.data[0]);
    // console.log(obj);
    let hpltHtml2 = template('hot_pics_temp2', obj);
    let hpltHtml1 = template('hot_pics_temp1', obj);

    $('.wraper_right').html(hpltHtml2)
    $('.wraper_left').html(hpltHtml1)
    //调用模板，渲染大图的数据

  })

}
//需求3.获取文章热门排行，并渲染至页面上
function get_hot_rank() {
  get_datas('GET', '/index/rank', {}, function (resData) {
    // console.log(resData);
    let hotRankTempHtml = template('hot_rank_temp', resData);
    $('.hot_list').html(hotRankTempHtml)
  })
}
//需求4.获取最新资讯，渲染到页面上
function get_lates_news() {
  get_datas('GET', '/index/latest', {}, function (resData) {
    // console.log(resData);
    let latestNewsHtml = template('lates_news_temp', resData)
    $('.latest_news_list').html(latestNewsHtml)
  })
}
//需求4.获取最新评论，渲染到页面中的最新评论
function get_lates_comments() {
  get_datas('GET', '/index/latest_comment', {}, function (resData) {
    let htmlData = resData;
    htmlData.data.forEach(item => {
      item.tip = item.author.substr(0, 1);
      // console.log(item.tip);
    });
    // console.log(htmlData);
    let latestCommentHtml = template('latest_comment_temp', htmlData)
    $('.latest_comment_list').html(latestCommentHtml)
  })
}
//需求5.获取焦点关注，渲染到页面中
function get_focus() {
  get_datas('GET', '/index/attention', {}, function (resData) {
    // console.log(resData);
    let focusHtml = template('focus_temp', resData)
    $('.focus_list').html(focusHtml)
  })
}
//需求6.根据用户在输入框中输入的关键词，返回相关的文章列表数据
function get_articleList_by_searchText() {
  let keyWords = $('.search_txt').val();
  console.log(keyWords);
  get_datas('GET', '/index/search', {
    key: keyWords,
  }, function (resData) {
    console.log(resData);
    let keywordsHtml = template('lates_news_temp', resData.data)
    $('.latest_news_list').html(keywordsHtml)
    /**
     * 1.当用户点击的时候，调用这个函数，根据用户输入的关键词，返回对应的文章列表
     *
     */
  })
}
