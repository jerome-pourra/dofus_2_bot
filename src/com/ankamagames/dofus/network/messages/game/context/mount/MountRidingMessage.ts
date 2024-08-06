import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../../../jerakine/network/utils/BooleanByteWrapper";

export class MountRidingMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3880;

	public isRiding: boolean = false;
	public isAutopilot: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountRidingMessage.protocolId;
    }

    public initMountRidingMessage(isRiding: boolean = false, isAutopilot: boolean = false): MountRidingMessage
    {
        this.isRiding = isRiding;
        this.isAutopilot = isAutopilot;
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
        this.serializeAs_MountRidingMessage(output);
    }

    public serializeAs_MountRidingMessage(output: ICustomDataOutput)
    {
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.isRiding);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.isAutopilot);
        output.writeByte(_box0);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountRidingMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.isRiding = BooleanByteWrapper.getFlag(_box0,0);
        this.isAutopilot = BooleanByteWrapper.getFlag(_box0,1);
    }

    private deserializeAs_MountRidingMessage(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
    }

}