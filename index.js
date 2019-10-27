const fetch = require('node-fetch')

module.exports = async function (ip, cb) {
  try {
    const res = await fetch(`https://open-ip.herokuapp.com/${ip}`)
    const data = await res.json()
    if (res.status === 404) {
      throw new Error(data.message)
    }
    return cb ? cb(data) : data
  } catch (err) {
    console.error(err)
  }
}