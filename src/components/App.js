import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <img src={dogImage} alt="A Random Dog" />;
}

export default App;
