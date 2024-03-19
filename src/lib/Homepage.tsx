import { NextPage } from "next";

interface Props {}

const Homepage: NextPage<Props> = ({}) => {
  return (<section id="Home">
    <div className="grid lg:grid-cols-4 lg:grid-rows-2 grid-cols-1"></div>

  </section>);
};

export default Homepage;
