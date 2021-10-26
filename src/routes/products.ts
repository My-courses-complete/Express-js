import { Router, Request, Response } from 'express'
import faker from 'faker'

const ProductsRouter = Router()

ProductsRouter.get('/', (req: Request, res: Response) => {
  const products = []
  const { size } = req.query
  const limit = size || 10
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.imageUrl()
    })
  }
  res.json(products)
})

ProductsRouter.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  if(id === '999') {
    res.status(404).json({
      message: 'No products found'
    })
  }
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  })
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