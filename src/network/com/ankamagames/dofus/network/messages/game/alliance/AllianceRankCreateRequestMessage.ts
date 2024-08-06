import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceRankCreateRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9486;

	public parentRankId: number = 0;
	public gfxId: number = 0;
	public name: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceRankCreateRequestMessage.protocolId;
    }

    public initAllianceRankCreateRequestMessage(parentRankId: number = 0, gfxId: number = 0, name: string = ""): AllianceRankCreateRequestMessage
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
        this.serializeAs_AllianceRankCreateRequestMessage(output);
    }

    public serializeAs_AllianceRankCreateRequestMessage(output: ICustomDataOutput)
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
        this.deserializeAs_AllianceRankCreateRequestMessage(input);
    }

    private deserializeAs_AllianceRankCreateRequestMessage(input: ICustomDataInput)
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
            throw new Error("Forbidden value (" + this.parentRankId + ") on element of AllianceRankCreateRequestMessage.parentRankId.");
        }
    }

    private _gfxIdFunc(input: ICustomDataInput)
    {
        this.gfxId = input.readVarUhInt();
        if(this.gfxId < 0)
        {
            throw new Error("Forbidden value (" + this.gfxId + ") on element of AllianceRankCreateRequestMessage.gfxId.");
        }
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

}