import './Approach.css'

function Approach() {
  const approaches = [
    {
      icon: 'fa-users',
      title: 'Peer-to-Peer Support',
      description: 'Building strong networks where communities learn and grow together'
    },
    {
      icon: 'fa-handshake',
      title: 'Trust-Based Partnerships',
      description: 'Fostering collaborative relationships built on mutual respect and shared goals'
    },
    {
      icon: 'fa-chart-line',
      title: 'Evidence-Based Solutions',
      description: 'Implementing data-driven strategies for measurable and sustainable impact'
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Capacity Building',
      description: 'Empowering communities through skills development and training programs'
    }
  ]

  return (
    <section className="approach">
      <div className="approach-container">
        <h2>Our Approach</h2>
        <p className="approach-subtitle">
          At Africa CSID, we work with communities to generate and implement evidence-based 
          solutions. We empower through peer-to-peer support, networking, trust-based partnerships, 
          and skills and capacity building.
        </p>
        <div className="approach-grid">
          {approaches.map((item, index) => (
            <div key={index} className="approach-card">
              <div className="approach-icon">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach