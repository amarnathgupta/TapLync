import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { ResponseMessages, StatusCodes } from './constants';

const app = express();

app.use(cors());
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Not Found middleware
// This middleware will catch all requests that do not match any defined routes
app.use((req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).send(ResponseMessages.NOT_FOUND);
});

// Error handling middleware
// This middleware will catch any errors that occur in the application
// and send a generic error response to the client
app.use((err: unknown, req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send(ResponseMessages.INTERNAL_SERVER_ERROR);
});

export { app };
