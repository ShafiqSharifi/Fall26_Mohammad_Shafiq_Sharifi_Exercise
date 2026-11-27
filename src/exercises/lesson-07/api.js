
const POSTS_ENDPOINT = "https://jsonplaceholder.typicode.com/posts/";

export async function getPosts() {
  const url = `${POSTS_ENDPOINT}?_limit=10`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await response.json();
  return data;
}

export async function getSinglePost(postId) {
  if (!postId) {
    throw new Error("postId parameter is required!");
  }

  const url = `${POSTS_ENDPOINT}${postId}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  const data = await response.json();
  return data;
}
