import type { FC, ReactNode } from "react";
import {Provider} from "react-redux"
import { store } from "../redux/store";

interface RedxuProviderProps {
    children:ReactNode
};
const ReduxProvider:FC<RedxuProviderProps> = ({children}) => <Provider store={store} children={children} />;
export default ReduxProvider;