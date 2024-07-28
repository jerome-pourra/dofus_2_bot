import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobAllowMultiCraftRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1737;

	public enabled: boolean = false;

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
        this.deserializeAs_JobAllowMultiCraftRequestMessage(input);
    }

    private deserializeAs_JobAllowMultiCraftRequestMessage(input: ICustomDataInput)
    {
        this._enabledFunc(input);
    }

    private _enabledFunc(input: ICustomDataInput)
    {
        this.enabled = input.readBoolean();
    }

}