import { Skeleton } from "@/components/ui";

export function NewsGridSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-125 w-full rounded-xl bg-slate-900" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-62.5 w-full rounded-xl bg-slate-900" />
        ))}
      </div>
    </div>
  );
}
