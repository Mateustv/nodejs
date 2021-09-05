const ProductsModel = require('../models/products')

async function get(req, res) {
  const {id} = req.params
  const obj = id ? {_id:id} : null
  const products = await ProductsModel.find(obj)
  res.send(products)
}
async function post(req,res){
  const {
    name,
    brand,
    price,
  } = req.body

  const register = new ProductsModel({
    name,
    brand,
    price,
  })

  register.save()

  res.send({ 
    message: 'ok!'
  })
}

async function put(req, res){
  const {id} = req.params

  const products = await ProductsModel.findOneAndUpdate({ _id: id},req.body,{ new: true })
  res.send({
    message:'success',
    products,
  })

  //Caso não queira retorna o produto para o frontend
  // const products = await ProductsModel.findOne({_id: id})
  // await products.updateOne(req.body)
  // res.send({ 
  //   message: 'success'
  // })
}

async function remove(req, res){
  const {id} = req.params
  const remove =  await ProductsModel.deleteOne({_id: id})
  const message = remove.deletedCount ? 'deu certo' : 'erro'
  res.send({ 
    message
  })
}

module.exports = {
  get,
  post,
  put,
  remove,
}