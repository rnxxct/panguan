/**
 * Created by kc on 2019/1/13.
 * 上传至oss的线程
 */
var done = false
let ajaxRequest = new XMLHttpRequest();
ajaxRequest.setRequestHeader('x-oss-meta-author', sessionStorage.getItem("aliy"));
ajaxRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
addEventListener("message", function (evt) {
  let success = false
  let URL = evt.data.url
  let serialNumber = evt.data.serialNumber
  let BlobBin = evt.data.blobBin
  do {
    ajaxRequest.open('PUT', URL, false);
    ajaxRequest.send(BlobBin);
    ajaxRequest.onreadystatechange = function () {
      if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
        let tempUrl = URL.split("?")
        let tempArray = tempUrl[0].split("/")
        let tempServerFileID = tempArray[tempArray.length - 2]
        let tempArray2 = tempServerFileID.split("_")
        let tempID = tempArray2[tempArray2.length - 1]
        postMessage({id: tempID, serverFileID: tempServerFileID, serialNumber: serialNumber})
        success = true
      }
    }
  } while (!success)
})
