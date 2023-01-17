const blogPost = {
    title: "How to get a job",
    body: "Study a lot!",
    author: "Igus Bogus",
    views: 1000,
    comments: { author: 'Calros', body: 'Calros'},
    isLive: true
};



function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}
