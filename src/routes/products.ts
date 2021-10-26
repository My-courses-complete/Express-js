import { Router, Request, Response, NextFunction } from 'express'
import faker from 'faker'
import ProductService from '../services/product'

const ProductsRouter = Router()
const serviceProducts = new ProductService()

ProductsRouter.get('/', async (req: Request, res: Response) => {
  const products = await serviceProducts.find()
  res.json(products)
})

ProductsRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const product = await serviceProducts.findOne(id)
    if(!id) {
      res.status(404).json({
        message: 'No products found'
      })
    }
    res.json(product)
  } catch (error) {
    next(error)
  }
})

ProductsRouter.post('/', async (req: Request, res: Response) => {
  const body = req.body
  const newProduct = await serviceProducts.create(body)
  res.status(201).json({
    message: "product created",
    data: newProduct
  })
})

ProductsRouter.patch('/:id', async (req: Request, res: Response) => {
  try {
  const { id } = req.params
  const body = req.body
  const updatedProduct = await serviceProducts.update(id, body)
  res.json({
    message: "product update",
    data: updatedProduct,
    id
  })
} catch (err) {
  res.status(404).json(err)
}
})

ProductsRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const rta = await serviceProducts.delete(id)
    res.json({
      message: "product deleted",
      ...rta
    })
  } catch (err) {
    res.status(404).json(err)
  }
  })
  
  export default ProductsRouter