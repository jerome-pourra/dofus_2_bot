export interface INetworkHandler {

    // On pourrait retourner un tableau d'actions a effectuer post traitement
    process(): void;

}