import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../../jerakine/network/utils/BooleanByteWrapper";

export class GuildModificationStartedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 515;

	public canChangeName: boolean = false;
	public canChangeEmblem: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildModificationStartedMessage.protocolId;
    }

    public initGuildModificationStartedMessage(canChangeName: boolean = false, canChangeEmblem: boolean = false): GuildModificationStartedMessage
    {
        this.canChangeName = canChangeName;
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
        this.serializeAs_GuildModificationStartedMessage(output);
    }

    public serializeAs_GuildModificationStartedMessage(output: ICustomDataOutput)
    {
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.canChangeName);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.canChangeEmblem);
        output.writeByte(_box0);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildModificationStartedMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.canChangeName = BooleanByteWrapper.getFlag(_box0,0);
        this.canChangeEmblem = BooleanByteWrapper.getFlag(_box0,1);
    }

    private deserializeAs_GuildModificationStartedMessage(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
    }

}