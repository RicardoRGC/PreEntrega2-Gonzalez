import React, { useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  CardFooter,
  Divider,
  Box,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { CgAddR } from "react-icons/cg";
import { GoDiffRemoved } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

function ItemCard({ producto }) {
  let stile = {
    margin: "10px",
  };
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/item/${e}`);
  };
  const [lines, setLines] = useState(true);
  return (
    <>
      <Card display="flex" maxW="sm " maxH="s" width="50vw">
        <CardBody display="flex" flexDirection="column" alignItems="center">
          {/* <Image
            boxSize="20vw"
            src={producto.image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          /> */}

          <Stack mt="2" spacing="3">
            <Heading>
              <Link to={`/item/${producto.id}`}>
                <button
                  onClick={() => setLines(!lines)}
                  className={lines ? "butoon" : ""}
                  style={{ fontSize: "2vw" }}
                >
                  {producto.title}
                </button>{" "}
              </Link>
            </Heading>
            <Text
              style={{ fontSize: "1vw" }}
              onClick={() => setLines(!lines)}
              className={lines ? "butoon" : ""}
            >
              {producto.description}
            </Text>
            <Text color="blue.600" fontSize="2vw">
              {producto.price} $
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup display="flex" spacing="2" flexWrap="wrap">
            <Button
              style={stile}
              onClick={() => handleClick(producto.id)}
              variant="solid"
              colorScheme="blue"
            >
              Comprar
            </Button>
            <IconButton
              style={stile}
              variant="outline"
              colorScheme="teal"
              aria-label="Call Sage"
              fontSize="20px"
              icon={<CgAddR />}
            />
            <Input style={stile} htmlSize={1} width="15%" textAlign="center" />
            <IconButton
              style={stile}
              variant="outline"
              colorScheme="teal"
              aria-label="Call Sage"
              fontSize="20px"
              icon={<GoDiffRemoved />}
            />
            <Button style={stile} variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}

export default ItemCard;
