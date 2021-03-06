module.exports = function(parsed) {
  var o = {}
  if (parsed.url) o.url = parsed.url
  if (parsed.token) o.token = parsed.token
  if (parsed.buildDir) o.buildDir = parsed.buildDir
  o.loglevel = parsed.loglevel || 'info'
  o.strictSSL = parsed.hasOwnProperty('strictSSL')
              ? parsed.strictSSL
              : true
  return o
}
