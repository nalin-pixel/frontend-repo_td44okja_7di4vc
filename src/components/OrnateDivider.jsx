export default function OrnateDivider() {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
          <div className="absolute grid place-items-center">
            <div className="h-10 w-10 rounded-full bg-emerald-900/60 border border-amber-300/30 backdrop-blur">
              <div className="relative h-full w-full">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-200">✶</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
