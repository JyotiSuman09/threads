async function formatTimeAgo(timeDifference: number): Promise<string> {
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (seconds < 60) {
        return `${seconds}s ago`;
    } else if (minutes < 60) {
        return `${minutes}m ago`;
    } else if (hours < 24) {
        const remainingMinutes = minutes - hours * 60;
        return `${hours}h ${remainingMinutes}m ago`;
    } else {
        const remainingHours = hours - days * 24;
        return `${days}D ${remainingHours}h ago`;
    }
}

const TimeAgo = async ({createdAt}:{createdAt: number}) => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - createdAt;
    const timeAgoString = await formatTimeAgo(timeDifference);
    return (
        <p className="!text-small-regular text-gray-1">{timeAgoString}</p>
    )
}

export default TimeAgo;
