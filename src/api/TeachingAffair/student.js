/**
 * Created by kc on 2018/10/25.
 */
import  request from  '@/utils/request'
export function getList() {
  return request({
    url:'/school/list',
    method:'get',
  })
}

