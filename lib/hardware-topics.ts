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
        title: "TECH DECK",
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
        title: "1.1 Overview",
        paragraphs: [
          "The Central Processing Unit (CPU) is the primary processor of a computer and is often referred to as the brain of the system.",
          "It executes instructions from software, performs calculations, and coordinates the actions of all other hardware components.",
          "Every operation in a computer—opening applications, running operating systems, compiling code, or playing games—ultimately relies on the CPU to process instructions.",
          "Modern CPUs contain multiple cores, advanced instruction pipelines, and cache memory to efficiently handle millions to billions of operations per second.",
        ],
        keywords: ["cpu", "overview", "processor", "brain", "instructions"],
        images: [
          {
            src: "/assets/Pasted image (1).png",
            alt: "CPU Architecture Diagram",
            caption: "Figure 1: Basic CPU architecture showing cores and cache hierarchy",
          },
        ],
      },
      {
        id: "cpu-purpose",
        label: "1.2 Purpose",
        title: "1.2 Purpose",
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
        title: "1.3 Architecture",
        paragraphs: [
          "A CPU is composed of several internal components that work together to process instructions efficiently.",
          "Core: an independent processing unit capable of executing instructions. Modern CPUs often have 4–32+ cores.",
          "Thread: threads allow a CPU core to handle multiple tasks simultaneously using techniques like Simultaneous Multithreading (SMT). Intel uses Hyper-Threading; AMD uses SMT.",
          "Cache: extremely fast memory located inside the processor. L1 is smallest and fastest, L2 is larger but slightly slower, and L3 is shared across cores.",
          "Clock speed: measured in GHz and represents how many cycles a CPU performs per second (example: 3.5 GHz = 3.5 billion cycles per second).",
          "Instruction pipeline: modern CPUs process instructions in stages—Fetch, Decode, Execute, Memory access, and Write-back.",
        ],
        keywords: ["architecture", "core", "thread", "cache", "clock speed", "pipeline"],
        images: [
          {
            src: "/assets/Pasted image (2).png",
            alt: "CPU Architecture Diagram",
            caption: "Figure 2: CPU instruction cycle and pipeline stages",
          },
        ],
      },
      {
        id: "cpu-specifications",
        label: "1.4 Specifications",
        title: "1.4 Specifications",
        paragraphs: [
          "Key specifications determine CPU performance.",
          "Specification meanings: Core Count (number of processing units), Thread Count (parallel tasks CPU can manage), Clock Speed (processing frequency), Cache Size (internal fast memory), TDP (Thermal Design Power / heat output), Instruction Set (supported CPU instructions).",
          "Example modern CPU specs: Ryzen 7 7800X3D — 8 cores, 16 threads, 4.2 GHz base clock. Intel i7-13700K — 16 cores, 24 threads, 3.4 GHz base clock.",
        ],
        keywords: ["specifications", "core count", "thread count", "tdp", "instruction set"]
      },
      {
        id: "cpu-performance",
        label: "1.5 Performance",
        title: "1.5 Performance",
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
        title: "1.6 Use Cases",
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
        title: "1.7 Compatibility",
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
        title: "1.8 Evolution",
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
        title: "1.9 Comparisons",
        paragraphs: [
          "Intel vs AMD comparison: gaming (Intel traditionally strong, AMD competitive), multicore workloads (both strong, AMD often stronger), power efficiency (varies by generation).",
          "Desktop vs laptop CPUs: desktop CPUs typically offer higher power and performance, while laptop CPUs prioritize lower power and portability.",
        ],
        keywords: ["comparisons", "intel vs amd", "desktop", "laptop", "power efficiency"],
      },
      {
        id: "cpu-optimization",
        label: "1.10 Optimization",
        title: "1.10 Optimization",
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
        title: "1.11 Limitations",
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
        title: "1.12 Troubleshooting",
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
        title: "1.13 Fun Facts",
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
        title: "1.14 Summary",
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
        title: "2.1 Overview",
        paragraphs: [
          "A Graphics Processing Unit (GPU) is a specialized processor designed to handle highly parallel workloads, especially graphics rendering and large-scale mathematical computations.",
          "Originally built for 3D graphics, modern GPUs are widely used in AI, machine learning, scientific simulations, video rendering, cryptocurrency mining, and data processing.",
          "Unlike CPUs that focus on sequential processing, GPUs are optimized for massive parallelism with thousands of smaller cores processing data simultaneously.",
          "This architecture makes GPUs highly efficient for matrix operations and vector calculations.",
        ],
        keywords: ["gpu", "overview", "parallelism", "graphics", "ai"],
        images: [
          {
            src: "/assets/Pasted image (3).png",
            alt: "GPU Architecture Diagram",
            caption: "Figure 1: Basic GPU architecture showing streaming multiprocessors and memory hierarchy",
          },
        ],
      },
      {
        id: "gpu-purpose",
        label: "2.2 Purpose",
        title: "2.2 Purpose",
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
        title: "2.3 Architecture",
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
        images: [
          {
            src: "/assets/Pasted image (4).png",
            alt: "GPU Architecture Diagram",
            caption: "Figure 2: Basic GPU memory management and hierarchy",
          },
        ],
      },
      {
        id: "gpu-specifications",
        label: "2.4 Specifications",
        title: "2.4 Specifications",
        paragraphs: [
          "GPU performance is determined by core count, VRAM size, memory bandwidth, boost clock, TDP, and ray tracing units.",
          "Example specs: RTX 4090 — 16384 cores, 24GB VRAM, ~2.5 GHz boost clock. RX 7900 XTX — 6144 cores, 24GB VRAM, ~2.3 GHz boost clock.",
        ],
        keywords: ["specifications", "vram", "bandwidth", "boost clock", "tdp"]
      },
      {
        id: "gpu-performance",
        label: "2.5 Performance",
        title: "2.5 Performance",
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
        title: "2.6 Use Cases",
        paragraphs: [
          "GPUs are essential for gaming, video editing, AI and machine learning, 3D rendering, and scientific computing.",
          "Application mapping: gaming (real-time rendering), video editing (effects and encoding), AI/ML (neural network training), 3D rendering (scene rendering), scientific computing (parallel simulations).",
        ],
        keywords: ["use cases", "gaming", "video editing", "machine learning", "3d rendering", "scientific computing"],
      },
      {
        id: "gpu-compatibility",
        label: "2.7 Compatibility",
        title: "2.7 Compatibility",
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
        title: "2.8 Evolution",
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
        title: "2.9 Comparisons",
        paragraphs: [
          "Integrated vs dedicated GPUs: integrated GPUs are built into CPUs with lower power and lower graphics capability; dedicated GPUs are separate hardware with much higher performance.",
          "NVIDIA vs AMD: NVIDIA is often strong in ray tracing and tensor-core AI features, while AMD is often competitive on price/performance.",
        ],
        keywords: ["comparisons", "integrated", "dedicated", "nvidia", "amd", "price performance"],
      },
      {
        id: "gpu-optimization",
        label: "2.10 Optimization",
        title: "2.10 Optimization",
        paragraphs: [
          "To maximize GPU performance: keep drivers updated, maintain proper cooling, tune graphics settings, and monitor VRAM usage.",
          "Running out of VRAM can cause major performance drops.",
        ],
        keywords: ["optimization", "drivers", "cooling", "graphics settings", "vram"],
      },
      {
        id: "gpu-limitations",
        label: "2.11 Limitations",
        title: "2.11 Limitations",
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
        title: "2.12 Troubleshooting",
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
        title: "2.13 Fun Facts",
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
        title: "2.14 Summary",
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
  {
    id: "ram",
    label: "RAM",
    topics: [
      {
        id: "ram-overview",
        label: "3.1 Overview",
        title: "3.1 Overview",
        paragraphs: [
          "Random Access Memory (RAM) is high-speed temporary memory used to store data the CPU needs immediately while running applications and processes.",
          "Unlike SSDs and hard drives, RAM is volatile memory, so data is lost when power is turned off.",
          "RAM is essential for active workloads such as running applications and multitasking smoothly.",
        ],
        keywords: ["ram", "overview", "volatile", "temporary memory", "multitasking"],
        images: [
          {
            src: "/assets/Pasted image (5).png",
            alt: "RAM Modules",
            caption: "Figure 1: Various RAM modules of different capacities",
          },
        ],
      },
      {
        id: "ram-purpose",
        label: "3.2 Purpose",
        title: "3.2 Purpose",
        paragraphs: [
          "The primary purpose of RAM is to provide fast temporary storage for active data and instructions used by the CPU.",
          "RAM is not long-term storage; that role is handled by SSDs and HDDs.",
          "When RAM is insufficient, systems rely on slower storage-based virtual memory, reducing performance.",
        ],
        keywords: ["purpose", "cpu", "virtual memory", "temporary storage", "performance"],
      },
      {
        id: "ram-architecture",
        label: "3.3 Architecture",
        title: "3.3 Architecture",
        paragraphs: [
          "RAM is built from memory cells organized into rows and columns that enable rapid access.",
          "In DRAM, each memory cell stores one bit using a transistor and capacitor.",
          "Modern systems use dual-channel or quad-channel configurations to increase memory bandwidth.",
          "The memory controller, usually integrated into the CPU, manages communication between RAM and the processor.",
          "RAM modules are installed as DIMMs on motherboards, including UDIMM (desktop) and SO-DIMM (laptop) formats.",
        ],
        keywords: ["architecture", "memory cells", "dual channel", "memory controller", "dimm"],
        images: [
          {
            src: "/assets/Pasted image (6).png",
            alt: "DRAM Cell Architecture",
            caption: "Figure 2: Internal architecture of an 8F2 DRAM cell",
          },
        ],
      },
      {
        id: "ram-specifications",
        label: "3.4 Specifications",
        title: "3.4 Specifications",
        paragraphs: [
          "Key RAM specifications include capacity (GB), speed (MT/s), latency, voltage, and memory type (DDR generation).",
          "DDR4 commonly ranges from about 2133 to 3600 MT/s, while DDR5 commonly ranges from about 4800 to 7200+ MT/s.",
          "Typical capacities are 8GB to 32GB for DDR4 and 16GB to 64GB for DDR5 kits.",
        ],
        keywords: ["specifications", "capacity", "speed", "latency", "ddr4", "ddr5"],
      },
      {
        id: "ram-performance",
        label: "3.5 Performance",
        title: "3.5 Performance",
        paragraphs: [
          "RAM performance depends on speed, latency, and capacity.",
          "Higher speed improves data transfer rates (example: DDR4-3200 = 3200 MT/s).",
          "Lower latency, such as lower CAS Latency (CL), generally improves responsiveness.",
          "Higher capacity improves multitasking and helps avoid slowdowns from memory pressure.",
        ],
        keywords: ["performance", "mt/s", "cas latency", "capacity", "responsiveness"],
      },
      {
        id: "ram-use-cases",
        label: "3.6 Use Cases",
        title: "3.6 Use Cases",
        paragraphs: [
          "Basic computing often works well with 8GB RAM.",
          "Gaming systems commonly use 16GB RAM.",
          "Video editing and 3D rendering often benefit from 32GB to 64GB.",
          "Servers and virtualization workloads frequently require 64GB or more.",
        ],
        keywords: ["use cases", "gaming", "video editing", "rendering", "virtualization"],
      },
      {
        id: "ram-compatibility",
        label: "3.7 Compatibility",
        title: "3.7 Compatibility",
        paragraphs: [
          "RAM must match CPU and motherboard support, including DDR generation compatibility.",
          "DDR4 and DDR5 are not interchangeable.",
          "Most boards provide 2 to 4 RAM slots.",
          "For best performance, install matched modules in pairs for dual-channel operation (for example 2x8GB instead of 1x16GB).",
        ],
        keywords: ["compatibility", "ddr4", "ddr5", "motherboard", "dual channel"],
      },
      {
        id: "ram-evolution",
        label: "3.8 Evolution",
        title: "3.8 Evolution",
        paragraphs: [
          "RAM evolved from early magnetic core memory to modern high-speed DRAM technologies.",
          "SDRAM improved memory timing by synchronizing with system clocks.",
          "DDR generations increased bandwidth across DDR, DDR2, DDR3, DDR4, and DDR5.",
        ],
        keywords: ["evolution", "sdram", "ddr", "bandwidth", "memory history"],
      },
      {
        id: "ram-comparisons",
        label: "3.9 Comparisons",
        title: "3.9 Comparisons",
        paragraphs: [
          "DDR4 vs DDR5: DDR5 offers higher speed, improved efficiency, and higher capacity potential.",
          "RAM vs Storage: RAM is volatile and extremely fast for active data, while storage is persistent and slower for long-term files.",
        ],
        keywords: ["comparisons", "ddr4 vs ddr5", "ram vs storage", "volatile", "persistent"],
      },
      {
        id: "ram-optimization",
        label: "3.10 Optimization",
        title: "3.10 Optimization",
        paragraphs: [
          "Use matched dual-channel kits to increase memory bandwidth.",
          "Enable XMP or EXPO profiles in BIOS to run supported memory speeds.",
          "Choose adequate capacity to avoid disk-based paging.",
        ],
        keywords: ["optimization", "xmp", "expo", "dual channel", "bios"],
      },
      {
        id: "ram-limitations",
        label: "3.11 Limitations",
        title: "3.11 Limitations",
        paragraphs: [
          "RAM is volatile, so all data is cleared when power is lost.",
          "Higher-capacity or higher-speed kits can be expensive.",
          "Beyond a practical point, extra RAM may provide limited real-world gains for some workloads.",
        ],
        keywords: ["limitations", "volatility", "cost", "diminishing returns", "capacity"],
      },
      {
        id: "ram-troubleshooting",
        label: "3.12 Troubleshooting",
        title: "3.12 Troubleshooting",
        paragraphs: [
          "If the system fails to boot after RAM changes, check compatibility, slot placement, and supported speeds.",
          "Random crashes or blue screens are often linked to faulty modules or unstable overclocks.",
          "If memory runs below rated speed, enable XMP or EXPO in BIOS settings.",
        ],
        keywords: ["troubleshooting", "boot failure", "bsod", "xmp", "expo"],
      },
      {
        id: "ram-fun-facts",
        label: "3.13 Fun Facts",
        title: "3.13 Fun Facts",
        paragraphs: [
          "RAM operates with nanosecond-level latency, far faster than storage devices.",
          "Many modern gaming systems use 16GB to 32GB RAM.",
          "Enterprise and server systems can support hundreds of gigabytes to terabytes of RAM.",
          "Random access means memory locations can be accessed directly without sequential scanning.",
        ],
        keywords: ["fun facts", "nanoseconds", "gaming memory", "servers", "random access"],
      },
      {
        id: "ram-summary",
        label: "3.14 Summary",
        title: "3.14 Summary",
        paragraphs: [
          "RAM is fast temporary memory used for active processes and CPU-accessed data.",
          "Performance is primarily influenced by speed, latency, and capacity.",
          "RAM is essential for multitasking and overall system responsiveness.",
          "As a computer’s working memory layer, RAM enables software and operating systems to run efficiently.",
        ],
        keywords: ["summary", "working memory", "speed", "latency", "system responsiveness"],
      },
    ],
  },
  {
    id: "motherboards",
    label: "Motherboard",
    topics: [
      {
        id: "motherboard-overview",
        label: "4.1 Overview",
        title: "4.1 Overview",
        paragraphs: [
          "A motherboard is the primary circuit board that connects all major hardware components in a computer.",
          "It links the CPU, RAM, storage, graphics, networking, and power delivery into a unified platform.",
          "Modern boards also integrate controllers for networking, audio, USB, storage, and firmware (BIOS/UEFI).",
          "Because of this, the motherboard strongly influences compatibility, expansion, and connectivity.",
        ],
        keywords: ["motherboard", "overview", "mainboard", "bios", "uefi"],
        images: [
          {
            src: "/assets/Pasted image (7).png",
            alt: "Motherboard Chip",
            caption: "Figure 1: A typical motherboard chip",
          },
        ],
      },
      {
        id: "motherboard-purpose",
        label: "4.2 Purpose",
        title: "4.2 Purpose",
        paragraphs: [
          "The motherboard serves as the communication and power distribution hub for the system.",
          "It connects CPU socket, RAM DIMM slots, PCIe devices like GPUs, and storage interfaces such as SATA and NVMe.",
          "It also hosts firmware used to initialize and configure hardware during boot.",
        ],
        keywords: ["purpose", "communication hub", "power distribution", "cpu socket", "pcie"],
      },
      {
        id: "motherboard-architecture",
        label: "4.3 Architecture",
        title: "4.3 Architecture",
        paragraphs: [
          "Motherboards include key subsystems such as CPU socket, chipset, memory slots, expansion slots, and storage interfaces.",
          "CPU sockets differ by platform, for example Intel LGA1700 and AMD AM5.",
          "Chipsets manage I/O features such as USB, storage connectivity, PCIe routing, and networking options.",
          "DIMM slots provide dual-channel memory support on most consumer platforms.",
          "Expansion slots include PCIe x16 for GPUs and PCIe x4/x1 for additional cards.",
        ],
        keywords: ["architecture", "chipset", "socket", "dimm", "pcie"],
        images: [
          {
            src: "/assets/Pasted image (8).png",
            alt: "Motherboard Components",
            caption: "Figure 2: An image showing internal motherboard components",
          },
        ],
      },
      {
        id: "motherboard-specifications",
        label: "4.4 Specifications",
        title: "4.4 Specifications",
        paragraphs: [
          "Important motherboard specifications include form factor, socket type, chipset, RAM slots, PCIe slots, and storage ports.",
          "Form factor affects physical size and case compatibility.",
          "Socket and chipset define CPU generation support and feature availability.",
        ],
        keywords: ["specifications", "form factor", "socket type", "chipset", "storage ports"],
      },
      {
        id: "motherboard-performance",
        label: "4.5 Performance",
        title: "4.5 Performance",
        paragraphs: [
          "Motherboards affect performance through bandwidth, memory support, and power delivery quality.",
          "PCIe generation influences expansion bandwidth (for example PCIe 3.0, 4.0, and 5.0).",
          "VRM quality is especially important for high-performance CPUs and overclocking stability.",
        ],
        keywords: ["performance", "pcie generation", "vrm", "bandwidth", "overclocking"],
      },
      {
        id: "motherboard-use-cases",
        label: "4.6 Use Cases",
        title: "4.6 Use Cases",
        paragraphs: [
          "Gaming builds typically use feature-rich ATX gaming boards.",
          "Office systems often use compact and cost-effective Micro-ATX options.",
          "Workstations and servers rely on higher-end or specialized boards for stability and expansion.",
        ],
        keywords: ["use cases", "gaming", "office", "workstation", "server"],
      },
      {
        id: "motherboard-compatibility",
        label: "4.7 Compatibility",
        title: "4.7 Compatibility",
        paragraphs: [
          "CPU must match the motherboard socket and supported generation.",
          "Motherboards support specific RAM types such as DDR4 or DDR5.",
          "Form factors (ATX, Micro-ATX, Mini-ITX) must match case support.",
        ],
        keywords: ["compatibility", "socket", "ddr4", "ddr5", "form factor"],
      },
      {
        id: "motherboard-evolution",
        label: "4.8 Evolution",
        title: "4.8 Evolution",
        paragraphs: [
          "Early systems used multiple separate boards, while modern motherboards integrate many controllers directly.",
          "Recent platforms support advanced technologies such as PCIe 5.0, DDR5, and NVMe storage.",
        ],
        keywords: ["evolution", "integration", "pcie 5.0", "ddr5", "nvme"],
      },
      {
        id: "motherboard-comparisons",
        label: "4.9 Comparisons",
        title: "4.9 Comparisons",
        paragraphs: [
          "ATX provides more expansion than Micro-ATX and Mini-ITX, but requires larger cases.",
          "Budget boards usually offer fewer slots and simpler VRMs, while high-end boards provide stronger power delivery and broader connectivity.",
        ],
        keywords: ["comparisons", "atx", "micro-atx", "mini-itx", "budget vs high-end"],
      },
      {
        id: "motherboard-optimization",
        label: "4.10 Optimization",
        title: "4.10 Optimization",
        paragraphs: [
          "Choose a chipset that matches intended workloads and feature needs.",
          "Plan future expansion by selecting sufficient RAM slots, storage ports, and PCIe lanes.",
          "Use proper cooling and airflow, especially for boards with heavy VRM loads.",
        ],
        keywords: ["optimization", "chipset", "expandability", "pcie lanes", "cooling"],
      },
      {
        id: "motherboard-limitations",
        label: "4.11 Limitations",
        title: "4.11 Limitations",
        paragraphs: [
          "The motherboard sets hard limits on CPU support, maximum memory, and expansion capacity.",
          "Smaller form factors provide fewer upgrade paths.",
          "Platform lifespans eventually end when newer CPU generations move to new sockets.",
        ],
        keywords: ["limitations", "upgrade constraints", "platform lifespan", "socket changes", "expansion limits"],
      },
      {
        id: "motherboard-troubleshooting",
        label: "4.12 Troubleshooting",
        title: "4.12 Troubleshooting",
        paragraphs: [
          "If a system does not power on, verify power connectors, short-circuit risks, and board health.",
          "If RAM is not detected, check compatibility and slot placement.",
          "BIOS/UEFI updates may be required for newer CPU support.",
        ],
        keywords: ["troubleshooting", "no power", "ram not detected", "bios update", "compatibility"],
      },
      {
        id: "motherboard-fun-facts",
        label: "4.13 Fun Facts",
        title: "4.13 Fun Facts",
        paragraphs: [
          "The motherboard is also called the mainboard or system board.",
          "High-end gaming boards commonly include advanced cooling and RGB features.",
          "Some workstation and server boards can support multiple CPUs and very large memory capacities.",
        ],
        keywords: ["fun facts", "mainboard", "rgb", "workstation", "server boards"],
      },
      {
        id: "motherboard-summary",
        label: "4.14 Summary",
        title: "4.14 Summary",
        paragraphs: [
          "The motherboard is the central board that connects and coordinates all major computer hardware.",
          "It determines compatibility among CPU, RAM, storage, and expansion devices.",
          "It defines system expandability, connectivity options, and upgrade flexibility.",
        ],
        keywords: ["summary", "main circuit board", "compatibility", "connectivity", "expandability"],
      },
    ],
  },
  {
    id: "storage",
    label: "Storage",
    topics: [
      {
        id: "storage-overview",
        label: "5.1 Overview",
        title: "5.1 Overview",
        paragraphs: [
          "Storage devices provide permanent data retention, unlike volatile RAM.",
          "They hold operating systems, applications, user files, media, and databases.",
          "Modern systems primarily use SSDs and HDDs, with SSDs offering much faster access than mechanical drives.",
          "Storage performance strongly affects boot times, application loading, and file transfer speed.",
        ],
        keywords: ["storage", "overview", "ssd", "hdd", "permanent data"],
        images: [
          {
            src: "/assets/Pasted image (9).png",
            alt: "Memory Heirarchy",
            caption: "Figure 1: The computer memory heirarchy diagram",
          },
        ],
      },
      {
        id: "storage-purpose",
        label: "5.2 Purpose",
        title: "5.2 Purpose",
        paragraphs: [
          "Storage preserves digital information long-term across restarts and shutdowns.",
          "It stores operating systems, installed software, user data, and backup archives.",
          "In the memory hierarchy, storage is slower than cache and RAM but persistent.",
        ],
        keywords: ["purpose", "long-term", "persistence", "operating system", "backups"],
      },
      {
        id: "storage-architecture",
        label: "5.3 Architecture",
        title: "5.3 Architecture",
        paragraphs: [
          "HDDs use spinning magnetic platters, actuator arms, and read/write heads.",
          "SSDs use NAND flash, controllers, and cache with no moving mechanical parts.",
          "NVMe SSDs connect through PCIe for high bandwidth and low latency.",
        ],
        keywords: ["architecture", "hdd", "ssd", "nand", "nvme"],
        images: [
          {
            src: "/assets/Pasted image (10).png",
            alt: "Hard Drive",
            caption: "Figure 2: Internal components of a typical hard drive",
          },
        ],
      },
      {
        id: "storage-specifications",
        label: "5.4 Specifications",
        title: "5.4 Specifications",
        paragraphs: [
          "Common specifications include capacity, interface, read speed, write speed, and form factor.",
          "Typical performance examples: HDD around 150 MB/s, SATA SSD around 550 MB/s, NVMe SSD around 3500 to 7000+ MB/s.",
        ],
        keywords: ["specifications", "capacity", "interface", "read speed", "write speed"],
      },
      {
        id: "storage-performance",
        label: "5.5 Performance",
        title: "5.5 Performance",
        paragraphs: [
          "Storage performance depends on sequential speed, random access speed, and latency.",
          "HDD latency is much higher than SSD latency, while NVMe drives offer the lowest latency in typical consumer systems.",
          "Lower latency and higher throughput improve responsiveness in demanding workloads.",
        ],
        keywords: ["performance", "sequential", "random access", "latency", "throughput"],
      },
      {
        id: "storage-use-cases",
        label: "5.6 Use Cases",
        title: "5.6 Use Cases",
        paragraphs: [
          "Use SSDs for operating systems and frequently used applications.",
          "Use NVMe SSDs for gaming, databases, and high-speed workflows.",
          "Use HDDs for large media libraries and backup storage.",
          "Hybrid setups commonly combine NVMe for OS, SATA SSD for apps, and HDD for bulk files.",
        ],
        keywords: ["use cases", "nvme", "sata ssd", "hdd", "hybrid setup"],
      },
      {
        id: "storage-compatibility",
        label: "5.7 Compatibility",
        title: "5.7 Compatibility",
        paragraphs: [
          "Storage compatibility depends on motherboard interfaces and slot availability.",
          "SATA drives need SATA ports, while NVMe drives need compatible M.2/PCIe support.",
          "Common form factors include 3.5-inch HDD, 2.5-inch SATA drives, and M.2 SSD modules.",
        ],
        keywords: ["compatibility", "sata", "m.2", "nvme", "form factor"],
      },
      {
        id: "storage-evolution",
        label: "5.8 Evolution",
        title: "5.8 Evolution",
        paragraphs: [
          "Storage evolved from magnetic tape and floppy media to HDDs, then to flash-based SSDs.",
          "NVMe represented a major leap by moving high-speed storage directly onto PCIe lanes.",
        ],
        keywords: ["evolution", "floppy", "hdd", "ssd", "nvme"],
      },
      {
        id: "storage-comparisons",
        label: "5.9 Comparisons",
        title: "5.9 Comparisons",
        paragraphs: [
          "HDD vs SSD: HDDs are lower cost per GB but slower and mechanical; SSDs are faster, quieter, and more durable.",
          "SATA SSD vs NVMe SSD: NVMe offers much higher throughput and lower latency than SATA.",
        ],
        keywords: ["comparisons", "hdd vs ssd", "sata vs nvme", "cost per gb", "latency"],
      },
      {
        id: "storage-optimization",
        label: "5.10 Optimization",
        title: "5.10 Optimization",
        paragraphs: [
          "Install the operating system on an SSD for faster boot and load times.",
          "Keep free space available to maintain steady storage performance.",
          "Enable TRIM on SSDs and organize workloads across multiple drives when possible.",
        ],
        keywords: ["optimization", "trim", "free space", "os on ssd", "multiple drives"],
      },
      {
        id: "storage-limitations",
        label: "5.11 Limitations",
        title: "5.11 Limitations",
        paragraphs: [
          "HDDs face mechanical wear over time.",
          "SSDs have finite write endurance due to flash cell wear.",
          "Higher-speed storage typically costs more per gigabyte.",
        ],
        keywords: ["limitations", "mechanical wear", "write endurance", "cost", "flash cells"],
      },
      {
        id: "storage-troubleshooting",
        label: "5.12 Troubleshooting",
        title: "5.12 Troubleshooting",
        paragraphs: [
          "If a drive is not detected, check cables, BIOS settings, and interface compatibility.",
          "Slow storage can result from near-full drives, heavy background activity, or hardware degradation.",
          "Data corruption can be caused by sudden power loss or failing media; regular backups are essential.",
        ],
        keywords: ["troubleshooting", "drive not detected", "slow storage", "data corruption", "backups"],
      },
      {
        id: "storage-fun-facts",
        label: "5.13 Fun Facts",
        title: "5.13 Fun Facts",
        paragraphs: [
          "The IBM 350 (1956) is widely cited as the first commercial hard drive and stored about 5MB.",
          "Modern consumer NVMe SSDs can exceed 7000 MB/s read speeds.",
          "Large data centers operate at petabyte-scale storage capacities.",
        ],
        keywords: ["fun facts", "ibm 350", "nvme speed", "petabyte", "history"],
      },
      {
        id: "storage-summary",
        label: "5.14 Summary",
        title: "5.14 Summary",
        paragraphs: [
          "Storage provides permanent data retention for operating systems, software, and files.",
          "Major consumer storage technologies include HDD, SATA SSD, and NVMe SSD.",
          "Storage performance directly impacts startup time, file access, and application responsiveness.",
        ],
        keywords: ["summary", "permanent storage", "hdd", "ssd", "performance impact"],
      },
    ],
  },
  {
    id: "networking",
    label: "Networking",
    topics: [
      {
        id: "networking-overview",
        label: "6.1 Overview",
        title: "6.1 Overview",
        paragraphs: [
          "Computer networking enables systems and devices to exchange data across local and global networks.",
          "It supports internet access, cloud services, online gaming, file sharing, and distributed computing.",
          "Networking is typically provided by integrated or add-in NIC hardware through Ethernet, Wi-Fi, Bluetooth, and enterprise fiber links.",
        ],
        keywords: ["networking", "overview", "ethernet", "wifi", "nic"],
        images: [
          {
            src: "/assets/Pasted image (11).png",
            alt: "Network Topologies",
            caption: "Figure 1: A diagram showing various network topologies",
          },
        ],
      },
      {
        id: "networking-purpose",
        label: "6.2 Purpose",
        title: "6.2 Purpose",
        paragraphs: [
          "The main purpose of networking is communication between computers, devices, and services.",
          "Networking enables internet access, remote server connectivity, file sharing, and online applications.",
          "Core infrastructure commonly includes endpoints, routers, switches, and internet backbones.",
        ],
        keywords: ["purpose", "communication", "router", "switch", "internet"],
      },
      {
        id: "networking-architecture",
        label: "6.3 Architecture",
        title: "6.3 Architecture",
        paragraphs: [
          "Networking is often described using layered models such as OSI and TCP/IP.",
          "A Network Interface Controller (NIC) handles packet transmission and reception.",
          "Each NIC has a MAC address used for local network identification.",
        ],
        keywords: ["architecture", "osi", "tcp/ip", "nic", "mac address"],
        images: [
          {
            src: "/assets/Pasted image (12).png",
            alt: "OSI Model",
            caption: "Figure 2: A diagram showing the various layers of the OSI model",
          },
        ],
      },
      {
        id: "networking-specifications",
        label: "6.4 Specifications",
        title: "6.4 Specifications",
        paragraphs: [
          "Key networking specifications include bandwidth, latency, protocol support, interface type, and wireless frequency bands.",
          "Example speeds: Gigabit Ethernet (1 Gbps), 10GbE (10 Gbps), Wi-Fi 5 (~3.5 Gbps), and Wi-Fi 6 (~9.6 Gbps theoretical).",
        ],
        keywords: ["specifications", "bandwidth", "latency", "protocol", "wifi 6"],
      },
      {
        id: "networking-performance",
        label: "6.5 Performance",
        title: "6.5 Performance",
        paragraphs: [
          "Network performance depends mainly on bandwidth, latency, and packet loss.",
          "Low latency is critical for real-time workloads such as gaming, voice/video calls, and trading systems.",
          "Packet loss can cause lag, interruptions, and lower effective throughput.",
        ],
        keywords: ["performance", "packet loss", "latency", "throughput", "gaming"],
      },
      {
        id: "networking-use-cases",
        label: "6.6 Use Cases",
        title: "6.6 Use Cases",
        paragraphs: [
          "Home networking commonly uses Wi-Fi and Ethernet.",
          "Online gaming benefits from low-latency stable links, often wired.",
          "Cloud, enterprise, and data center workloads depend on high-bandwidth and resilient infrastructure.",
        ],
        keywords: ["use cases", "home internet", "online gaming", "enterprise", "data center"],
      },
      {
        id: "networking-compatibility",
        label: "6.7 Compatibility",
        title: "6.7 Compatibility",
        paragraphs: [
          "Networking compatibility depends on device interfaces and supported standards.",
          "Motherboards often include Gigabit Ethernet, while higher tiers may support 2.5GbE, 5GbE, or 10GbE.",
          "Wireless compatibility depends on standards like Wi-Fi 5 and Wi-Fi 6, plus router/switch/modem support.",
        ],
        keywords: ["compatibility", "gigabit", "10gbe", "wifi standards", "infrastructure"],
      },
      {
        id: "networking-evolution",
        label: "6.8 Evolution",
        title: "6.8 Evolution",
        paragraphs: [
          "Networking evolved from small local systems to globally interconnected internet infrastructure.",
          "Ethernet became dominant for wired communication, while Wi-Fi expanded mobility.",
          "Modern environments increasingly use high-speed standards such as 10GbE, fiber links, and Wi-Fi 6/7.",
        ],
        keywords: ["evolution", "ethernet", "wifi", "fiber", "high speed"],
      },
      {
        id: "networking-comparisons",
        label: "6.9 Comparisons",
        title: "6.9 Comparisons",
        paragraphs: [
          "Ethernet vs Wi-Fi: Ethernet is typically faster and more stable, while Wi-Fi offers mobility and convenience.",
          "1GbE vs 10GbE: 10GbE offers much higher bandwidth but usually at higher infrastructure cost.",
        ],
        keywords: ["comparisons", "ethernet vs wifi", "1gbe vs 10gbe", "stability", "mobility"],
      },
      {
        id: "networking-optimization",
        label: "6.10 Optimization",
        title: "6.10 Optimization",
        paragraphs: [
          "Use wired Ethernet for the most stable low-latency performance when possible.",
          "Upgrade routers and NICs to newer standards to increase throughput.",
          "Reduce congestion and optimize router placement to improve wireless quality.",
        ],
        keywords: ["optimization", "ethernet", "router placement", "congestion", "upgrade"],
      },
      {
        id: "networking-limitations",
        label: "6.11 Limitations",
        title: "6.11 Limitations",
        paragraphs: [
          "Real-world network speed depends on physical infrastructure quality.",
          "Wireless links can suffer interference from walls, electronics, and crowded frequency bands.",
          "Even high-bandwidth networks may experience latency due to routing and congestion.",
        ],
        keywords: ["limitations", "interference", "infrastructure", "latency", "congestion"],
      },
      {
        id: "networking-troubleshooting",
        label: "6.12 Troubleshooting",
        title: "6.12 Troubleshooting",
        paragraphs: [
          "For no internet access, check cabling, router status, and configuration settings.",
          "Slow speeds may come from outdated hardware, interference, or bandwidth saturation.",
          "Intermittent connectivity is often caused by weak signal strength, driver issues, or faulty network devices.",
        ],
        keywords: ["troubleshooting", "no internet", "slow speeds", "intermittent", "drivers"],
      },
      {
        id: "networking-fun-facts",
        label: "6.13 Fun Facts",
        title: "6.13 Fun Facts",
        paragraphs: [
          "The first Ethernet standard was developed in 1973 at Xerox PARC.",
          "Modern data centers use fiber networks supporting 100 Gbps and beyond.",
          "The internet is a global network of interconnected networks.",
          "Network cable categories such as Cat5e, Cat6, and Cat7 indicate different performance levels.",
        ],
        keywords: ["fun facts", "xerox parc", "fiber", "internet", "cat6"],
      },
      {
        id: "networking-summary",
        label: "6.14 Summary",
        title: "6.14 Summary",
        paragraphs: [
          "Networking enables communication between devices using technologies like Ethernet, Wi-Fi, and fiber.",
          "Its effectiveness depends on bandwidth, latency, reliability, and infrastructure quality.",
          "Networking is foundational for internet access, cloud services, collaboration, and distributed computing.",
        ],
        keywords: ["summary", "communication", "ethernet", "wifi", "infrastructure"],
      },
    ],
  },
]

export const defaultTopicId = "readme"

export const topicsById = Object.fromEntries(
  topicCategories.flatMap((category) => category.topics.map((topic) => [topic.id, topic]))
) as Record<string, Topic>
