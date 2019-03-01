/**
 * Created by kc on 2019/1/13.
 * 上传成功进行确认的线程
 */
var done = false
let ajaxRequest = new XMLHttpRequest();
ajaxRequest.setRequestHeader('Authorization', sessionStorage.getItem("userToken"));
ajaxRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
let testID, serverFileID, id;
addEventListener("message", function (evt) {
  let success = false
  let testID = evt.data.testID
  let serverFileID = evt.data.serverFileID
  let id = evt.data.id
  do {
    ajaxRequest.open('POST', "http://app.jouletek.com:8080/panguanb/upload/confirm", false)
    ajaxRequest.send("testID=" + testID + "&id=" + id + "&serverFileID=" + serverFileID);
    ajaxRequest.onreadystatechange = function () {
      if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
        success = true
      }
    }
  } while (!success)
})
