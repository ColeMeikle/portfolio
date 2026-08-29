import './App.css'

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-name">Cole Meikle</div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('experience')}>Experience</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('about')}>About</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <h1>Cole Meikle</h1>
        <p className="hero-subtitle">Second-year <strong>Software Engineering</strong> student at the <strong>University of Waterloo</strong> with recent industry experience as an Associate Software Developer at <strong>AltaML</strong>, building LLM-backed document pipelines and full-stack web systems. 
          <br></br>
          Seeking a <strong>Winter 2027</strong> internship.
        </p>
        <div className="hero-links">
          <a href="https://github.com/ColeMeikle" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/cole-meikle-378842372/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2 className="section-header">Experience</h2>

        <div className="experience-item">
          <h3>Associate Software Developer — AltaML</h3>
          <p className="experience-time">May 2026 - Aug 2026</p>
          <ul>
            <li>Built click-to-source highlighting for LLM-extracted DOCX fields by assigning <strong>positional anchor ids</strong> across a <strong>Python</strong> extractor and <strong>React</strong> previewer, cutting reviewer verification time by over <strong>90%</strong>.</li>
            <li>Optimized a document-anchoring pipeline using a precomputed comparison field to cut matching from <strong>quadratic</strong> to <strong>linear</strong> time, reducing latency from <strong>1.2s</strong> to <strong>59ms</strong> at scale.</li>
            <li>Designed and shipped a <strong>prompt-injection defense</strong> for an LLM document-review pipeline, fencing untrusted input with <strong>per-run random delimiters</strong> and flagging instruction-like input on every judged check.</li>
            <li>Diagnosed and fixed four classes of numeric-display bugs causing reviewers to see conflicting values between the UI and generated reports, raising checklist accuracy from <strong>46%</strong> to <strong>94%</strong>.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Freelance Coding Annotator — DataAnnotation</h3>
          <p className="experience-time">June 2025 - Present</p>
          <ul>
            <li>Contributed to human-in-the-loop learning pipelines to improve large language model (LLM) performance on both coding and conversational benchmarks.</li>
            <li>Designed test cases and rubrics to evaluate various LLMs' performances on complex tasks.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>UW Orbital — Firmware &amp; Ground Station</h3>
          <p className="experience-time">Sept 2025 - Jan 2026</p>
          <ul>
            <li>Contributed to low-level satellite firmware and the ground station backend for a student cubesat, handling requests and transmitting photos.</li>
            <li>Recreated the project database using <strong>Alembic</strong> and schema files to make schema changes easy and synced across 30+ contributors.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="section-header">Projects</h2>

        <div className="project-section" id="goosemarket">
          <div className="project-section-inner">
            <div className="project-image" id="goosemarket-image">Image</div>
            <div className="project-content">
              <h3>Goosemarket</h3>
              <p>Created as a project for a university course, Goosemarket is a full-stack prediction website, which enables users to create events, then bet against other users on the outcome. Odds are automatically calculated using formulas which consider the total amount bet on each outcome. 
                <br></br><br></br>
                The frontend was created using <strong>React</strong>, while the backend was created using <strong>Python</strong> and <strong>Flask</strong>. Optimized database requests to <strong>Supabase</strong> using RPCs to lower latency from 3+ seconds to under 1 second.
              </p>
              <div className="hero-links">
                <a href="https://goosemarket.vercel.app/dashboard" target="_blank" rel="noopener noreferrer">View project</a>
              </div>
            </div>
          </div>
        </div>

        

        <div className="project-section" id="lumen">
          <div className="project-section-inner">
            <div className="project-image" id="lumen-image">Image</div>
            <div className="project-content">
              <h3>Lumen</h3>
              <p>Developed for Deltahacks 12, Lumen is an AI voice assistant that allows users to use their voice to interact with the web and ask questions about their screen. Users can scroll, zoom, open new tabs, search, click links, ask for help finding something on a page, or help identifying what a page element is.</p>
              <br></br>
              <p>I implemented both <strong>Speech-To-Text</strong> and <strong>Text-To-Speech</strong> functionality using Google's webkit and ElevenLabs APIs, integrating Gemini to convert requests to a JSON format that was actionable. The extension was nearly entirely coded using <strong>JavaScript</strong></p>
            </div>
          </div>
        </div>

        <div className="project-section" id="nsigram">
          <div className="project-section-inner">
            <div className="project-image" id="nsigram-image">Image</div>
            <div className="project-content">
              <h3>NSIgram</h3>
              <p>Designed and built a full-stack social messaging application using <strong>Java</strong>, implementing both frontend and backend logic with <strong>Vaadin</strong> and <strong>Spring Boot</strong>. The project required all UI components, server-side state management, and database interactions entirely in Java. To improve performance, I implemented lazy loading of chats and messages, along with multithreading to efficiently handle message retrieval.</p>
              <br></br>
              <p>The app enables users to create accounts with custom profile pictures and usernames, then create either private messages between users or public chats that are able to be joined by all users. </p>
              <div className="hero-links">
                <a href="https://nsigram.onrender.com/" target="_blank" rel="noopener noreferrer">View project</a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section" id="gamedev">
          <div className="project-section-inner">
            <div className="project-image" id="gamedev-image">Image</div>
            <div className="project-content">
              <h3>Game Development</h3>
              <p>Developed multiple games using Unity with extensive <strong>C#</strong> scripting, including a large-scale factory-building simulation developed over two months.</p><br></br>
              <p>Designed and implemented core systems such as a grid-based placement engine, modular crafting and recipe system, random resource generation, production chains inspired by Factorio, and save states. The architecture emphasized extensibility, allowing new items, recipes, and buildings to be added without any code changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="section-header">Skills</h2>
        <div className="skills-section">
          <h3>Languages</h3>
          <ul className="skills-list">
            <li>Python</li>
            <li>C/C++</li>
            <li>C#</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>SQL</li>
          </ul>
          <h3>Frameworks & Tools</h3>
          <ul className="skills-list">
            <li>Git</li>
            <li>Docker</li>
            <li>React</li>
            <li>PostgreSQL</li>
            <li>Flask</li>
            <li>Spring Boot</li>
            <li>Vaadin</li>
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-header">About Me!</h2>
        <p className="about-text">
          Other than being a 2A Software Engineering student at the University of Waterloo, I also enjoy trivia and sports.
          <br></br><br></br>
          You can frequently find me at the <strong>UW Quizbowl</strong> club, competing in trivia tournaments both locally and online. This is a continuation of my high school trivia experience, where I was able to win the 2025 Reach for the Top national championships. I love learning about a wide variety of topics to expand my knowledge, so let me know if you ever need a fun fact!
          <br></br><br></br>
          I also love both playing and watching sports. Right now, I'm training for a fall marathon, so I spend a lot of my free time going on nice long runs along the river. You can also find me on the volleyball, squash and pickleball courts at UW. I also love racing, especially Formula 1, which led me to modify a 1969 Volvo for racing and serve as its pitcrew at many races. There's a good chance I play and follow whatever your favourite sport is, so feel free to talk to me about it. (But my favourite will always be curling)
        </p>
      </section>
    </>
  )
}

export default App
