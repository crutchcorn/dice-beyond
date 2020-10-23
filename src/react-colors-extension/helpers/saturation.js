export const calculateChange = (e, direction, hsl, container) => {
    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight
    const x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX
    const y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY
    const left = x - (container.getBoundingClientRect().left + window.pageXOffset)
    const top = y - (container.getBoundingClientRect().top + window.pageYOffset)

    if (direction === 'vertical') {
        let s
        if (top < 0) {
            s = 99
        } else if (top > containerHeight) {
            s = 0
        } else {
            const percent = -((top * 100) / containerHeight) + 100
            s = (percent / 100)
        }

        if (hsl.s !== s) {
            return {
                h: hsl.h,
                s,
                l: hsl.l,
                a: hsl.a,
                source: 'hsl',
            }
        }
    } else {
        let s
        if (left < 0) {
            s = 0
        } else if (left > containerWidth) {
            s = 99
        } else {
            const percent = (left * 100) / containerWidth
            s = (percent / 100)
        }

        if (hsl.s !== s) {
            return {
                h: hsl.h,
                s,
                l: hsl.l,
                a: hsl.a,
                source: 'hsl',
            }
        }
    }
    return null
}
