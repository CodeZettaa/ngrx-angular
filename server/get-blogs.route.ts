

import {Request, Response} from 'express';
import {BLOGS} from "./db-data";



export function getAllBlogs(req: Request, res: Response) {

    console.log("Retrieving blogs data ...");

    setTimeout(() => {

      res.status(200).json({payload:Object.values(BLOGS)});

    }, 1000);



}


export function getBlogsByUrl(req: Request, res: Response) {

    const blogUrl = req.params["blogUrl"];

    const blogs:any = Object.values(BLOGS);

    const blog = blogs.find(blog => blog.url == blogUrl);

    setTimeout(() => {

      res.status(200).json(blog);

    }, 1000);


}
