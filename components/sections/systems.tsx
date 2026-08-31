import { systems } from "@/lib/content";
import { DiagramPanel, FlowChain, FlowLoop } from "@/components/ui/flow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function Systems() {
  return (
    <Section
      id="systems"
      index="05"
      eyebrow="Architecture"
      title={systems.title}
      intro={systems.intro}
      className="bg-bg-subtle/50"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {systems.columns.map((column, i) => (
          <Reveal key={column.label} delay={i * 90}>
            <DiagramPanel title={column.label}>
              <FlowChain
                nodes={column.nodes.map((node) => ({ label: node }))}
                label={`${column.label} architecture`}
              />
            </DiagramPanel>
          </Reveal>
        ))}

        <Reveal delay={180} className="md:col-span-2 lg:col-span-1">
          <DiagramPanel
            title={systems.loop.label}
            caption="The integration layer sits in the middle and owns validation, mapping, and failure handling in both directions."
          >
            <FlowLoop nodes={systems.loop.nodes} label="Healthcare synchronization loop" />
          </DiagramPanel>
        </Reveal>
      </div>
    </Section>
  );
}
