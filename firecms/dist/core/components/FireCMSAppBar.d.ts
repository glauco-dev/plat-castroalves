import React from "react";
export interface FireCMSAppBarProps {
    title: string;
    /**
     * A component that gets rendered on the upper side of the main toolbar
     */
    toolbarExtraWidget?: React.ReactNode;
    drawerOpen: boolean;
}
/**
 * This component renders the main app bar of FireCMS.
 * You will likely not need to use this component directly.
 *
 * @param title
 * @param toolbarExtraWidget
 * @param drawerOpen
 * @constructor
 */
export declare const FireCMSAppBar: ({ title, toolbarExtraWidget, drawerOpen }: FireCMSAppBarProps) => import("@emotion/react/jsx-runtime").JSX.Element;
