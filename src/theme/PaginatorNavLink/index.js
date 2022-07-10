import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
export default function PaginatorNavLink(props) {
  const {permalink, title, subLabel, isNext} = props;
  return (
    <Link
      className={clsx(
        'pagination-nav__link bg-black/60 shadow border-0',
        isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev',
      )}
      to={permalink}>
      {subLabel && <div className="tracking-widest uppercase pagination-nav__sublabel">{subLabel}</div>}
      <div className="pagination-nav__label">{title}</div>
    </Link>
  );
}
