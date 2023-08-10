import React from "react";
import { SxProps, Theme } from "@mui/material";
interface LabelWithIconProps {
    icon: React.ReactNode;
    title?: string;
    small?: boolean;
    sx?: SxProps<Theme>;
    required?: boolean;
}
/**
 * Render the label of a form field for a given property, with the corresponding
 * icon.
 * @category Form custom fields
 */
export declare function LabelWithIcon({ icon, title, small, sx, required }: LabelWithIconProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
