
import { NextPage } from 'next';
import Navbar from '@/lib/Navbar';
import Footer from "@/lib/Footer";

interface Props {
  children: React.ReactNode;
}

const LayoutuserPage: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer />
    </div>
  );
};

export default LayoutuserPage;