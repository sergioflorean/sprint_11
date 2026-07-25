import { data } from "../utils/constants.js";

type AnimalProps = {
  selectedAnimal: "cat" | "dog";
};

function Animal({ selectedAnimal }: AnimalProps) {
  const animal = data.find(item => {
    return item.name === selectedAnimal;
  });

  return <img src={animal?.image} alt={animal?.name} />;
}

export default Animal;