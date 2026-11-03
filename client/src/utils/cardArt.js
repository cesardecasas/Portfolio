const PALETTES = [
    ['#12202e', '#0c121c', '#241230'],
    ['#0e2a26', '#0c121c', '#142c3a'],
    ['#2a1420', '#0c121c', '#10202a'],
    ['#1c1030', '#0c121c', '#0e2a26'],
    ['#0a1c22', '#0c121c', '#1c1030'],
    ['#241230', '#0c121c', '#12202e'],
]

const hashString = (str) => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i)
        hash |= 0
    }
    return Math.abs(hash)
}

export const glyphFor = (title) => {
    const words = title.replace(/[^a-zA-Z0-9 ]/g, '').split(' ').filter(Boolean)
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
    return (words[0][0] + words[1][0]).toUpperCase()
}

const GRID_LINES = [
    'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
    'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
]

export const cardArtStyle = (title) => {
    const palette = PALETTES[hashString(title) % PALETTES.length]
    const art = `linear-gradient(135deg, ${palette[0]}, ${palette[1]} 55%, ${palette[2]})`
    return {
        backgroundImage: [art, ...GRID_LINES].join(', '),
        backgroundSize: 'auto, 24px 24px, 24px 24px',
    }
}
