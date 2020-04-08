const apiEndpoint = "https://api.datamuse.com/words?rel_syn=";

export function getSynonyms(word = 'distance') {
    if (!word) {
        return Promise.resolve([]);
    }

    const endpoint = `${apiEndpoint}${word}`;

    return fetch(endpoint, {method: 'GET'})
        .then(response => response.json())
        .then(response => response.map(({word}) => word))
        .catch(() => []);
}
