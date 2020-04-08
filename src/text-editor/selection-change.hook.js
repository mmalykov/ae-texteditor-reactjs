import {useEffect} from "react";

export function useSelectionChange(onSelectionChange) {
    useEffect(() => {
        const listener = () => onSelectionChange(getSelection());

        document.addEventListener('selectionchange', listener);

        return () => document.removeEventListener('selectionchange', listener);
    });
}
