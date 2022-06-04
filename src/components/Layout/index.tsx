import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ border: '2px dashed black', padding: 10 }}>
      Admin View
      <Outlet />
    </div>
  );
};

export default Layout;
