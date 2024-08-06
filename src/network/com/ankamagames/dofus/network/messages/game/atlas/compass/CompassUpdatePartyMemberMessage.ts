import { MapCoordinates } from "./../../../../types/game/context/MapCoordinates";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { CompassUpdateMessage } from "./CompassUpdateMessage";

export class CompassUpdatePartyMemberMessage extends CompassUpdateMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9981;

	public memberId: number = 0;
	public active: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CompassUpdatePartyMemberMessage.protocolId;
    }

    public initCompassUpdatePartyMemberMessage(type: number = 0, coords: MapCoordinates = null, memberId: number = 0, active: boolean = false): CompassUpdatePartyMemberMessage
    {
        super.initCompassUpdateMessage(type,coords);
        this.memberId = memberId;
        this.active = active;
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
        this.serializeAs_CompassUpdatePartyMemberMessage(output);
    }

    public serializeAs_CompassUpdatePartyMemberMessage(output: ICustomDataOutput)
    {
        super.serializeAs_CompassUpdateMessage(output);
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element memberId.");
        }
        output.writeVarLong(this.memberId);
        output.writeBoolean(this.active);
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