/// <reference types="react" />
import { StatusBar } from 'react-native';
interface Props {
    statusBarHiddenForNotch: boolean;
    statusBarHiddenForNonNotch: boolean;
    backgroundColor?: string;
}
declare const SafeAreaDecider: ({ statusBarHiddenForNotch, statusBarHiddenForNonNotch, backgroundColor, ...rest }: Props & StatusBar) => JSX.Element | null;
export default SafeAreaDecider;
