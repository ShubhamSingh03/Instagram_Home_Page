import React, { useCallback, useEffect, useState } from "react";
// cat api-random
const url = "https://api.thecatapi.com/v1/images/search?limit=1";

// feed images random component
const FeedImage = () => {
  const [imageDetails, setImageDetails] = useState();
  const getImages = useCallback(() => {
    let imageDetailsList = [];
    fetch(url)
      .then((res) => res.json())
      .then((images) => {
        // console.log("Cats: ", cats);
        for (let i = 0; i < images.length; i++) {
          imageDetailsList.push(images[i].url);
        }
        setImageDetails(imageDetailsList);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [setImageDetails]);

  useEffect(() => {
    getImages();
  }, [getImages]);

  return (
    <>
      {imageDetails ? (
        imageDetails.map((imageUrl) => (
          <img
            src={imageUrl}
            alt=""
            className="object-cover bg-white object-center w-screen h-96 border-t border-gray-100"
          />
        ))
      ) : (
        <p className="text-bold flex justify-center">Loading Your Image...</p>
      )}
    </>
  );
};

export default FeedImage;
