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

}

export const postsService = new PostsService()