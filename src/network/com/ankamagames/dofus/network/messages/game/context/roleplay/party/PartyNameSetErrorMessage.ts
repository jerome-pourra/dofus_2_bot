import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyNameSetErrorMessage extends AbstractPartyMessage
{

	public static readonly protocolId: number = 7989;

	public result: number = 0;

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
        this.deserializeAs_PartyNameSetErrorMessage(input);
    }

    private deserializeAs_PartyNameSetErrorMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._resultFunc(input);
    }

    private _resultFunc(input: ICustomDataInput)
    {
        this.result = input.readByte();
        if(this.result < 0)
        {
            throw new Error("Forbidden value (" + this.result + ") on element of PartyNameSetErrorMessage.result.");
        }
    }

}