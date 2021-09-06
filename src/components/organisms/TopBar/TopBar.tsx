import LoggedAs from "components/molecules/LoggedAs/LoggedAs";
import SearchBar from "components/organisms/SearchBar/SearchBar";
import { Wrapper } from "./TopBar.styles";

const TopBar = () => {
  return (
    <Wrapper>
      <LoggedAs />
      <SearchBar />
    </Wrapper>
  );
};

export default TopBar;
