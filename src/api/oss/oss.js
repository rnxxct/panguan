/**
 * Created by kc on 2018/11/5.
 */
var OSS = require('ali-oss').Wrapper
export function client(data) {
  var client = new OSS({
    region: '<Your region>',
    accessKeyId: '<Your AccessKeyId>',
    accessKeySecret: '<Your AccessKeySecret>',
    bucket: 'Your bucket name'
  })
}
