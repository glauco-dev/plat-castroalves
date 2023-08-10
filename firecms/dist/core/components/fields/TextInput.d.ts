import React from "react";
export type InputType = "text" | "number";
export declare function TextInput<T extends string | number>({ value, onChange, label, inputType, multiline, disabled, error, endAdornment, autoFocus, placeholder, small }: {
    inputType?: InputType;
    value: T;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    label?: React.ReactNode;
    multiline?: boolean;
    disabled?: boolean;
    error?: boolean;
    endAdornment?: React.ReactNode;
    autoFocus?: boolean;
    placeholder?: string;
    small?: boolean;
}): import("@emotion/react/jsx-runtime").JSX.Element;
