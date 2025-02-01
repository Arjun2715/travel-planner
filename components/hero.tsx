export default async function Page() {
  const imageUrl = await fetchImage();

  return (
    <div
      className="fixed top-0 left-0 w-full -z-10 flex flex-col h-full items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    > 
    </div>
  );
}

async function fetchImage() {
  try {
    const response = await fetch(
      "https://api.unsplash.com/photos/random?query=nature&client_id=oUd4FG2-casjWkPRoLWjbC1tic0Zgjyg3SDa7gSunlk"
    );
    const data = await response.json();
    return data.urls?.full || "";
  } catch (error) {
    console.error("Error fetching image:", error);
    return "";
  }
}