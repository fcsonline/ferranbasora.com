import React from 'react';
import { getSortedPosts } from "utils/posts";
import { getSortedProjects } from "utils/projects";

const createPostsSitemap = (posts) => (
  posts.map(({ slug }) => (`
    <url>
        <loc>${`/post/${slug}`}</loc>
    </url>
  `)).join('')
)

const createProjectsSitemap = (projects) => (
  projects.map(({ slug }) => (`
    <url>
        <loc>${`/project/${slug}`}</loc>
    </url>
  `)).join('')
)

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const posts = getSortedPosts()
    const projects = getSortedProjects()

    res.setHeader('Content-Type', 'text/xml');
    res.write('<?xml version="1.0" encoding="UTF-8"?>')
    res.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    res.write(createPostsSitemap(posts));
    res.write(createProjectsSitemap(projects));
    res.write('</urlset>')
    res.end();
  }
}

export default Sitemap;
