export class PacketTooShortError extends Error {

    constructor(message: string) {
        super(message);
    }

}