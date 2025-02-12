import React, { useEffect, useState } from "react";

// Define the props interface
interface ImageComponentProps {
  text: string;
  height: number;
  width: number;
}

// Fetch image function with error handling
async function fetchImage(): Promise<string> {
  try {
    const response = await fetch(
      "https://api.unsplash.com/photos/random?query=nature&client_id=oUd4FG2-casjWkPRoLWjbC1tic0Zgjyg3SDa7gSunlk"
    );

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.urls?.full || "";
  } catch (error) {
    console.error("Error fetching image:", error);
    // Return a fallback image URL
    return "https://via.placeholder.com/600x400?text=Nature+Image+Not+Available";
  }
}

// ImageComponent
const ImageComponent: React.FC<ImageComponentProps> = ({ text, height, width }) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    // Fetch the image when the component mounts
    const getImage = async () => {
      const url = await fetchImage();
      setImageUrl(url);
    };

    getImage();
  }, []);

  return (
    <div style={{ width: `${width}px`, height: `${height}px`, position: "relative" }}>
      <img
        src={imageUrl}
        alt="Random Nature"
        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
      />
      <div
        style={{
          
          fontSize: "20px",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ImageComponent;