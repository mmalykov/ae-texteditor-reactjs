import {useEffect, useRef} from 'react';

export function useMutationObserver(onMutation) {
    const mutationContainerRef = useRef(null);

    useEffect(() => {
        let fileContentObserver;

        if (mutationContainerRef.current && onMutation) {
            fileContentObserver = new MutationObserver(mutations =>
                mutations.forEach(mutation => onMutation(mutation))
            );

            const config = {childList: true, characterData: true, subtree: true};

            fileContentObserver.observe(mutationContainerRef.current, config);
        }


        return () => fileContentObserver && fileContentObserver.disconnect();
    });

    return mutationContainerRef;
}
