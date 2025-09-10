import { useState, useEffect } from 'react';

function DogImage() {
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(true)

  async function fetchNewImage() {
    setLoading(true);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random")
      const data = await response.json()
      setImage(data.message || "No dog found.")
      } catch (error) {
        console.error("Error getting dog", error)
        setImage("There is no dog for you today. You could try again. If you want")
      } finally {
        setLoading(false)
      }
  }

  useEffect(() => {
    fetchNewImage()
  }, []);
  
  return (
    <div>
      <p>Do you like dogs?</p>
      {loading && <p>Loading...</p>}
      <img src={image} alt="dog" />
      <button onClick={fetchNewImage}>Get new dog</button>
    </div>
  );
}

export default DogImage;
