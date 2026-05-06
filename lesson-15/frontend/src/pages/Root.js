import {Outlet, redirect, useNavigation} from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

export function getAuthLoader(){
  const token = localStorage.getItem('token');
  return token;
}


export function tokenLoader(){
  return getAuthLoader();
}

export function checkAuthLoader(){
  const token = getAuthLoader();
  
  if(!token){
    return redirect('/auth');
  }
}
