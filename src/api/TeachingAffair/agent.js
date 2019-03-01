/**
 * Created by kc on 2018/10/22.
 */
import  request from  '@/utils/request'
import QS from 'qs'
export function getList() {
  return request({
    url:'/agent/list',
    method:'get',
  })
}
export function addAgent(query) {
  return request({
    url:'/agent/add',
    method:'post',
    data:QS.stringify(query)
  })
}
export function deleteAgent(query) {
  return request({
    url:'/agent/delete',
    method:'post',
    data:QS.stringify(query)
})
}
export function updateAgent(query) {
  return request({
    url:'/agent/update',
    method:'post',
    data:QS.stringify(query)
  })
}
