export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 py-32 text-center">
        <p className="mb-4 text-sm text-muted-foreground">Frontend Hackathon Starter</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Next.js + Tailwind + shadcn/ui
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Project is ready for MonoLabUI copy/paste components.
        </p>
      </section>
    </main>
  );
}
