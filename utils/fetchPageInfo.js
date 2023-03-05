


export const fetchPageInfo = async() => {
    const res = await fetch('https://localhost:3000//api/getPageInfo');

    const data = await res.json();
    const pageInfo = data.pageInfo;

    return pageInfo;
}