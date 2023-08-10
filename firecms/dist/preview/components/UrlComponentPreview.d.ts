import React from "react";
import { PreviewType } from "../../types";
import { PreviewSize } from "../PropertyPreviewProps";
/**
 * @category Preview components
 */
export declare function UrlComponentPreview({ url, previewType, size, hint }: {
    url: string;
    previewType?: PreviewType;
    size: PreviewSize;
    hint?: string;
}): React.ReactElement;
