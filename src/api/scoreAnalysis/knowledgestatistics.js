/**
 * Created by kc on 2018/10/31.
 */
import  request from  '@/utils/request'
import QS from 'qs'

export  function getTree(query) {
  return request({
    url:'/test/analysis/questions/knowledge/tree',
    method:'post',
    data: QS.stringify(query)
  })
}
export function getData(query) {
  return request({
    url:'/test/analysis/questions/knowledge/answer',
    method:'post',
    data: QS.stringify(query)
  })
}
