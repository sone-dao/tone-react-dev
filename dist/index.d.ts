import * as react_jsx_runtime from 'react/jsx-runtime';

interface IClientComponentProps {
    defaultText?: string;
}
declare function ClientComponent({ defaultText, }: IClientComponentProps): react_jsx_runtime.JSX.Element;

interface IServerComponentProps {
    text: string;
}
declare function ServerComponent({ text }: IServerComponentProps): react_jsx_runtime.JSX.Element;

export { ClientComponent, ServerComponent };
