import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";

export default function Quality() {
  return (
    <main className="relative z-10 pb-16 text-white">
      <PageHero
        eyebrow="Quality"
        title="Inspection Discipline That Supports Reliable Production."
        description="Quality at BSPC is built into the process through verification, consistency checks, and close attention to every finished part."
      />

      <PageSection title="Quality Focus">
        <p>
          We emphasize process control, dimensional verification, and final
          inspection to help ensure dependable performance in real industrial
          operating conditions. That quality mindset supports both prototype
          and ongoing production work.
        </p>
      </PageSection>
    </main>
  );
}
