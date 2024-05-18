import PublicNav from "@/components/public-nav";

const layout = ({ children }) => {
  return (
    <div className="w-full h-screen">
      <div className="mb-0 lg:mb-10">
        <PublicNav />
      </div>
      <div className="w-full h-full">
        <div className="mx-auto max-w-7xl">{children}</div>
      </div>
    </div>
  );
};

export default layout;
