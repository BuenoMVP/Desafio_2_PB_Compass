const admin = require('../services/firebaseAdmin')

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) {
    return res.status(401).send('Access denied. No token provided.')
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token)
    req.user = decodedToken
    next()
  } catch (error) {
    res.status(401).send('Invalid token.')
  }
}

module.exports = verifyToken
