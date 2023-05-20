import { Request, Response } from "express";
import Comment from "../models/Comment";
import User from "../models/User";
import Post from "../models/Post";

export const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await Comment.findAll();
    if (!comments || comments.length === 0) {
      return res.status(404).json({
        msg: "Comments not found",
      });
    }
    res.status(200).json({
      comments,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
};

export const getComment = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (isNaN(Number(id))) {
      return res.status(400).json({
        msg: "Bad params",
      });
    }
    const comment = await Comment.findByPk(Number(id));
    if (!comment) {
      return res.status(404).json({
        msg: "Comment not found",
      });
    }
    res.status(200).json({ comment });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
};

export const createComment = async (req: Request, res: Response) => {
  try {
    const { text, userId, postId } = req.body;
    if (!userId || !postId || !text) {
      return res.status(400).json({
        msg: "Data incomplete",
      });
    }

    const userExist = await User.findByPk(userId);
    if (!userExist) {
      return res.status(400).json({
        msg: "User does not exist",
      });
    }
    const postExist = await Post.findByPk(postId);
    if (!postExist) {
      return res.status(400).json({
        msg: "Post does not exist",
      });
    }

    const newComment = await Comment.create({
      text,
      userId,
      postId,
    });
    res.json({ newComment });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
};
