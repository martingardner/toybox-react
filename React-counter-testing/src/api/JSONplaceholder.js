export async function JSONplaceholderFetch() {
    try{
        return await fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
    } catch(e) {
        return {};
    }
}