import Header from '../Header/Header';
import type { LayoutProps } from './Layout.props';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
