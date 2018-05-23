import React from "react";

const PostListing = ({ post: post }) => {
  return (
    <div>
      <h2>{post.frontmatter.title}</h2>
      <p>{post.excerpt}</p>
    </div>
  );
};

export default PostListing;
