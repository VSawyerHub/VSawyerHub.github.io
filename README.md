# VSawyerHub.github.io

Personal blog and portfolio site powered by Jekyll and GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Ruby (version 2.7 or higher)
- Bundler (`gem install bundler`)

### Installation & Setup

1. **Install dependencies:**
   ```bash
   bundle install
   ```

2. **Start the development server:**
   ```bash
   bundle exec jekyll serve
   ```

3. **View your site:**
   Open your browser and navigate to `http://localhost:4000`

## 📝 Common Commands

| Command | Description |
|---------|-------------|
| `bundle install` | Install all dependencies |
| `bundle exec jekyll serve` | Start local development server |
| `bundle exec jekyll serve --livereload` | Start server with live reload |
| `bundle exec jekyll serve --port 5000` | Start server on custom port |
| `bundle exec jekyll build` | Build the site (output to `_site/`) |
| `bundle exec jekyll clean` | Clean the generated site |

## 📁 Project Structure

```
.
├── _config.yml          # Main Jekyll configuration
├── _posts/              # Blog posts (YYYY-MM-DD-title.markdown)
├── _includes/           # Reusable HTML components
├── _layouts/            # Page templates
├── css/                 # Stylesheets
├── js/                  # JavaScript files
├── img/                 # Images and assets
├── _site/               # Generated site (don't edit!)
└── Gemfile              # Ruby dependencies
```

## ✍️ Writing a New Post

Create a new file in `_posts/` following this naming convention:
```
YYYY-MM-DD-your-post-title.markdown
```

Example front matter:
```markdown
---
layout: post
title: "Your Post Title"
date: 2025-04-19 12:00:00 +0000
categories: blog
---

Your content here...
```

## 🔧 Configuration

Edit `_config.yml` to customize:
- Site title and description
- Social media links
- Theme settings
- Plugins

**Note:** After changing `_config.yml`, restart the Jekyll server.

## 🌐 Deployment

This site is automatically deployed to GitHub Pages when you push to the main branch.

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Your site will be live at: `https://vsawyerhub.github.io`

## 🛠️ Troubleshooting

### Dependencies not installing?
```bash
bundle update
```

### Port already in use?
```bash
bundle exec jekyll serve --port 4001
```

### Site not updating?
- Clear Jekyll cache: `bundle exec jekyll clean`
- Restart the server
- Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)

## 📚 Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Liquid Template Language](https://shopify.github.io/liquid/)

---

**Happy blogging! 🎉**