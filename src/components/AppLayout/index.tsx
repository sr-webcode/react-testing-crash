import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // no auth redirect to login
  // const navigate = useNavigate();

  useEffect(() => {
    // if (true) navigate('/login', { replace: true })
  }, []);

  return (
    <div>
      <div>sidenav</div>
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
