/**
 * Created by kc on 2018/12/17.
 */
import  request from  '@/utils/request'
import QS from 'qs'
export function getDistrictList() {
  return request({
    url:'/district/list',
    method:'get'
})
}
export function updateDistrict(query) {
  return request({
    url:'/district/update',
    method:'post',
    data:QS.stringify(query)
  })
}
export function deleteDistrict(query) {
  return request({
    url:'/district/delete',
    method:'post',
    data:QS.stringify(query)
  })
}
export function addDistrict(query) {
  return request({
    url:'/district/add',
    method:'post',
    data:QS.stringify(query)
  })
}

