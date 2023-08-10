import React from "react";
import { DraggableProvided } from "@hello-pangea/dnd";
interface ArrayContainerProps<T> {
    droppableId: string;
    value: T[];
    addLabel: string;
    buildEntry: (index: number, internalId: number) => React.ReactNode;
    disabled?: boolean;
    small?: boolean;
    onInternalIdAdded?: (id: number) => void;
    includeAddButton?: boolean;
    newDefaultEntry: T;
    onValueChange: (value: T[]) => void;
}
/**
 * @category Form custom fields
 */
export declare function ArrayContainer<T>({ droppableId, addLabel, value, disabled, buildEntry, small, onInternalIdAdded, includeAddButton, newDefaultEntry, onValueChange }: ArrayContainerProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
type ArrayContainerItemProps = {
    provided: DraggableProvided;
    index: number;
    internalId: number;
    small?: boolean;
    disabled: boolean;
    buildEntry: (index: number, internalId: number) => React.ReactNode;
    remove: (index: number) => void;
    copy: (index: number) => void;
    isDragging: boolean;
};
export declare function ArrayContainerItem({ provided, index, internalId, small, disabled, buildEntry, remove, copy, isDragging }: ArrayContainerItemProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function ArrayItemOptions({ direction, disabled, remove, index, provided, copy, contentOverflow }: {
    direction?: "row" | "column";
    contentOverflow: boolean;
    disabled: boolean;
    remove: (index: number) => void;
    index: number;
    provided: any;
    copy: (index: number) => void;
}): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function getRandomId(): number;
export {};
