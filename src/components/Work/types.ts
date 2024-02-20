export type ElementType = "sushi" | "drink" | "cactus";

export type Work = {
  title: string;
  description: () => JSX.Element;
  imageUrl: string;
  imagePosition: string;
  elementType: ElementType;
  source?: string;
};
