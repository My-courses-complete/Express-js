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
  res.status(201).json({
    message: "product created",
    data: body
  })
})

ProductsRouter.patch('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const body = req.body
  res.json({
    message: "product update",
    data: body,
    id
  })
})

ProductsRouter.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  res.json({
    message: "product deleted",
    id
  })
})

export default ProductsRouter