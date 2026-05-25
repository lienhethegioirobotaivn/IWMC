import { Skeleton } from "@/components/ui";

export function SidebarSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="h-22.5 w-full rounded-xl bg-slate-900" />
      ))}
    </div>
  );
}
