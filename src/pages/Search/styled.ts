import styled from "styled-components";

export const SearchUsersText = styled.p`
  font-size: 22px;
  color: #ffffff;
`;

export const SearchDivButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 22px;
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
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.003em;
  color: #ffffff;
  transition: all 0.5s;
  &:hover {
    color: #000000;
    background: #dadde1;
`;

export const SearchTitleText = styled.p`
  font-size: 26px;
  font-weight: 600;
  color: #ffffff;
`;

export const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchDivSort = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  gap: 12px;
`;

export const SearchDivSortButton = styled.div`
  display: flex;
  gap: 14px;
`;

export const SearchDivUsers = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const SearchDivUsersItem = styled.p`
  font-size: 22px;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  &:hover { text-decoration: underline; }
`;

export const AvatarUsers = styled.img`
height: 50px;
width: 50px;
border-radius: 100%;
`;