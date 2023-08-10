export type DateTimeFieldProps = {
    value?: Date;
    onChange: (value: Date | null) => void;
    mode?: "date" | "date_time";
    clearable?: boolean;
    small?: boolean;
    disabled?: boolean;
};
export declare function DateTimeField({ mode, value, onChange, disabled, clearable, small }: DateTimeFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
