import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceJoinAutomaticallyRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 468;

	public allianceId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceJoinAutomaticallyRequestMessage.protocolId;
    }

    public initAllianceJoinAutomaticallyRequestMessage(allianceId: number = 0): AllianceJoinAutomaticallyRequestMessage
    {
        this.allianceId = allianceId;
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
        this.serializeAs_AllianceJoinAutomaticallyRequestMessage(output);
    }

    public serializeAs_AllianceJoinAutomaticallyRequestMessage(output: ICustomDataOutput)
    {
        output.writeInt(this.allianceId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceJoinAutomaticallyRequestMessage(input);
    }

    private deserializeAs_AllianceJoinAutomaticallyRequestMessage(input: ICustomDataInput)
    {
        this._allianceIdFunc(input);
    }

    private _allianceIdFunc(input: ICustomDataInput)
    {
        this.allianceId = input.readInt();
    }

}