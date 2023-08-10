import { DefaultSelectedViewBuilder, DefaultSelectedViewParams, EntityCollection, PropertiesOrBuilders } from "../../types";
/**
 *
 * @param target
 * @param source
 */
export declare function mergeCollections(target: EntityCollection, source: EntityCollection): EntityCollection;
/**
 *
 * @param fetchedCollections
 * @param baseCollections
 */
export declare function joinCollectionLists(fetchedCollections: EntityCollection[], baseCollections: EntityCollection[] | undefined): EntityCollection[];
export declare function sortProperties<M extends Record<string, any>>(properties: PropertiesOrBuilders<M>, propertiesOrder?: (keyof M)[]): PropertiesOrBuilders<M>;
export declare function resolveDefaultSelectedView(defaultSelectedView: string | DefaultSelectedViewBuilder | undefined, params: DefaultSelectedViewParams): string | undefined;
