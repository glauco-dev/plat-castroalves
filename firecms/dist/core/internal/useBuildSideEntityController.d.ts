import { EntityCollection, EntitySidePanelProps, NavigationContext, SideDialogsController, SideEntityController } from "../../types";
export declare function getEntityViewWidth(props: EntitySidePanelProps<any>, small: boolean): string;
export declare const useBuildSideEntityController: (navigation: NavigationContext, sideDialogsController: SideDialogsController) => SideEntityController;
export declare function buildSidePanelsFromUrl(path: string, collections: EntityCollection[], newFlag: boolean): EntitySidePanelProps<any>[];
