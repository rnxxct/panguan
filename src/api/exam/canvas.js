/**
 * Created by kc on 2018/11/28.
 */
import  request from  '@/utils/request'
import QS from 'qs'
export function getList(query) {
  return request({
    url:'/scan/standard/getCanvas',
    method:'post',
    data: QS.stringify(query)
  })
}
export function confirm(query) {
  return request({
    url:'/canvas/confirm',
    method:'post',
    data:query
  })
}
