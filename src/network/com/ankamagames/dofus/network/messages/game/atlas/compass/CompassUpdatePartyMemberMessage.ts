import { MapCoordinates } from "./../../../../types/game/context/MapCoordinates";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { CompassUpdateMessage } from "./CompassUpdateMessage";

export class CompassUpdatePartyMemberMessage extends CompassUpdateMessage
{

	public static readonly protocolId: number = 9981;

	public memberId: number = 0;
	public active: boolean = false;

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
        this.deserializeAs_CompassUpdatePartyMemberMessage(input);
    }

    private deserializeAs_CompassUpdatePartyMemberMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._memberIdFunc(input);
        this._activeFunc(input);
    }

    private _memberIdFunc(input: ICustomDataInput)
    {
        this.memberId = input.readVarUhLong();
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element of CompassUpdatePartyMemberMessage.memberId.");
        }
    }

    private _activeFunc(input: ICustomDataInput)
    {
        this.active = input.readBoolean();
    }

}