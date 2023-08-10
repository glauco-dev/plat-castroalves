import React from "react";
interface ArrayContainerProps<T> {
    value: T[];
    name: string;
    addLabel: string;
    buildEntry: (index: number, internalId: number) => React.ReactNode;
    disabled?: boolean;
    small?: boolean;
    onInternalIdAdded?: (id: number) => void;
    includeAddButton?: boolean;
    newDefaultEntry?: T | null;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}
/**
 * @category Form custom fields
 */
export declare function FormikArrayContainer<T>({ name, addLabel, value, disabled, buildEntry, small, onInternalIdAdded, includeAddButton, newDefaultEntry, setFieldValue }: ArrayContainerProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
