"use client";
import React, { useEffect } from "react";
import { getMuseums } from "@/app/API/getMuseums";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Link,
} from "@nextui-org/react";
import { Museum } from "@/app/types/Museum";

const ListMuseums = () => {
  const [museum, setMuseums] = React.useState<Museum[]>([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const fetchMuseums = async () => {
      try {
        const museums = await getMuseums();
        console.log("Museums successfully fetched");
        setMuseums(museums.slice(0, 20) || []);
      } catch (error) {
        console.error("Error fetching museums", error);
      }
    };
    fetchMuseums();
  }, []);

  return (
    <>
      <h2 className="text-4xl font-bold my-8 text-center text-gray-600">
        Explore the Museums
      </h2>
      <div className="grid-container">
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            {museum.map((museum) => (
              <Card className="flex align-middle justify-center py-4 max-w-sm">
                <div className="flex justify-between align-middle">
                  <div>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <h4 className="font-bold text-large">
                        {museum.Name || "Museum Name"}
                      </h4>
                      <small className="text-default-500">
                        {museum.CityTown || "City or Town"}
                      </small>
                      <small className="text-default-500">
                        {museum.StateTerritory || "State or Territory"}
                      </small>
                    </CardHeader>
                  </div>
                </div>

                <CardBody className="overflow-visible py-2 flex align-middle justify-center">
                  {/* {museum.urlToImage && (
         <Image
           alt={museum.title || "News image"}
           className="object-cover rounded-xl"
           src={museum.urlToImage}
           width={270}
         />
       )} */}
                  <Image
                    src="/images/heroImage1.jpeg"
                    alt="hero"
                    // width={270}
                    className="object-cover rounded-xl"
                  />
                </CardBody>
                <div className="px-2 flex justify-between">
                  <Button>Read more</Button>
                  <Button>
                    <Link isExternal className="text-black">
                      Visit
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </>
        )}
      </div>
      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(4, auto);
          gap: 16px;
        }
      `}</style>
    </>
  );
};

export default ListMuseums;
