import { Router, Request, Response } from 'express'
import faker from 'faker'
import ProductService from '../services/product'

const ProductsRouter = Router()
const serviceProducts = new ProductService()

ProductsRouter.get('/', (req: Request, res: Response) => {
  const products = serviceProducts.find()
  res.json(products)
})

ProductsRouter.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const product = serviceProducts.findOne(id)
  if(!id) {
    res.status(404).json({
      message: 'No products found'
    })
  }
  res.json(product)
})

ProductsRouter.post('/', (req: Request, res: Response) => {
  const body = req.body
  const newProduct = serviceProducts.create(body)
  res.status(201).json({
    message: "product created",
    data: newProduct
  })
})

ProductsRouter.patch('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const body = req.body
  const updatedProduct = serviceProducts.update(id, body)
  res.json({
    message: "product update",
    data: updatedProduct,
    id
  })
})

ProductsRouter.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const rta = serviceProducts.delete(id)
  res.json({
    message: "product deleted",
    ...rta
  })
})

export default ProductsRouter