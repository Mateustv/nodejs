const mongoose = require('mongoose')

connect().catch(err => console.log(err));

async function connect () {
  await mongoose.connect('mongodb://localhost:27017/api-restful?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false');
  const db = mongoose.connection
  
  db.once('open', () => console.log('Connection opened'))
  db.on('error', console.error.bind(console,'Conenction error: '))
}

module.exports = {
  connect
}