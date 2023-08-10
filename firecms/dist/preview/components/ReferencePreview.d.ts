import * as React from "react";
import { EntityReference } from "../../types";
import { PreviewSize } from "../PropertyPreviewProps";
export type ReferencePreviewProps = {
    disabled?: boolean;
    reference: EntityReference;
    size: PreviewSize;
    previewProperties?: string[];
    onClick?: () => void;
    onHover?: boolean;
    allowEntityNavigation?: boolean;
};
/**
 * @category Preview components
 */
export declare const ReferencePreview: React.FunctionComponent<ReferencePreviewProps>;
