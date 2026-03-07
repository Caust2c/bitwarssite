import { HardwareSection } from "@/components/docs/hardware-section"
import { TerminalCard } from "@/components/ui/terminal-card"

const sections = [
  {
    id: "cpus",
    title: "CPUs",
    definition:
      "The Central Processing Unit executes instructions and handles general-purpose tasks. Core count, clock speed, and cache directly influence performance in games, productivity, and multitasking.",
    keywords: ["cores", "threads", "clock speed", "cache"],
  },
  {
    id: "gpus",
    title: "GPUs",
    definition:
      "The Graphics Processing Unit accelerates rendering and parallel workloads like AI inference. VRAM capacity, compute cores, and memory bandwidth define graphics and compute capabilities.",
    keywords: ["vram", "cuda/stream cores", "ray tracing", "bandwidth"],
  },
  {
    id: "ram",
    title: "RAM",
    definition:
      "Random Access Memory temporarily stores active data. Faster memory and lower latency improve responsiveness, while capacity determines how many heavy applications run smoothly together.",
    keywords: ["ddr4/ddr5", "latency", "capacity", "dual channel"],
  },
  {
    id: "motherboards",
    title: "Motherboards",
    definition:
      "The motherboard connects all components and defines expansion options. Chipset features, VRM quality, and socket compatibility impact stability and upgrade paths.",
    keywords: ["chipset", "socket", "pcie", "vrm"],
  },
  {
    id: "storage",
    title: "Storage",
    definition:
      "Storage persists data long-term. NVMe SSDs deliver significantly lower latency and higher throughput than SATA SSDs and hard drives, improving boot and load times.",
    keywords: ["nvme", "sata", "iops", "throughput"],
  },
  {
    id: "cooling",
    title: "Cooling",
    definition:
      "Cooling systems dissipate heat from CPU and GPU. Effective thermal design prevents throttling and maintains sustained performance under prolonged load.",
    keywords: ["airflow", "aio", "thermals", "fan curve"],
  },
  {
    id: "power-supplies",
    title: "Power Supplies",
    definition:
      "A PSU converts AC to stable DC power for your system. Proper wattage headroom, efficiency ratings, and transient handling are essential for reliability.",
    keywords: ["80 plus", "modular", "wattage", "transients"],
  },
  {
    id: "networking",
    title: "Networking",
    definition:
      "Networking hardware enables data communication. Bandwidth, latency, and protocol support (Wi-Fi 6/7, 2.5GbE) affect online gaming, streaming, and transfers.",
    keywords: ["latency", "ethernet", "wi-fi", "throughput"],
  },
]

export function GlossaryPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
          PC HARDWARE GLOSSARY
        </h1>
        <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
          An interactive knowledge base explaining CPUs, GPUs, RAM, motherboards,
          and other PC hardware concepts.
        </p>
      </section>

      <TerminalCard className="border-accent/40">
        <p className="text-sm text-muted-foreground">
          Quick note: This starter is designed for rapid copy/paste of MonoLabUI
          components and easy theme customization using CSS variables.
        </p>
      </TerminalCard>

      <div className="space-y-8">
        {sections.map((section) => (
          <HardwareSection key={section.id} {...section} />
        ))}
      </div>
    </div>
  )
}
