import './NewsArticles.css'

function NewsArticles() {
  const articles = [
    {
      title: 'Strengthening Peace Architectures in Conflict Zones',
      date: 'October 14, 2024',
      excerpt: 'Africa CSID continues to build resilience in conflict contexts by developing and strengthening relevant architectures for sustainable peace across the continent.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&q=80'
    },
    {
      title: 'Economic Empowerment Through Skills Development',
      date: 'April 17, 2024',
      excerpt: 'Our latest initiative focuses on improving community productivity and self-sufficiency through comprehensive education and training programs.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop&q=80'
    },
    {
      title: 'Climate Resilience in Marginalized Communities',
      date: 'February 1, 2024',
      excerpt: 'Africa CSID engages communities in emission reduction initiatives while increasing their resilience to climate change impacts.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80'
    }
  ]

  return (
    <section className="news-articles">
      <div className="news-container">
        <div className="news-header">
          <h2>Latest News & Articles</h2>
          <button className="view-all-btn">VIEW ALL</button>
        </div>
        <p className="news-subtitle">
          Watch our latest blogs covering compelling topics relevant to sustainable development 
          and inclusive growth across Africa.
        </p>
        <div className="news-grid">
          {articles.map((article, index) => (
            <div key={index} className="news-card">
              <img src={article.image} alt={article.title} />
              <div className="news-content">
                <span className="news-date">{article.date}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <a href="#" className="read-more">Read more <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsArticles
