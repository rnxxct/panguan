/**
 * Created by kc on 2018/11/13.
 */
import  request from  '@/utils/request'
import QS from 'qs'

export function getTree(query) {
  return request({
    url:'/xml/update/analysis',
    method:'post',
    data: QS.stringify(query)
  })
}
export function updateExam(query) {
  return request({
    url:'test/question/update',
    method:'post',
    data:query
  })
}
export function getKnowledge(query) {
  return request({
    url:'/knowledgepoint/get',
    method:'post',
    data: QS.stringify(query)
  })
}
