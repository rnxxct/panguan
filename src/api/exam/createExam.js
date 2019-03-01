/**
 * Created by kc on 2018/11/7.
 */
import  request from  '@/utils/request'
import QS from 'qs'
export function getTree(query) {
  return request({
    url:'/xml/analysis',
    method:'post',
    data: QS.stringify(query)
  })
}
export function createExam(query) {
  return request({
    url:'/test/question/add',
    headers:{'Content-type':'application/json'},
    method:'post',
    data:query
  })
}
