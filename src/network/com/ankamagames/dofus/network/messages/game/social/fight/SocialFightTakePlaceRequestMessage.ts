import { SocialFightInfo } from "./../../../../types/game/social/fight/SocialFightInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SocialFightTakePlaceRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7755;

	public socialFightInfo: SocialFightInfo;
	public replacedCharacterId: number = 0;

    public constructor()
    {
        super();
        this.socialFightInfo = new SocialFightInfo();
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