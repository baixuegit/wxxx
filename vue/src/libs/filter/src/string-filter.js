/**
 * 添加货币符号
 * @param {String} val
 * @param {String} sign 货币符号,默认为￥
 * @returns {string}
 */
const currency = (val, sign = '￥') => {
  return `${sign}${val}`
}

const substr = (value, start = 0, length = 0) => {
  if (value.replace(/[\u4e00-\u9fa5]/g, '**').length <= start) {
    return value
  }
  let sbstart = 0
  let sblength = 0
  let zlen = 0
  let curlen = 0
  for (let i = 0; i < value.length; i++) {
    if (/[\u4e00-\u9fa5]/.test(value[i])) {
      curlen = 2
    } else {
      curlen = 1
    }
    if (start > 0 && sbstart < start) {
      sbstart += curlen
      if (sbstart > start) {
        sbstart -= 1
      }
    } else {
      if (length === 0) {
        break
      } else {
        sblength += curlen
        zlen += 1
        if (sblength >= length) {
          break
        }
      }
    }
  }

  return length === 0 ? value.substr(sbstart) : value.substr(sbstart, zlen)
}

export {
  currency,
  substr
}
