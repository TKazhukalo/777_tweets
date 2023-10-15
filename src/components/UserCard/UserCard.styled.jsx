import styled from "styled-components";
import backgroundImage from "../../img/messages.png";
import logo from "../../img/logo.svg";

export const UserCardContainer = styled.div`
  position: relative;
  width: 380px;
  height: 283px;
  padding-top: 178px;
  border-radius: 20px;
  background-image: url(${logo}), url(${backgroundImage}),
    linear-gradient(115deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 76px 22px, 308px 168px, auto;
  background-repeat: no-repeat;
  background-position: 20px 20px, 36px 28px, center;
  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
`;

export const CardLine = styled.div`
  position: absolute;
  top: 214px;
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 2.5777px 0px #fbf8ff inset,
    0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
    0px -1.71846px 3.43693px 0px #ae7be3 inset;
`;
export const Avatar = styled.div`
  position: relative;
  margin: 0px auto;
  width: 82px;
  height: 82px;
`;
export const AvatarCircle = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 82px;
  height: 82px;
`;
export const AvatarImg = styled.img`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 0;
  background-color: #5736a3;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
export const Tweets = styled.p`
  margin-top: 16px;
  text-align: center;
  color: #ebd8ff;
  font-size: 20px;
  text-transform: uppercase;
`;
export const Followers = styled.p`
  margin-top: 16px;
  text-align: center;
  color: #ebd8ff;
  font-size: 20px;
  text-transform: uppercase;
`;
export const Button = styled.button`
  display: block;
  margin: 26px auto 0px;
  width: 196px;
  padding: 14px 28px;
  border-radius: 10.311px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  color: #373737;
  font-weight: 600;
  text-transform: uppercase;
`;