// make a folder called "api" in your project
// and name this file "cards.js" in that folder
// then from your frontend, you will simply do
// fetch('/cards')

var fetch = require('node-fetch')
const token = process.env.REACT_APP_API_KEY;
module.exports = async (req, res) => {
  const url = 'https://api.clashroyale.com/v1/cards'
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