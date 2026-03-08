import React from 'react'
  export default function App() {
  const affiliateTag = "yourtag-21";

  const products = [
    {
      slug: "wireless-earbuds",
      title: "Wireless Earbuds",
      strapline: "Three strong picks for everyday listening",
      why: "A popular category for everyday buyers.",
      choices: [
        {
          name: "Best Value",
          product: "Anker Soundcore P40i",
          badge: "Budget pick",
          summary: "A lower cost choice for everyday calls, music and commuting.",
          features: ["good battery life", "solid reviews", "easy everyday use"],
          amazonUrl: `https://www.amazon.co.uk/s?k=Anker+Soundcore+P40i&tag=${affiliateTag}`,
        },
        {
          name: "Best All Rounder",
          product: "JBL Tune Beam",
          badge: "Balanced pick",
          summary: "A practical middle ground if you want a known brand and a balanced feature set.",
          features: ["brand recognition", "comfortable fit", "good for daily use"],
          amazonUrl: `https://www.amazon.co.uk/s?k=JBL+Tune+Beam&tag=${affiliateTag}`,
        },
        {
          name: "Best Premium",
          product: "Sony WF 1000XM5",
          badge: "Premium pick",
          summary: "A stronger premium option for people who care about sound and noise cancelling.",
          features: ["strong sound", "noise cancelling", "premium positioning"],
          amazonUrl: `https://www.amazon.co.uk/s?k=Sony+WF+1000XM5&tag=${affiliateTag}`,
        },
      ],
    },
    {
      slug: "air-fryers",
      title: "Air Fryers",
      strapline: "Three popular routes into faster home cooking",
      why: "A strong home category with lots of buyer interest.",
      choices: [
        {
          name: "Best Small Kitchen Choice",
          product: "Ninja Air Fryer Pro",
          badge: "Compact pick",
          summary: "A space saving option for smaller kitchens and simple cooking routines.",
          features: ["compact size", "easy to use", "strong brand demand"],
          amazonUrl: `https://www.amazon.co.uk/s?k=Ninja+Air+Fryer+Pro&tag=${affiliateTag}`,
        },
        {
          name: "Best Family Choice",
          product: "Tower Dual Basket Air Fryer",
          badge: "Family pick",
          summary: "Helpful if you want to cook two foods at once with separate baskets.",
          features: ["dual baskets", "family friendly", "good value segment"],
          amazonUrl: `https://www.amazon.co.uk/s?k=Tower+Dual+Basket+Air+Fryer&tag=${affiliateTag}`,
        },
        {
          name: "Best Premium Choice",
          product: "Philips Dual Basket Air Fryer",
          badge: "Premium pick",
          summary: "A more premium option for buyers who want a larger brand and a cleaner design.",
          features: ["premium look", "strong brand trust", "multi meal flexibility"],
          amazonUrl: `https://www.amazon.co.uk/s?k=Philips+Dual+Basket+Air+Fryer&tag=${affiliateTag}`,
        },
      ],
    },
    {
      slug: "water-bottles",
      title: "Insulated Water Bottles",
      strapline: "Three options for work, travel and everyday use",
      why: "Practical products that sell steadily.",
      choices: [
        {
          name: "Best Budget",
          product: "Ion8 Leak Proof Bottle",
          badge: "Budget pick",
          summary: "A straightforward option for school, office and basic daily use.",
          features: ["leak resistant", "practical shape", "accessible price"],
          amazonUrl: `https://www.amazon.co.uk/s?k=Ion8+water+bottle&tag=${affiliateTag}`,
        },
        {
          name: "Best Everyday",
          product: "Stanley Quencher",
          badge: "Popular pick",
          summary: "A lifestyle led choice that benefits from strong social demand.",
          features: ["popular design", "large capacity", "strong trend appeal"],
          amazonUrl: `https://www.amazon.co.uk/s?k=Stanley+Quencher&tag=${affiliateTag}`,
        },
        {
          name: "Best Outdoor",
          product: "Hydro Flask Wide Mouth",
          badge: "Outdoor pick",
          summary: "A more premium insulated bottle aimed at active or outdoors buyers.",
          features: ["insulated body", "durable build", "travel friendly"],
          amazonUrl: `https://www.amazon.co.uk/s?k=Hydro+Flask+Wide+Mouth&tag=${affiliateTag}`,
        },
      ],
    },
  ];

  return (
    <div className="page">
      <header className="hero">
        <div className="wrap">
          <p className="eyebrow">Amazon affiliate comparison site starter</p>
          <h1>Top 3 choices for popular Amazon buys</h1>
          <p className="intro">
            A clean affiliate style site that gives visitors three simple choices for each product type.
          </p>
          <div className="notice">
            Disclosure: As an Amazon Associate I earn from qualifying purchases. This page contains affiliate links.
          </div>
        </div>
      </header>

      <main className="wrap">
        {products.map((section) => (
          <section key={section.slug} className="section">
            <div className="section-head">
              <div>
                <h2>{section.title}</h2>
                <p>{section.strapline}</p>
              </div>
              <div className="why">Why this category: {section.why}</div>
            </div>

            <div className="grid">
              {section.choices.map((choice) => (
                <article key={choice.product} className="card">
                  <div className="card-top">
                    <span className="badge">{choice.badge}</span>
                    <span className="pick-name">{choice.name}</span>
                  </div>
                  <h3>{choice.product}</h3>
                  <p>{choice.summary}</p>
                  <ul>
                    {choice.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a href={choice.amazonUrl} target="_blank" rel="noreferrer sponsored">
                    View on Amazon
                  </a>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
