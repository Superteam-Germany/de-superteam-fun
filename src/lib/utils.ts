import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollToAnchor = (anchorId: string) => {
  const element = document.getElementById(anchorId);
  if (element) {
    const position = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: position, behavior: 'smooth' });
  }
};
