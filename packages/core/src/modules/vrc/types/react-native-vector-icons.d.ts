/**
 * React 19 compatibility augmentation for react-native-vector-icons/MaterialCommunityIcons
 *
 * In React 19, JSX.ElementType requires proper prop types. The @types/react-native-vector-icons
 * package (v6.4.18) was released before React 19 and its Icon component type is incompatible.
 * This augmentation ensures the Icon default export is usable as a JSX component.
 */

declare module 'react-native-vector-icons/MaterialCommunityIcons' {
  import { ComponentType } from 'react'
  import { TextProps } from 'react-native'

  export interface IconProps extends TextProps {
    name: string
    size?: number
    color?: string
    allowFontScaling?: boolean
  }

  const Icon: ComponentType<IconProps>
  export default Icon
}
