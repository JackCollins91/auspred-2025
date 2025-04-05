const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

const postsDirectory = path.join(__dirname, 'posts');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

function getPosts() {
    const files = fs.readdirSync(postsDirectory);
    const posts = files
        .filter(file => file.startsWith('post') && file.endsWith('.html') && fs.statSync(path.join(postsDirectory, file)).isFile()) // Ensure it's a file
        .map(file => {
            const content = fs.readFileSync(path.join(postsDirectory, file), 'utf-8');
            return {
                title: file.replace('.html', ''),
                content: content,
                file: file
            };
        });
        return posts.sort((a, b) => a.title.localeCompare(b.title));
}

app.get('/', (req, res) => {
    const posts = getPosts();
    const recentPost = posts.length > 0 ? posts[0] : null;
    const pastPosts = posts.slice(1);
    res.render('index', { recentPost, pastPosts });
});

app.get('/post/:filename', (req, res) => {
    const { filename } = req.params;
    const content = fs.readFileSync(path.join(postsDirectory, `${filename}.html`), 'utf-8');
    res.render('post', { title: filename, content: content });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});