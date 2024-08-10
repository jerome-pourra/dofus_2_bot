import { SocialFightInfo } from "./../../../../types/game/social/fight/SocialFightInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SocialFightTakePlaceRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7755;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public socialFightInfo: SocialFightInfo;
	public replacedCharacterId: number = 0;

    public constructor()
    {
        super();
        this.socialFightInfo = new SocialFightInfo();
    }

    public getMessageId()
    {
        return SocialFightTakePlaceRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return SocialFightTakePlaceRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return SocialFightTakePlaceRequestMessage.endpointServer;
    }

    public initSocialFightTakePlaceRequestMessage(socialFightInfo: SocialFightInfo = null, replacedCharacterId: number = 0): SocialFightTakePlaceRequestMessage
    {
        this.socialFightInfo = socialFightInfo;
        this.replacedCharacterId = replacedCharacterId;
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
        this.serializeAs_SocialFightTakePlaceRequestMessage(output);
    }

    public serializeAs_SocialFightTakePlaceRequestMessage(output: ICustomDataOutput)
    {
        this.socialFightInfo.serializeAs_SocialFightInfo(output);
        if(this.replacedCharacterId < 0 || this.replacedCharacterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.replacedCharacterId + ") on element replacedCharacterId.");
        }
        output.writeVarLong(this.replacedCharacterId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SocialFightTakePlaceRequestMessage(input);
    }

    private deserializeAs_SocialFightTakePlaceRequestMessage(input: ICustomDataInput)
    {
        this.socialFightInfo = new SocialFightInfo();
        this.socialFightInfo.deserialize(input);
        this._replacedCharacterIdFunc(input);
    }

    private _replacedCharacterIdFunc(input: ICustomDataInput)
    {
        this.replacedCharacterId = input.readVarUhLong();
        if(this.replacedCharacterId < 0 || this.replacedCharacterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.replacedCharacterId + ") on element of SocialFightTakePlaceRequestMessage.replacedCharacterId.");
        }
    }

}