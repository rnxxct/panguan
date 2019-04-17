/**
 * Created by kc on 2018/11/3.
 */
import  request from  '@/utils/request'
import QS from 'qs'

export  function getList(query) {
  return request({
    url: '/scan/state',
    method: 'post',
    data: QS.stringify(query)
  })
}
export function emptyData(query) {
  return request({
    url:'/test/emptyData',
    method:'post',
    data:QS.stringify(query)
  })
}
export function emptyDataByClass(query) {
    return request({
        url:'/test/emptyData/class',
        method:'post',
        data:QS.stringify(query)
    })
}
export function getInfoOfScan(query) {
    return request({
        url:'/scan/getInfo',
        method:'post',
        data:QS.stringify(query)
    })
}
