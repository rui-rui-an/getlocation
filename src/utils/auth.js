function getLocal (key = 'token') {
  return localStorage.getItem(key)
}
// 删除
function removeLocal (key = 'token') {
  window.localStorage.removeItem(key)
}
// 保存
function setLocal (value, key = 'token') {
  window.localStorage.setItem(key, value)
}
export { getLocal, removeLocal, setLocal }
