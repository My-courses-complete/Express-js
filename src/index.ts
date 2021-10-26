import express, { Request, Response} from 'express'
import routerApi from './routes';

const app = express();
const port = 3000

routerApi(app)

app.listen(port, () =>{
  console.log('listening in port ' + port);
})