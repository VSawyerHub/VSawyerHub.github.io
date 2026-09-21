# Quick Start Guide

## What I Just Created For You

I've added a new **`/blog`** page to your Jekyll site with:

✅ Left sidebar (reused from your home page design)  
✅ Main content area for blog posts  
✅ Separate layout (not mixed with `/home`)  
✅ Navigation updated across all pages  

## Files Created

1. **`_layouts/blog.html`** - New layout template with sidebar + main content
2. **`blog.markdown`** - The blog page (accessible at `/blog`)
3. **`css/blog-layout.css`** - Styling for the blog page layout
4. **`JEKYLL_TUTORIAL.md`** - Comprehensive Jekyll guide (read this!)

## Files Modified

- **`_layouts/default.html`** - Added `/blog` to navigation
- **`_layouts/card.html`** - Added `/blog` to navigation

## How to View Your New Blog Page

### 1. Start Jekyll Server

```bash
cd /home/victory/IdeaProjects/VSawyerHub.github.io
bundle exec jekyll serve
```

### 2. Open in Browser

Navigate to: `http://localhost:4000/blog`

You should see:
- Left sidebar with your profile (same as home)
- Main content area with blog posts listed
- All posts from `_posts/` folder displayed

## Creating a New Blog Post

1. Create a file in `_posts/` folder:
   ```
   _posts/2025-09-21-my-new-post.markdown
   ```

2. Add front matter and content:
   ```markdown
   ---
   layout: post
   title: "My Awesome Post"
   date: 2025-09-21 14:30:00 -0400
   categories: coding thoughts
   ---

   # Hello World

   This is my blog post content...
   ```

3. Save and refresh - Jekyll rebuilds automatically!

## Navigation Structure

Your site now has three main sections:

- **`/` (home)** - Landing page with typewriter effect
- **`/blog`** - Blog posts listing with sidebar
- **`/card`** - Profile card page

## Why This Structure Makes Sense

**Before:** Everything was on `/home` (index page)

**After:** 
- `/home` = Landing/welcome page
- `/blog` = Dedicated space for posts (with sidebar for navigation)
- `/card` = Profile/about page

This separation gives each section its own purpose and layout.

## Customizing the Blog Page

### Change Sidebar Content

Edit **`_layouts/blog.html`**:

```html
<aside class="left_sidebar">
    <!-- Add or modify sidebar content here -->
    <div class="sidebar_section">
        <h3 class="sidebar_title">Your Custom Title</h3>
        <!-- Your content -->
    </div>
</aside>
```

### Change Main Content

Edit **`blog.markdown`**:

```markdown
---
layout: blog
title: Blog
permalink: /blog/
---

# Your Custom Heading

Add any content here - it appears in the main area.
```

### Modify Styling

Edit **`css/blog-layout.css`** to change colors, spacing, fonts, etc.

## Understanding the Layout Flow

```
blog.markdown (front matter: layout: blog)
      ↓
_layouts/blog.html (front matter: layout: default)
      ↓
_layouts/default.html (wraps everything)
      ↓
Final HTML output
```

## Troubleshooting

### "Page not found"
- Make sure Jekyll is running
- Check the URL: `http://localhost:4000/blog` (with trailing slash sometimes needed)
- Clear browser cache

### "Sidebar not showing"
- Check if `crt-theme.css` and `digital.css` contain sidebar styles
- Verify CSS files are loading (check browser console)

### "No posts showing"
- Create a post in `_posts/` folder
- Follow naming convention: `YYYY-MM-DD-title.markdown`
- Restart Jekyll server

## Next Steps

1. **Read JEKYLL_TUTORIAL.md** for complete understanding
2. **Create some blog posts** in `_posts/`
3. **Customize the sidebar** to your liking
4. **Adjust styling** in `css/blog-layout.css`

## Useful Commands

```bash
# Start server
bundle exec jekyll serve

# Start with drafts visible
bundle exec jekyll serve --drafts

# Build site only (no server)
bundle exec jekyll build

# Clean generated files
bundle exec jekyll clean
```

---

**Happy blogging!** 🎉

For detailed explanations, see **JEKYLL_TUTORIAL.md**
