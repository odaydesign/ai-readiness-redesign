"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const sampleTabs = [
  { value: "benchmark", label: "Benchmark" },
  { value: "opportunities", label: "Opportunities" },
  { value: "readiness", label: "Readiness" },
  { value: "recommendations", label: "Recommendations" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function ReportMark() {
  return (
    <div className="report-mark" aria-label="AI Readiness Report by Humblebee">
      <strong>AI READINESS REPORT</strong>
      <span>BY HUMBLEBEE</span>
    </div>
  );
}

function OpportunityRows() {
  return (
    <div className="opportunity-rows">
      <div className="opportunity-row">
        <span className="opportunity-rank blue">01</span>
        <div><strong>Customer intelligence</strong><span>High value · Ready now</span></div>
        <b>8.7</b>
      </div>
      <div className="opportunity-row">
        <span className="opportunity-rank orange">02</span>
        <div><strong>Operational copilot</strong><span>High value · 3–6 months</span></div>
        <b>8.1</b>
      </div>
      <div className="opportunity-row">
        <span className="opportunity-rank green">03</span>
        <div><strong>Knowledge retrieval</strong><span>Medium value · Ready now</span></div>
        <b>7.4</b>
      </div>
    </div>
  );
}

function HeroReport() {
  return (
    <div className="hero-report-wrap" aria-label="Illustrative AI Readiness Report preview">
      <div className="report-shadow-card" aria-hidden="true" />
      <article className="hero-report">
        <div className="report-topline">
          <ReportMark />
          <span>ILLUSTRATIVE SAMPLE</span>
        </div>
        <div className="report-company">
          <span>EXAMPLE COMPANY / AUG 2026</span>
          <h2>Your AI opportunity map.</h2>
        </div>
        <div className="report-score-grid">
          <div className="score-main">
            <span>READINESS SCORE</span>
            <strong>62<small>/100</small></strong>
          </div>
          <div className="score-bars" aria-label="Example readiness dimension scores">
            <div><span>Strategy</span><i><b style={{ width: "76%" }} /></i><em>76</em></div>
            <div><span>Data</span><i><b style={{ width: "58%" }} /></i><em>58</em></div>
            <div><span>People</span><i><b style={{ width: "51%" }} /></i><em>51</em></div>
          </div>
        </div>
        <div className="report-subhead"><span>TOP OPPORTUNITIES</span><span>VALUE / READINESS</span></div>
        <OpportunityRows />
        <div className="report-footerline"><span>CONFIDENTIAL</span><span>01 / 24</span></div>
      </article>
      <div className="report-sticker">HUMAN<br />REVIEWED</div>
    </div>
  );
}

function SamplePanel({ type }: { type: string }) {
  if (type === "opportunities") {
    return (
      <div className="sample-panel opportunities-panel">
        <div className="sample-panel-copy">
          <span className="sample-number">02</span>
          <p className="eyebrow">RANKED OPPORTUNITIES</p>
          <h3>Know what to do first.</h3>
          <p>Every opportunity is ranked by potential value, organisational readiness and the effort required to get moving.</p>
        </div>
        <div className="sample-sheet"><div className="sheet-label">OPPORTUNITY RANKING</div><OpportunityRows /></div>
      </div>
    );
  }

  if (type === "readiness") {
    return (
      <div className="sample-panel readiness-panel">
        <div className="sample-panel-copy">
          <span className="sample-number">03</span>
          <p className="eyebrow">HONEST READINESS</p>
          <h3>See what is ready—and what is not.</h3>
          <p>A clear view of the foundations already in place and the gaps that need attention before investment.</p>
        </div>
        <div className="readiness-wheel" aria-label="Illustrative readiness scores">
          <div className="wheel-score"><strong>62</strong><span>OVERALL</span></div>
          <div className="wheel-label wheel-label-1"><b>76</b><span>Strategy</span></div>
          <div className="wheel-label wheel-label-2"><b>58</b><span>Data</span></div>
          <div className="wheel-label wheel-label-3"><b>51</b><span>People</span></div>
        </div>
      </div>
    );
  }

  if (type === "recommendations") {
    return (
      <div className="sample-panel recommendation-panel">
        <div className="sample-panel-copy">
          <span className="sample-number">04</span>
          <p className="eyebrow">THE WAY IN</p>
          <h3>Leave with a direction, not a diagnosis.</h3>
          <p>Each opportunity includes the first practical moves, the people involved and the groundwork needed.</p>
        </div>
        <div className="roadmap">
          <div><span>NOW</span><strong>Align on the first opportunity</strong><small>Leadership decision</small></div>
          <div><span>NEXT</span><strong>Validate value and feasibility</strong><small>Focused discovery</small></div>
          <div><span>THEN</span><strong>Launch a measured pilot</strong><small>Build, learn, decide</small></div>
        </div>
      </div>
    );
  }

  return (
    <div className="sample-panel benchmark-panel">
      <div className="sample-panel-copy">
        <span className="sample-number">01</span>
        <p className="eyebrow">COMPETITIVE BENCHMARK</p>
        <h3>Know where you stand.</h3>
        <p>See how your AI readiness compares to your market, where you stand out and where you risk falling behind.</p>
      </div>
      <div className="benchmark-chart" aria-label="Illustrative competitor benchmark chart">
        <div className="chart-axis"><span>LEADING</span><span>DEVELOPING</span><span>STARTING</span></div>
        <div className="chart-bars">
          <div><i style={{ height: "62%" }} /><span>Your company</span><b>62</b></div>
          <div><i style={{ height: "78%" }} /><span>Competitor A</span><b>78</b></div>
          <div><i style={{ height: "54%" }} /><span>Competitor B</span><b>54</b></div>
          <div><i style={{ height: "43%" }} /><span>Market</span><b>43</b></div>
        </div>
      </div>
    </div>
  );
}

const steps = [
  ["01", "We research", "We gather relevant public data about your company, your competitors and the trends affecting your industry."],
  ["02", "You answer", "Based on the initial research, you answer a focused set of questions about your business and ambitions."],
  ["03", "We weigh it up", "We rank the opportunities, estimate their value and review every judgement before it reaches you."],
  ["04", "You get the report", "A ranked map written for your business, followed by a live walkthrough with Humblebee."],
];

function ApplicationPanel() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="application-success" role="status">
        <span>APPLICATION FLOW</span>
        <h3>That is the complete prototype journey.</h3>
        <p>This redesign concept does not send form data. In production, this state would confirm the application, explain the review timeline and provide the next step.</p>
        <Button className="secondary-cta" variant="outline" onClick={() => setSubmitted(false)}>Return to the form</Button>
      </div>
    );
  }

  return (
    <form className="application-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
      <div className="form-topline"><strong>START YOUR APPLICATION</strong><span>ABOUT 60 SECONDS</span></div>
      <div className="field wide">
        <label htmlFor="website">Company website</label>
        <input id="website" name="website" type="url" placeholder="yourcompany.com" required />
      </div>
      <fieldset className="challenge-field">
        <legend>What do you most need help deciding?</legend>
        <RadioGroup name="challenge" defaultValue="prioritise" className="challenge-options">
          {[
            ["value", "Where AI can create value"],
            ["prioritise", "What to prioritise first"],
            ["readiness", "Whether we are ready"],
            ["benchmark", "How we compare"],
          ].map(([value, label]) => (
            <label className="radio-card" key={value} htmlFor={`challenge-${value}`}>
              <RadioGroupItem id={`challenge-${value}`} value={value} />
              <span>{label}</span>
            </label>
          ))}
        </RadioGroup>
      </fieldset>
      <div className="form-grid">
        <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required /></div>
        <div className="field"><label htmlFor="email">Work email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
        <div className="field wide"><label htmlFor="company">Company</label><input id="company" name="company" autoComplete="organization" required /></div>
      </div>
      <label className="consent" htmlFor="consent">
        <Checkbox id="consent" required />
        <span>Humblebee can contact me about the AI Readiness Report.</span>
      </label>
      <Button className="application-submit" type="submit">Apply for a free report <ArrowIcon /></Button>
      <p className="prototype-note">Prototype only—no form information is sent or stored.</p>
    </form>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AI Readiness Report home"><ReportMark /></a>
        <nav aria-label="Main navigation">
          <a href="#sample">Sample report</a>
          <a href="#method">Method</a>
        </nav>
        <Button className="nav-cta" asChild><a href="#apply">Apply for a report</a></Button>
      </header>

      <aside className="offer-ticker" aria-label="Limited time offer">
        <a className="offer-ticker-track" href="#apply">
          <span>LIMITED TIME OFFER</span><i>•</i><strong>Qualifying companies can receive the full report free of charge</strong><i>→</i><span>APPLY NOW</span><i>•</i>
          <span>LIMITED TIME OFFER</span><i>•</i><strong>Qualifying companies can receive the full report free of charge</strong><i>→</i><span>APPLY NOW</span><i>•</i>
          <span>LIMITED TIME OFFER</span><i>•</i><strong>Qualifying companies can receive the full report free of charge</strong><i>→</i><span>APPLY NOW</span><i>•</i>
        </a>
      </aside>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span /> A HUMBLEBEE SERVICE</p>
          <h1>Is your organisation <span>AI-ready?</span></h1>
          <p className="hero-lead">AI is changing every industry. The challenge is knowing where to invest and what to prioritise.</p>
          <p className="hero-body">We analyse how AI is impacting your industry, identify the most relevant opportunities for your business, and turn them into clear, actionable recommendations.</p>
          <div className="hero-actions">
            <Button className="primary-cta" size="lg" asChild><a href="#apply">Apply for a free report <ArrowIcon /></a></Button>
            <Button className="secondary-cta" variant="outline" size="lg" asChild><a href="#sample">Explore a sample</a></Button>
          </div>
          <p className="offer-note"><strong>Standard price: SEK 39,000.</strong> A limited number of qualifying companies are currently selected free of charge.</p>
        </div>
        <HeroReport />
      </section>

      <section className="trust-strip" aria-label="What the service includes">
        <div><span>01</span><strong>Built for your business</strong><small>Not the industry average</small></div>
        <div><span>02</span><strong>Human reviewed</strong><small>AI-assisted, never AI-decided</small></div>
        <div><span>03</span><strong>Clear priorities</strong><small>Value, readiness and the way in</small></div>
        <div><span>04</span><strong>Ready to share</strong><small>Report and live walkthrough</small></div>
      </section>

      <section className="sample-section" id="sample">
        <div className="section-heading">
          <p className="eyebrow">INSIDE THE REPORT</p>
          <h2>Not another generic AI deck.</h2>
          <p>Explore an illustrative sample of the decisions your report is designed to support.</p>
        </div>
        <Tabs defaultValue="benchmark" className="report-tabs">
          <TabsList variant="line" className="report-tabs-list" aria-label="Sample report sections">
            {sampleTabs.map((tab) => <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>)}
          </TabsList>
          {sampleTabs.map((tab) => <TabsContent key={tab.value} value={tab.value}><SamplePanel type={tab.value} /></TabsContent>)}
        </Tabs>
        <p className="sample-disclaimer">Illustrative sample data. Your report is researched and written specifically for your organisation.</p>
      </section>

      <section className="method-section" id="method">
        <div className="method-intro">
          <p className="eyebrow">THE METHOD</p>
          <h2>Four steps. Defined opportunities to act on.</h2>
          <p>Our goal is to get you started on your AI journey—and get you started in the right direction.</p>
        </div>
        <ol className="method-steps">
          {steps.map(([number, title, body], index) => (
            <li key={number} className={`method-step step-${index + 1}`}>
              <span>{number}</span>
              <div className="step-icon" aria-hidden="true"><i /><i /><i /></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="value-section">
        <div className="value-heading">
          <p className="eyebrow">WHAT YOU GET</p>
          <h2>Written for your business, not the industry average.</h2>
        </div>
        <div className="value-grid">
          <article><span>01</span><h3>A competitive benchmark</h3><p>See where you stand, where you stand out and where you risk falling behind.</p></article>
          <article><span>02</span><h3>A ranked list of AI opportunities</h3><p>Specific to your business. Not a generic list of what AI can do in theory.</p></article>
          <article><span>03</span><h3>The what, the value, the way in</h3><p>What each opportunity is, its estimated value and what it takes to get started.</p></article>
          <article><span>04</span><h3>An honest read on readiness</h3><p>Straight talk on what is ready to move now and what needs groundwork first.</p></article>
        </div>
        <div className="judgement-row">
          <div className="judgement-statement"><span>HUMAN JUDGEMENT</span><h3>Not a hallucinated guess from ChatGPT.</h3><p>The report is not produced by AI. It is produced by us, using AI tools.</p></div>
          <div className="deliverables">
            <p className="eyebrow">IN YOUR HANDS</p>
            <div><span>PDF</span><strong>The report</strong><small>A written report you can share internally.</small></div>
            <div><span>LIVE</span><strong>The walkthrough</strong><small>A session with us. Bring your hardest questions.</small></div>
          </div>
        </div>
      </section>

      <section className="apply-section" id="apply">
        <div className="apply-copy">
          <p className="eyebrow">CURRENT OFFER</p>
          <h2>Apply for an AI Readiness <span>Report.</span></h2>
          <div className="price-block">
            <div className="standard-price"><span>STANDARD PRICE · VAT NOT INCLUDED</span><strong>SEK 39,000</strong></div>
            <div className="discount-price"><span>LIMITED OFFER</span><strong>FREE</strong><small>FOR SELECTED QUALIFYING COMPANIES</small></div>
          </div>
          <p className="free-offer">A limited number of qualifying companies are currently selected free of charge.</p>
          <div className="eligibility">
            <p>Who qualifies for the current offer</p>
            <ul>
              <li><span>✓</span>Active for at least three years</li>
              <li><span>✓</span>Annual turnover above SEK 10 million</li>
              <li><span>✓</span>Selected based on service fit</li>
              <li><span>✓</span>No purchase commitment</li>
            </ul>
          </div>
        </div>
        <ApplicationPanel />
      </section>

      <section className="marquee" aria-label="AI Readiness Report, a Humblebee service">
        <div><span>AI Readiness Report</span><i>•</i><span>A Humblebee Service</span><i>•</i><span>AI Readiness Report</span><i>•</i><span>A Humblebee Service</span></div>
      </section>

      <footer>
        <span>© 2026 Humblebee</span>
        <strong>HUMBLEBEE</strong>
        <a href="mailto:aireadiness@humblebee.se">aireadiness@humblebee.se</a>
      </footer>
    </main>
  );
}
