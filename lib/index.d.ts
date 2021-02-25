/// <reference types="react" />
import { StatusBarProps } from 'react-native';
export interface SafeAreaDeciderProps {
    statusBarHiddenForNotch: boolean;
    statusBarHiddenForNonNotch: boolean;
    backgroundColor?: string;
}
declare const SafeAreaDecider: ({ statusBarHiddenForNotch, statusBarHiddenForNonNotch, backgroundColor, ...rest }: SafeAreaDeciderProps & StatusBarProps) => JSX.Element | null;
export default SafeAreaDecider;
