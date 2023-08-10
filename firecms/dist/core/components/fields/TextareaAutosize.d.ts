import * as React from "react";
type State = {
    outerHeightStyle: number;
    overflow?: boolean | undefined;
};
export declare const TextareaAutosize: React.ForwardRefExoticComponent<TextareaAutosizeProps & React.RefAttributes<Element>>;
export interface TextareaAutosizeProps {
    /**
     * @ignore
     */
    className?: string;
    onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
    /**
     * Maximum number of rows to display.
     */
    maxRows?: number | string;
    /**
     * Minimum number of rows to display.
     * @default 1
     */
    minRows?: number | string;
    /**
     * @ignore
     */
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * @ignore
     */
    placeholder?: string;
    /**
     * @ignore
     */
    style?: object;
    /**
     * @ignore
     */
    value?: string[] | number | string;
    sizeRef?: React.RefObject<HTMLDivElement>;
    onScroll?: (event: React.UIEvent<HTMLTextAreaElement>) => void;
    onResize?: (state: State) => void;
    autoFocus?: boolean;
}
export {};
