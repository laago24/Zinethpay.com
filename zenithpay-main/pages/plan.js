import React from "react";
import Image from "next/image";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import {
  Box,
  SimpleGrid,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  VStack,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import {
  secure,
  options,
  research,
  bitcoin_network,
  mining_place,
} from "../assets/images/list";
import { InvestmentPlanCard } from "./dashboard/invest";

function Plan() {
  return (
    <div>
      <Navbar />
      <Box
        w="full"
        h={{ base: "xs", md: "xs" }}
        // bg="blue.400"
        id="contact"
        // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <VStack
          w={"full"}
          h="full"
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, blackAlpha.600)"}
        >
          <Center w="inherit" h="inherit">
            <Box maxW="3xl" textAlign="left" px={{ base: 12, md: 0 }}>
              <Heading
                // fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
                color="white"
              >
                <Text>Price Plans</Text>
              </Heading>
            </Box>
          </Center>
        </VStack>
      </Box>

      <Container maxW={"6xl"} mb={20}>
        <Heading
          pt={20}
          lineHeight={"110%"}
          fontSize={{ base: "2xl", sm: "2xl", md: "3xl" }}
          fontWeight="bold"
          textAlign="center"
          mb={3}
          zIndex={"popover"}
        >
          <Text>Our Best Mining Plans</Text>
        </Heading>
        <Text fontSize="1rem" textAlign="center">
          Choose a plan that suits you
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 4 }}
          spacing={{ base: 5, lg: 8 }}
          my={30}
        >
          <InvestmentPlanCard
            title={"Basic Plan"}
            priceRange={"$100 - $500"}
            minimumAmount={"100"}
            dailyProfit={"3.00"}
            duration={"2 Weeks"}
            minimumReturn={"670"}
          />
          <InvestmentPlanCard
            title={"Silver Plan"}
            priceRange={"$500 - $800"}
            minimumAmount={"500"}
            dailyProfit={"7.00"}
            duration={"1 Month"}
            minimumReturn={"2,560"}
          />
          <InvestmentPlanCard
            title={"Gold Plan"}
            priceRange={"$8000 - $1,800"}
            minimumAmount={"8,000"}
            dailyProfit={"8.65.00"}
            duration={"3 Months"}
            minimumReturn={"21,250"}
          />
          <InvestmentPlanCard
            title={"Enterprise Plan"}
            priceRange={"$50,000 - $120,000"}
            minimumAmount={"50,000"}
            dailyProfit={"9.78.00"}
            duration={"3 Months"}
              minimumReturn={"72,400"}
          />
        </SimpleGrid>
      </Container>

      <Footer />
    </div>
  );
}

export default Plan;
