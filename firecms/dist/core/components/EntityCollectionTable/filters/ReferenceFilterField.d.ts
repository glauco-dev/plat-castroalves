import { TableWhereFilterOp } from "../../Table";
interface ReferenceFilterFieldProps {
    name: string;
    value?: [op: TableWhereFilterOp, fieldValue: any];
    setValue: (filterValue?: [TableWhereFilterOp, any]) => void;
    isArray?: boolean;
    path?: string;
    title?: string;
    previewProperties?: string[];
    popupOpen: boolean;
    setPopupOpen: (open: boolean) => void;
}
export declare function ReferenceFilterField({ name, value, setValue, isArray, path, title, previewProperties, setPopupOpen }: ReferenceFilterFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
