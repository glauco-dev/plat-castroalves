import { TableWhereFilterOp } from "../../Table";
interface BooleanFieldProps {
    name: string;
    value?: [op: TableWhereFilterOp, fieldValue: any];
    setValue: (value?: [op: TableWhereFilterOp, newValue: any]) => void;
    title?: string;
}
export declare function BooleanFilterField({ name, title, value, setValue }: BooleanFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
