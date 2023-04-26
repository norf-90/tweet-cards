import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 380px;
  height: 460px;

  margin: 30px auto;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  overflow: hidden;

  :hover h3 {
    transform: translate(-50%) scale(150%);
  }
`;

export const Logo = styled.img`
  width: 76px;
  height: 22px;
  margin: 20px 0 0 20px;
`;

export const DecorativeImage = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
  width: 308px;
  height: 168px;
`;

export const Line = styled.div`
  position: absolute;
  top: 214px;
  left: 0;
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const OuterCircle = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const InnerCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 62;
  height: 62px;
  border-radius: 50%;
  background: #5736a3;
  transform: translateX(-50%) translateY(-50%);
  overflow: hidden;
`;
export const Icon = styled.img`
  width: 62;
  height: 62px;
`;

export const TextContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 284px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  :first-of-type {
    padding: 0 0 16px;
  }
  :last-of-type {
    padding: 0 0 26px;
  }
`;

export const Button = styled.button`
  width: 196px;
  padding: 14px 0;

  text-align: center;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  color: #373737;

  background-color: ${props => (props.following ? '#5CD3A8' : '#EBD8FF')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
`;

export const UserName = styled.h3`
  position: absolute;
  font-size: 15px;
  color: #ffffff;
  top: 155px;
  left: 50%;
  font-weight: 600;
  text-shadow: 3px 3px 4px #000000;

  transform: translate(-400%) scaleX(50%);
  transition: transform 200ms linear;
`;
