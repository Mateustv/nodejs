const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('main',{ 
    title: 'Fazer um teste'
  })
})

module.exports = router