function SnackList() {

    const snacks = [
        { name: "Croissant", rank: 4 },
        { name: "Cookies", rank: 3 },
        { name: "Popcorn", rank: 2 },
        { name: "Potato Chips", rank: 1 }
        ];

        const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

    return (
            <div>
                {sortedSnacks.map((snack) => (
                    <div key={snack.name}>
                        <h2>{snack.name}</h2>
                        <p>Rank: {snack.rank}</p>
                    </div>
                ))}
            </div>
    );
}

export default SnackList;