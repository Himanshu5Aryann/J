import { Container, Button } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-surface-50 pt-24">
      <Container className="text-center">
        <span className="font-display text-6xl font-bold text-ink-950/10">404</span>
        <h1 className="mt-4 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
          This page isn't where it should be.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink-600">
          The page you're looking for may have moved or no longer exists. Let's get you back on track.
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/">Return Home</Button>
        </div>
      </Container>
    </section>
  );
}
