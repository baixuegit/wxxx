/**
 * [格式化数字为123,456,789]
 * @param  {Number} number  需要格式化的数字
 * @param  {Number} decimal 允许的小数位数
 * @param  {String} decimal 小数是否使用指定标签
 * @return {String}
 * 特别使用方法：由于输出了html标签，但vue不会解析标签，可使用如下方法使用
 * <div v-html="$options.filters.number(money,2,'em')"></div>
 */
const fmtNum = (number, decimal = 2, deciTag = '') => {
  if (number && !isNaN(number)) {
    number = parseFloat(number).toFixed(decimal)
    number = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  if (deciTag) {
    return number.toString().replace(/\.(\d{2})$/, `.<${deciTag}>$1</${deciTag}>`)
  } else {
    return number
  }
}

export {
  fmtNum
}
