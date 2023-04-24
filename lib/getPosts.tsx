export default async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    if(!res.ok) throw new Error('failed');
    return await res.json();
}
