import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const Main = styled.main`
  min-height: 100vh;
  padding-top: 80px; // Account for fixed header
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout; 