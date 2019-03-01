/**
 * Created by kc on 2018/11/29.
 */
import  request from  '@/utils/request'
import QS from 'qs'
export function isDone(query) {
  return request({
    url:'/scan/standard/check',
    method:'post',
    data: QS.stringify(query)
  })
}
