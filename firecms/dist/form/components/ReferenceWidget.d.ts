import { EntityReference, FilterValues } from "../../types";
/**
 * This field allows selecting reference/s.
 * @param name
 * @param path
 * @param disabled
 * @param value
 * @param setValue
 * @param previewProperties
 * @param forceFilter
 * @constructor
 */
export declare function ReferenceWidget<M extends Record<string, any>>({ name, path, disabled, value, setValue, previewProperties, forceFilter }: {
    name?: string;
    value?: EntityReference;
    setValue: (value: EntityReference | null) => void;
    path: string;
    disabled?: boolean;
    previewProperties?: string[];
    /**
     * Allow selection of entities that pass the given filter only.
     */
    forceFilter?: FilterValues<string>;
}): import("@emotion/react/jsx-runtime").JSX.Element;
