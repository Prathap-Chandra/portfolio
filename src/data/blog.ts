import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDXFilesRecursive(dir: string, baseDir: string = dir): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getMDXFilesRecursive(filePath, baseDir));
    } else if (path.extname(file) === ".mdx") {
      // Store relative path from baseDir, without extension
      results.push(path.relative(baseDir, filePath).replace(/\\.mdx$/, ""));
    }
  });
  return results;
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string | string[]) {
  // Support both string and array slugs
  const slugPath = Array.isArray(slug) ? slug.join('/') : slug;
  const filePath = path.join("content", slugPath.endsWith('.mdx') ? slugPath : `${slugPath}.mdx`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug: Array.isArray(slug) ? slug : slug.split("/")
  };
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFilesRecursive(dir);
  return Promise.all(
    mdxFiles.map(async (relativePath) => {
      let slugArr = relativePath.split(path.sep);
      let { metadata, source } = await getPost(slugArr);
      return {
        metadata,
        slug: slugArr,
        source,
      };
    })
  );
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}

export type BlogTreeNode = {
  name: string;
  path: string[];
  type: 'folder' | 'post';
  children?: BlogTreeNode[];
  metadata?: Metadata;
};

function buildBlogTree(dir: string, baseDir: string = dir): BlogTreeNode[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const nodes: BlogTreeNode[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPathArr = path.relative(baseDir, fullPath).split(path.sep);
    if (entry.isDirectory()) {
      nodes.push({
        name: entry.name,
        path: relPathArr,
        type: 'folder',
        children: buildBlogTree(fullPath, baseDir),
      });
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      // Read metadata for the post
      const source = fs.readFileSync(fullPath, 'utf-8');
      const { data: metadata } = matter(source);
      nodes.push({
        name: entry.name.replace(/\.mdx$/, ''),
        path: relPathArr.map(p => p.replace(/\.mdx$/, '')),
        type: 'post',
        metadata: metadata as Metadata,
      });
    }
  }
  // Sort folders first, then posts
  nodes.sort((a, b) => {
    if (a.type === b.type) return 0;
    return a.type === 'folder' ? -1 : 1;
  });
  return nodes;
}

export function getBlogTree() {
  return buildBlogTree(path.join(process.cwd(), 'content'));
}
