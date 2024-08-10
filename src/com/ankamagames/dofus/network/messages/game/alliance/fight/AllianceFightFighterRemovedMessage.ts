import { SocialFightInfo } from "./../../../../types/game/social/fight/SocialFightInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceFightFighterRemovedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 944;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public allianceFightInfo: SocialFightInfo;
	public fighterId: number = 0;

    public constructor()
    {
        super();
        this.allianceFightInfo = new SocialFightInfo();
    }

    public getMessageId()
    {
        return AllianceFightFighterRemovedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceFightFighterRemovedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceFightFighterRemovedMessage.endpointServer;
    }

    public initAllianceFightFighterRemovedMessage(allianceFightInfo: SocialFightInfo = null, fighterId: number = 0): AllianceFightFighterRemovedMessage
    {
        this.allianceFightInfo = allianceFightInfo;
        this.fighterId = fighterId;
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
        this.serializeAs_AllianceFightFighterRemovedMessage(output);
    }

    public serializeAs_AllianceFightFighterRemovedMessage(output: ICustomDataOutput)
    {
        this.allianceFightInfo.serializeAs_SocialFightInfo(output);
        if(this.fighterId < 0 || this.fighterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.fighterId + ") on element fighterId.");
        }
        output.writeVarLong(this.fighterId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceFightFighterRemovedMessage(input);
    }

    private deserializeAs_AllianceFightFighterRemovedMessage(input: ICustomDataInput)
    {
        this.allianceFightInfo = new SocialFightInfo();
        this.allianceFightInfo.deserialize(input);
        this._fighterIdFunc(input);
    }

    private _fighterIdFunc(input: ICustomDataInput)
    {
        this.fighterId = input.readVarUhLong();
        if(this.fighterId < 0 || this.fighterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.fighterId + ") on element of AllianceFightFighterRemovedMessage.fighterId.");
        }
    }

}