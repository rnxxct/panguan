/**
 * Created by kc on 2018/11/10.
 */
import  request from  '@/utils/request'
import QS from 'qs'

export  function getList(query) {
  return request({
    url:'/exam/list',
    method:'post',
    data: QS.stringify(query)
  })
}
export  function getPicUrls(query) {
  return request({
    url:'/exam/url/list',
    method:'post',
    data: QS.stringify(query)
  })
}
