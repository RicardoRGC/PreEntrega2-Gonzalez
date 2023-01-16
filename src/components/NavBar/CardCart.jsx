import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function CardCart(props) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        width={{ md: 40 }}
        src={props.image}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="sm">{props.titulo}</Heading>

          <Text py="2">
            {props.descripcion}
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Buy
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default CardCart;
