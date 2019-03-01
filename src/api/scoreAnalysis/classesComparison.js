/**
 * Created by kc on 2018/10/30.
 */
import  request from  '@/utils/request'
import QS from 'qs'
export  function getData(query) {
  return request({
    url:'/test/analysis',
    method:'post',
    data: QS.stringify(query)
  })
}
