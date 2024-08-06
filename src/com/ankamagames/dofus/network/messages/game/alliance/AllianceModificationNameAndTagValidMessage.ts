import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceModificationNameAndTagValidMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6811;

	public allianceName: string = "";
	public allianceTag: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceModificationNameAndTagValidMessage.protocolId;
    }

    public initAllianceModificationNameAndTagValidMessage(allianceName: string = "", allianceTag: string = ""): AllianceModificationNameAndTagValidMessage
    {
        this.allianceName = allianceName;
        this.allianceTag = allianceTag;
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
        this.serializeAs_AllianceModificationNameAndTagValidMessage(output);
    }

    public serializeAs_AllianceModificationNameAndTagValidMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.allianceName);
        output.writeUTF(this.allianceTag);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceModificationNameAndTagValidMessage(input);
    }

    private deserializeAs_AllianceModificationNameAndTagValidMessage(input: ICustomDataInput)
    {
        this._allianceNameFunc(input);
        this._allianceTagFunc(input);
    }

    private _allianceNameFunc(input: ICustomDataInput)
    {
        this.allianceName = input.readUTF();
    }

    private _allianceTagFunc(input: ICustomDataInput)
    {
        this.allianceTag = input.readUTF();
    }

}