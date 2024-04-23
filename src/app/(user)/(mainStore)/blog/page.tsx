import Blogcard from "@/lib/blogcard";

const Page = async ({}) => {
  const response = await fetch("http://localhost:9000/blog", {
    cache: "no-store",
  });
  const blogData: Blogitem[] = await response.json();

  return (
    // <div>ddsq</div>
    <div className="md:px-10 px-5 lg:px-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mb-20">
      <div className=" col-span-1">
        {blogData.slice(0, 3).map((item: Blogitem, index) => (
          <Blogcard key={item.id} blogitem={item} />
        ))}
      </div>
      <div className="col-span-1">
        {" "}
        {blogData.slice(3, 6).map((item: Blogitem, index) => (
          <Blogcard key={item.id} blogitem={item} />
        ))}
      </div>
      <div className="col-span-1">
        {" "}
        {blogData.slice(6, 11).map((item: Blogitem, index) => (
          <Blogcard key={item.id} blogitem={item} />
        ))}
      </div>
    </div>
  );
};

export type Blogitem = {
  id: number;
  title: string;
  image: string;
  author: string;
  date: string;
};

export default Page;
