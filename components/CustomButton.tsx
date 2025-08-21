import { TouchableOpacity, Text } from "react-native";
import PreviousIconNavy from "../assets/images/icons/previous-back-arrow-left-arrows-navy.svg";
import PreviousIconBrown from "../assets/images/icons/previous-back-arrow-left-arrows-Brown.svg";
import PreviousIconGold from "../assets/images/icons/previous-back-arrow-left-arrows-gold.svg";
import PreviousIconOrange from "../assets/images/icons/previous-back-arrow-left-arrows-orange.svg";
import PreviousIconSky from "../assets/images/icons/previous-back-arrow-left-arrows-sky.svg";
import NextIconNavy from "../assets/images/icons/next-forward-arrow-arrows-navy.svg";
import NextIconBrown from "../assets/images/icons/next-forward-arrow-arrows-Brown.svg";
import NextIconGold from "../assets/images/icons/next-forward-arrow-arrows-gold.svg";
import NextIconOrange from "../assets/images/icons/next-forward-arrow-arrows-orange.svg";
import NextIconSky from "../assets/images/icons/next-forward-arrow-arrows-sky.svg";

// Tipo para las variantes de color
type ColorVariant = "navy" | "brown" | "gold" | "orange" | "sky";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  isIconLeft?: boolean;
  isIconRight?: boolean;
  variant?: ColorVariant;
  textColor?: string;
  font?: string;
  bgColor?: string;
}

// Mapeo de iconos izquierdos por variante
const leftIcons: Record<ColorVariant, any> = {
  gold: PreviousIconNavy,
  sky: PreviousIconBrown,
  brown: PreviousIconGold,
  navy: PreviousIconOrange,
  orange: PreviousIconSky,
};

// Mapeo de iconos derechos por variante
const rightIcons: Record<ColorVariant, any> = {
  gold: NextIconNavy,
  sky: NextIconBrown,
  brown: NextIconGold,
  navy: NextIconOrange,
  orange: NextIconSky,
};

// Mapeo de colores de texto por variante (puedes personalizar)
const defaultTextColors: Record<ColorVariant, string> = {
  navy: "text-orange",
  brown: "text-gold",
  gold: "text-navy",
  orange: "text-sky",
  sky: "text-brown",
};

// Mapeo de colores de fondo por variante
const defaultBgColors: Record<ColorVariant, string> = {
  navy: "bg-navy",
  brown: "bg-brown",
  gold: "bg-gold",
  orange: "bg-orange",
  sky: "bg-sky",
};

export default function CustomButton({
  onPress,
  title,
  isIconLeft = false,
  isIconRight = false,
  variant = "gold",
  textColor,
  font = "font-tech",
  bgColor,
}: CustomButtonProps) {
  const LeftIconComponent = leftIcons[variant];
  const RightIconComponent = rightIcons[variant];

  const finalTextColor = textColor || defaultTextColors[variant];
  const finalBgColor = bgColor || defaultBgColors[variant];

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`
        ${finalBgColor}
        rounded-full
        px-8
        w-fit
        flex flex-row
        items-center
        justify-center
        gap-3
        py-4
        // Efectos de profundidad
        shadow-2xl
        shadow-black/40
        elevation-12
        // Bordes y transiciones
        border-2
        border-white/20
        transition-all
        duration-300
        // Efectos interactivos
        active:scale-95
        active:shadow-lg
        active:border-white/30
        hover:shadow-3xl
        hover:translate-y-[-3px]
        hover:border-white/30
        // Gradiente sutil (si quieres agregar)
        bg-gradient-to-r from-white/5 to-transparent
      `}
      activeOpacity={0.7}
    >
      {isIconLeft && LeftIconComponent && (
        <LeftIconComponent
          width={22}
          height={22}
          className="transition-all duration-300 hover:scale-110 hover:-translate-x-1"
        />
      )}

      <Text
        className={`text-xl ${font} ${finalTextColor} font-bold tracking-wide`}
      >
        {title}
      </Text>

      {isIconRight && RightIconComponent && (
        <RightIconComponent
          width={22}
          height={22}
          className="transition-all duration-300 hover:scale-110 hover:translate-x-1"
        />
      )}
    </TouchableOpacity>
  );
}
