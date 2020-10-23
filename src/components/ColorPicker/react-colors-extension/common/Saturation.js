import React, { Component, PureComponent } from 'react'
import reactCSS from 'reactcss'
import * as saturation from '../helpers/saturation'

export class Saturation extends (PureComponent || Component) {
    componentWillUnmount() {
        this.unbindEventListeners()
    }

    handleChange = (e) => {
        const change = saturation.calculateChange(e, this.props.direction, this.props.hsl, this.container)
        change && typeof this.props.onChange === 'function' && this.props.onChange(change, e)
    }

    handleMouseDown = (e) => {
        this.handleChange(e)
        window.addEventListener('mousemove', this.handleChange)
        window.addEventListener('mouseup', this.handleMouseUp)
    }

    handleMouseUp = () => {
        this.unbindEventListeners()
    }

    unbindEventListeners() {
        window.removeEventListener('mousemove', this.handleChange)
        window.removeEventListener('mouseup', this.handleMouseUp)
    }

    render() {
        const { direction = 'horizontal' } = this.props

        console.log(this.props.hsl.s);

        const styles = reactCSS({
            'default': {
                saturation: {
                    absolute: '0px 0px 0px 0px',
                    borderRadius: this.props.radius,
                    boxShadow: this.props.shadow,
                },
                container: {
                    padding: '0 2px',
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem',
                    position: 'relative',
                    height: '0.5rem',
                    borderRadius: '0.5rem',
                },
                pointer: {
                    position: 'absolute',
                    top: '-0.5rem',
                    left: `${ (this.props.hsl.s * 100) }%`,
                },
                slider: {
                    marginTop: '1px',
                    width: '1.25rem',
                    borderRadius: '50%',
                    height: '1.25rem',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)',
                    background: '#fff',
                    transform: 'translateX(-0.5rem)',
                },
            },
            'vertical': {
                pointer: {
                    left: '0px',
                    top: `${ -((this.props.hsl.s * 100) / 360) + 100 }%`,
                },
            },
        }, { vertical: direction === 'vertical' })

        const hsl = this.props.hsl;
        const colorMaxLight = `hsl(${hsl.h}, 100%, 50%)`;

        return (
            <div style={ styles.saturation }>
                <div
                    className={ `saturation-${ direction }` }
                    style={ styles.container }
                    ref={ container => this.container = container }
                    onMouseDown={ this.handleMouseDown }
                    onTouchMove={ this.handleChange }
                    onTouchStart={ this.handleChange }
                >
                    <style>{ `
            .saturation-horizontal {
              background: linear-gradient(to right, #fff 0%, ${colorMaxLight} 100%);
              background: -webkit-linear-gradient(to right, #fff 0%,  ${colorMaxLight} 100%);
            }

            .saturation-vertical {
              background: linear-gradient(to top, #000 0%, #fff 100%);
              background: -webkit-linear-gradient(to top, #000 0%, #fff 100%);
            }
          ` }</style>
                    <div style={ styles.pointer }>
                        { this.props.pointer ? (
                            <this.props.pointer { ...this.props } />
                        ) : (
                            <div style={ styles.slider } />
                        ) }
                    </div>
                </div>
            </div>
        )
    }
}
