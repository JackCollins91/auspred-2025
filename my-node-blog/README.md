# My Node Blog

This is a simple Node.js blog application that serves blog posts written in Markdown format. The most recent blog post is displayed on the front page, while past blog posts are listed below.

## Project Structure

```
my-node-blog
├── src
│   ├── index.js          # Entry point of the application
│   ├── posts             # Directory containing blog post markdown files
│   │   ├── post1.md      # Content of the first blog post
│   │   ├── post2.md      # Content of the second blog post
│   │   └── post3.md      # Content of the third blog post
├── views
│   ├── index.ejs         # Template for the main page
│   └── post.ejs          # Template for individual blog post pages
├── package.json          # Configuration file for npm
└── README.md             # Documentation for the project
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-node-blog
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the application:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the blog.

## Usage

- The main page displays the most recent blog post along with links to past posts.
- Click on the links to view individual blog posts.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.