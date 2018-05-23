import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/post-listing'

const PostsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const PostListings = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostListing key={edge.node.id} post={edge.node} />);

  return <div>{PostListings}</div>;
}

export default PostsPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
