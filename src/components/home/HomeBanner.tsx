import styled, { css } from "styled-components";
import { Arrow } from "@/svg";
import { useNavigate } from "react-router-dom";

type PropsType = {
  title: string;
  buttonText: string;
  to: string;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  description?: string;
};

const HomeBanner: React.FC<PropsType> = ({
  title,
  description,
  buttonText,
  to,
  images: { mobile, tablet, desktop },
}) => {
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate(to);
  };
  return (
    <Wrapper mobile={mobile} tablet={tablet} desktop={desktop}>
      <TextBox>
        <BannerTitle>{title}</BannerTitle>
        {description ? (
          <BannerDescription>{description}</BannerDescription>
        ) : null}
        <ButtonBox onClick={navigationHandler}>
          <Text>{buttonText}</Text>
          <Arrow dark={false} />
        </ButtonBox>
      </TextBox>
    </Wrapper>
  );
};

export default HomeBanner;

type WrapperProps = {
  mobile: string;
  tablet: string;
  desktop: string;
};

const Wrapper = styled.div(
  ({ mobile, tablet, desktop }: WrapperProps) => css`
    width: 100%;
    height: fit-content;
    background-image: url(${mobile});
  `
);
const TextBox = styled.div`
  width: 100%;
  padding: 116px 32px 110px 32px;
  background-color: rgba(0, 0, 0, 0.3499999940395355);
`;

const BannerTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -1.2px;
  color: white;
`;

const BannerDescription = styled.h3`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 11px;
`;

const ButtonBox = styled.button`
  padding: 25px 31px 22px 31px;
  display: flex;
  column-gap: 24px;
  align-items: center;
  background-color: var(--dark);
  margin-top: 31px;
  border: none;
`;

const Text = styled.h3`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  color: white;
`;