import {
  Heading,
  Text,
  ListItem,
  StatLabel,
  StatNumber,
  Stat,
  Divider,
  VStack,
  List,
  ListIcon,
  Box,
  Button,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import CryptoChartTape from "../../components/common/CryptoChartTape";
import Wrapper from "../../components/dashboard/Wrapper";

export const InvestmentPlanCard = ({
  title,
  priceRange,
  dailyProfit,
  minimumAmount,
  duration,
  minimumReturn,
}) => {
  const Router = useRouter();

  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      //   border={"1px solid"}

      rounded={"0"}
      bg="black"
      color="white"
    >
      <StatLabel fontWeight={"medium"} istruncated="true">
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {priceRange}
      </StatNumber>
      <Divider my={6} />

      <VStack textAlign="start" pt={2} w="100%" mt={4}>
        <List spacing={3} textAlign="start" w="inherit">
          <ListItem>Daily Profit: %{dailyProfit}</ListItem>
          <ListItem>Minimum Possible Deposit: ${minimumAmount}</ListItem>
          <ListItem>Minimum Return: ${minimumReturn}</ListItem>
          <ListItem>Duration: {duration}</ListItem>
        </List>
        <Box mt={20} ml="auto" w="inherit">
          <Button
            colorScheme="yellow"
            w="full"
            rounded={0}
            variant="solid"
            fontWeight="normal"
            onClick={() =>
              Router.push(
                {
                  pathname: "/dashboard/deposit",
                  query: {
                    amount: minimumAmount,
                  },
                },
                "/dashboard/deposit"
              )
            }
          >
            Choose Plan
          </Button>
        </Box>
      </VStack>
    </Stat>
  );
};

function Invest() {
  return (
    <>
      <Wrapper>
        <Heading fontSize="2xl" fontWeight="normal">
          <Text>Investment Plans</Text>
          <Text fontSize="1rem">Choose a plan that suites you</Text>
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 4 }}
          spacing={{ base: 5, lg: 8 }}
          mt={30}
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
      </Wrapper>

      <CryptoChartTape />
    </>
  );
}

export default Invest;
