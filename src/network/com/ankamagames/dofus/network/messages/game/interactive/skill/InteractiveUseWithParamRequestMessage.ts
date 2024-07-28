import { InteractiveUseRequestMessage } from "./../InteractiveUseRequestMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class InteractiveUseWithParamRequestMessage extends InteractiveUseRequestMessage
{

	public static readonly protocolId: number = 8117;

	public id: number = 0;

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
        this.deserializeAs_InteractiveUseWithParamRequestMessage(input);
    }

    private deserializeAs_InteractiveUseWithParamRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._idFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readInt();
    }

}