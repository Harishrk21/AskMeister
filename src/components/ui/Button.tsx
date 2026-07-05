import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

type Props = {
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: boolean;
  className?: string;
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  outline: 'btn-outline',
};

export const Button = ({
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  icon = false,
  className = '',
}: Props) => {
  const cls = `${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group inline-flex items-center justify-center ${cls}`}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={`group inline-flex items-center justify-center ${cls}`}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={`group inline-flex items-center justify-center ${cls}`}>
      {content}
    </button>
  );
};

export default Button;
