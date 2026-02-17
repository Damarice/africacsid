import { useState, useEffect, useRef } from 'react'
import './AtAGlance.css'

function AtAGlance() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    { number: 100, label: 'Community Projects', suffix: '+' },
    { number: 15, label: 'Countries Reached', suffix: '' },
    { number: 50000, label: 'Lives Impacted', suffix: '+' },
    { number: 200, label: 'Training Programs', suffix: '+' },
    { number: 75, label: 'Partner Organizations', suffix: '+' },
    { number: 30, label: 'Peace Initiatives', suffix: '' },
    { number: 500, label: 'Leaders Trained', suffix: '+' },
    { number: 25, label: 'Climate Projects', suffix: '' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className="at-a-glance" ref={sectionRef}>
      <div className="glance-container">
        <h2>Our Impact at a Glance</h2>
        <p className="glance-subtitle">
          Africa CSID has made significant strides in supporting marginalized communities 
          across the continent through targeted interventions and sustainable development initiatives.
        </p>
        <div className="glance-grid">
          {stats.slice(0, 4).map((stat, index) => (
            <StatItem key={index} {...stat} isVisible={isVisible} delay={index * 100} />
          ))}
        </div>
        <div className="glance-grid secondary">
          {stats.slice(4).map((stat, index) => (
            <StatItem key={index} {...stat} isVisible={isVisible} delay={(index + 4) * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatItem({ number, label, suffix, isVisible, delay }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = number / steps
    let current = 0

    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        current += increment
        if (current >= number) {
          setCount(number)
          clearInterval(counter)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, number, delay])

  const formatNumber = (num) => {
    if (num >= 1000) {
      return num.toLocaleString()
    }
    return num
  }

  return (
    <div className="glance-item">
      <div className="glance-number">
        {formatNumber(count)}{suffix}
      </div>
      <div className="glance-label">{label}</div>
    </div>
  )
}

export default AtAGlance