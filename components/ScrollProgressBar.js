import { useEffect, useState } from 'react'

// Thin bar along the top of the page showing how far the reader has scrolled.
export default function ScrollProgressBar({ color = '#DE1D8D' }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const scrollable = scrollHeight - clientHeight
      setProgress(scrollable > 0 ? Math.min(100, (scrollTop / scrollable) * 100) : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-50 h-1"
      style={{ width: `${progress}%`, backgroundColor: color }}
    />
  )
}
