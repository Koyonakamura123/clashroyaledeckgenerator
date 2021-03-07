// fetch('/currentRankings')

var fetch = require('node-fetch')
const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjAwNjgxYmI4LWRiZWEtNDBkOC1hMWJlLTAwYTBlYTM2OTMzYSIsImlhdCI6MTYxNDc0NDE4Nywic3ViIjoiZGV2ZWxvcGVyLzVhMWEyNTI2LTNiYmUtYTE4My1jNTcxLTYxZTYyZjI5OWRjZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3My4yMjEuMTg5LjEyNyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.Uf-QJ3veRoUgbNVOYqsecENz6e2tqtqPmONJB_3Yk1-bW-QfoZ3dBl81C7lpdwaKwFxxDsCSdg2w833E0zUL_Q'


module.exports = async (req, res) => {
  const url = "https://api.clashroyale.com/v1/locations/global/seasons/2021-01/rankings/players"
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