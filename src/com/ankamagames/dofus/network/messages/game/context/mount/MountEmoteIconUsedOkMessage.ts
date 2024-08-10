import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountEmoteIconUsedOkMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3490;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public mountId: number = 0;
	public reactionType: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountEmoteIconUsedOkMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MountEmoteIconUsedOkMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MountEmoteIconUsedOkMessage.endpointServer;
    }

    public initMountEmoteIconUsedOkMessage(mountId: number = 0, reactionType: number = 0): MountEmoteIconUsedOkMessage
    {
        this.mountId = mountId;
        this.reactionType = reactionType;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_MountEmoteIconUsedOkMessage(output);
    }

    public serializeAs_MountEmoteIconUsedOkMessage(output: ICustomDataOutput)
    {
        output.writeVarInt(this.mountId);
        if(this.reactionType < 0)
        {
            throw new Error("Forbidden value (" + this.reactionType + ") on element reactionType.");
        }
        output.writeByte(this.reactionType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountEmoteIconUsedOkMessage(input);
    }

    private deserializeAs_MountEmoteIconUsedOkMessage(input: ICustomDataInput)
    {
        this._mountIdFunc(input);
        this._reactionTypeFunc(input);
    }

    private _mountIdFunc(input: ICustomDataInput)
    {
        this.mountId = input.readVarInt();
    }

    private _reactionTypeFunc(input: ICustomDataInput)
    {
        this.reactionType = input.readByte();
        if(this.reactionType < 0)
        {
            throw new Error("Forbidden value (" + this.reactionType + ") on element of MountEmoteIconUsedOkMessage.reactionType.");
        }
    }

}