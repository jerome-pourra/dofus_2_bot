import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyRestrictedMessage extends AbstractPartyMessage
{

	public static readonly protocolId: number = 2879;

	public restricted: boolean = false;

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
        this.deserializeAs_PartyRestrictedMessage(input);
    }

    private deserializeAs_PartyRestrictedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._restrictedFunc(input);
    }

    private _restrictedFunc(input: ICustomDataInput)
    {
        this.restricted = input.readBoolean();
    }

}