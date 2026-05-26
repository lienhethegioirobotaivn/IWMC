"use client";
import { WP_URL } from "@/lib/env";

import { useEffect } from "react";

export function PostViewTracker({ postId }: { postId: number }) {
  useEffect(() => {
    try {
      fetch(`${WP_URL}/wp-json/post-views-counter/view-post/${postId}`, {
        method: "POST",
      });
    } catch (error) {
      console.error("view update error:", error);
    }
  }, [postId]);

  return null;
}
