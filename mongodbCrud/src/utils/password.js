const bcrypt = require('bcrypt')

async function crypto (psw){
  
  const salt = await bcrypt.genSalt()
  const key = await bcrypt.hash(psw, salt)
  
  return key
}

module.exports = {
  crypto,
}