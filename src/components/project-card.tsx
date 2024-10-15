import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface ProjectLink {
  title: string;
  href: string;
  type?: string;
  icon?: JSX.Element; // Use JSX.Element to match React’s element type
}

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  tags?: string[];
  dates?: string;
  location?: string;
  image?: string;
  video?: string;
  canvaEmbed?: string;
  // links?: { title: string; href: string }[];
  // links?: { title: string; href: string; type?: string; icon?: JSX.Element }[];
  links?: ProjectLink[];
  type?: string;
}

export function ProjectCard({
  title,
  description,
  href,
  tags,
  dates,
  location,
  image,
  video,
  canvaEmbed,
  links,
}: ProjectCardProps) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer")}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
        {canvaEmbed && (
          <iframe
            src={canvaEmbed}
            width="100%"
            height="200"
            frameBorder="0"
            allowFullScreen
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          {/* similar to above line time add a location and display only if location is not empty */}
          {location && <div className="font-sans text-xs">{location}</div>}
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {href?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.title}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
