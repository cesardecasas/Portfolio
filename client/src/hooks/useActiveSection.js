import { useEffect, useState } from 'react'

const useActiveSection = (ids) => {
    const [active, setActive] = useState(ids[0])

    useEffect(() => {
        const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id)
                })
            },
            { rootMargin: '-20% 0px -70% 0px' }
        )

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [ids])

    return active
}

export default useActiveSection
