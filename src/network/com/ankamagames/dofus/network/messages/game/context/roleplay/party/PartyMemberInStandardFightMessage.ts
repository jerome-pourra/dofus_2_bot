import { MapCoordinatesExtended } from "./../../../../../types/game/context/MapCoordinatesExtended";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMemberInFightMessage } from "./AbstractPartyMemberInFightMessage";

export class PartyMemberInStandardFightMessage extends AbstractPartyMemberInFightMessage
{

	public static readonly protocolId: number = 8285;

	public fightMap: MapCoordinatesExtended;

    public constructor()
    {
        super();
        this.fightMap = new MapCoordinatesExtended();
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
        this.deserializeAs_PartyMemberInStandardFightMessage(input);
    }

    private deserializeAs_PartyMemberInStandardFightMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.fightMap = new MapCoordinatesExtended();
        this.fightMap.deserialize(input);
    }

}