import { HomeBanner } from "@/components";
import { paramourMobaile } from "@/assets";

const Home = () => {
  return (
    <>
      <HomeBanner
        title="Project Paramour"
        description="Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture."
        buttonText="See Our Portfolio"
        to="/portfolio"
        images={{
          mobile: paramourMobaile,
          tablet: paramourMobaile,
          desktop: paramourMobaile,
        }}
      />
    </>
  );
};

export default Home;
