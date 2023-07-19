import { HomeBanner } from "@/components";
import { paramourMobaile } from "@/assets";
import styled from "styled-components";

const Home = () => {
  return (
    <Main>
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
    </Main>
  );
};

export default Home;

const Main = styled.main`
  margin-top: 105px;
`;
