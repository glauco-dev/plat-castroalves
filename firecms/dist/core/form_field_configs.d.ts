import { FieldConfig, FieldConfigId, Property, ResolvedProperty } from "../types";
export declare const DEFAULT_FIELD_CONFIGS: Record<FieldConfigId, FieldConfig<any>>;
export declare function getFieldConfig(property: Property | ResolvedProperty): FieldConfig | undefined;
export declare function getFieldId(property: Property | ResolvedProperty): FieldConfigId | undefined;
