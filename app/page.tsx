import { WaitlistForm } from "@/app/components/WaitlistForm";

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>XITLab</h1>
        <p className="tagline">We build tutor agents that people actually want.</p>
        
        <h2 className="problem-title">Problem</h2>
        <div className="problem-statement">
            <p>Imagine if every single learner on this planet had access to a tutor who was brilliant… infinitely patient… inspiring… and who spoke their language.

That kind of teacher is rare. And no matter how passionate they are, they simply cannot personally tutor all 8 billion of us.</p>
            
            <p style={{marginTop: '16px'}}>Now, AI has promised to fill this gap. And yes, today’s tools can generate answers. But they don’t teach, they still fall short of becoming <em>tutor agents people truly want.</em> They don’t win our trust. They stumble on pedagogy. And most importantly, they’re missing that spark of <em>character</em> that makes learning feel human.</p>
        </div>
      </header>

      {/* NEW WAITLIST FORM SECTION */}
      <WaitlistForm />

      <section className="experiments">
          <h2>Our Experiments</h2>
          
          <div className="experiment-grid">
              <a href="https://lpdp-prep.vercel.app/" className="experiment-card" target="_blank" rel="noopener noreferrer">
                  <h3 className="experiment-title">Scholarship Interview Prep<span className="launch-indicator">→</span></h3>
                  <p className="experiment-description">
                      Transform your scholarship essays into actionable talking points that actually help you prepare for interviews with confidence.
                  </p>
              </a>

              <a href="https://v2.wiyomi.com" className="experiment-card" target="_blank" rel="noopener noreferrer">
                  <h3 className="experiment-title">Wiyomi<span className="launch-indicator">→</span></h3>
                  <p className="experiment-description">
                      Convert YouTube videos into interactive courses complete with quizzes, AI tutoring, and mindmaps for deeper learning.
                  </p>
              </a>

              <a href="https://berdaya.ai" className="experiment-card" target="_blank" rel="noopener noreferrer">
                  <h3 className="experiment-title">Berdaya.ai<span className="launch-indicator">→</span></h3>
                  <p className="experiment-description">
                      A curated repository of summaries from the world's leading AI speakers and thought leaders.
                  </p>
              </a>
          </div>
      </section>

      <footer>
          <p>XITLab — Exploring the future of educational technology</p>
      </footer>
    </div>
  );
}