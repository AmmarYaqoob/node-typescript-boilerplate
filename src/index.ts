import express, { Express } from "express";
import { bootstrapDatabase } from './bootstrap/index'
import userroutes from './routes/userroutes';
import ping from './routes/ping';
import dotenv from "dotenv";

dotenv.config();
const app: Express = express();
const bodyParser = express.json;
app.use(bodyParser());

bootstrapDatabase().then(() => {
  const port = process.env.PORT || 3001;

  app.use('/api/user', userroutes);
  app.use('/api/ping', ping);
  app.use('/', ping);

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });


});

export default app