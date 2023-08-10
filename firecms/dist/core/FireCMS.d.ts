import { FireCMSProps, User } from "../types";
/**
 * If you are using independent components of the CMS
 * you need to wrap them with this main component, so the internal hooks work.
 *
 * This is the main component of FireCMS. It acts as the provider of all the
 * internal contexts and hooks.
 *
 * You only need to use this component if you are building a custom app.
 * In most cases you can just use the {@link FirebaseCMSApp} component.
 *
 * @constructor
 * @category Core
 */
export declare function FireCMS<UserType extends User>(props: FireCMSProps<UserType>): import("@emotion/react/jsx-runtime").JSX.Element;
