import { Button } from "@chakra-ui/react";
import React from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ButtonTostada from "./Buttons/ButtonTostada";
function TostadaItems() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/${e}`);
  };
  const toast = useToast();
  return (
    <>
      <ButtonTostada nombre={"Todas"} handleClick={handleClick} patch={""} />
      <ButtonTostada
        nombre={"electronics"}
        handleClick={handleClick}
        patch={"category/electronics"}
      />
      <ButtonTostada
        nombre={"jewelery"}
        handleClick={handleClick}
        patch={"category/jewelery"}
      />
      <ButtonTostada
        nombre={"men's clothing"}
        handleClick={handleClick}
        patch={"category/men's clothing"}
      />
    </>
  );
}

export default TostadaItems;
