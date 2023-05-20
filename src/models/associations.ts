import User from "./User";
import Post from "./Post";
import Comment from "./Comment";

// * User - Post

Post.belongsTo(User, {
  foreignKey: "userId",
  targetKey: "id",
});

Comment.belongsTo(Post, {
  foreignKey: "postId",
  targetKey: "id",
});

Comment.belongsTo(User, {
  foreignKey: "userId",
  targetKey: "id",
});
