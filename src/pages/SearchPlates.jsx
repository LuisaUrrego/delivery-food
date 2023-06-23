import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ContainerIcon, ContainerImage, Input, Details, H3, H5 } from "../components/searchPlates/SearchPlates";
const SearchPlates = () => {
  return (
    <main>
    <form>
      <Input type="text" />
      <ContainerIcon>
        <SearchIcon />
      </ContainerIcon>
    </form>
    <section>
      <figure>
        <ContainerImage src="https://st.depositphotos.com/1003814/3345/i/450/depositphotos_33455217-stock-photo-pasta-with-tomato-sauce-and.jpg" alt="pastas" />
      </figure>
      <Details>
        <H3>Pastas</H3>
        <H5>$30.00</H5>
      </Details>
    </section>
    </main>
  
  );
};

export default SearchPlates;
