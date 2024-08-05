import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ListenersOfSynchronizedStorageMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8036;

	public players: Array<string>;

    public constructor()
    {
        super();
        this.players = Array<string>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ListenersOfSynchronizedStorageMessage(input);
    }

    private deserializeAs_ListenersOfSynchronizedStorageMessage(input: ICustomDataInput)
    {
        let _val1: string;
        let _playersLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _playersLen; _i1++)
        {
            _val1 = String(input.readUTF());
            this.players.push(_val1);
        }
    }

}