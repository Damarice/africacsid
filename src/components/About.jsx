import './About.css'

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About the Organization</h2>
          <p>
            The Africa Centre for Sustainable and Inclusive Development (Africa CSID) is a leading 
            African NGO registered in Kenya, dedicated to supporting marginalized communities across 
            the continent. Guided by its mission, Africa CSID addresses marginalization through two 
            key dimensions: geographical context and population context.
          </p>
          <p>
            The geographical context focuses on country-specific classifications of hardship areas, 
            identifying regions that face significant challenges. Meanwhile, the population context 
            utilizes global indices and parameters to identify vulnerable and marginalized groups, 
            ensuring targeted and impactful interventions.
          </p>
          <p>
            Africa CSID is committed to fostering sustainable development and inclusivity, working 
            tirelessly to uplift underserved communities and create lasting change.
          </p>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80" alt="Program participants" />
        </div>
      </div>
    </section>
  )
}

export default About
