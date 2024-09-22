import { useEffect, useState } from "react";
import instance from "../services/apiService";

const SliderPage = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await instance.get("recipes?limit=10");
        setRecipes(data.data.recipes);
        console.log(data.data.recipes);
      } catch (error) {
        throw new Error(error);
      }
    };

    getImages();
  }, []);
  return (
    <>
      {recipes.map((recipe) => (
        <img src={recipe.image} key={recipe.id} />
      ))}
    </>
  );
};

export default SliderPage;
