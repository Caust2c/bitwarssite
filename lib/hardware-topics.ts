export type Topic = {
  id: string
  label: string
  title: string
  paragraphs: string[]
  keywords: string[]
  images?: { src: string; alt: string; caption?: string }[]
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
        id: "cpu-overview",
        label: "1.1 Overview",
        title: "CPU 1.1 Overview",
        paragraphs: [
          "The Central Processing Unit (CPU) is the primary processor of a computer and is often referred to as the brain of the system.",
          "It executes instructions from software, performs calculations, and coordinates the actions of all other hardware components.",
          "Every operation in a computer—opening applications, running operating systems, compiling code, or playing games—ultimately relies on the CPU to process instructions.",
          "Modern CPUs contain multiple cores, advanced instruction pipelines, and cache memory to efficiently handle millions to billions of operations per second.",
        ],
        keywords: ["cpu", "overview", "processor", "brain", "instructions"],
        images: [
          {
            src: "/assets/Pasted image.png",
            alt: "CPU Architecture Diagram",
            caption: "Figure 1: Basic CPU architecture showing cores and cache hierarchy",
          },
        ],
      },
      {
        id: "cpu-purpose",
        label: "1.2 Purpose",
        title: "CPU 1.2 Purpose",
        paragraphs: [
          "The CPU’s primary role is to interpret and execute program instructions.",
          "Its responsibilities include: performing mathematical calculations, executing program logic, managing data flow between RAM and storage, coordinating hardware components, and handling system interrupts and background tasks.",
          "Simple analogy: CPU = Brain, RAM = Short-term memory, Storage = Long-term memory.",
          "Without the CPU, the computer cannot perform computations or run software.",
        ],
        keywords: ["purpose", "logic", "calculations", "ram", "storage"],
      },
      {
        id: "cpu-architecture",
        label: "1.3 Architecture",
        title: "CPU 1.3 Architecture",
        paragraphs: [
          "A CPU is composed of several internal components that work together to process instructions efficiently.",
          "Core: an independent processing unit capable of executing instructions. Modern CPUs often have 4–32+ cores.",
          "Thread: threads allow a CPU core to handle multiple tasks simultaneously using techniques like Simultaneous Multithreading (SMT). Intel uses Hyper-Threading; AMD uses SMT.",
          "Cache: extremely fast memory located inside the processor. L1 is smallest and fastest, L2 is larger but slightly slower, and L3 is shared across cores.",
          "Clock speed: measured in GHz and represents how many cycles a CPU performs per second (example: 3.5 GHz = 3.5 billion cycles per second).",
          "Instruction pipeline: modern CPUs process instructions in stages—Fetch, Decode, Execute, Memory access, and Write-back.",
        ],
        keywords: ["architecture", "core", "thread", "cache", "clock speed", "pipeline"],
      },
      {
        id: "cpu-specifications",
        label: "1.4 Specifications",
        title: "CPU 1.4 Specifications",
        paragraphs: [
          "Key specifications determine CPU performance.",
          "Specification meanings: Core Count (number of processing units), Thread Count (parallel tasks CPU can manage), Clock Speed (processing frequency), Cache Size (internal fast memory), TDP (Thermal Design Power / heat output), Instruction Set (supported CPU instructions).",
          "Example modern CPU specs: Ryzen 7 7800X3D — 8 cores, 16 threads, 4.2 GHz base clock. Intel i7-13700K — 16 cores, 24 threads, 3.4 GHz base clock.",
        ],
        keywords: ["specifications", "core count", "thread count", "tdp", "instruction set"],
      },
      {
        id: "cpu-performance",
        label: "1.5 Performance",
        title: "CPU 1.5 Performance",
        paragraphs: [
          "CPU performance depends on several factors.",
          "Single-core performance is important for gaming, older software, and real-time applications.",
          "Multi-core performance is important for video editing, rendering, scientific computing, and virtualization.",
          "IPC (Instructions Per Cycle) measures how many instructions a CPU can execute per clock cycle; higher IPC can improve performance more than higher clock speeds.",
        ],
        keywords: ["performance", "single-core", "multi-core", "ipc", "virtualization"],
      },
      {
        id: "cpu-use-cases",
        label: "1.6 Use Cases",
        title: "CPU 1.6 Use Cases",
        paragraphs: [
          "Different workloads require different CPU characteristics.",
          "Gaming: high single-core performance.",
          "Programming: balanced multi-core CPU.",
          "Video editing: high core count.",
          "3D rendering: very high multi-core performance.",
          "Servers: many cores plus reliability.",
        ],
        keywords: ["use cases", "gaming", "programming", "video editing", "servers"],
      },
      {
        id: "cpu-compatibility",
        label: "1.7 Compatibility",
        title: "CPU 1.7 Compatibility",
        paragraphs: [
          "CPUs must be compatible with several system components.",
          "Motherboard socket: different CPUs require different sockets (examples: Intel LGA1700, AMD AM5).",
          "Chipset: motherboard chipsets determine supported features and CPU generations.",
          "RAM compatibility: CPUs support specific memory types such as DDR4 or DDR5.",
          "Cooling requirements: high-performance CPUs often require air coolers, AIO liquid coolers, or custom liquid cooling.",
        ],
        keywords: ["compatibility", "socket", "chipset", "ddr4", "ddr5", "cooling"],
      },
      {
        id: "cpu-evolution",
        label: "1.8 Evolution",
        title: "CPU 1.8 Evolution",
        paragraphs: [
          "CPU technology has evolved dramatically.",
          "Early CPUs (1970s–1980s): single-core processors such as Intel 4004.",
          "Multi-core era (2000s onward): processors began including multiple cores to improve performance.",
          "Modern hybrid CPUs: some CPUs now combine performance cores and efficiency cores (example: Intel Alder Lake architecture).",
        ],
        keywords: ["evolution", "intel 4004", "multi-core era", "hybrid", "alder lake"],
      },
      {
        id: "cpu-comparisons",
        label: "1.9 Comparisons",
        title: "CPU 1.9 Comparisons",
        paragraphs: [
          "Intel vs AMD comparison: gaming (Intel traditionally strong, AMD competitive), multicore workloads (both strong, AMD often stronger), power efficiency (varies by generation).",
          "Desktop vs laptop CPUs: desktop CPUs typically offer higher power and performance, while laptop CPUs prioritize lower power and portability.",
        ],
        keywords: ["comparisons", "intel vs amd", "desktop", "laptop", "power efficiency"],
      },
      {
        id: "cpu-optimization",
        label: "1.10 Optimization",
        title: "CPU 1.10 Optimization",
        paragraphs: [
          "Best practices when choosing and tuning a CPU.",
          "Gaming: focus on high clock speeds and strong single-thread performance.",
          "Content creation: prioritize more cores and larger cache.",
          "Everyday computing: a mid-range CPU is usually sufficient.",
          "Also ensure adequate cooling, updated BIOS, and latest drivers.",
        ],
        keywords: ["optimization", "bios", "drivers", "single-thread", "content creation"],
      },
      {
        id: "cpu-limitations",
        label: "1.11 Limitations",
        title: "CPU 1.11 Limitations",
        paragraphs: [
          "Even powerful CPUs can face limitations.",
          "Bottlenecks: a CPU bottleneck occurs when the processor cannot keep up with other hardware like GPUs.",
          "Thermal throttling: if the CPU gets too hot, it reduces speed to prevent damage.",
          "Power consumption: high-performance CPUs can consume 100–250W or more.",
        ],
        keywords: ["limitations", "bottleneck", "thermal throttling", "power consumption"],
      },
      {
        id: "cpu-troubleshooting",
        label: "1.12 Troubleshooting",
        title: "CPU 1.12 Troubleshooting",
        paragraphs: [
          "PC won’t boot: possible causes include incompatible CPU or outdated motherboard BIOS.",
          "High temperatures: check thermal paste, cooler installation, and airflow.",
          "Low performance: possible issues include heavy background tasks, thermal throttling, or outdated drivers.",
        ],
        keywords: ["troubleshooting", "boot", "bios", "thermal paste", "low performance"],
      },
      {
        id: "cpu-fun-facts",
        label: "1.13 Fun Facts",
        title: "CPU 1.13 Fun Facts",
        paragraphs: [
          "The Intel 4004 (1971) was the first commercially available microprocessor.",
          "Modern CPUs contain billions of transistors.",
          "CPUs run at billions of operations per second but still rely on nanosecond timing precision.",
          "GPUs often outperform CPUs in parallel workloads because they contain thousands of cores.",
        ],
        keywords: ["fun facts", "intel 4004", "transistors", "timing", "parallel workloads"],
      },
      {
        id: "cpu-summary",
        label: "1.14 Summary",
        title: "CPU 1.14 Summary",
        paragraphs: [
          "CPU (Central Processing Unit): executes instructions and processes data, coordinates all computer hardware, and drives system responsiveness.",
          "Performance depends on cores, clock speed, cache, and IPC.",
          "CPUs are used in everything from laptops to supercomputers.",
          "A powerful CPU ensures fast application performance, smooth multitasking, and efficient system operation.",
        ],
        keywords: ["summary", "central processing unit", "multitasking", "system operation"],
      },
    ],
  },
  {
    id: "gpus",
    label: "GPUs",
    topics: [
      {
        id: "gpu-overview",
        label: "2.1 Overview",
        title: "GPU 2.1 Overview",
        paragraphs: [
          "A Graphics Processing Unit (GPU) is a specialized processor designed to handle highly parallel workloads, especially graphics rendering and large-scale mathematical computations.",
          "Originally built for 3D graphics, modern GPUs are widely used in AI, machine learning, scientific simulations, video rendering, cryptocurrency mining, and data processing.",
          "Unlike CPUs that focus on sequential processing, GPUs are optimized for massive parallelism with thousands of smaller cores processing data simultaneously.",
          "This architecture makes GPUs highly efficient for matrix operations and vector calculations.",
        ],
        keywords: ["gpu", "overview", "parallelism", "graphics", "ai"],
      },
      {
        id: "gpu-purpose",
        label: "2.2 Purpose",
        title: "GPU 2.2 Purpose",
        paragraphs: [
          "The GPU’s primary role is to accelerate graphical and parallel computations.",
          "Responsibilities include rendering 2D/3D graphics, processing large numbers of pixels, running AI training workloads, accelerating video encoding/decoding, and executing parallel mathematical operations.",
          "In modern systems, GPUs work alongside CPUs: CPU = general-purpose processor, GPU = parallel accelerator, RAM = active working memory, Storage = long-term data.",
        ],
        keywords: ["purpose", "rendering", "encoding", "decoding", "parallel computations"],
      },
      {
        id: "gpu-architecture",
        label: "2.3 Architecture",
        title: "GPU 2.3 Architecture",
        paragraphs: [
          "A GPU includes specialized components designed for parallel workloads.",
          "Streaming Multiprocessors (SMs) / Compute Units: GPU clusters containing many execution cores.",
          "CUDA / Stream Cores: core processing units for shader and compute operations; modern GPUs include thousands.",
          "Example core counts: RTX 4090 = 16384 CUDA cores, RTX 3080 = 8704 CUDA cores.",
          "VRAM: dedicated high-speed memory for textures, frame buffers, rendering data, and compute workloads. Common types include GDDR6, GDDR6X, and HBM.",
          "Tensor cores: specialized AI acceleration units for neural network math.",
          "Ray tracing cores: dedicated hardware for realistic lighting and reflections.",
        ],
        keywords: ["architecture", "sm", "cuda cores", "vram", "tensor cores", "ray tracing"],
      },
      {
        id: "gpu-specifications",
        label: "2.4 Specifications",
        title: "GPU 2.4 Specifications",
        paragraphs: [
          "GPU performance is determined by core count, VRAM size, memory bandwidth, boost clock, TDP, and ray tracing units.",
          "Example specs: RTX 4090 — 16384 cores, 24GB VRAM, ~2.5 GHz boost clock. RX 7900 XTX — 6144 cores, 24GB VRAM, ~2.3 GHz boost clock.",
        ],
        keywords: ["specifications", "vram", "bandwidth", "boost clock", "tdp"],
      },
      {
        id: "gpu-performance",
        label: "2.5 Performance",
        title: "GPU 2.5 Performance",
        paragraphs: [
          "GPU performance depends on core count, memory bandwidth, clock speed, and architecture efficiency.",
          "More cores enable more parallel operations for graphics and compute workloads.",
          "High memory bandwidth improves large data transfers.",
          "Architecture matters significantly in real-world workloads.",
          "Example architectures: NVIDIA Ada Lovelace, AMD RDNA3, Intel Xe.",
        ],
        keywords: ["performance", "core count", "bandwidth", "clock speed", "ada", "rdna3", "xe"],
      },
      {
        id: "gpu-use-cases",
        label: "2.6 Use Cases",
        title: "GPU 2.6 Use Cases",
        paragraphs: [
          "GPUs are essential for gaming, video editing, AI and machine learning, 3D rendering, and scientific computing.",
          "Application mapping: gaming (real-time rendering), video editing (effects and encoding), AI/ML (neural network training), 3D rendering (scene rendering), scientific computing (parallel simulations).",
        ],
        keywords: ["use cases", "gaming", "video editing", "machine learning", "3d rendering", "scientific computing"],
      },
      {
        id: "gpu-compatibility",
        label: "2.7 Compatibility",
        title: "GPU 2.7 Compatibility",
        paragraphs: [
          "GPU compatibility depends on PCI Express interface, power requirements, and physical clearance.",
          "PCIe bandwidth examples: PCIe 3.0 ~32 GB/s, PCIe 4.0 ~64 GB/s, PCIe 5.0 ~128 GB/s.",
          "Power examples: RTX 4090 ~450W, RTX 3060 ~170W.",
          "Physical size matters: triple-slot GPUs may exceed 320mm in length.",
        ],
        keywords: ["compatibility", "pcie", "power", "clearance", "wattage"],
      },
      {
        id: "gpu-evolution",
        label: "2.8 Evolution",
        title: "GPU 2.8 Evolution",
        paragraphs: [
          "GPU technology has evolved from fixed-function graphics hardware to highly programmable compute accelerators.",
          "Fixed-function GPUs (1990s): early basic graphics acceleration.",
          "Programmable shader era (2000s): developers gained more control over graphics pipelines.",
          "GPGPU era (2010s): GPUs began handling general-purpose compute workloads.",
          "Modern era: AI acceleration with specialized hardware blocks.",
        ],
        keywords: ["evolution", "fixed-function", "programmable shaders", "gpgpu", "ai acceleration"],
      },
      {
        id: "gpu-comparisons",
        label: "2.9 Comparisons",
        title: "GPU 2.9 Comparisons",
        paragraphs: [
          "Integrated vs dedicated GPUs: integrated GPUs are built into CPUs with lower power and lower graphics capability; dedicated GPUs are separate hardware with much higher performance.",
          "NVIDIA vs AMD: NVIDIA is often strong in ray tracing and tensor-core AI features, while AMD is often competitive on price/performance.",
        ],
        keywords: ["comparisons", "integrated", "dedicated", "nvidia", "amd", "price performance"],
      },
      {
        id: "gpu-optimization",
        label: "2.10 Optimization",
        title: "GPU 2.10 Optimization",
        paragraphs: [
          "To maximize GPU performance: keep drivers updated, maintain proper cooling, tune graphics settings, and monitor VRAM usage.",
          "Running out of VRAM can cause major performance drops.",
        ],
        keywords: ["optimization", "drivers", "cooling", "graphics settings", "vram"],
      },
      {
        id: "gpu-limitations",
        label: "2.11 Limitations",
        title: "GPU 2.11 Limitations",
        paragraphs: [
          "Despite high performance, GPUs have limits in power consumption, heat output, cost, and software optimization.",
          "High-end GPUs can consume 300–450W and require strong cooling.",
          "Not all applications are optimized for GPU acceleration.",
        ],
        keywords: ["limitations", "power consumption", "heat", "cost", "software optimization"],
      },
      {
        id: "gpu-troubleshooting",
        label: "2.12 Troubleshooting",
        title: "GPU 2.12 Troubleshooting",
        paragraphs: [
          "GPU not detected: possible causes include improper PCIe installation, missing drivers, or BIOS settings.",
          "Screen artifacts: commonly caused by overheating, VRAM issues, or unstable overclocks.",
          "Driver crashes: often resolved by reinstalling drivers or updating GPU firmware.",
        ],
        keywords: ["troubleshooting", "not detected", "artifacts", "driver crashes", "firmware"],
      },
      {
        id: "gpu-fun-facts",
        label: "2.13 Fun Facts",
        title: "GPU 2.13 Fun Facts",
        paragraphs: [
          "The first GPU was the NVIDIA GeForce 256 (1999).",
          "Modern GPUs contain tens of billions of transistors.",
          "GPUs are heavily used in AI training and supercomputers.",
          "Some of the world’s fastest supercomputers rely on GPU acceleration.",
        ],
        keywords: ["fun facts", "geforce 256", "transistors", "supercomputers", "ai training"],
      },
      {
        id: "gpu-summary",
        label: "2.14 Summary",
        title: "GPU 2.14 Summary",
        paragraphs: [
          "GPU (Graphics Processing Unit): specialized processor for graphics and parallel workloads.",
          "GPUs contain thousands of small cores optimized for parallel computation.",
          "They are essential for gaming, AI, rendering, and scientific computing.",
          "Performance depends on core count, memory bandwidth, and architecture.",
          "Modern GPUs are among the most powerful consumer computing devices, enabling immersive gaming and cutting-edge AI.",
        ],
        keywords: ["summary", "graphics processing unit", "parallel workloads", "core count", "architecture"],
      },
    ],
  },
]

export const defaultTopicId = "readme"

export const topicsById = Object.fromEntries(
  topicCategories.flatMap((category) => category.topics.map((topic) => [topic.id, topic]))
) as Record<string, Topic>
