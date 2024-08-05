import { AnkClient } from "./AnkClient";
import { AnkServer } from "./AnkServer";

export class ConnectionHandler {

    private static _server: AnkServer;
    private static _client: AnkClient;

    public static setClient(client: AnkClient) {
        this._client = client;
    }

    public static setServer(server: AnkServer) {
        this._server = server;
    }

    public static getClient(): AnkClient {
        if (!this._client) {
            throw new Error("ConnectionHandler.getClient() -> client not set");
        }
        return this._client;
    }

    public static getServer(): AnkServer {
        if (!this._server) {
            throw new Error("ConnectionHandler.getServer() -> server not set");
        }
        return this._server;
    }

}