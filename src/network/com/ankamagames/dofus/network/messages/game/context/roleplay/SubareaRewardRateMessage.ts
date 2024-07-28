import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SubareaRewardRateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1678;

	public subAreaRate: number = 0;

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
        this.deserializeAs_SubareaRewardRateMessage(input);
    }

    private deserializeAs_SubareaRewardRateMessage(input: ICustomDataInput)
    {
        this._subAreaRateFunc(input);
    }

    private _subAreaRateFunc(input: ICustomDataInput)
    {
        this.subAreaRate = input.readVarShort();
    }

}