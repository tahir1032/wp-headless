"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkCardProps {
  title: string;
  excerpt?: string;
  slug: string;
  featuredImage?: string;
  categories: string[];
  date: string;
}

export default function WorkCard({
  title,
  excerpt,
  slug,
  featuredImage,
  categories,
  date,
}: WorkCardProps) {
  return (
    <Link
      href={`/work/${slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
    >
      {featuredImage ? (
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={featuredImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex aspect-video items-center justify-center bg-muted">
          <span className="text-sm text-muted-foreground">No image</span>
        </div>
      )}
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 2).map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-medium text-primary"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>
        {excerpt && (
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {excerpt}
          </p>
        )}
        <div className="mt-4 flex items-center text-sm font-medium text-primary">
          View Case Study
          <ExternalLink className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
