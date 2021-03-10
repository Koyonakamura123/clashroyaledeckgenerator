// fetch('/player')

var fetch = require('node-fetch')
const token = process.env.REACT_APP_API_KEY;
module.exports = async (req, res) => {
  const url = 'https://api.clashroyale.com/v1/players/' + req.query.name;
  console.log(url);
  try {
    const r = await fetch(url, {
      headers:{'Authorization': token}
    })
    const j = await r.json()
    res.status(200).json(j)
  } catch(e) {
    res.status(500)
  }
}