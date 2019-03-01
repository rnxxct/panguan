/**
 * Created by kc on 2018/12/13.
 */
import  request from  '@/utils/request'
import QS from 'qs'

export function getList() {
  return request({
    url:'/school/list',
    method:'get',
  })
}
export function updateSchool(query) {
  return request({
    url:'/school/update',
    headers:{'Content-type':'application/json'},
    method:'post',
    data:query
  })
}
export function deleteSchool(query) {
  return request({
    url:'/school/delete',
    method:'post',
    data:QS.stringify(query)
  })
}
export function addSchool(query) {
  return request({
    headers:{'Content-type':'application/json'},
    url:'/school/add',
    method:'post',
    data:query
  })
}
