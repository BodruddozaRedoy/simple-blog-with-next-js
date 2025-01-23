'use client'; 

import { useRouter } from "next/navigation"; 

const NavbarClient = ({ isUserAuthenticated, LoginLink }) => {
  const router = useRouter();

  const handleProfile = () => {
    if (!isUserAuthenticated) {
      router.push('/login'); 
    } else {
      router.push('/profile'); 
    }
  };

  return (
    <div onClick={handleProfile} className="cursor-pointer">
      Profile
    </div>
  );
};

export default NavbarClient;
