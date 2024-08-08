import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";

const DashboardLayout = ({ children }) => {
  return (
    <main className="flex w-full flex-row h-screen  ">
      {/* <Navbar /> */}
      {/* <div className="sectionContainer !flex-row !justify-between"> */}
      <Sidebar />
      <section className="mt-16 overflow-y-auto px-8 pt-4  w-full">
        {/* <section className="sectionContainer !flex-row gap-6 !h-[90vh] mt-16 !w-[94vw] rounded-md border  border-input mr-4 "> */}
        {children}
      </section>
      {/* </div> */}
    </main>
  );
};

export default DashboardLayout;
