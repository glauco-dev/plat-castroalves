import React, { RefObject } from "react";
import { TableColumn, TableSort, TableWhereFilterOp } from "./VirtualTableProps";
export type FilterFormFieldProps<CustomProps> = {
    id: React.Key;
    filterValue: [TableWhereFilterOp, any] | undefined;
    setFilterValue: (filterValue?: [TableWhereFilterOp, any]) => void;
    column: TableColumn<CustomProps>;
    popupOpen: boolean;
    setPopupOpen: (open: boolean) => void;
};
type VirtualTableHeaderProps<M extends Record<string, any>> = {
    resizeHandleRef: RefObject<HTMLDivElement>;
    columnIndex: number;
    isResizingIndex: number;
    column: TableColumn<any>;
    onColumnSort: (key: Extract<keyof M, string>) => void;
    filter?: [TableWhereFilterOp, any];
    sort: TableSort;
    onFilterUpdate: (column: TableColumn, filterForProperty?: [TableWhereFilterOp, any]) => void;
    onClickResizeColumn?: (columnIndex: number, column: TableColumn) => void;
    createFilterField?: (props: FilterFormFieldProps<any>) => React.ReactNode;
};
export declare const VirtualTableHeader: React.FunctionComponent<VirtualTableHeaderProps<any>>;
export {};
