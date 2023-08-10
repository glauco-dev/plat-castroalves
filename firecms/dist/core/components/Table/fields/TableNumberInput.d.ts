export declare function NumberTableInput(props: {
    error: Error | undefined;
    value: number;
    align: "right" | "left" | "center";
    updateValue: (newValue: (number | null)) => void;
    focused: boolean;
    setFocused: (focused: boolean) => void;
    disabled: boolean;
}): import("@emotion/react/jsx-runtime").JSX.Element;
