export const config = {
    hook: {
        search: /Dofus.*/i,
        redirectPorts: [443, 5555],
    },
    mitm: {
        host: "127.0.0.1",
        port: 54321,
    }
}