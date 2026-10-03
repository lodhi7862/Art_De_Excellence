import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Heritage & Innovation | KAMAIZ",
  description:
    "Meet Kamil and Faizan, learn what KAMAIZ stands for, and see how we guide jewelry projects from first sketch to final delivery.",
};

const process = [
  {
    number: "01",
    title: "Concept & Technical CAD",
    description:
      "Your sketches, references or ideas become precise 3D models, engineered for accurate dimensions, stone placement, metal requirements and production feasibility.",
  },
  {
    number: "02",
    title: "3D Resin Prototyping",
    description:
      "A high-resolution resin prototype lets you inspect the design, check fit and estimate weight before production begins.",
  },
  {
    number: "03",
    title: "Precision Casting",
    description:
      "Approved designs are cast by our specialist partners in 18K gold, platinum, 925 silver or other specified alloys, with close attention to metal quality and structural integrity.",
  },
  {
    number: "04",
    title: "Micro-Pave & Gemstone Setting",
    description:
      "Experienced setters work under professional microscopes to ensure precise alignment, secure stones and beautiful light performance.",
  },
  {
    number: "05",
    title: "Hand Finishing & Surface Refinement",
    description:
      "Filing, polishing, texturing and plating are completed to your specification, with edges, surfaces and fine details reviewed throughout.",
  },
  {
    number: "06",
    title: "Quality Control & Final Delivery",
    description:
      "Each piece is inspected against the approved CAD design and specifications, including dimensions, weight, stone security and finish, before it is packaged and delivered.",
  },
];

const faqs = [
  {
    question: "What does a jewelry design and development partner do?",
    answer:
      "We take your idea, whether a sketch, a reference photo, or just a concept, and turn it into a production-ready piece. That covers design, 3D modeling (CAD), prototyping, material and stone sourcing, manufacturing, and quality control.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Independent designers, emerging brands, retailers, established labels, and private-label buyers. You don't need a manufacturing background.",
  },
  {
    question: "What do I need to start a project?",
    answer:
      "Any of the following works: a hand sketch, inspiration images, a technical drawing, a CAD file, or a written brief. Tell us your target market, budget, and timeline, and we'll help fill in the rest.",
  },
  {
    question: "Do you offer ethical and sustainable options?",
    answer:
      "Yes. Options include recycled metals, lab-grown stones, and responsibly sourced natural gemstones, with documentation on request.",
  },
];

export default function HeritagePage() {
  return (
    <main className="heritage-page">
      <header className="heritage-nav">
        <a className="heritage-wordmark" href="/#home" aria-label="KAMAIZ home">
          KAMAIZ
        </a>
        <nav aria-label="Main navigation">
          <a href="/#home">Home</a>
          <a href="#story">Our Story</a>
          <a href="#process">How We Work</a>
          <a href="#questions">FAQs</a>
        </nav>
        <a className="heritage-nav-cta" href="/#contact">
          Start a Project <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="heritage-hero">
        <div className="heritage-hero-copy">
          <p className="heritage-eyebrow">Our Heritage &amp; Innovation</p>
          <h1>Crafting Tomorrow&apos;s Heirlooms Today</h1>
          <p className="heritage-hero-subtitle">Built on Friendship. Guided by Craft.</p>
          <p className="heritage-hero-intro">
            A jewelry design and development partner for the people building
            tomorrow&apos;s brands, from first sketch to final delivery.
          </p>
          <a className="heritage-text-link" href="#story">
            Meet KAMAIZ <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="heritage-hero-image">
          <img
            src="/Images/gallery/ad48f9fa244e.jpg"
            alt="Jewelry craftsmanship in the atelier"
            fetchPriority="high"
          />
          <span>Bangkok, Thailand</span>
        </div>
      </section>

      <section className="heritage-story heritage-section" id="story">
        <div className="heritage-section-label">
          <span>01 / About Us</span>
          <span>Friendship, made into a practice</span>
        </div>
        <div className="heritage-story-grid">
          <h2>Built on Friendship.<br />Guided by Craft.</h2>
          <div className="heritage-prose">
            <p className="heritage-lede">Some companies begin with an investment. Ours began with friendship.</p>
            <p>
              Fourteen years ago, Kamil and Faizan each entered the jewelry
              retail industry, working for different companies and building
              their own careers. Neither imagined those separate paths would
              lead to the same place.
            </p>
            <p>
              Along the way, we watched beautiful ideas become beautiful
              jewelry. We also saw what it took to get there. Independent
              retailers, wholesalers and emerging brands came to us with real
              passion and clear ambition. They wanted better design, better
              quality and room to grow.
            </p>
            <p>
              What many of them lacked was not vision. It was the right person
              behind it: a skilled CAD designer, someone who understands
              production, someone who protects quality until the final piece
              is in the client&apos;s hands. For a small or growing business,
              building that team is often too costly and too complicated.
            </p>
            <p>
              Then the requests began. One freelance project, then another,
              then another. Eventually the message became consistent: &ldquo;You
              should build your own company. There is a need for what you do.&rdquo;
            </p>
            <p className="heritage-lede">We listened. That is how KAMAIZ began.</p>
          </div>
        </div>
      </section>

      <section className="heritage-purpose">
        <div>
          <p className="heritage-eyebrow">Our Purpose</p>
          <h2>We wanted to become the team we wished every growing jewelry business could have beside them.</h2>
        </div>
        <p>
          We act as an extension of yours, taking care of design, development
          and production coordination, so you can give your time to your
          customers, your sales and your brand.
        </p>
      </section>

      <section className="heritage-global heritage-section">
        <div className="heritage-section-label">
          <span>02 / From Bangkok to the World</span>
          <span>One craft, many points of view</span>
        </div>
        <div className="heritage-global-grid">
          <h2>Jewelry has always crossed borders.</h2>
          <div className="heritage-prose">
            <p>
              A design may begin in one country, be developed in another, be
              crafted in a third, and become part of someone&apos;s most
              important memory somewhere else.
            </p>
            <p>
              From Bangkok, our view is wider than one market. We admire the
              craftsmanship and heritage of Italy and Europe, and the precision
              and attention to detail of Japan. We hope to work with people who
              share our belief that the smallest details matter.
            </p>
          </div>
        </div>
      </section>

      <section className="heritage-meaning">
        <div className="heritage-meaning-title">
          <p className="heritage-eyebrow">The Meaning of KAMAIZ</p>
          <h2>Perfection<br />&amp; Blessing</h2>
        </div>
        <div className="heritage-meaning-copy">
          <p>
            KAMAIZ is built from the names of its two founders, Kamil and
            Faizan. For us, it also stands for Perfection &amp; Blessing.
          </p>
          <p><strong>Perfection</strong> is our commitment to detail, craftsmanship and consistency.</p>
          <p>
            <strong>Blessing</strong> is our gratitude to the clients who
            trusted us with their first project, to those who gave us another,
            and to the friendship that gave us the courage to begin.
          </p>
        </div>
      </section>

      <section className="heritage-process heritage-section" id="process">
        <div className="heritage-section-label">
          <span>03 / How We Work</span>
          <span>From first sketch to final delivery</span>
        </div>
        <div className="heritage-process-heading">
          <h2>One considered step at a time.</h2>
          <p>
            We combine jewelry design and CAD/CAM expertise with a trusted
            network of specialist manufacturing partners. Every stage is
            coordinated by us, from first sketch to final delivery.
          </p>
        </div>
        <ol className="heritage-process-list">
          {process.map((step) => (
            <li key={step.number}>
              <span className="heritage-step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="heritage-ip">
        <p className="heritage-eyebrow">Your Design Stays Yours</p>
        <h2>Protected from concept to finished piece.</h2>
        <p>
          Every project is handled in strict confidence. Design files, CAD
          models and specifications are shared only with the professionals
          directly involved in production. Your design remains your
          intellectual property, protected from concept to finished piece.
        </p>
      </section>

      <section className="heritage-faq heritage-section" id="questions">
        <div className="heritage-section-label">
          <span>04 / Getting Started</span>
          <span>FAQs: Jewelry Design &amp; Development Partner</span>
        </div>
        <div className="heritage-faq-grid">
          <h2>Good work starts with a conversation.</h2>
          <div className="heritage-faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="heritage-footer">
        <div>
          <p className="heritage-eyebrow">Our Promise</p>
          <h2>When you put your vision in our hands, we treat it as our own.</h2>
          <p>You focus on your customers. We will focus on the details behind your brand.</p>
          <a className="heritage-footer-cta" href="/#contact">
            Start a Project <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="heritage-footer-signoff">
          <a className="heritage-wordmark" href="/#home">KAMAIZ</a>
          <span>Perfection &amp; Blessing</span>
        </div>
      </footer>
    </main>
  );
}