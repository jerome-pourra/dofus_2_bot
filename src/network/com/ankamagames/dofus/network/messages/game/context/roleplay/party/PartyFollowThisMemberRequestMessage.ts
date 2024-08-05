import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { PartyFollowMemberRequestMessage } from "./PartyFollowMemberRequestMessage";

export class PartyFollowThisMemberRequestMessage extends PartyFollowMemberRequestMessage
{

	public static readonly protocolId: number = 327;

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
        this.deserializeAs_PartyFollowThisMemberRequestMessage(input);
    }

    private deserializeAs_PartyFollowThisMemberRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._enabledFunc(input);
    }

    private _enabledFunc(input: ICustomDataInput)
    {
        this.enabled = input.readBoolean();
    }

}