import { NextPage } from "next";

interface Props {}

const Homepage: NextPage<Props> = ({}) => {
  return (
    <section id="Home">
      <div className="grid lg:grid-cols-4 grid-rows-4 grid-cols-2 min-h-screen gap-2 p-2">
        <div
          className="col-span-2 row-span-4"
          style={{
            backgroundImage: 'url("img/categories/category-1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        ></div>
        <div
          className="col-span-1 row-span-2"
          style={{
            backgroundImage: 'url("img/categories/category-2.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        ></div>
        <div
          className="col-span-1 row-span-2"
          style={{
            backgroundImage: 'url("img/categories/category-3.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        ></div>
        <div
          className="col-span-1 row-span-2"
          style={{
            backgroundImage: 'url("img/categories/category-4.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        ></div>
        <div
          className="col-span-1 row-span-2"
          style={{
            backgroundImage: 'url("img/categories/category-5.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Homepage;
