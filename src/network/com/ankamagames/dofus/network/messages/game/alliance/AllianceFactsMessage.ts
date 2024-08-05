import { CharacterMinimalSocialPublicInformations } from "./../../../types/game/character/CharacterMinimalSocialPublicInformations";
import { AllianceFactSheetInformation } from "./../../../types/game/social/AllianceFactSheetInformation";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceFactsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9269;

	public infos: AllianceFactSheetInformation;
	public members: Array<CharacterMinimalSocialPublicInformations>;
	public controlledSubareaIds: Array<number>;
	public leaderCharacterId: number = 0;
	public leaderCharacterName: string = "";

    public constructor()
    {
        super();
        this.infos = new AllianceFactSheetInformation();
        this.members = Array<CharacterMinimalSocialPublicInformations>();
        this.controlledSubareaIds = Array<number>();
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
        this.deserializeAs_AllianceFactsMessage(input);
    }

    private deserializeAs_AllianceFactsMessage(input: ICustomDataInput)
    {
        let _item2: CharacterMinimalSocialPublicInformations;
        let _val3: number = 0;
        let _id1: number = input.readUnsignedShort();
        this.infos = ProtocolTypeManager.getInstance(AllianceFactSheetInformation,_id1);
        this.infos.deserialize(input);
        let _membersLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _membersLen; _i2++)
        {
            _item2 = new CharacterMinimalSocialPublicInformations();
            _item2.deserialize(input);
            this.members.push(_item2);
        }
        let _controlledSubareaIdsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _controlledSubareaIdsLen; _i3++)
        {
            _val3 = input.readVarUhShort();
            if(_val3 < 0)
            {
                throw new Error("Forbidden value (" + _val3 + ") on elements of controlledSubareaIds.");
            }
            this.controlledSubareaIds.push(_val3);
        }
        this._leaderCharacterIdFunc(input);
        this._leaderCharacterNameFunc(input);
    }

    private _leaderCharacterIdFunc(input: ICustomDataInput)
    {
        this.leaderCharacterId = input.readVarUhLong();
        if(this.leaderCharacterId < 0 || this.leaderCharacterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.leaderCharacterId + ") on element of AllianceFactsMessage.leaderCharacterId.");
        }
    }

    private _leaderCharacterNameFunc(input: ICustomDataInput)
    {
        this.leaderCharacterName = input.readUTF();
    }

}