import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.5px;

  span {
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  z-index: 99;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, 
      rgba(255, 51, 102, 0),
      rgba(255, 51, 102, 0.5),
      rgba(51, 204, 255, 0.5),
      rgba(51, 204, 255, 0)
    );
  }
`;

const NavItem = styled(motion.div)`
  position: relative;
  
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    transition: color 0.3s ease;
    padding: 0.5rem 0;
    display: inline-block;
    
    &:hover {
      color: var(--primary-color);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled(motion.button)`
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  display: none;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownTrigger = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: var(--primary-color);
    
    svg {
      transform: rotate(180deg);
    }
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 200px;
  margin-top: 1rem;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: 1rem 0;
  z-index: 10;
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid rgba(0, 0, 0, 0.95);
  }
`;

const DropdownItem = styled(motion.div)`
  padding: 0.75rem 1.5rem;
  
  a {
    color: white;
    text-decoration: none;
    display: block;
    transition: all 0.3s ease;
    font-weight: 500;
    
    &:hover {
      color: var(--primary-color);
      transform: translateX(5px);
    }
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      hasDropdown: true,
      items: [
        { name: 'Web Design', path: '/services/web-design' },
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'Mobile Apps', path: '/services/mobile-apps' },
        { name: 'UI/UX Design', path: '/services/ui-ux-design' },
      ]
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerVariants = {
    visible: { y: 0 },
    hidden: { y: -100 }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };
  
  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 24 
      }
    }
  };

  return (
    <HeaderContainer 
      variants={headerVariants}
      initial="visible"
      animate="visible"
      style={{ 
        background: isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)',
        padding: isScrolled ? '0.7rem 2rem' : '1rem 2rem',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.2)' : 'none' 
      }}
    >
      <Logo
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <span>Ion</span>Site
        </Link>
      </Logo>

      <Nav>
        {navItems.map((item, index) => (
          item.hasDropdown ? (
            <DropdownContainer 
              key={item.name}
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <NavItem
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <DropdownTrigger>
                  {item.name}
                  <FiChevronDown 
                    style={{ 
                      transform: showServicesDropdown ? 'rotate(180deg)' : 'rotate(0deg)'
                    }} 
                  />
                </DropdownTrigger>
              </NavItem>
              <AnimatePresence>
                {showServicesDropdown && (
                  <DropdownMenu
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                  >
                    {item.items.map((subItem, subIndex) => (
                      <DropdownItem 
                        key={subItem.name}
                        variants={itemVariants}
                        transition={{ delay: subIndex * 0.05 }}
                      >
                        <Link to={subItem.path} onClick={() => setShowServicesDropdown(false)}>
                          {subItem.name}
                        </Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                )}
              </AnimatePresence>
            </DropdownContainer>
          ) : (
            <NavItem
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={item.path}>{item.name}</Link>
            </NavItem>
          )
        ))}
      </Nav>

      <MobileMenuButton 
        onClick={toggleMobileMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
      </MobileMenuButton>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileNav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              item.hasDropdown ? (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  style={{ textAlign: 'center' }}
                >
                  <h3 style={{ 
                    color: 'white', 
                    marginBottom: '1rem',
                    fontSize: '1.2rem',
                    background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>{item.name}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {item.items.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        to={subItem.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <NavItem
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                </NavItem>
              )
            ))}
          </MobileNav>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header; 