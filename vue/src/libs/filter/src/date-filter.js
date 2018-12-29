/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * 例子：
 * (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423
 * (new Date()).Format('yyyy-M-d h:m:s.S')      ==> 2006-7-2 8:9:4.18
 * @param {Date} date 需要格式化的日期对象
 * @param {String} format 需要的格式字符串模型
 * @returns {*}
 */
const fmtDate = (date, format = 'yyyy-MM-dd') => {
  let arr
  if (typeof (date) === 'string') {
    arr = date.split('-')
    if (parseInt(arr[1]) < 10) {
      arr[1] = '0' + parseInt(arr[1])
    }
    if (parseInt(arr[2]) < 10) {
      arr[2] = '0' + parseInt(arr[2])
    }
    date = arr.join('-')
  }

  const d = new Date(date)

  var o = {
    'M+': d.getMonth() + 1, // 月份
    'd+': d.getDate(), // 日
    'h+': d.getHours(), // 小时
    'm+': d.getMinutes(), // 分
    's+': d.getSeconds(), // 秒
    'q+': Math.floor((d.getMonth() + 3) / 3), // 季度
    'S': d.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length))

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return format
}

/**
 * 计算两个日期相差天数
 * @param {Date} date1
 * @param {Date} date2
 * @returns {number}
 */
const diffDate = (date1, date2) => {
  var Data1 = new Date(date1)
  var Data2 = new Date(date2)
  var diff = Math.abs(Data1.getTime() - Data2.getTime())
  var ret = Math.floor(diff / (24 * 60 * 60 * 1000))
  return ret
}

/**
 * 日期增加或减少天数
 * @param {Date} date
 * @param {Number} day
 * @returns {Date}
 */
const addDays = (date, day) => {
  let now = new Date(date)
  now.setDate(now.getDate() + day)
  return now
}
export {
  fmtDate,
  diffDate,
  addDays
}
