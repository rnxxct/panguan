/**
 * Created by kc on 2018/10/27.
 */
import  request from  '@/utils/request'
import QS from 'qs'

export  function getTreeOfSubject(query) {
  return request({
    url:'/knowledgepoint/tree',
    method:'post',
    data: QS.stringify(query)
  })
}
export function addPoint(query) {
  return request({
    url:'/knowledgepoint/add',
    method:'post',
    data: QS.stringify(query)
  })
}
export function deletePoint(query) {
  return request({
    url:'/knowledgepoint/delete',
    method:'post',
    data: QS.stringify(query)
  })
}
export function updatePoint(query) {
  return request({
    url:'/knowledgepoint/update',
    method:'post',
    data: QS.stringify(query)
  })
}
