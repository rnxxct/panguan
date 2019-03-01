/**
 * Created by kc on 2018/10/31.
 */
import  request from  '@/utils/request'
import QS from 'qs'

export  function getTree(query) {
  return request({
    url:'/test/analysis/questions/tree',
    method:'post',
    data: QS.stringify(query)
  })
}
export function getData(query) {
  return request({
    url:'/test/analysis/questions/answer',
    method:'post',
    data: QS.stringify(query)
  })
}

export function exportEXCEL(query) {
  return request({
    url:'/test/analysis/export',
    method:'post',
    data:QS.stringify(query)
  })
}
export function getImg(query) {
  return request({
    url:'/personal/answer/information',
    method:'post',
    data:QS.stringify(query)
  })
}
