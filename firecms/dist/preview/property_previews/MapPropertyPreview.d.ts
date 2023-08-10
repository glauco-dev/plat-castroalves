import { PropertyPreviewProps } from "../PropertyPreviewProps";
/**
 * @category Preview components
 */
export declare function MapPropertyPreview<T extends Record<string, any> = Record<string, any>>({ propertyKey, value, property, entity, size }: PropertyPreviewProps<T>): import("@emotion/react/jsx-runtime").JSX.Element | null;
export declare function KeyValuePreview({ value }: {
    value: any;
}): import("@emotion/react/jsx-runtime").JSX.Element | null;
