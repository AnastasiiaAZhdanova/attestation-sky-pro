import { useState, useRef } from "react";
import Search from "../Search/Search";

import { MainDiv, MainDivItem, SearchInput, SearchButton } from "./styled";

function Main(): JSX.Element {
  const [valueInput, setValueInput] = useState("");

  let searchInput = useRef<HTMLInputElement>(null);

  function searchUsers() {
    if (searchInput && searchInput.current) {
      setValueInput(searchInput.current.value);
    }
  }

  return (
    <MainDiv>
      <MainDivItem>
        <SearchInput
          type="text"
          placeholder="Введите Логин"
          ref={searchInput}
        />
        <SearchButton onClick={searchUsers}>Найти пользователя</SearchButton>
      </MainDivItem>
      {valueInput === "" ? <></> : <Search valueInput={valueInput} />}
    </MainDiv>
  );
}

export default Main;
