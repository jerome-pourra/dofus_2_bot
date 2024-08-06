import { PartyMemberGeoPosition } from "./../../../../../types/game/context/roleplay/party/PartyMemberGeoPosition";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyLocateMembersMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8066;

	public geopositions: Array<PartyMemberGeoPosition>;

    public constructor()
    {
        super();
        this.geopositions = Array<PartyMemberGeoPosition>();
    }

    public getMessageId()
    {
        return PartyLocateMembersMessage.protocolId;
    }

    public initPartyLocateMembersMessage(partyId: number = 0, geopositions: Array<PartyMemberGeoPosition> = null): PartyLocateMembersMessage
    {
        super.initAbstractPartyMessage(partyId);
        this.geopositions = geopositions;
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
        this.serializeAs_PartyLocateMembersMessage(output);
    }

    public serializeAs_PartyLocateMembersMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        output.writeShort(this.geopositions.length);
        for(var _i1: number = 0; _i1 < this.geopositions.length; _i1++)
        {
            (this.geopositions[_i1] as PartyMemberGeoPosition).serializeAs_PartyMemberGeoPosition(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyLocateMembersMessage(input);
    }

    private deserializeAs_PartyLocateMembersMessage(input: ICustomDataInput)
    {
        let _item1: PartyMemberGeoPosition;
        super.deserialize(input);
        let _geopositionsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _geopositionsLen; _i1++)
        {
            _item1 = new PartyMemberGeoPosition();
            _item1.deserialize(input);
            this.geopositions.push(_item1);
        }
    }

}