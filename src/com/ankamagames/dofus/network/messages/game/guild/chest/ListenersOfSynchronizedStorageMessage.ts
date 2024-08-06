import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ListenersOfSynchronizedStorageMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8036;

	public players: Array<string>;

    public constructor()
    {
        super();
        this.players = Array<string>();
    }

    public getMessageId()
    {
        return ListenersOfSynchronizedStorageMessage.protocolId;
    }

    public initListenersOfSynchronizedStorageMessage(players: Array<string> = null): ListenersOfSynchronizedStorageMessage
    {
        this.players = players;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ListenersOfSynchronizedStorageMessage(output);
    }

    public serializeAs_ListenersOfSynchronizedStorageMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.players.length);
        for(var _i1: number = 0; _i1 < this.players.length; _i1++)
        {
            output.writeUTF(this.players[_i1]);
        }
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