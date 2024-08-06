import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountHarnessColorsUpdateRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4391;

	public useHarnessColors: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountHarnessColorsUpdateRequestMessage.protocolId;
    }

    public initMountHarnessColorsUpdateRequestMessage(useHarnessColors: boolean = false): MountHarnessColorsUpdateRequestMessage
    {
        this.useHarnessColors = useHarnessColors;
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
        this.serializeAs_MountHarnessColorsUpdateRequestMessage(output);
    }

    public serializeAs_MountHarnessColorsUpdateRequestMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.useHarnessColors);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountHarnessColorsUpdateRequestMessage(input);
    }

    private deserializeAs_MountHarnessColorsUpdateRequestMessage(input: ICustomDataInput)
    {
        this._useHarnessColorsFunc(input);
    }

    private _useHarnessColorsFunc(input: ICustomDataInput)
    {
        this.useHarnessColors = input.readBoolean();
    }

}