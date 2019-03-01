/**
 * Created by kc on 2018/12/19.
 */
import  request from  '@/utils/request'
import QS from 'qs'

export function getUser() {
  return request({
    url:'/user/manage',
    method:'post'
  })
}
export function updateUser(query) {
  return request({
    url:'/user/update/info',
    method:'post',
    data:QS.stringify(query)
  })
}
export function updatePassword(query) {
  return request({
    url:'/user/update/password',
    method:'post',
    data:QS.stringify(query)
  })
}
