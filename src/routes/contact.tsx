import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";
import { PaperCard, MarginNote, SectionTitle } from "@/components/paper";
import { CoffeeStain, StarDoodle } from "@/components/doodles";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ravat Prince" },
      {
        name: "description",
        content: "Say hello to Ravat Prince — available for freelance games and frontend work.",
      },
      { property: "og:title", content: "Contact — Ravat Prince" },
      {
        property: "og:description",
        content: "Say hello to Ravat Prince — available for freelance games and frontend work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-20 pt-10 text-center md:pt-16">
      <CoffeeStain className="mx-auto mb-4 text-primary" />
      <SectionTitle align="center">Let's put something on paper</SectionTitle>
      <p className="mx-auto mt-6 max-w-md text-muted-foreground">
        For frontend or game development inquiries, add your contact details below.
      </p>

      <div className="mt-8">
        <span className="sketch-border inline-flex items-center justify-center bg-primary px-8 py-4 font-display text-2xl uppercase tracking-widest text-primary-foreground">
          {profile.email}
        </span>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <span className="sketch-chip px-4 py-1.5 font-display text-sm uppercase tracking-widest text-primary">
          [add social profile links]
        </span>
      </div>

      <PaperCard variant="alt" tape tilt={-1.5} className="mx-auto mt-14 max-w-sm">
        <MarginNote className="text-center text-2xl">
          availability: [add details]
        </MarginNote>
        <StarDoodle className="mx-auto mt-2 text-primary" />
      </PaperCard>
    </main>
  );
}
