import express, { Express } from "express";
import { bootstrapDatabase } from './bootstrap/index'
import authroutes from './routes/authroutes';
import userroutes from './routes/userroutes';
import ping from './routes/ping';
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();
const app: Express = express();
const bodyParser = express.json;
app.use(bodyParser());
app.use(cors());

bootstrapDatabase().then(() => {
  const port = process.env.PORT || 3333;

  app.use('/api/auth', authroutes);
  app.use('/api/user', userroutes);
  app.use('/api/ping', ping);
  app.use('/', ping);

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });


});

export default app