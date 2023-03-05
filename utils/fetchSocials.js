
export const fetchSocials = async() => {
    const res = await fetch(`https://localhost:3000//api/getSocials`);

    const data = await res.json()
    const socials = data.socials;

    return socials;
}