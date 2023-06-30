import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import {
  BsCreditCard,
  BsDownload,
  BsServer,
  BsPeopleFill,
  BsBank2,
} from "react-icons/bs";

import {
  IoIosHome,
  IoIosAddCircle,
  IoIosCompass,
  IoIosCard,
  IoIosClock,
  IoIosHeadset,
  IoIosLogOut,
  IoIosCodeDownload,
} from "react-icons/io";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import helpers from "../../helpers";

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"10"}
      //   border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      borderWidth={2}
      border="1px solid whitesmoke"
      bg="white"
      rounded={3}
      color="black"
      shadow="md"
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel isTruncated>{title}</StatLabel>
          <StatNumber fontSize={"3xl"}>{stat}</StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Statistics() {
  const [user, setUser] = useState(null);

  async function fetchUser() {
    const res = await helpers.getUserDetailsFromLocalStorage();
    setUser(res);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Box mx={"auto"} pt={5}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Deposited"}
          stat={`$${user?.amountDeposited}`}
          icon={<BsBank2 size={"3em"} color="black" />}
        />
        <StatsCard
          title={"Profit"}
          stat={`$${user?.profit}`}
          icon={<BsServer size={"3em"} color="black" />}
        />
        <StatsCard
          title={"Balance"}
          stat={`$${user?.balance}`}
          icon={<IoIosCard size={"3em"} color="black" />}
        />
        <StatsCard
          title={"Ref. Bonus"}
          stat={`$${user?.referalBonus}`}
          icon={<BsPeopleFill size={"3em"} color="black" />}
        />
      </SimpleGrid>
    </Box>
  );
}
