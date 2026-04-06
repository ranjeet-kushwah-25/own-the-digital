
export const CustomIcon = ({ src, isActive, size = 18 }) => {
  return (
    <img 
      src={`/images/${src}`} 
      alt="icon"
      style={{ 
        width: `${size}px`,
        height: `${size}px`,
        filter: isActive 
          ? 'invert(21%) sepia(94%) saturate(5427%) hue-rotate(226deg) brightness(93%) contrast(92%)' 
          : 'none'
      }}
      className="object-contain flex-shrink-0"
    />
  );
};