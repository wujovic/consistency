import Hero from "../components/Hero";
import ShowUp from "../components/ShowUp";
import ConInt from "../components/ConInt";
import Potential from "../components/Potential";

function Home() {
  return (
    <div>
      <main className="">
        <Hero />
        <section className="bg-[#2B2D42] px-20 xl:px-[10rem] py-5 sm:py-[3rem]">
          {/* Group 1 */}
          <ShowUp />
          <div className="border opacity-10 border-[#edf2f4] my-10"></div>
          {/* Group 2 */}
          <ConInt />
          <div className="border opacity-10 border-[#edf2f4] my-10"></div>
          {/* Group 3 */}
          <Potential />
        </section>
      </main>
    </div>
  );
}

export default Home;
