import {Request, Response} from 'express';
import {BLOGS} from './db-data';

export var blogsKeyCounter = 100;

export function createBlog(req: Request, res: Response) {

    console.log("Creating new BLOGS ...");

    const changes = req.body;

    const newBlog = {
        id: blogsKeyCounter,
      seqNo: blogsKeyCounter,
        ...changes
    };

  BLOGS[newBlog.id] = newBlog;

  blogsKeyCounter += 1;

    setTimeout(() => {

      res.status(200).json(newBlog);

    }, 2000);

}

