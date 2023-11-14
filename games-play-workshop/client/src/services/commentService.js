import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/jsonstore/comments";

export const create = async (gameId, username, comment) => {
    const newComment = await request.post(baseUrl, {
        gameId,
        username,
        comment,
    });

    console.log(123, newComment);

    return newComment;
};
