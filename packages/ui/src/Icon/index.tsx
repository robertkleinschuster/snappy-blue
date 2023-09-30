import { iconResources } from "./resources";

export interface FontIconProps {
  icon: string;
  resource: string;
  size?: number;
}

export function Icon({ resource, icon, size }: FontIconProps): React.JSX.Element {
  return (
    <span style={{ fontFamily: iconResources.getFontFamily(resource), fontSize: size ? `${size}px` : 'inherit'}}>
      {iconResources.getChar(resource, icon)}
    </span>
  );
}
