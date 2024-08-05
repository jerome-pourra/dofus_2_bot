import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ObjectErrorMessage } from "./ObjectErrorMessage";

export class SymbioticObjectErrorMessage extends ObjectErrorMessage
{

	public static readonly protocolId: number = 2086;

	public errorCode: number = 0;

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
        this.deserializeAs_SymbioticObjectErrorMessage(input);
    }

    private deserializeAs_SymbioticObjectErrorMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._errorCodeFunc(input);
    }

    private _errorCodeFunc(input: ICustomDataInput)
    {
        this.errorCode = input.readByte();
    }

}