import PublicNav from "@/components/public-nav";

const layout = ({ children }) => {
  return (
    <div className="w-full h-screen">
      <div>
        <PublicNav />
      </div>
      <div className="w-full h-full">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
