import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";

export default function Facilities() {
  return (
    <main className="relative z-10 pb-16 text-white">
      <PageHero
        eyebrow="Facilities"
        title="Production Infrastructure Designed For Controlled Output."
        description="Our facility layout supports investment casting, machining, finishing, and inspection workflows with attention to throughput and consistency."
      />

      <PageSection title="Plant Capability">
        <p>
          The production setup is planned to support smooth material flow,
          monitored process stages, and clear quality checkpoints. This helps
          reduce variation and keeps delivery performance aligned with customer
          expectations.
        </p>
      </PageSection>
    </main>
  );
}
