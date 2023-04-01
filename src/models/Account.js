export class Profile {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.github = data.github
    this.linkedin = data.linkedin
    this.class = data.class
    this.graduated = data.graduated
  }
}

export class Account extends Profile {
  constructor(data) {
    this.email = data.email
  }
}
