const stylesBoard = `
    .board__wrapper {
        height: 100%;

        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
    }

    p {
        font-weight: bold;
    }

    .board__player {
        display: flex;
        justify-content: space-between;
        align-items:center;
        width: 80%;
        padding: 1rem;
    }

    .board {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(3,1fr);
        gap: 1px;
        background: #A084E8;

        margin: auto;
        width: 90%;

        border: 1px solid #A084E8;
    }
`;
