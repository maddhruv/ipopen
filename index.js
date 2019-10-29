const https = require('https')

module.exports = function (ip, cb) {
  return new Promise((resolve, reject) => {
    https.get(`https://open-ip.herokuapp.com/${ip}`, (res) => {
      res.on('data', (d) => {
        const data = JSON.parse(d.toString())
        if (res.statusCode === 404) return cb ? cb(null, data.message) : reject(data.message)
        return cb ? cb(data, null) : resolve(data)
      })
    })
      .on('error', (err) => {
        reject(err)
      })
  })
}
