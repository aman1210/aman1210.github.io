export class Project {
  name: String;
  image: String;
  platform: String;
  description: String;
  technologies_used: String;
  github: String;
  demo: String;

  constructor(
    name: String,
    image: String,
    platform: String,
    description: String,
    technologies_used: String,
    github: String,
    demo?: String
  ) {
    this.name = name;
    this.image = image;
    this.platform = platform;
    this.description = description;
    this.technologies_used = technologies_used;
    this.github = github;
    this.demo = demo;
  }
}
