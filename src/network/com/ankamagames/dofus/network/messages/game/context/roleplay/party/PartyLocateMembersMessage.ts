import { PartyMemberGeoPosition } from "./../../../../../types/game/context/roleplay/party/PartyMemberGeoPosition";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyLocateMembersMessage extends AbstractPartyMessage
{

	public static readonly protocolId: number = 8066;

	public geopositions: Array<PartyMemberGeoPosition>;

    public constructor()
    {
        super();
        this.geopositions = Array<PartyMemberGeoPosition>();
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