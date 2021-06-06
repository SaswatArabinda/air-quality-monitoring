
export const mergeTwoArrays = (a, b, prop) => {
    var reduced = a.filter(function (aitem) {
        return !b.find(function (bitem) {
            return aitem[prop] === bitem[prop];
        });
    });
    return reduced.concat(b);
}

export const timeSince = (date) => {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
};

export const updateHistory = (history, updatedData) => {
    updatedData.forEach((element) => {
        const { city, aqi, timestamp } = element;

        history[city]
            ? history[city].push({
                aqi,
                timestamp,
                formattedTime: timeSince(new Date(timestamp)),
            })
            : (history[city] = [
                { aqi, timestamp, formattedTime: timeSince(new Date(timestamp)) },
            ]);
    });
    return history;
};