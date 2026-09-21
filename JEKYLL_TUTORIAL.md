# Jekyll Blog Tutorial: VSawyerHub.github.io

## Table of Contents
1. [What is Jekyll?](#what-is-jekyll)
2. [Project Structure Overview](#project-structure-overview)
3. [How Your Blog Works](#how-your-blog-works)
4. [Configuration Files](#configuration-files)
5. [Creating Pages vs Posts](#creating-pages-vs-posts)
6. [Understanding Layouts](#understanding-layouts)
7. [How the /card Page Works](#how-the-card-page-works)
8. [Creating a New Page with Sidebar](#creating-a-new-page-with-sidebar)
9. [Running Your Blog](#running-your-blog)
10. [Troubleshooting](#troubleshooting)

---

## What is Jekyll?

Jekyll is a **static site generator** that transforms plain text files (Markdown, HTML) into a complete website. It's perfect for blogs because:

- **No database needed** - Everything is files
- **GitHub Pages support** - Free hosting at `username.github.io`
- **Markdown support** - Write content in easy-to-read format
- **Templates (Layouts)** - Reusable HTML structures
- **Liquid templating** - Dynamic content with `{{ }}` and `{% %}`

### The Jekyll Build Process

```
Your Files          →    Jekyll Processes    →    Static Website
─────────────────        ─────────────────        ──────────────
index.markdown           Converts Markdown        _site/index.html
_layouts/home.html       Applies layouts          _site/card/index.html
_config.yml              Injects variables        CSS, images, etc.
_posts/*.markdown        Generates URLs
```

---

## Project Structure Overview

```
VSawyerHub.github.io/
│
├── _config.yml              # Global site configuration
├── Gemfile                  # Ruby dependencies (like package.json)
│
├── _layouts/                # HTML templates that wrap your content
│   ├── default.html         # Base layout with navigation
│   ├── home.html            # Homepage layout (uses default)
│   ├── card.html            # Card/profile page layout
│   └── post.html            # Blog post layout
│
├── _includes/               # Reusable HTML snippets
│   ├── head.html            # <head> section (meta, CSS links)
│   ├── featured-tags.html
│   └── posts/               # Post-specific includes
│
├── _posts/                  # Blog posts (date-named files)
│   └── YYYY-MM-DD-title.markdown
│
├── css/                     # Stylesheets
│   ├── crt-theme.css
│   ├── digital.css
│   ├── card.css
│   └── bootstrap files...
│
├── img/                     # Images
├── js/                      # JavaScript files
│
├── index.markdown           # Homepage (uses home layout)
├── about.markdown           # Example page (uses card layout)
│
└── _site/                   # Generated site (DO NOT EDIT)
```

---

## How Your Blog Works

### 1. The Home Page (`/`)

**File:** `index.markdown`
```markdown
---
layout: home
---
```

This tells Jekyll:
- Use the `home` layout from `_layouts/home.html`
- The content is empty, so it only displays what's in the layout

**What happens:**
1. Jekyll reads `index.markdown`
2. Sees `layout: home`
3. Wraps content in `_layouts/home.html`
4. `home.html` has `layout: default` at the top
5. So it wraps the home layout in `_layouts/default.html`
6. Generates `_site/index.html`

### 2. The Card Page (`/card`)

**File:** `about.markdown`
```markdown
---
layout: card
title: Card
permalink: /card/
---
```

- `layout: card` - Uses `_layouts/card.html`
- `permalink: /card/` - Makes it accessible at `/card` instead of `/about`
- `card.html` is standalone (doesn't inherit from default)

---

## Configuration Files

### `_config.yml` - The Brain of Your Site

```yaml
title: VSAWYER                      # Site name ({{ site.title }})
url: "https://vsawyerhub.github.io" # Base URL ({{ site.url }})
twitter_username: _VSawyer_         # Custom variables
github_username: VSawyerHub         # Access via {{ site.github_username }}

# Build settings
theme: minima                       # Base theme
plugins:
  - jekyll-feed                     # RSS feed generator

# Behavior
permalink: pretty                   # URLs without .html
paginate: 10                        # Posts per page
```

**Important:** After changing `_config.yml`, you MUST restart the Jekyll server!

### `Gemfile` - Ruby Dependencies

```ruby
gem "github-pages"    # GitHub Pages compatibility
gem "jekyll-feed"     # RSS feed plugin
gem "jekyll-paginate" # Pagination support
gem "minima"          # Theme
```

Run `bundle install` after modifying this file.

---

## Creating Pages vs Posts

### Pages - Standalone Content

**Pages** are for permanent content like About, Contact, Projects, etc.

**Create a page:**
```markdown
# File: projects.markdown
---
layout: default
title: My Projects
permalink: /projects/
---

# My Projects

Here are my projects...
```

**Accessing:** `yoursite.com/projects/`

### Posts - Blog Entries

**Posts** are for dated content that appears in reverse chronological order.

**Create a post:**
```markdown
# File: _posts/2025-09-21-my-first-post.markdown
---
layout: post
title: "My First Post"
date: 2025-09-21 14:30:00 -0400
categories: coding
---

This is my blog post content...
```

**Naming convention:** `YYYY-MM-DD-title.markdown` (the date is REQUIRED)

**Accessing:** `yoursite.com/2025/09/21/my-first-post/` (with `permalink: pretty`)

---

## Understanding Layouts

Layouts are HTML templates that wrap your content. They can **inherit** from other layouts.

### Layout Hierarchy in Your Project

```
default.html (base)
    ├── home.html (inherits from default)
    └── post.html (inherits from default)

card.html (standalone)
```

### Anatomy of a Layout

**`_layouts/default.html`** - Base template
```html
<!DOCTYPE html>
<html lang="en">
{% include head.html %}        <!-- Include reusable head section -->
<body>

<nav class="navigation">
    <div class="nav_links">
        <a href="/">/home</a>
        <a href="/card">/card</a>
    </div>
</nav>

{{ content }}                  <!-- Page content goes here -->

</body>
</html>
```

**`_layouts/home.html`** - Homepage template
```html
---
layout: default               <!-- Wraps this in default.html -->
---

<header class="site-header">
    <!-- Header content -->
</header>

<aside class="left_sidebar">
    <!-- Sidebar content -->
</aside>

<main class="main_content">
    <!-- Main content -->
</main>

<script>
    // JavaScript for typewriter effect
</script>
```

**The magic:** `{{ content }}` in `default.html` gets replaced with everything from `home.html`

---

## How the /card Page Works

The `/card` page is defined by `about.markdown`:

```markdown
---
layout: card
title: Card
permalink: /card/
---
```

**Key points:**
1. `permalink: /card/` makes it accessible at `/card` instead of `/about`
2. Uses `card.html` layout, which is **standalone** (doesn't use default.html)
3. `card.html` includes its own navigation, CSS, and structure

**Why it's separate:**
- Different visual style (profile card vs. blog layout)
- Different CSS (`card.css` instead of `crt-theme.css`)
- Self-contained page

---

## Creating a New Page with Sidebar

Based on your request, you want a page with:
- Left sidebar (like in `home.html`)
- Main content area
- Separate from the home page

### Step 1: Create a New Layout

**File:** `_layouts/blog.html`
```html
---
layout: default
---

<div class="blog-container">
    <aside class="left_sidebar">
        <div class="profile_data">
            <div class="profile_image"></div>
            <div class="floating_text">デジタル亡霊</div>
            <div class="glitch_text" data-text="VSAWYER">VSAWYER</div>
        </div>

        <div class="sidebar_nav">
            <h3>Categories</h3>
            <ul>
                <li><a href="#coding">Coding</a></li>
                <li><a href="#design">Design</a></li>
                <li><a href="#thoughts">Thoughts</a></li>
            </ul>
        </div>

        <div class="memory_fragment">
            <div class="entry_date">sys.time: undefined</div>
            "In the end, would it all be worth it?"
        </div>
    </aside>

    <main class="main_content">
        {{ content }}  <!-- Page content goes here -->
    </main>
</div>
```

### Step 2: Create a New Page

**File:** `blog.markdown`
```markdown
---
layout: blog
title: Blog
permalink: /blog/
---

# Welcome to My Blog

This is the main blog content area. I can write anything here in Markdown.

## Recent Posts

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}

## About This Section

More content here...
```

### Step 3: Add Navigation Link

Edit `_layouts/default.html`:
```html
<nav class="navigation">
    <div class="nav_links">
        <a href="{{ site.baseurl }}/">/home</a>
        <a href="{{ site.baseurl }}/blog">/blog</a>
        <a href="{{ site.baseurl }}/card">/card</a>
    </div>
</nav>
```

### Step 4: Create CSS (Optional)

**File:** `css/blog.css`
```css
.blog-container {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 2rem;
    padding: 2rem;
}

.blog-container .left_sidebar {
    /* Inherit sidebar styles from home.html */
}

.blog-container .main_content {
    max-width: 800px;
    padding: 2rem;
}

@media (max-width: 768px) {
    .blog-container {
        grid-template-columns: 1fr;
    }
}
```

Then include it in the layout:
```html
<!-- In _layouts/blog.html, before </head> -->
<link rel="stylesheet" href="{{ '/css/blog.css' | relative_url }}">
```

### Why This Approach?

1. **Reuses existing sidebar** from `home.html`
2. **Creates dedicated space** for blog content
3. **Separates concerns**: Home page vs Blog listing
4. **Maintains consistency** with your existing design

---

## Running Your Blog

### Local Development

1. **Install dependencies** (first time only):
   ```bash
   bundle install
   ```

2. **Start the server**:
   ```bash
   bundle exec jekyll serve
   ```

3. **View your site**:
   Open `http://localhost:4000` in your browser

4. **Auto-rebuild**:
   Jekyll watches for file changes and rebuilds automatically
   (Except `_config.yml` - requires restart)

### Building for Production

```bash
bundle exec jekyll build
```

Generates the final site in `_site/` folder.

### Deploying to GitHub Pages

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add new blog page"
   git push origin main
   ```

2. **GitHub Pages automatically builds** your site when you push to `main` branch

3. **Access at**: `https://vsawyerhub.github.io`

---

## Liquid Templating Basics

Jekyll uses **Liquid** for dynamic content:

### Variables

```liquid
{{ site.title }}              # From _config.yml
{{ page.title }}              # From front matter
{{ content }}                 # Page/post content
```

### Loops

```liquid
{% for post in site.posts %}
  <h2>{{ post.title }}</h2>
  <p>{{ post.excerpt }}</p>
{% endfor %}
```

### Conditionals

```liquid
{% if page.author %}
  <p>By {{ page.author }}</p>
{% else %}
  <p>By Anonymous</p>
{% endif %}
```

### Includes

```liquid
{% include header.html %}
```

### Filters

```liquid
{{ post.date | date: "%B %d, %Y" }}
{{ page.url | relative_url }}
{{ post.content | strip_html | truncate: 150 }}
```

---

## Front Matter Explained

Front matter is the YAML between `---` at the top of files:

```markdown
---
layout: post
title: "My Amazing Post"
date: 2025-09-21 14:30:00 -0400
categories: coding design
tags: jekyll tutorial
author: Victory Sawyer
custom_variable: "anything you want"
---

Post content starts here...
```

**Common fields:**
- `layout` - Which template to use
- `title` - Page/post title ({{ page.title }})
- `date` - Publication date (posts only)
- `permalink` - Custom URL
- `categories` - Organize posts
- `tags` - Keyword labels
- `published: false` - Hide post

**Custom variables:**
You can add ANY variable and access it with `{{ page.your_variable }}`

---

## File Organization Best Practices

### When to Use What

| Content Type | Location | Example |
|--------------|----------|---------|
| Blog posts | `_posts/` | `2025-09-21-title.md` |
| Permanent pages | Root | `about.md`, `projects.md` |
| HTML templates | `_layouts/` | `default.html` |
| Reusable snippets | `_includes/` | `header.html` |
| Stylesheets | `css/` | `main.css` |
| JavaScript | `js/` | `main.js` |
| Images | `img/` | `logo.png` |
| Data files | `_data/` | `navigation.yml` |

### Why Your Home Content is in _layouts/

Typically, `index.markdown` contains content, but in your case:

```markdown
# index.markdown
---
layout: home
---
```

It's empty because ALL content is in `_layouts/home.html`. This is valid but unusual.

**More common approach:**
```markdown
# index.markdown
---
layout: default
---

# Welcome to My Site

This content appears in {{ content }}
```

---

## Troubleshooting

### Build Errors

**Problem:** `Dependency Error: Yikes!`
```bash
bundle install
bundle update
```

**Problem:** `cannot load such file -- webrick`
```bash
bundle add webrick
```

### Layout Not Applying

1. Check front matter syntax (YAML must be valid)
2. Ensure `---` markers are on their own lines
3. Verify layout file exists in `_layouts/`
4. Restart Jekyll server after changing `_config.yml`

### Changes Not Showing

1. **Hard refresh** browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. **Clear browser cache**
3. Check Jekyll output for build errors
4. `_site/` folder should contain your changes

### Page Not Found (404)

1. Check `permalink` in front matter
2. Verify file is not in `exclude:` list in `_config.yml`
3. Check filename (posts MUST be `YYYY-MM-DD-title.md`)
4. For local development, use `http://localhost:4000/page/` not `http://localhost:4000/page`

### CSS Not Loading

1. Use `{{ '/css/file.css' | relative_url }}` not `/css/file.css`
2. Clear browser cache
3. Check browser console for 404 errors
4. Verify file exists in `css/` folder

---

## Quick Reference Commands

```bash
# Install dependencies
bundle install

# Start local server
bundle exec jekyll serve

# Build site (output to _site/)
bundle exec jekyll build

# Build with drafts visible
bundle exec jekyll serve --drafts

# Serve on different port
bundle exec jekyll serve --port 4001

# Watch for changes (usually automatic)
bundle exec jekyll serve --watch

# Verbose output for debugging
bundle exec jekyll serve --verbose
```

---

## Next Steps

1. **Create your blog layout** following the guide above
2. **Write your first post** in `_posts/`
3. **Customize the sidebar** in your new layout
4. **Add more pages** as needed
5. **Style with CSS** to match your aesthetic

---

## Additional Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Liquid Documentation](https://shopify.github.io/liquid/)
- [GitHub Pages + Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll)
- [Markdown Guide](https://www.markdownguide.org/)

---

**Need help?** Check the Jekyll build output for error messages - they're usually very helpful!
