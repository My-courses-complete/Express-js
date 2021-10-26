import express, { Request, Response} from 'express'
import routerApi from './routes';
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler'

const app = express();
const port = 3000

app.use(express.json())
routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () =>{
  console.log('listening in port ' + port);
})