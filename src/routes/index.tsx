import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EKUNE — Krystian Kunke" },
      { name: "description", content: "I build digital products, partner with creators, and help them ship. EKUNE is the personal brand of Krystian Kunke." },
      { property: "og:title", content: "EKUNE — Krystian Kunke" },
      { property: "og:description", content: "I build digital products, partner with creators, and help them ship." },
    ],
  }),
  component: Index,
});

const PATH_URL = "https://thepath.ekune.com";
const IG_URL = "https://instagram.com/krystiankunke";
const LI_URL = "https://linkedin.com/in/krystian-kunke";
const EMAIL = "krystian.kunke@ekune.com";

function IconInstagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconLinkedIn({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 11.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.4 8.65 22 11 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.37 1.6-2.37 3.27V21h-4V9z" />
    </svg>
  );
}
function IconMail({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}
function IconArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PrimaryBtn({ href, children, onClick }: { href?: string; children: React.ReactNode; onClick?: () => void }) {
  const cls = "inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90";
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}
function OutlineBtn({ href, children, onClick }: { href?: string; children: React.ReactNode; onClick?: () => void }) {
  const cls = "inline-flex items-center justify-center gap-2 rounded-md border border-foreground/20 bg-transparent px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5";
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Pillars />
      <ThePath />
      <About />
      <Connect />
      <Contact />
      <Footer />
    </div>
  );
}

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </div>
  );
}

function Hero() {
  return (
    <Section className="pt-20 pb-24 md:pt-32 md:pb-32">
      <div className="flex items-center justify-between mb-16 md:mb-24">
        <span className="font-display text-lg tracking-tight">EKUNE</span>
        <a href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
          <IconInstagram className="h-5 w-5" />
        </a>
      </div>

      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-8">
          <Eyebrow>Krystian Kunke</Eyebrow>
          <h1 className="text-4xl leading-[1.1] md:text-6xl md:leading-[1.05]">
            Building digital products.<br />
            Partnering with creators.<br />
            <span className="text-primary">Helping them ship.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            I help people break out of autopilot and build something of their own — through products that interrupt the cycle, and through creators I help turn expertise into income.
          </p>
          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            The Path is where it starts. If you're a creator, I can help you build yours.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <PrimaryBtn href={PATH_URL}>See The Path <IconArrow className="h-4 w-4" /></PrimaryBtn>
            <OutlineBtn onClick={() => scrollToId("contact")}>Work with me</OutlineBtn>
          </div>
        </div>

        <div className="md:col-span-4 md:pt-10">
          <img
            src="/logo-new.png"
            alt="EKUNE logo"
            className="w-full h-auto"
          />
        </div>
      </div>
    </Section>
  );
}

function Pillars() {
  const cards = [
    {
      tag: "Build",
      title: "I build digital products.",
      body: "The Path — a 5-tool toolkit for overstimulated adults. $67. Live now.",
      cta: "See The Path",
      href: PATH_URL,
    },
    {
      tag: "Partner",
      title: "I partner with creators.",
      body: "You have the audience. I have the product. Let's talk.",
      cta: "Let's talk",
      scroll: "contact",
    },
    {
      tag: "Operate",
      title: "I help creators ship.",
      body: "Offer strategy. Funnels. Automation. Launch. Behind the scenes so your product can grow. For creators who have expertise but lack product structure.",
      cta: "Work with me",
      scroll: "contact",
    },
  ];
  return (
    <Section className="py-20 md:py-28 border-t border-border">
      <Eyebrow>What I do</Eyebrow>
      <h2 className="text-3xl md:text-4xl max-w-2xl">Three things, one through-line: shipping products that actually exist.</h2>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.tag} className="flex flex-col rounded-lg border border-border bg-surface p-7 transition-colors hover:border-foreground/30">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-primary">{c.tag}</div>
            <h3 className="mt-4 text-xl font-display">{c.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed flex-1">{c.body}</p>
            {c.href ? (
              <a href={c.href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                {c.cta} <IconArrow className="h-4 w-4" />
              </a>
            ) : (
              <button onClick={() => scrollToId(c.scroll!)} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors text-left">
                {c.cta} <IconArrow className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function ThePath() {
  return (
    <Section className="py-20 md:py-28 border-t border-border">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-start">
        <div className="md:col-span-6">
          <Eyebrow>Featured product</Eyebrow>
          <h2 className="text-3xl md:text-5xl">The Path</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A 5-tool digital toolkit for overstimulated adults. It targets reactivity, not productivity. 2–4 weeks to first results.
          </p>
          <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-3"><span className="text-primary">·</span> 5 PDF tools</li>
            <li className="flex gap-3"><span className="text-primary">·</span> $67</li>
            <li className="flex gap-3"><span className="text-primary">·</span> Instant download</li>
            <li className="flex gap-3"><span className="text-primary">·</span> 2 bonuses included</li>
          </ul>
          <div className="mt-10">
            <PrimaryBtn href={PATH_URL}>See The Path <IconArrow className="h-4 w-4" /></PrimaryBtn>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground mb-3">Watch how it works · 18 min</div>
          <div className="aspect-video w-full overflow-hidden rounded-lg border border-border bg-surface">
            <iframe
              src="https://www.youtube.com/embed/yYm98tObL0c"
              title="The Path — how it works"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section className="py-20 md:py-28 border-t border-border">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-start">
        <div className="md:col-span-8">
          <Eyebrow>About</Eyebrow>
          <h2 className="text-3xl md:text-4xl">Hi, I'm Krystian.</h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            <p>I've spent years in the construction industry — developing systems, managing chaos, training teams. Now I build digital products for people who are overstimulated and under-supported, and I help creators turn their expertise into products that actually sell.</p>
            <p>I don't believe in hustle culture. I don't sell motivation. I build systems that work when you don't have energy.</p>
            <p className="text-foreground">EKUNE is where all of this lives.</p>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="aspect-[4/5] w-full rounded-lg border border-border bg-surface flex items-center justify-center">
            <div className="text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
              [PLACEHOLDER]<br /><span className="normal-case tracking-normal">photo of Krystian</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Connect() {
  return (
    <Section className="py-20 md:py-28 border-t border-border">
      <Eyebrow>Connect</Eyebrow>
      <h2 className="text-3xl md:text-4xl max-w-2xl">Come along.</h2>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        I share what I'm building, what I'm learning, and what I'm shipping.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-foreground/30 transition-colors">
          <IconInstagram className="h-5 w-5" /> Instagram
        </a>
        <a href={LI_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-foreground/30 transition-colors">
          <IconLinkedIn className="h-5 w-5" /> LinkedIn
        </a>
      </div>
    </Section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const mailto = () => {
    const subject = encodeURIComponent(`From ${form.name || "website"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" className="py-20 md:py-28 border-t border-border">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="text-3xl md:text-4xl">Work with me.</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            If you're building a digital product and need operational support behind the scenes — let's talk.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Tell me what you're building, where you're stuck, and what you've tried.
          </p>
          <a href={`mailto:${EMAIL}`} className="mt-8 inline-flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition-colors break-all">
            <IconMail className="h-5 w-5" /> {EMAIL}
          </a>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); mailto(); }}
          className="md:col-span-7 rounded-lg border border-border bg-surface p-7 md:p-9 space-y-5"
        >
          <div>
            <label className="block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground mb-2">Name</label>
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground/50"
            />
          </div>
          <div>
            <label className="block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground mb-2">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground/50"
            />
          </div>
          <div>
            <label className="block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground mb-2">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What are you building? Where are you stuck?"
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground/50 resize-none"
            />
          </div>
          <PrimaryBtn onClick={mailto}>Send <IconArrow className="h-4 w-4" /></PrimaryBtn>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 py-10">
        <div className="grid gap-6 md:grid-cols-3 items-center text-sm">
          <div className="text-foreground">
            <span className="font-display tracking-tight">EKUNE</span>
            <span className="text-muted-foreground"> — Krystian Kunke</span>
          </div>
          <div className="md:text-center">
            <a href={PATH_URL} className="text-muted-foreground hover:text-foreground transition-colors">thepath.ekune.com</a>
          </div>
          <div className="flex gap-4 md:justify-end text-muted-foreground">
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-foreground transition-colors"><IconInstagram className="h-5 w-5" /></a>
            <a href={LI_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors"><IconLinkedIn className="h-5 w-5" /></a>
            <a href={`mailto:${EMAIL}`} aria-label="Email" className="hover:text-foreground transition-colors"><IconMail className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="mt-8 text-xs text-muted-foreground">© 2026 EKUNE — All rights reserved.</div>
      </div>
    </footer>
  );
}
