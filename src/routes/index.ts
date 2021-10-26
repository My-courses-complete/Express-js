import { Express } from "express"
import ProductsRouter from "./products"

function routerApi(app: Express) {
  app.use('/products', ProductsRouter)
}

export default routerApi