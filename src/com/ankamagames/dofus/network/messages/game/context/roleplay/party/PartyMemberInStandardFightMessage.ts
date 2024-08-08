import { MapCoordinatesExtended } from "./../../../../../types/game/context/MapCoordinatesExtended";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMemberInFightMessage } from "./AbstractPartyMemberInFightMessage";

export class PartyMemberInStandardFightMessage extends AbstractPartyMemberInFightMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8285;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public fightMap: MapCoordinatesExtended;

    public constructor()
    {
        super();
        this.fightMap = new MapCoordinatesExtended();
    }

    public getMessageId()
    {
        return PartyMemberInStandardFightMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyMemberInStandardFightMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyMemberInStandardFightMessage.endpointServer;
    }

    public initPartyMemberInStandardFightMessage(partyId: number = 0, reason: number = 0, memberId: number = 0, memberAccountId: number = 0, memberName: string = "", fightId: number = 0, timeBeforeFightStart: number = 0, fightMap: MapCoordinatesExtended = null): PartyMemberInStandardFightMessage
    {
        super.initAbstractPartyMemberInFightMessage(partyId,reason,memberId,memberAccountId,memberName,fightId,timeBeforeFightStart);
        this.fightMap = fightMap;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PartyMemberInStandardFightMessage(output);
    }

    public serializeAs_PartyMemberInStandardFightMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMemberInFightMessage(output);
        this.fightMap.serializeAs_MapCoordinatesExtended(output);
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