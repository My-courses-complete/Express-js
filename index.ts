import express, { Request, Response} from 'express'
const faker = require('faker');

const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/products', (req: Request, res: Response) => {
  const products = []
  const { size } = req.query
  const limit = size || 10
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
    
  }
  res.json(products)
})

app.get('/products/:id', (req: Request, res: Response) => {
  const { id } = req.params
  res.json({
    id,
    name: 'products',
    price: 821349
  })
})

app.listen(port, () =>{
  console.log('listening in port ' + port);
})