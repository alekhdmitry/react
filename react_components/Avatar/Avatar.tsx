import React, { Component } from 'react';
import { translate } from 'react-i18next';
import classNames from 'classnames/bind';
const s = require('./styles.scss');
const cls = classNames.bind(s);
const defaultAvatar = require('./user.svg');

@translate()
export default class Avatar extends Component<Props> {
  static defaultProps = {
    size: 'normal',
    alt: null,
    src: defaultAvatar
  };

  render() {
    const { size, src, loading, alt, center, className, onClick, inline, t } = this.props;
    const avatarAlt = alt ? alt : t('components.Atoms.Avatar.avatar-alt');

    const classes = cls({
      [`${className}`]: !!className,
      'avatar': true,
      ['avatar-' + size]: true,
      'avatar-loading': loading,
      'avatar-center': center,
      'avatar-inline': inline,
      'avatar-clickable': !!onClick,
    });

    return (
      <div onClick={onClick}
           className={classes}>
        <img className={`${s['avatar-img']} ${size}`}
             src={src ? src : defaultAvatar}
             alt={avatarAlt}
        />
      </div>
    );
  }
}

interface Props {
  size?: string;
  src?: string;
  alt?: string;
  loading?: boolean;
  center?: boolean;
  className?: string;
  onClick?: (values: any) => void;
  inline?: boolean;

  t?(key: string): string;
}
