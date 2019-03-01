/**
 * Created by kc on 2018/10/24.
 */
import  request from  '@/utils/request'
import QS from 'qs'
export function getList() {
  return request({
    url:'/school/list',
    method:'get',
  })
}
export function getClass(query) {
  return request({
    url:'/class/grade',
    method: 'post',
    data:QS.stringify(query)
  })
}
