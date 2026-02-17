import './AreasOfFocus.css'

function AreasOfFocus() {
  return (
    <section className="areas-of-focus">
      <div className="areas-container">
        <div className="areas-content">
          <h2>Area of Focus</h2>
          <p className="areas-intro">
            Africa CSID: Driving Peace, Economic Empowerment, and Climate Action with Governance 
            and Gender-Responsive Solutions. At the Africa Centre for Sustainable and Inclusive 
            Development (Africa CSID), our work is centered around three core pillars supported by 
            two critical enablers—governance and gender-responsive solutions.
          </p>
          <div className="focus-items">
            <div className="focus-item">
              <div className="focus-icon"><i className="fas fa-dove"></i></div>
              <h3>Peace and Conflict Transformation</h3>
              <p>
                Seeks to build resilience in conflict contexts by developing and strengthening 
                relevant architectures for peace to address conflict and promote sustainable peace.
              </p>
            </div>
            <div className="focus-item">
              <div className="focus-icon"><i className="fas fa-hand-holding-usd"></i></div>
              <h3>Economic Empowerment</h3>
              <p>
                Focuses on improving the communities' productivity and self-sufficiency through 
                education, training and skills development, and exploiting economic opportunities.
              </p>
            </div>
            <div className="focus-item">
              <div className="focus-icon"><i className="fas fa-leaf"></i></div>
              <h3>Climate Change</h3>
              <p>
                Focuses on increasing resilience of the target population to the impacts of climate 
                change, engaging the communities in emission reduction initiatives.
              </p>
            </div>
          </div>
        </div>
        <div className="areas-images">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&q=80" alt="Training session" />
          <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop&q=80" alt="Community impact" />
        </div>
      </div>
    </section>
  )
}

export default AreasOfFocus
