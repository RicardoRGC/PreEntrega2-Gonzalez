import { Flex } from "@chakra-ui/react";
import React from "react";
import ItemCard from "../components/ItemCard";
import TostadaItems from "../components/TostadaItems";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = ({ datosJson }) => {
  const params = useParams();

  const [datos, setDatos] = useState([]);

  function handleDatos() {
    let datos1 = datosJson;

    JSON.stringify(params) === "{}"
      ? ""
      : (datos1 = datosJson.filter((e) => {
          return e.category === params.id;
        }));
    setDatos(datos1);
  }

  useEffect(() => {
    handleDatos();
  }, [params]);

  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        <TostadaItems />
      </Flex>
      <Flex wrap="wrap" alignItems="center" justifyContent="center" pt="10px">
        {datos.map((greetingItem, index) => (
          <ItemCard key={greetingItem.id} producto={greetingItem}></ItemCard>
        ))}
      </Flex>
    </>
  );
};

export default ItemListContainer;
