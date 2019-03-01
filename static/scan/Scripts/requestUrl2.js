/**
 * Created by kc on 2019/1/13.
 * 请求url的线程
 */
var isDone = false;
let isGet = false;
var currentIndex = -2;
do{
  postMessage({currentIndex: currentIndex})
}while (!isDone)

addEventListener("message", function (evt) {
}, false)
