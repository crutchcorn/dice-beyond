export const calculateChange = (e, direction, hsl, container) => {
    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight
    const x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX
    const y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY
    const left = x - (container.getBoundingClientRect().left + window.pageXOffset)
    const top = y - (container.getBoundingClientRect().top + window.pageYOffset)

    if (direction === 'vertical') {
        let l
        if (top < 0) {
            l = 99
        } else if (top > containerHeight) {
            l = 0
        } else {
            const percent = -((top * 100) / containerHeight) + 100
            l = (percent / 100)
        }

        if (hsl.l !== l) {
            return {
                h: hsl.h,
                s: hsl.s,
                l,
                a: hsl.a,
                source: 'hsl',
            }
        }
    } else {
        let l
        if (left < 0) {
            l = 0
        } else if (left > containerWidth) {
            l = 99
        } else {
            const percent = (left * 100) / containerWidth
            l = (percent / 100)
        }

        if (hsl.l !== l) {
            return {
                h: hsl.h,
                s: hsl.s,
                l,
                a: hsl.a,
                source: 'hsl',
            }
        }
    }
    return null
}
