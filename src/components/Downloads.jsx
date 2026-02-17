import './Downloads.css'

function Downloads() {
  const downloads = [
    {
      title: 'AFRICA CSID STRATEGIC PLAN 2024-2028',
      type: 'PDF Document',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=550&fit=crop&q=80'
    },
    {
      title: 'ANNUAL REPORT 2023',
      type: 'PDF Document',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=550&fit=crop&q=80'
    },
    {
      title: 'PEACE & CONFLICT TRANSFORMATION GUIDE',
      type: 'PDF Document',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&h=550&fit=crop&q=80'
    },
    {
      title: 'CLIMATE ACTION FRAMEWORK',
      type: 'PDF Document',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=550&fit=crop&q=80'
    }
  ]

  return (
    <section className="downloads">
      <div className="downloads-container">
        <h2>Our Latest Publications</h2>
        <div className="downloads-grid">
          {downloads.map((item, index) => (
            <div key={index} className="download-card">
              <div className="download-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="download-info">
                <h3>{item.title}</h3>
                <span className="download-type">{item.type}</span>
                <button className="download-btn">
                  <i className="fas fa-download"></i> DOWNLOAD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Downloads
