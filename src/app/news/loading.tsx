import { Skeleton } from "@/components/ui";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#050810]">
      <Skeleton className="h-100 w-full rounded-none bg-slate-900" />

      <div className="container mx-auto px-4 py-10 md:px-8">
        <Skeleton className="mb-8 h-12 w-full rounded-xl bg-slate-900" />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-7">
          <div className="space-y-6 lg:col-span-5">
            <Skeleton className="h-125 w-full rounded-xl bg-slate-900" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-62.5 w-full rounded-xl bg-slate-900"
                />
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton
                key={i}
                className="h-22.5 w-full rounded-xl bg-slate-900"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
