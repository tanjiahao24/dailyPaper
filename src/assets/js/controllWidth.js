// 限制容器做大宽度
(function () {
  let html = document.documentElement,
      root = document.getElementById('root')
  root.style.maxWidth = '750px'
  if (html.clientWidth > 750) {
    html.style.fontSize = '75px'
  }
})()