/**
 * Created by kc on 2018/10/24.
 */
import  request from  '@/utils/request'
export function getList() {
  return request({
    url:'/school/list',
    method:'get',
  })
}

