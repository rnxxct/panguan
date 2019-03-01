/**
 * Created by kc on 2018/10/24.
 */
import  request from  '@/utils/request'
import QS from 'qs'
export function getList(query) {
  return request({
    url:'/classgrade/list',
    method:'post',
    data:QS.stringify(query)
  })
}
export function addClass(query) {
  return request({
    url:'/class/add',
    method:'post',
    data:QS.stringify(query)
  })
}
export function deleteClass(query) {
  return request({
    url:'/class/delete',
    method:'post',
    data:QS.stringify(query)
  })
}
export function updateClass(query) {
  return request({
    url:'/class/update',
    method:'post',
    data:QS.stringify(query)
  })
}
