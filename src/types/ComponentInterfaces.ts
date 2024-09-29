// Propiedades de la ProgressBar
export interface StatusBarProps {
    percentage: number;
    language: string;
  }
  
  // Propiedades del componente Title
  export interface HeadingProps {
    text: string;
    size?: "small" | "medium" | "large";
    className?: string;
  }
  
  // Propiedades del componente Separator
  export interface DividerProps {
    orientation?: "horizontal" | "vertical";
    thickness?: string;
    length?: string;
  }
  
  // Propiedades del componente Description
  export interface DescriptionProps {
    text: string;
    className?: string;
  }
  
  // Propiedades del componente IconCircle
  export interface CircularIconProps {
    icon: React.ReactNode;
    url: string;
    alt: string;
  }
  
  // Propiedades del componente Button
  export interface ButtonProps {
    text: string;
    variant?: "outline" | "default" | "ghost" | "link";
    size?: "small" | "medium" | "large";
    className?: string;
    email?: string;
  }
  
  // Propiedades del componente SkillCard
  export interface SkillCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
  }
  