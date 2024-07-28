import { AnkSocketEndpoint } from "../AnkSocket";
import { PacketHeaderEncoder } from "./PacketHeaderEncoder";

test("Simple encode to server", () => {
    let expected = Buffer.from("0005000000010100", "hex");
    let data = PacketHeaderEncoder.encode(1, 1, Buffer.from("00", "hex"), AnkSocketEndpoint.SERVER);
    expect(data).toEqual(expected);
});

test("Simple encode to client", () => {
    let expected = Buffer.from("00050100", "hex");
    let data = PacketHeaderEncoder.encode(1, 1, Buffer.from("00", "hex"), AnkSocketEndpoint.CLIENT);
    expect(data).toEqual(expected);
});