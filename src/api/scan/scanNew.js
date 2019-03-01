/**
 * Created by kc on 2018/12/13.
 */
import  request from  '@/utils/request'
import QS from 'qs'
export function getList(query) {
  return request({
    url:'/students/not/scan',
    method:'post',
    data:QS.stringify(query)
  })
}
export function Recongnition(query) {
  return request({
    url:'/reIdentify/class',
    method:'post',
    data:QS.stringify(query)
  })
}
export function RecognitionSheet(query) {
  return request({
    url:'/reIdentify',
    method:'post',
    data:QS.stringify(query)
  })
}
export function getCanvasPoints(query) {
  return request({
    url:'/sheet/getCanvas',
    method:'post',
    data:QS.stringify(query)
  })
}
export function getSearchResults(query) {
  return request({
    url:'/search/scan',
    method:'post',
    data:QS.stringify(query)
  })
}
