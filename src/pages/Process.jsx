import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";

export default function Process() {
  return (
    <main className="relative z-10 pb-16 text-white">
      <PageHero
        eyebrow="Process"
        title="A Controlled Workflow From Wax Pattern To Finished Component."
        description="Every stage is structured to keep dimensional accuracy, metallurgy, and surface quality aligned with engineering intent."
      />

      <PageSection title="How We Work">
        <p>
          Our workflow covers pattern development, shell preparation, pouring,
          fettling, machining support, finishing, and inspection. The goal is
          to maintain repeatability across batches while protecting part
          quality at every checkpoint.
        </p>
      </PageSection>
    </main>
  );
}
