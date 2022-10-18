
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Vinicius-HT/Portfolio/master/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}