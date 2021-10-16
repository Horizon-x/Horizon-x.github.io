/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function() {
      if(document.hidden) {
        $('[rel="icon"]').attr('href', "/failure.ico");
        $('[rel="mask-icon"]').attr('href', "/failure.ico");
        $('[rel="alternate icon"]').attr('href', "/failure.ico");
        document.title = 'Σ(っ °Д °;)っ页面崩溃啦 ~';
        clearTimeout(titleTime);
      } else {
        $('[rel="icon"]').attr('href', "/yun.ico");
        $('[rel="mask-icon"]').attr('href', "/yun.ico");
        $('[rel="alternate icon"]').attr('href', "/yun.ico");
        document.title = '(๑•̀ㅂ•́)و✧咦又好了~上進心的小站';
        titleTime = setTimeout(function() {
          document.title = OriginTitile;
        }, 3000);
      }
    });
  }