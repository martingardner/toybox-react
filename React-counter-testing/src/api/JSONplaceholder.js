export function JSONplaceholderFetch() {
    try{
        return fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
    } catch(e) {
        return {};
    }
}