---
layout: blog
title: Blog
permalink: /blog/
---

# Blog Posts

<div class="pixel_divider"></div>

## Recent Writing

<ul class="post-list">
{% for post in site.posts %}
  <li class="post-list-item">
    <h3 class="post-title">
      <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    </h3>
    <div class="post-meta">
      <span class="post-date">{{ post.date | date: "%Y.%m.%d" }}</span>
      {% if post.categories.size > 0 %}
      <span class="post-categories">
        {{ post.categories | join: ", " }}
      </span>
      {% endif %}
    </div>
    {% if post.excerpt %}
    <div class="post-excerpt">
      {{ post.excerpt | strip_html | truncate: 200 }}
    </div>
    {% endif %}
  </li>
{% endfor %}
</ul>

{% if site.posts.size == 0 %}
<div class="thought_entry">
  <div class="entry_date">sys.log</div>
  <div class="entry_content">
    No posts yet. The void awaits your thoughts...
  </div>
</div>
{% endif %}
