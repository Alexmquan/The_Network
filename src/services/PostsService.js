import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"

class PostsService {
  async getPosts() {
    const res = await api.get('api/posts')
    logger.log('[get posts]', res.data)
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.older = res.data.older
    AppState.newer = res.data.newer

  }

  async changePage(url) {
    const res = await api.get(url)
    AppState.older = res.data.older
    AppState.newer = res.data.newer
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

  async getPostsByProfileId(query) {
    const res = await api.get('/api/posts', { params: query })
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

  async createPost(formData) {
    const res = await api.post('/api/posts', formData)
    const newPost = new Post(res.data)
    AppState.posts.push(newPost)
    return newPost
  }

  async deletePost(postId) {
    const res = await api.delete('api/posts/' + postId)
    logger.log('[delete post', postId)
    AppState.posts = AppState.posts
  }

  async changeLikes(postId) {
    const res = await api.post(`/api/posts/${postId}/like`)
    const newPost = new Post(res.data)
    AppState.posts.push(newPost)
    return newPost

  }

  async searchPosts(query) {
    const res = await api.get('/api/posts/search?query=' + query)
    logger.log('Search Posts', res.data)
    AppState.posts = res.data.posts.map(p = new Post(p))

  }

}

export const postsService = new PostsService()