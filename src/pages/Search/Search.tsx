import { RootState } from "../../store/store";
import { useGetUsersQuery } from "../../store/reducer";
import { setParam } from "../../store/action";
import { baseQueryResponse } from "../../field";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-ts-loaders";

import {
  SearchButton,
  SearchDivUsers,
  SearchUsersText,
  SearchTitleText,
  SearchDiv,
  SearchDivSort,
  SearchDivSortButton,
  SearchDivButton,
  AvatarUsers,
  SearchDivUsersItem,
} from "./styled";

function Search({ valueInput }: { valueInput: string }): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let params: string = useSelector(
    (state: RootState) => state.sort.orderSort.param
  );

  let page: number = useSelector(
    (state: RootState) => state.sort.orderSort.page
  );

  const login: string = valueInput;

  const { data, isError, isLoading } = useGetUsersQuery<baseQueryResponse>({
    login,
    params,
    page,
  });

  if (isLoading) {
    return <Loader color="#edeef3" />;
  }

  let users = data.items;
  if (users.length === 0) {
    return <SearchUsersText>Пользователь не существует!</SearchUsersText>;
  }

  function prevPage() {
    if (page === 1) {
      return;
    }
    --page;
    dispatch(setParam(page));
  }
  function nextPage() {
    ++page;
    dispatch(setParam(page));
  }

  return (
    <>
      {isError ? (
        <SearchTitleText>
          Слишком много запросов, попробуйте позже или перезагрузите страницу.
        </SearchTitleText>
      ) : (
        <SearchDiv>
          <SearchDivSort>
            <SearchDivSortButton>
              <SearchButton
                onClick={() => {
                  params = "desc";
                  dispatch(setParam(params));
                }}
              >
                По возрастанию кол-ва репозиториев
              </SearchButton>
              <SearchButton
                onClick={() => {
                  params = "asc";
                  dispatch(setParam(params));
                }}
              >
                По убыванию кол-ва репозиториев
              </SearchButton>
            </SearchDivSortButton>
          </SearchDivSort>
          <SearchDivUsers>
            {users.map((user) => (
              <SearchDivUsersItem
                key={user.id}
                onClick={() => {
                  navigate(`/user/${user.login}`);
                }}
              >
                <AvatarUsers src={user.avatar_url} alt={user.avatar_url} />
                {user.login}
              </SearchDivUsersItem>
            ))}
          </SearchDivUsers>
          <SearchDivButton>
            <SearchButton onClick={prevPage}>Предыдущая страница</SearchButton>
            <SearchButton onClick={nextPage}>Следующая страница</SearchButton>
          </SearchDivButton>
        </SearchDiv>
      )}
    </>
  );
}

export default Search;
