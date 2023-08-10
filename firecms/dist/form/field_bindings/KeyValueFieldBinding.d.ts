import { FieldProps } from "../../types";
/**
 * Field that allows edition of key value pairs.
 *
 * @category Form fields
 */
export declare function KeyValueFieldBinding<T extends Record<string, any>>({ propertyKey, value, showError, disabled, property, setValue, tableMode, includeDescription, underlyingValueHasChanged, autoFocus, context }: FieldProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
