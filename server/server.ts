

import * as express from 'express';
import {Application} from "express";
import {searchLessons} from "./search-lessons.route";
import {loginUser} from "./auth.route";
import { getAllBlogs, getBlogsByUrl } from './get-blogs.route';
import { createBlog } from './create-blog.route';
import { saveBlog } from './save-blog.route';
import { deleteBlog } from './delete-blog.route';

const bodyParser = require('body-parser');



const app: Application = express();

const cors = require('cors');

app.use(cors({origin: true}));

app.use(bodyParser.json());


app.route('/api/login').post(loginUser);

app.route('/api/blogs').get(getAllBlogs);

app.route('/api/blog').post(createBlog);

app.route('/api/blog/:id').put(saveBlog);

app.route('/api/blog/:id').delete(deleteBlog);

app.route('/api/blogs/:blogUrl').get(getBlogsByUrl);

app.route('/api/lessons').get(searchLessons);




const httpServer:any = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});




