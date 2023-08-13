import styled from "styled-components";
import mainImg from "../../img/Search.jpg";

export const MainDiv = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${mainImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const MainDivItem = styled.div`
  margin-top: 10vh;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`;

export const SearchButton = styled.button`
width: 300px;
height: 62px;
  left: 41px;
  top: 268px;
  background: #040f25;
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 24px;
  letter-spacing: -0.003em;
  color: #ffffff;
  transition: all 0.5s;
  &:hover {
    color: #000000;
    background: #dadde1;
`;

export const SearchInput = styled.input`
  border: none;
  border-bottom: 1px solid #d0cece;
  border-radius: 20px;
  width: 300px;
  height: 52px;
  left: 40.5px;
  top: 138px;
  padding-left: 42px;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 24px;
  letter-spacing: -0.003em;
  color: black;
  margin-right: 10px;
  &:hover {
    color: #000000;
    background: #FFFFFF;
`;