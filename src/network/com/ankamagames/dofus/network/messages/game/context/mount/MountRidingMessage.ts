import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../../../jerakine/network/utils/BooleanByteWrapper";

export class MountRidingMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3880;

	public isRiding: boolean = false;
	public isAutopilot: boolean = false;

    public constructor()
    {
        super();
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