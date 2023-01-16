import { Flex } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";

function ItemDetailContainer({ datosJson }) {
  const { id } = useParams();
  const elem = datosJson.find((element) => element.id == id);
  return (
    <div>
      <Flex wrap="wrap" alignItems="center" justifyContent="center" pt="10px">
        <ItemCard producto={elem} />
      </Flex>
    </div>
  );
}

export default ItemDetailContainer;
