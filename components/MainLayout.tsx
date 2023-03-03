import PostList from "./PostList";
import Sidebar from "./Sidebar";

function MainLayout() {
  return (
    <div className="max-w-7xl mx-auto  flex flex-col md:flex-row gap-x-10">
      <div className="w-[100%] md:w-[65%] order-2 nd:order-1">
        <PostList />
      </div>
      <div className="flex-1 order-1 md:order-2">
        <Sidebar />
      </div>
    </div>
  );
}

export default MainLayout;
