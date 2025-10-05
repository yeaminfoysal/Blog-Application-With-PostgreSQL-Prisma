import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
    try {
        const result = await PostService.createPost(req.body)
        res.status(201).json(result);
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllPosts = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const search = (req.query.search as string) || ""
        const isFeatured = req.query.isFeatured ? req.query.isFeatured === "true" : undefined;
        const tags = req.query.tags ? (req.query.tags as string).split(",") : []

        const result = await PostService.getAllPosts({ page, limit, search, isFeatured, tags });
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch posts", details: err });
    }
};

const getPostById = async (req: Request, res: Response) => {
    const post = await PostService.getPostById(Number(req.params.id));
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
};

const updatePost = async (req: Request, res: Response) => {
    const post = await PostService.updatePost(Number(req.params.id), req.body);
    res.json(post);
};

const deletePost = async (req: Request, res: Response) => {
    await PostService.deletePost(Number(req.params.id));
    res.json({ message: "Post deleted" });
};

const getBlogStat = async (req: Request, res: Response) => {
    try {
        const result = await PostService.getBlogStat();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch stats", details: err });
    }
};

export const PostController = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
    getBlogStat
}