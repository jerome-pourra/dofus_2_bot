import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class CreateGuildRankRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1740;

	public parentRankId: number = 0;
	public gfxId: number = 0;
	public name: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CreateGuildRankRequestMessage.protocolId;
    }

    public initCreateGuildRankRequestMessage(parentRankId: number = 0, gfxId: number = 0, name: string = ""): CreateGuildRankRequestMessage
    {
        this.parentRankId = parentRankId;
        this.gfxId = gfxId;
        this.name = name;
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
        this.serializeAs_CreateGuildRankRequestMessage(output);
    }

    public serializeAs_CreateGuildRankRequestMessage(output: ICustomDataOutput)
    {
        if(this.parentRankId < 0)
        {
            throw new Error("Forbidden value (" + this.parentRankId + ") on element parentRankId.");
        }
        output.writeVarInt(this.parentRankId);
        if(this.gfxId < 0)
        {
            throw new Error("Forbidden value (" + this.gfxId + ") on element gfxId.");
        }
        output.writeVarInt(this.gfxId);
        output.writeUTF(this.name);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CreateGuildRankRequestMessage(input);
    }

    private deserializeAs_CreateGuildRankRequestMessage(input: ICustomDataInput)
    {
        this._parentRankIdFunc(input);
        this._gfxIdFunc(input);
        this._nameFunc(input);
    }

    private _parentRankIdFunc(input: ICustomDataInput)
    {
        this.parentRankId = input.readVarUhInt();
        if(this.parentRankId < 0)
        {
            throw new Error("Forbidden value (" + this.parentRankId + ") on element of CreateGuildRankRequestMessage.parentRankId.");
        }
    }

    private _gfxIdFunc(input: ICustomDataInput)
    {
        this.gfxId = input.readVarUhInt();
        if(this.gfxId < 0)
        {
            throw new Error("Forbidden value (" + this.gfxId + ") on element of CreateGuildRankRequestMessage.gfxId.");
        }
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

}