import styled from "styled-components";
import usersImg from "../../img/Users.jpg";

export const UserErrorText = styled.p`
  font-size: 28px;
  color: #000000;
`;

export const SortButton = styled.button`
width: 300px;
height: 62px;
  left: 21px;
  top: 268px;
  background: #040f25;
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 24px;
  letter-spacing: -0.003em;
  color: #ffffff;
  margin-top: 10px;
  margin-left: 10px;
  transition: all 0.5s;
  &:hover {
    color: #000000;
    background: #dadde1;
`;

export const UserDiv = styled.div`
  background-image: url(${usersImg});
  min-height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserDivItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
  gap: 14px;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 100px;
`;

export const UserTitleText = styled.p`
  font-size: 35px;
  font-weight: 600;
  color: #ffffff;
`;

export const UserText = styled.p`
  font-size: 28px;
  color: #ffffff;
`;

export const UserLink = styled.a`
  font-size: 28px;
  color: #ffffff;
`;