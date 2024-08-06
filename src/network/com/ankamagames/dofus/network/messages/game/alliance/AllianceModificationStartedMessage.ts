import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../../jerakine/network/utils/BooleanByteWrapper";

export class AllianceModificationStartedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2149;

	public canChangeName: boolean = false;
	public canChangeTag: boolean = false;
	public canChangeEmblem: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceModificationStartedMessage.protocolId;
    }

    public initAllianceModificationStartedMessage(canChangeName: boolean = false, canChangeTag: boolean = false, canChangeEmblem: boolean = false): AllianceModificationStartedMessage
    {
        this.canChangeName = canChangeName;
        this.canChangeTag = canChangeTag;
        this.canChangeEmblem = canChangeEmblem;
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
        this.serializeAs_AllianceModificationStartedMessage(output);
    }

    public serializeAs_AllianceModificationStartedMessage(output: ICustomDataOutput)
    {
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.canChangeName);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.canChangeTag);
        _box0 = BooleanByteWrapper.setFlag(_box0,2,this.canChangeEmblem);
        output.writeByte(_box0);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceModificationStartedMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.canChangeName = BooleanByteWrapper.getFlag(_box0,0);
        this.canChangeTag = BooleanByteWrapper.getFlag(_box0,1);
        this.canChangeEmblem = BooleanByteWrapper.getFlag(_box0,2);
    }

    private deserializeAs_AllianceModificationStartedMessage(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
    }

}