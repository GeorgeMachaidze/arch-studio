import styled from "styled-components";
import Project from "../sheared/Project";
import { useNavigate } from "react-router-dom";
import { DelSolMobile, TowerMobile, EdelweissMobile } from "@/assets";
import { Arrow } from "@/svg";

const Projects = () => {
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate("/portfolio");
  };
  return (
    <Section>
      <Title>Featured</Title>
      <List>
        <Project
          title="Project Del Sol"
          images={{
            mobile: DelSolMobile,
            tablet: DelSolMobile,
            desktop: DelSolMobile,
          }}
        />
        <Project
          title="228B Tower"
          images={{
            mobile: TowerMobile,
            tablet: TowerMobile,
            desktop: TowerMobile,
          }}
        />
        <Project
          title="Le Prototype"
          images={{
            mobile: EdelweissMobile,
            tablet: EdelweissMobile,
            desktop: EdelweissMobile,
          }}
        />
      </List>
      <ButtonBox onClick={navigationHandler}>
        <Text>See All</Text>
        <Arrow dark={false} />
      </ButtonBox>
    </Section>
  );
};
export default Projects;

const Section = styled.section`
  padding: 73px 32px 132px 32px;
`;

const Title = styled.h2`
  color: var(--dark);
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: -1.714px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 43px;
  row-gap: 23px;
`;
const ButtonBox = styled.button`
  padding: 25px 0 22px 0;
  display: flex;
  column-gap: 24px;
  align-items: center;
  justify-content: center;
  background-color: var(--dark);
  margin-top: 31px;
  border: none;
  width: 100%;
`;

const Text = styled.h3`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  color: white;
`;
