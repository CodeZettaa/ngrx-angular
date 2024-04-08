import {Request, Response} from 'express';
import {BLOGS} from "./db-data";


export function deleteBlog(req: Request, res: Response) {

    console.log("Deleting blog ...");

    const id = req.params["id"];

    const blog = BLOGS[id];

    delete BLOGS[id];

    setTimeout(() => {

      res.status(200).json({id});

    }, 2000);

}

