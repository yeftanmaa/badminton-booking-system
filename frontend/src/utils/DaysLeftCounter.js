export const DaysLeftCounter = (targetDate) => {
    const today = new Date();

    const timeDifference = targetDate - today;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysLeft;
}