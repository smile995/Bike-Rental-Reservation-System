import express, { Request, Response } from "express";
import cors from 'cors'
import { globalErrorHandler } from "./middleweres/globalErrorHandler";
import { routeNotFound } from "./middleweres/route.notFound";

const app = express();
// parsers that must called in upperbody of a document
app.use(express.json())
app.use(cors())

// I will maintain here all the route but exicution will be in different file,

// initial route controller
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Bike Rental Management System')
})

app.use(globalErrorHandler);
app.use(routeNotFound);
export default app;