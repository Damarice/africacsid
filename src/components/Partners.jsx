import { useEffect, useRef } from 'react'
import './Partners.css'

function Partners() {
  const scrollRef = useRef(null)

  const partners = [
    { name: 'UNDP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/UNDP_logo.svg/200px-UNDP_logo.svg.png' },
    { name: 'World Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/World_Bank_logo.svg/200px-World_Bank_logo.svg.png' },
    { name: 'African Union', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Emblem_of_the_African_Union.svg/150px-Emblem_of_the_African_Union.svg.png' },
    { name: 'USAID', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/USAID-Identity.svg/200px-USAID-Identity.svg.png' },
    { name: 'EU', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/150px-Flag_of_Europe.svg.png' },
    { name: 'GIZ', logo: 'https://via.placeholder.com/150x80?text=GIZ' },
    { name: 'DFID', logo: 'https://via.placeholder.com/150x80?text=DFID' },
    { name: 'UNESCO', logo: 'https://via.placeholder.com/150x80?text=UNESCO' }
  ]

  // Duplicate partners for seamless loop
  const allPartners = [...partners, ...partners]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollSpeed = 1

    const scroll = () => {
      scrollAmount += scrollSpeed
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0
      }
      scrollContainer.scrollLeft = scrollAmount
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="partners">
      <div className="partners-container">
        <h2>Our Partners</h2>
        <p>Working together with leading organizations to create meaningful impact</p>
        <div className="partners-scroll-wrapper">
          <div className="partners-logos" ref={scrollRef}>
            {allPartners.map((partner, index) => (
              <div key={index} className="partner-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners