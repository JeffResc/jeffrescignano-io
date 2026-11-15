import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const site = context.site!;
  const url = (path: string) => new URL(path, site).href;
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  const body = `# Jeff Rescignano

> Platform Engineer focused on building tools and infrastructure that help teams ship code easier and faster. Kubernetes, CI/CD, and cloud-native tooling.

## Pages

- [Home](${url('/')}): About Jeff Rescignano.
- [Projects](${url('/projects/')}): Open-source projects, including Kubernetes operators, digital signage, and IoT integrations.
- [Certifications](${url('/certifications/')}): Professional certifications and digital badges.
- [Blog](${url('/blog/')}): Blog posts on platform engineering, Kubernetes, home automation, and cloud-native tooling.

## Blog posts

${posts.map((post) => `- [${post.data.title}](${url(`/blog/${post.id}.md`)}): ${post.data.description}`).join('\n')}

## Optional

- [RSS feed](${url('/rss.xml')}): All blog posts as RSS.
- [Sitemap](${url('/sitemap-index.xml')}): All pages as XML.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
