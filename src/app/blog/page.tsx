import BlurFade from "@/components/magicui/blur-fade";
import { getBlogTree, BlogTreeNode } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

function renderBlogTree(nodes: BlogTreeNode[], level = 0) {
  return (
    <ul style={{ marginLeft: level * 20 }}>
      {nodes.map((node) => {
        if (node.type === "folder") {
          return (
            <li key={node.path.join("/")}>
              <strong>{node.name}</strong>
              {node.children && renderBlogTree(node.children, level + 1)}
            </li>
          );
        } else {
          return (
            <li
              key={node.path.join("/")}
              style={{ marginTop: 4, marginBottom: 4 }}
            >
              <Link href={`/blog/${node.path.join("/")}`}>
                {node.metadata?.title || node.name}
                <span
                  style={{ marginLeft: 8, color: "#888", fontSize: "0.8em" }}
                >
                  {node.metadata?.publishedAt
                    ? `(${node.metadata.publishedAt})`
                    : ""}
                </span>
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
}

export default async function BlogPage() {
  const tree = await getBlogTree();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      {renderBlogTree(tree)}
    </section>
  );
}
