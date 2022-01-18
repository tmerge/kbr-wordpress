import {getApolloClient} from './apollo-client'
import {gql} from '@apollo/client'
import { data } from 'autoprefixer'

/* get post by slug */
export async function getPostBySlug(slug) {
    const client = getApolloClient()
    const api = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host

    let postData
    try {
        postData = await client.query({
            query: gql`
            query PostBySlug($slug: ID!) {
                post(id: $slug, idType: SLUG) {
                  author {
                    node {
                      avatar {
                        height
                        url
                        width
                      }
                      id
                      name
                      slug
                    }
                  }
                  id
                  categories {
                    edges {
                      node {
                        databaseId
                        id
                        name
                        slug
                      }
                    }
                  }
                  content
                  date
                  excerpt
                  featuredImage {
                    node {
                      altText
                      caption
                      sourceUrl
                      srcSet
                      sizes
                      id
                    }
                  }
                  modified
                  databaseId
                  title
                  slug
                  isSticky
                }
              }
            `,
            variables: {
                slug,
            }
        })
    } catch(e) {
        console.log("error on loading post with this slug")
        throw e
    }

    const post = [postData?.data.post].map(mapPostData)[0]

    return {
        post
    }
}

/* get all posts from wordpress */
export async function getAllPosts() {
    const client = getApolloClient()

    const data = await client.query({
        query: gql `
        query AllPosts {
            posts {
              edges {
                node {
                  id
                  title
                  date
                  slug
                }
              }
            }
          }`
    })

    const posts = data?.data.posts.edges.map(({ node = {} }) => node);

    return {
        posts: Array.isArray(posts) && posts.map(mapPostData),
    }
}

/**
 * mapPostData
 */

 export function mapPostData(post = {}) {
    const data = { ...post };
  
    // Clean up the author object to avoid someone having to look an extra
    // level deeper into the node
  
    if (data.author) {
      data.author = {
        ...data.author.node,
      };
    }
  
    // The URL by default that comes from Gravatar / WordPress is not a secure
    // URL. This ends up redirecting to https, but it gives mixed content warnings
    // as the HTML shows it as http. Replace the url to avoid those warnings
    // and provide a secure URL by default
  
    if (data.author?.avatar) {
      data.author.avatar = updateUserAvatar(data.author.avatar);
    }
  
    // Clean up the categories to make them more easy to access
  
    if (data.categories) {
      data.categories = data.categories.edges.map(({ node }) => {
        return {
          ...node,
        };
      });
    }
  
    // Clean up the featured image to make them more easy to access
  
    if (data.featuredImage) {
      data.featuredImage = data.featuredImage.node;
    }
  
    return data;
  }