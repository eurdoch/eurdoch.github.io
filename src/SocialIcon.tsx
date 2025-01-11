import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SocialIconProps {
  icon: IconDefinition;
  href: string;
  color?: string;
  hoverColor?: string;
  size?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '4x';
  className?: string;
  ariaLabel?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  icon,
  href,
  size = "lg",
  className = "",
  ariaLabel,
  onClick
}) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer ${className}`}

      aria-label={ariaLabel || `Visit our ${icon.iconName} page`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} size={size} />
    </a>
  );
};

export default SocialIcon;

