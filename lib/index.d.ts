/// <reference types="react" />
import { StatusBarProps } from 'react-native';
interface Props {
    statusBarHiddenForNotch: boolean;
    statusBarHiddenForNonNotch: boolean;
    backgroundColor?: string;
}
declare const SafeAreaDecider: ({ statusBarHiddenForNotch, statusBarHiddenForNonNotch, backgroundColor, ...rest }: Props & StatusBarProps) => JSX.Element | null;
export default SafeAreaDecider;
