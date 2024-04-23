
import { NextPage } from 'next';
import Navbar from '@/lib/Navbar';
import Footer from "@/lib/Footer";
import { Toaster } from "@/components/ui/toaster";

interface Props {
  children: React.ReactNode;
}

const LayoutuserPage: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Toaster  />
      <Footer />
    </div>
  );
};

export default LayoutuserPage;