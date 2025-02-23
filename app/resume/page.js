"use client";

import Head from "next/head";

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Your Name - Resume</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <style jsx global>{`
        body {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          background: #f8f9fa;
          color: #333;
        }
        header {
          background: #343a40;
          color: #fff;
          padding: 2rem 0;
          text-align: center;
        }
        header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        header p {
          font-size: 1.2rem;
          margin-bottom: 0;
        }
        section {
          padding: 4rem 0;
        }
        .section-title {
          margin-bottom: 2rem;
          text-align: center;
          font-weight: bold;
        }
        .card {
          border: none;
          margin-bottom: 2rem;
        }
        .card-title {
          font-size: 1.5rem;
        }
        footer {
          background: #343a40;
          color: #fff;
          padding: 1rem 0;
          text-align: center;
        }
      `}</style>

      <header>
        <div className="container">
          <h1>Your Name</h1>
          <p>Professional Title or Tagline</p>
        </div>
      </header>

      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <p>
                Hello! I am [Your Name], a passionate professional specializing in [Your Field]. I bring expertise in [Your Skillset] and have a proven track record in delivering high-quality solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-light">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="row text-center">
            <div className="col-md-3 col-6">
              <div className="mb-3">
                <img src="https://via.placeholder.com/64" alt="Skill 1" className="img-fluid" />
              </div>
              <h5>Skill 1</h5>
            </div>
            <div className="col-md-3 col-6">
              <div className="mb-3">
                <img src="https://via.placeholder.com/64" alt="Skill 2" className="img-fluid" />
              </div>
              <h5>Skill 2</h5>
            </div>
            <div className="col-md-3 col-6">
              <div className="mb-3">
                <img src="https://via.placeholder.com/64" alt="Skill 3" className="img-fluid" />
              </div>
              <h5>Skill 3</h5>
            </div>
            <div className="col-md-3 col-6">
              <div className="mb-3">
                <img src="https://via.placeholder.com/64" alt="Skill 4" className="img-fluid" />
              </div>
              <h5>Skill 4</h5>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Job Title at Company</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Location | Date Range</h6>
                  <p className="card-text">
                    A brief description of your role and accomplishments in this position. Emphasize any projects or contributions that set you apart.
                  </p>
                </div>
              </div>
            </div>
            {/* Add more experience cards as needed */}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-light">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Project Thumbnail" />
                <div className="card-body">
                  <h5 className="card-title">Project Title</h5>
                  <p className="card-text">
                    Short description of the project, highlighting key technologies used and the impact or result.
                  </p>
                  <a href="#" className="btn btn-primary">View Details</a>
                </div>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>

      {/* Bootstrap JS with Popper */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}
