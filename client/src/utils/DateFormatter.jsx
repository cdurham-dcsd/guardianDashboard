export const formatDate = (dateString = null) => {
    if (dateString) {
        const myDate = new Date(dateString);
        const Y = myDate.getFullYear();
        const month = myDate.toLocaleString("default", { month: "long" });
        const dd = myDate.getDate();

        return `${month} ${dd}, ${Y}`;
    }

    return dateString;
};

export const getToday = () => {
    const myDate = new Date();
    const Y = myDate.getFullYear();
    const mm = myDate.getMonth() + 1;
    const dd = myDate.getDate();

    return `${mm.toString().padStart(2, "0")}/${dd
        .toString()
        .padStart(2, "0")}/${Y}`;
};
