import faker from 'faker'

interface ProductBase { name: string, price: number, image: string}
interface Product extends ProductBase {
  id: string;
}

class ProductService {
  products: Product[]
  constructor() {
    this.products = []
    this.generate()
  }

  generate() {
    const limit = 100
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
      })
    }
  }

  create(data: ProductBase) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return this.products
  }

  findOne(id: string) {
    return this.products.find(item => item.id === id)
  }

  update(id: string, changes: ProductBase) {
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1) {
      throw new Error('Product not found')
    }
    const product = this.products[index]
    this.products[index] = {...product, ...changes}
    return this.products[index]
  }
  
  delete(id: string) {
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1) {
      throw new Error('Product not found')
    }
    this.products.splice(index, 1)
    return { id }
  }
}

export default ProductService;