import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { actionFilterSearchAsync } from "../redux/actions/restaurantsActions"
import { ContainerIcon, ContainerImage, Input, Details, H3, H5 } from "../components/searchPlates/SearchPlates";
import { useForm } from "react-hook-form";
const SearchPlates = () => {
  // const [searchValue,setSearchValue] = useState()
  // const { register, handleSubmit, reset } = useForm()
  // const onSearch = (data) => {
  //   const searchParam = data.search
  //   console.log(searchParam);
  //   dispatch(actionFilterSearchAsync(searchParam));
  //   // Actualizar el estado de las últimas consultas
  //   dispatch(actionSetRecentQueries(searchParam));
 
  // }

  // const onChangeSearch = (e) => {
  //   const searchParam = e.target.value;
  //   setSearchValue(searchParam);
  //   dispatch(actionFilterSearchAsync(searchParam));
  //    // Actualizar el estado de las últimas consultas
  //    dispatch(actionSetRecentQueries(searchParam));
  // };

  // const resetForm = () => {
  //   reset();
  //  dispatch(actionFilterSearchAsync('')); 
  // }
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
