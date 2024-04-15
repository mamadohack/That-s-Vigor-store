// "use client"
// import { NextPage } from "next";
// import { useEffect, useState } from "react";

// interface Props {}

// const Page: NextPage<Props> = ({}) => {
//   const [state, setstate] = useState(false);
//   let data ;
//   useEffect(() => {
//     const timer = setTimeout(() => {
//         data = 50;
//     }, 1000);
//   }, []);
  
//   //   if(!state){return <p>Loading .........</p>}
//   return <div>blog page here{data}</div>;
// };

// export default Page;


const Page = async({}) => {
    await new Promise((r,f)=>setTimeout(r, 3000))
  return <div>blog is here</div>
}

export default Page;
