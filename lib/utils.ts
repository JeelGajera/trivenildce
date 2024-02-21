import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDepartmentFromSlug(slug: string) {
  switch (slug) {
    case "chemical":
      return "Chemical";
    case "civil":
      return "Civil";
    case "computer-it-and-ai-ml":
      return "Computer, IT & AI/ML";
    case "ec-electrical-and-ic":
      return "EC, Electrical & IC";
    case "mechanical-automobile-and-robotics":
      return "Mechanical, Automobile & Robotics";
    default:
      return "No department found";
  }
}

export function getDomainFromSlug(slug: string) {
  switch (slug) {
    case "workshops":
      return "Workshops";
    case "technical-events":
      return "Technical Events";
    case "non-technical-events-and-sports":
      return "Non-Technical Events & Sports";
    default:
      return "No domain found";
  }
}
