import { Express, Router } from "express"
import ProductsRouter from "./products"


function routerApi(app: Express) {
  const router = Router()
  app.use('/api/v1', router)
  router.use('/products', ProductsRouter)
}

export default routerApi