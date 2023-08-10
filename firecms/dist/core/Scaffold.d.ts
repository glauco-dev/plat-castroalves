import React from "react";
import { DrawerProps } from "./Drawer";
import { FireCMSAppBarProps } from "./components";
export declare const DRAWER_WIDTH = 280;
/**
 * @category Core
 */
export interface ScaffoldProps<ExtraDrawerProps = {}> {
    /**
     * Name of the app, displayed as the main title and in the tab title
     */
    name: string;
    /**
     * Logo to be displayed in the drawer of the CMS
     */
    logo?: string;
    /**
     * A component that gets rendered on the upper side of the main toolbar
     */
    toolbarExtraWidget?: React.ReactNode;
    /**
     * In case you need to override the view that gets rendered as a drawer
     * @see FireCMSDrawer
     */
    Drawer?: React.ComponentType<DrawerProps<ExtraDrawerProps>>;
    /**
     * Additional props passed to the custom Drawer
     */
    drawerProps?: ExtraDrawerProps;
    /**
     * Open the drawer on hover
     */
    autoOpenDrawer?: boolean;
    /**
     * A component that gets rendered on the upper side of the main toolbar.
     * `toolbarExtraWidget` has no effect if this is set.
     */
    FireCMSAppBarComponent?: React.ComponentType<FireCMSAppBarProps>;
}
/**
 * This view acts as a scaffold for FireCMS.
 *
 * It is in charge of displaying the navigation drawer, top bar and main
 * collection views.
 * This component needs a parent {@link FireCMS}
 *
 * @param props
 * @constructor
 * @category Core
 */
export declare const Scaffold: React.NamedExoticComponent<React.PropsWithChildren<ScaffoldProps<{}>>>;
