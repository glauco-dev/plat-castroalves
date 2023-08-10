import { AppCheckOptions, AppCheckTokenResult } from "../../types";
import { FirebaseApp } from "firebase/app";
/**
 * @category Firebase
 */
export interface InitializeAppCheckProps {
    firebaseApp?: FirebaseApp;
    options?: AppCheckOptions;
}
export interface InitializeAppCheckResult {
    appCheckLoading: boolean;
    getAppCheckToken?: (forceRefresh: boolean) => Promise<AppCheckTokenResult> | undefined;
}
/**
 * Function used to initialise Firebase App Check.
 *
 * It works as a hook that gives you back an object holding the Firebase App.
 *
 * You most likely only need to use this if you are developing a custom app
 * that is not using {@link FirebaseCMSApp}. You can also not use this component
 * and initialise App Check yourself.
 *
 * @param firebaseApp
 * @category Firebase
 */
export declare function useInitializeAppCheck({ firebaseApp, options }: InitializeAppCheckProps): InitializeAppCheckResult;
