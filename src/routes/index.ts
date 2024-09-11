import { Router } from "express";


const data=()=>{
    console.log("bike rantel ");
    
}

export const router = Router();
const modulesRoute = [
    {
        path: "/students",
        route: data
    },
 
];

modulesRoute.forEach(route => router.use(route.path, route.route))


