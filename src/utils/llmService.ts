import type { LLMResponse } from "../types";

// Mock LLM service - replace with actual API integration
export const predictDogThoughts = async (
  imageFile: File,
  situation: string
): Promise<LLMResponse> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Mock responses based on situation keywords
  const situationLower = situation.toLowerCase();

  if (situationLower.includes("food") || situationLower.includes("treat")) {
    return {
      title: "🍖 Food Coma Bliss 🥴",
      description:
        "Oh my dog, these treats are amazing! I could eat these forever. My belly is so full and happy right now. Best day ever!",
    };
  } else if (
    situationLower.includes("walk") ||
    situationLower.includes("park")
  ) {
    return {
      title: "🏃 Adventure Time! 🌳",
      description:
        "Freedom at last! So many smells to explore, so many trees to mark. This is what life is all about - pure adventure!",
    };
  } else if (
    situationLower.includes("bath") ||
    situationLower.includes("shower")
  ) {
    return {
      title: "💦 Wet Nightmare 😱",
      description:
        "Why is everything wet? I just want to be dry and fluffy again. The horror! The absolute horror of being clean!",
    };
  } else if (
    situationLower.includes("sleep") ||
    situationLower.includes("bed")
  ) {
    return {
      title: "😴 Nap Time Supreme 💤",
      description:
        "Finally, peace and quiet. Time to dream about chasing squirrels and eating infinite treats. This is the good life.",
    };
  } else if (
    situationLower.includes("toy") ||
    situationLower.includes("play")
  ) {
    return {
      title: "🦴 Playtime Paradise 🎾",
      description:
        "Squeaky toys are my jam! Let me destroy this with maximum enthusiasm. Nothing beats a good play session!",
    };
  } else {
    return {
      title: "🐕 Living My Best Life 🐾",
      description:
        "Just vibing and being the goodest boy/girl. Life is good when you have belly rubs and treats. Couldn't be happier!",
    };
  }
};

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};
