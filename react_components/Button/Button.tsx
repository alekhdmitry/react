import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
const s = require('./ButtonStyle.scss');

interface IProps {
    href?: string;
    type?: string;
    style?: string;
    align?: string;
    size?: string;
    target?: string;
    block?: boolean;
    inline?: boolean;
    outline?: boolean;
    rounded?: boolean;
    uppercase?: boolean;
    disabled?: boolean;
    active?: boolean;
    children: any;
    onClick?: ((values: any) => void);
    bold?: boolean;
    special?: string;
}

export default class Button extends Component <IProps> {
    static propTypes = {
        href: PropTypes.string,
        type: PropTypes.oneOf(['button', 'reset', 'submit']),
        style: PropTypes.string,
        align: PropTypes.oneOf(['left', 'center', 'right']),
        size: PropTypes.oneOf(['small-btn', 'large-btn']),
        target: PropTypes.oneOf(['_blank', '_parent', '_self', '_top']),
        block: PropTypes.bool,
        inline: PropTypes.bool,
        outline: PropTypes.bool,
        rounded: PropTypes.bool,
        uppercase: PropTypes.bool,
        disabled: PropTypes.bool,
        active: PropTypes.bool,
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]),
        onClick: PropTypes.func,
        bold: PropTypes.bool,
        special: PropTypes.string
    };

    static defaultProps = {
        type: 'button',
        align: 'center',
        style: 'tertiary'
    };

    render() {
        const { type, active, target, rounded, align, disabled, block, inline, uppercase, style, outline, size, href, children, bold, special } = this.props;
        const settings = {
            onClick: this.props.onClick || null,
            type: href ? null : type,
            target: href ? target : null,
            href,
            disabled,
            role: href ? 'button' : null,
            className: (() => {
                return [
                    s.button,
                    s['button-' + style],
                    s['button-' + size],
                    s['button-' + align],
                    special && s[special],
                    active ? s['button-active'] : null,
                    uppercase ? s['button-uppercase'] : null,
                    rounded ? s['button-rounded'] : null,
                    disabled ? s['button-disabled'] : null,
                    block ? s['button-block'] : null,
                    inline ? s['button-inline'] : null,
                    outline ? s['button-outline'] : null,
                    bold ? s['button-bold'] : null
                ].filter(Boolean).join(' ');
            })()
        };

        return (
            href ? <a {...settings}>{children}</a> : <button {...settings}>{children}</button>
        );
    }
}