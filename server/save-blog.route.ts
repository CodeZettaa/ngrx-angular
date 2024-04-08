import {Request, Response} from 'express';
import {BLOGS} from "./db-data";


export function saveBlog(req: Request, res: Response) {

    console.log("Saving blog ...");

    const id = req.params["id"],
        changes = req.body;

  BLOGS[id] = {
        ...BLOGS[id],
        ...changes
    };

    setTimeout(() => {

      res.status(200).json(BLOGS[id]);

    }, 2000);

}

