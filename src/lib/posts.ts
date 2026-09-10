import { prisma } from "./prisma";

export type PublicPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  featured: boolean;
  published: boolean;
  createdAt: Date;
};

export const FALLBACK_POSTS: PublicPost[] = [
  {
    id: "fallback-1",
    title: "14K vs. 18K Gold In Modern Casting",
    slug: "14k-vs-18k-gold-in-modern-casting",
    excerpt:
      "Comparing Vickers hardness, tensile strength, and color saturation across commercial fine jewelry alloys for maximum longevity.",
    content:
      "Choosing between 14K and 18K is a production decision, not only an aesthetic one.\n\n18K (750) offers richer color and a prestige hallmark, while 14K typically yields higher hardness for daily-wear rings. Our casting floor logs melt chemistry, flask temperature, and tree weight so color and tensile behavior stay consistent from sample to full OEM run.\n\nFor bridal micro-pave, we often specify nickel-free white 18K with a palladium-rich mix to keep seats stable under 40x setting.",
    category: "Metallurgy",
    imageUrl: "/Images/gallery/ad9a00f81b98.jpg",
    featured: false,
    published: true,
    createdAt: new Date("2026-03-12"),
  },
  {
    id: "fallback-2",
    title: "Optimizing CAD Geometry For Stone Setting",
    slug: "optimizing-cad-geometry-for-stone-setting",
    excerpt:
      "Reducing prong strain and metal fatigue during microscopic pave setting in modern halo engagement rings.",
    content:
      "A beautiful render can still fail at the bench if prong thickness, seat depth, and gallery undercuts are guessed rather than engineered.\n\nWe model shrinkage, stone girdle tolerance, and polishing loss before wax. Halo pavé is calibrated so grain height survives finishing without burying the table.\n\nEvery CAD file that leaves the studio includes a setting map the bench can follow under the microscope.",
    category: "3D Design",
    imageUrl: "/Images/gallery/b59f6e1d3587.jpg",
    featured: false,
    published: true,
    createdAt: new Date("2026-04-02"),
  },
  {
    id: "fallback-3",
    title: "Micron Gold Vermeil vs. Flash Plating",
    slug: "micron-gold-vermeil-vs-flash-plating",
    excerpt:
      "How heavy-layer electroplating and palladium barrier coatings prolong retail shelf life and preserve brilliance.",
    content:
      "Flash plating looks bright on day one and fades in weeks. Vermeil-grade micron layers, with a palladium barrier where specified, keep tone and wear resistance aligned across a collection.\n\nWe measure thickness, not just color, so a 1,000-unit drop matches the approved sample in Paris, New York, and Tokyo.",
    category: "Finishing",
    imageUrl: "/Images/gallery/4cf5b4d6554d.jpg",
    featured: false,
    published: true,
    createdAt: new Date("2026-05-18"),
  },
  {
    id: "fallback-4",
    title: "The Rise of Recycled Platinum in Fine Bridal Engineering",
    slug: "recycled-platinum-in-fine-bridal-engineering",
    excerpt:
      "Explore how closed-loop refined Platinum 950 eliminates environmental extraction footprints without forfeiting structural grain density or high-polish mirror finish quality required by prestige houses.",
    content:
      "Recycled Platinum 950 is no longer a compromise alloy. Closed-loop refining returns metal with the grain density bridal houses expect for heavy solitaire settings.\n\nWe XRF every melt, then polish to the same optical mirror used on mined-origin platinum. The difference is provenance, not performance.\n\nFor houses publishing environmental claims, we supply melt certificates alongside the usual hallmark documentation.",
    category: "Metallurgy",
    imageUrl: "/Images/gallery/31330211169e.jpg",
    featured: true,
    published: true,
    createdAt: new Date("2026-07-08"),
  },
  {
    id: "fallback-5",
    title: "Detecting Lab-Grown Inclusions Under 50x",
    slug: "detecting-lab-grown-inclusions-under-50x",
    excerpt:
      "Advanced spectroscopy and microscopic growth lines identification for certified diamond verification.",
    content:
      "Client-supplied stones are inspected on arrival. Under 50x we look for growth lines, metallic inclusions, and inscription consistency before any CAD seat is locked.\n\nLab-grown and natural material can both be set beautifully — the requirement is honest grading and a seat cut for that specific girdle.",
    category: "Gemology",
    imageUrl: "/Images/gallery/3d132eb7b109.jpg",
    featured: false,
    published: true,
    createdAt: new Date("2026-06-21"),
  },
  {
    id: "fallback-6",
    title: "Electroforming Hollow Gold Components",
    slug: "electroforming-hollow-gold-components",
    excerpt:
      "Achieving massive visual volume while maintaining ultra-light comfortable weights for daily statement wear.",
    content:
      "Statement hoops and sculptural drops often need presence without ear fatigue. Electroformed hollow cores give volume, then we close, hallmark, and polish so the piece still reads as solid gold jewelry.\n\nWall thickness is specified in CAD so hinge and latch points never become the weak link.",
    category: "Casting Science",
    imageUrl: "/Images/gallery/aec5ab31631e.jpg",
    featured: false,
    published: true,
    createdAt: new Date("2026-02-14"),
  },
  {
    id: "fallback-7",
    title: "Scaling OEM Runs For Global Fine Brands",
    slug: "scaling-oem-runs-for-global-fine-brands",
    excerpt:
      "How strict quality control protocols ensure consistency across 1,000+ unit multi-regional retail launches.",
    content:
      "A 12-piece sample and a 1,200-piece launch are the same design only if alloy, setting map, and finish recipe are frozen.\n\nWe keep signed waxes, XRF logs, and tray photos so later replenishment matches the first season — including hallmark placement and box weight.",
    category: "Jewelry Business",
    imageUrl: "/Images/gallery/33d9e557183d.jpg",
    featured: false,
    published: true,
    createdAt: new Date("2026-01-29"),
  },
];

export async function getPublishedPosts(): Promise<PublicPost[]> {
  if (!process.env.DATABASE_URL) return FALLBACK_POSTS;
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });
    return posts.length ? posts : FALLBACK_POSTS;
  } catch {
    return FALLBACK_POSTS;
  }
}

export async function getPostBySlug(slug: string): Promise<PublicPost | null> {
  if (process.env.DATABASE_URL) {
    try {
      const post = await prisma.post.findFirst({
        where: { slug, published: true },
      });
      if (post) return post;
    } catch {
      // fall through to static copies
    }
  }
  return FALLBACK_POSTS.find((post) => post.slug === slug) ?? null;
}

export async function getAllAdminPosts() {
  if (!process.env.DATABASE_URL) return [];
  try {
    return await prisma.post.findMany({ orderBy: { createdAt: "desc" } });
  } catch {
    return [];
  }
}

export async function getAdminPost(id: string) {
  if (!process.env.DATABASE_URL) return null;
  try {
    return await prisma.post.findUnique({ where: { id } });
  } catch {
    return null;
  }
}
