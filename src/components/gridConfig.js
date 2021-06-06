
export const columns = [
    {
        dataField: "city",
        text: "City",
        sort: true,
    },
    {
        dataField: "aqi",
        text: "Current AQI",
        sort: true,
    },
    {
        dataField: "formattedTime",
        text: "Last seen",
        sort: true,
        sortFunc: (a, b, order, dataField, rowA, rowB) => {
            let nameA = new Date(rowA.timestamp);
            let nameB = new Date(rowB.timestamp);

            if (nameA - nameB > 0) {
                return -1;
            }
            if (nameA - nameB < 0) {
                return 1;
            }
            return 0;
        },
    },
];
export const defaultSorted = [
    {
        dataField: "formattedTime",
        order: "desc",
    },
];

export const rowStyle = (row, rowIndex) => {
    const style = {};
    const index = parseInt(row.aqi);

    if (index <= 50) {
        style.backgroundColor = "#65ff07";
    } else if (50 < index && index <= 100) {
        style.backgroundColor = "#c1ff07";
    } else if (100 < index && index <= 200) {
        style.backgroundColor = "#fff907";
    } else if (200 < index && index <= 300) {
        style.backgroundColor = "#ffa907";
    } else if (300 < index && index <= 400) {
        style.backgroundColor = "#ff8607";
    } else if (400 < index) {
        style.backgroundColor = "#ff0707";
    }

    return style;
};