export type Topic = {
  id: string
  label: string
  title: string
  paragraphs: string[]
  keywords: string[]
}

export type TopicCategory = {
  id: string
  label: string
  topics: Topic[]
}

export const topicCategories: TopicCategory[] = [
  {
    id: "readme",
    label: "README",
    topics: [
      {
        id: "readme",
        label: "README",
        title: "PC HARDWARE GLOSSARY",
        paragraphs: [
          "An interactive knowledge base explaining CPUs, GPUs, RAM, motherboards, and other PC hardware concepts.",
          "Use the sidebar to browse topics and the search bar to instantly jump to any glossary entry.",
        ],
        keywords: ["overview", "documentation", "glossary"],
      },
    ],
  },
  {
    id: "cpus",
    label: "CPUs",
    topics: [
      {
        id: "cpu-core",
        label: "CPU Core",
        title: "CPU Core",
        paragraphs: [
          "A core is an independent processing unit inside a CPU. More cores improve parallel workloads such as compiling, rendering, and multitasking.",
        ],
        keywords: ["multi-core", "threads", "clock", "cache"],
      },
      {
        id: "cpu-cache",
        label: "CPU Cache",
        title: "CPU Cache",
        paragraphs: [
          "CPU cache is very fast on-chip memory that reduces access latency for frequently used data. Larger and smarter cache designs improve real-world responsiveness.",
        ],
        keywords: ["l1/l2/l3", "latency", "hit rate", "bandwidth"],
      },
    ],
  },
  {
    id: "gpus",
    label: "GPUs",
    topics: [
      {
        id: "gpu-core",
        label: "GPU Core",
        title: "GPU Core",
        paragraphs: [
          "GPU cores execute massively parallel graphics and compute workloads. Higher core counts and frequencies usually increase throughput for rendering and AI tasks.",
        ],
        keywords: ["shader", "cuda", "stream processors", "boost clock"],
      },
      {
        id: "tensor-core",
        label: "Tensor Core",
        title: "Tensor Core",
        paragraphs: [
          "Tensor cores are specialized units for matrix operations, accelerating deep learning and AI inference workloads such as upscaling and frame generation.",
        ],
        keywords: ["ai", "matrix math", "inference", "mixed precision"],
      },
    ],
  },
  {
    id: "ram",
    label: "RAM",
    topics: [
      {
        id: "ddr-memory",
        label: "DDR Memory",
        title: "DDR Memory",
        paragraphs: [
          "DDR memory temporarily stores active application data. Frequency, timings, and channel configuration influence bandwidth and system responsiveness.",
        ],
        keywords: ["ddr4", "ddr5", "timings", "dual channel"],
      },
    ],
  },
  {
    id: "motherboards",
    label: "Motherboards",
    topics: [
      {
        id: "chipset",
        label: "Chipset",
        title: "Motherboard Chipset",
        paragraphs: [
          "The chipset controls platform features like PCIe lanes, USB ports, and storage options. It determines expansion capability and overclocking support.",
        ],
        keywords: ["pcie lanes", "i/o", "platform", "socket"],
      },
    ],
  },
  {
    id: "storage",
    label: "Storage",
    topics: [
      {
        id: "nvme-ssd",
        label: "NVMe SSD",
        title: "NVMe SSD",
        paragraphs: [
          "NVMe drives use PCIe to deliver high throughput and low latency compared to SATA SSDs, improving boot, loading, and large file operations.",
        ],
        keywords: ["pcie", "throughput", "iops", "latency"],
      },
    ],
  },
  {
    id: "cooling",
    label: "Cooling",
    topics: [
      {
        id: "thermal-management",
        label: "Thermal Management",
        title: "Thermal Management",
        paragraphs: [
          "Cooling solutions remove heat from components to prevent thermal throttling. Balanced airflow and fan curves sustain higher boost clocks.",
        ],
        keywords: ["airflow", "aio", "heatsink", "fan curve"],
      },
    ],
  },
  {
    id: "power-supplies",
    label: "Power Supplies",
    topics: [
      {
        id: "psu-efficiency",
        label: "PSU Efficiency",
        title: "PSU Efficiency",
        paragraphs: [
          "An efficient PSU reduces wasted energy and heat. Stable voltage delivery with enough headroom improves reliability during transient spikes.",
        ],
        keywords: ["80 plus", "wattage", "transient spikes", "modular"],
      },
    ],
  },
  {
    id: "networking",
    label: "Networking",
    topics: [
      {
        id: "network-latency",
        label: "Network Latency",
        title: "Network Latency",
        paragraphs: [
          "Latency is the delay between sending and receiving packets. Lower latency improves responsiveness in gaming, remote work, and real-time communication.",
        ],
        keywords: ["ping", "jitter", "ethernet", "wi-fi 7"],
      },
    ],
  },
]

export const defaultTopicId = "readme"

export const topicsById = Object.fromEntries(
  topicCategories.flatMap((category) => category.topics.map((topic) => [topic.id, topic]))
) as Record<string, Topic>
