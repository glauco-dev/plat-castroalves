interface SearchBarProps {
    onTextSearch: (searchString?: string) => void;
    placeholder?: string;
    expandable?: boolean;
    large?: boolean;
}
export declare function SearchBar({ onTextSearch, placeholder, expandable, large }: SearchBarProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
