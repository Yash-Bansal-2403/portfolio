

export const fetchProjects = async() => {
    const res = await fetch(`https://localhost:3000//api/getProjects`);

    const data = await res.json();
    const projects = data.projects;

    return projects;
};