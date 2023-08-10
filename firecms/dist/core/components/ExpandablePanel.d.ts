import React, { PropsWithChildren } from "react";
export declare function ExpandablePanel({ title, children, invisible, initiallyExpanded, highlightOnHover, padding, dark, onExpandedChange }: PropsWithChildren<{
    title: React.ReactNode;
    invisible?: boolean;
    initiallyExpanded?: boolean;
    padding?: number | string;
    highlightOnHover?: boolean;
    dark?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
}>): import("@emotion/react/jsx-runtime").JSX.Element;
