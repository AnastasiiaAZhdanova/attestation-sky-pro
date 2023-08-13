import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../../store/reducer";
import { baseQueryResponse } from "../../field";
import Loader from "react-ts-loaders";

import {
  UserText,
  UserDiv,
  UserDivItem,
  Image,
  UserLink,
  UserTitleText,
  UserErrorText,
} from "./styled";

function UserPage(): JSX.Element {
  const { login } = useParams();

  let name = "";

  if (login) {
    name = login;
  }

  const { data, isLoading } = useGetUserQuery<baseQueryResponse>(name);

  if (isLoading) {
    return <Loader color="#edeef3" />;
  }

  if (!isLoading && data === undefined) {
    return <UserErrorText>Упс, что-то пошло не так! Попробуй еще раз...</UserErrorText>;
  }
  let user = data.items[0];

  return (
    <UserDiv>
      <UserDivItem>
        <Image src={user.avatar_url} alt="" />
        <UserTitleText>{user.login}</UserTitleText>
        <UserText>Количество репозиториев: {user.repos_url.length}</UserText>
        <UserText>
          <UserLink href={user.html_url}> {user.html_url}</UserLink>
        </UserText>
      </UserDivItem>
    </UserDiv>
  );
}

export default UserPage;
