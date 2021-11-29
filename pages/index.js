import Banner from "../components/Banner/Banner";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/Property/Property";
import { Box, Flex } from "@chakra-ui/react";
export default function Home({ propertyForSale, propertyForRent }) {
  console.log(propertyForSale, propertyForRent);
  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title="Rental homes for"
        title2="Everyone"
        desc1="Explore Apartments , Villas Homes"
        desc2="And more"
        buttonText="Explore Reanting Home"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {propertyForRent?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title="FIND , BUY , & OWN Your"
        title2="Everyone"
        desc1="Explore Apartments , Villas Homes"
        desc2="And more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      {propertyForSale?.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Box>
  );
}

export const getStaticProps = async () => {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=5`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=5`
  );

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    },
  };
};
