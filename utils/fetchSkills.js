

export const fetchSkills = async() => {
    const res = await fetch(`https://localhost:3000//api/getSkills`);

    const data = await res.json()
    const skills= data.skills;

    return skills;
}