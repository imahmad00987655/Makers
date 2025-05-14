import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text' | 'gradient';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

interface StyledButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth: boolean;
  hasIcon: boolean;
  iconPosition: 'left' | 'right';
}

const getButtonStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return `
        background: var(--primary-color);
        color: white;
        border: none;
      `;
    case 'secondary':
      return `
        background: rgba(0, 0, 0, 0.8);
        color: white;
        border: none;
      `;
    case 'gradient':
      return `
        background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
        background-size: 200% auto;
        color: white;
        border: none;
        
        &:hover:not(:disabled) {
          background-position: right center;
          background-size: 200% auto;
        }
      `;
    case 'outline':
      return `
        background: transparent;
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
        
        &:hover:not(:disabled) {
          background: rgba(255, 51, 102, 0.05);
        }
      `;
    case 'text':
      return `
        background: transparent;
        color: var(--primary-color);
        border: none;
        padding: 0.5rem 1rem;
        
        &:hover:not(:disabled) {
          background: transparent;
          text-decoration: underline;
          transform: translateY(0);
          box-shadow: none;
        }
      `;
    default:
      return '';
  }
};

const getButtonSize = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return `
        padding: 0.5rem 1.2rem;
        font-size: 0.875rem;
      `;
    case 'medium':
      return `
        padding: 0.75rem 1.75rem;
        font-size: 1rem;
      `;
    case 'large':
      return `
        padding: 1rem 2.5rem;
        font-size: 1.125rem;
      `;
    default:
      return '';
  }
};

const StyledButton = styled(motion.button)<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  position: relative;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.5px;
  flex-direction: ${props => props.iconPosition === 'right' ? 'row-reverse' : 'row'};
  
  ${(props) => getButtonStyles(props.variant)}
  ${(props) => getButtonSize(props.size)}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  &:active:not(:disabled) {
    transform: translateY(-1px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
    pointer-events: none;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  onClick,
  disabled = false,
  type = 'button',
  className,
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}
      hasIcon={!!icon}
      iconPosition={iconPosition}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </StyledButton>
  );
};

export default Button; 