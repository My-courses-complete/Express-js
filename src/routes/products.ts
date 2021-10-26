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

export default ProductsRouter