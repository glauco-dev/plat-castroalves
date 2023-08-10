import React from "react";
type BooleanSwitchProps = {
    value: boolean;
    position?: "start" | "end";
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: React.ReactNode;
    disabled?: boolean;
    error?: boolean;
    autoFocus?: boolean;
    small?: boolean;
};
/**
 * Simple boolean switch.
 *
 */
export declare const BooleanSwitch: React.ForwardRefExoticComponent<BooleanSwitchProps & React.RefAttributes<unknown>>;
export {};
