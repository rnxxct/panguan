/**
 * Created by kc on 2019/1/13.
 * 请求url的线程
 */
var isDone = false
var currentIndex = -2;
var timer = setInterval(function () {
  postMessage({currentIndex: currentIndex})
}, 1000)
/*在开始每隔0.1秒进行询问,缓冲区中是否存在可以请求的url*/
let ajaxRequest = new XMLHttpRequest();
let testID, serverFileID, id;
addEventListener("message", function (evt) {
  console.log(evt.data.testID)
  clearInterval(timer)
  /*暂时将询问关闭*/
  let success = false
  let testID = evt.data.testID
  let userToken = evt.data.userToken
  do {
    ajaxRequest.open('POST', "http://app.jouletek.com:8080/panguanb/scan/start", false);
    ajaxRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
    ajaxRequest.setRequestHeader('Authorization', userToken);
    ajaxRequest.send("testID=" + testID);
    ajaxRequest.onreadystatechange = function () {
      if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
        let res = JSON.parse(ajaxRequest.responseText)
        currentTestID = res.data.testID
        currentServerFileID = res.data.serverFileID
        currentURLS = res.data.urls
        postMessage({currentTestID: currentTestID, currentServerFileID: currentServerFileID, currentURLS: currentURLS})
        currentIndex += 2;
        timer = setInterval(function () {
          postMessage({currentIndex: currentIndex})
        }, 1000)
        success = true
      }
    }
  } while (!success)
}, false)
