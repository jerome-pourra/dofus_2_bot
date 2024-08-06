import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ObjectErrorMessage } from "./ObjectErrorMessage";

export class SymbioticObjectErrorMessage extends ObjectErrorMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2086;

	public errorCode: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SymbioticObjectErrorMessage.protocolId;
    }

    public initSymbioticObjectErrorMessage(reason: number = 0, errorCode: number = 0): SymbioticObjectErrorMessage
    {
        super.initObjectErrorMessage(reason);
        this.errorCode = errorCode;
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
        this.serializeAs_SymbioticObjectErrorMessage(output);
    }

    public serializeAs_SymbioticObjectErrorMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectErrorMessage(output);
        output.writeByte(this.errorCode);
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