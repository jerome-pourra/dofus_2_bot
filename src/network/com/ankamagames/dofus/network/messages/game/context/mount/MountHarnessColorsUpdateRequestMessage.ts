import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountHarnessColorsUpdateRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4391;

	public useHarnessColors: boolean = false;

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