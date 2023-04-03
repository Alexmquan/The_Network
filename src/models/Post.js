import { Account, Profile } from "./Account.js"

export class Post {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.createdAt = (new Date(data.createdAt).toLocaleDateString() + ' - ' + new Date(data.createdAt).toLocaleTimeString())
    this.creator = new Profile(data.creator)
    this.likes = data.likes
  }
}