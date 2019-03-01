/**
 * Created by kc on 2018/12/4.
 */
import  request from  '@/utils/request'
import QS from 'qs'
/*请求登录的方法*/
export function register(username,password,mobile) {
  console.log(username+password)
  const data ={
    name,
    password,
    mobile
  }
  return request({
    url:'/user/addSandBox',
    method:'post',
    data: QS.stringify(data)
  })
}
