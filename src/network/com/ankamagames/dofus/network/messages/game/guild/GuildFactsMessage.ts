import { CharacterMinimalSocialPublicInformations } from "./../../../types/game/character/CharacterMinimalSocialPublicInformations";
import { GuildFactSheetInformations } from "./../../../types/game/social/GuildFactSheetInformations";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildFactsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5626;

	public infos: GuildFactSheetInformations;
	public creationDate: number = 0;
	public members: Array<CharacterMinimalSocialPublicInformations>;

    public constructor()
    {
        super();
        this.infos = new GuildFactSheetInformations();
        this.members = Array<CharacterMinimalSocialPublicInformations>();
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
        this.deserializeAs_GuildFactsMessage(input);
    }

    private deserializeAs_GuildFactsMessage(input: ICustomDataInput)
    {
        let _item3: CharacterMinimalSocialPublicInformations;
        let _id1: number = input.readUnsignedShort();
        this.infos = ProtocolTypeManager.getInstance(GuildFactSheetInformations,_id1);
        this.infos.deserialize(input);
        this._creationDateFunc(input);
        let _membersLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _membersLen; _i3++)
        {
            _item3 = new CharacterMinimalSocialPublicInformations();
            _item3.deserialize(input);
            this.members.push(_item3);
        }
    }

    private _creationDateFunc(input: ICustomDataInput)
    {
        this.creationDate = input.readInt();
        if(this.creationDate < 0)
        {
            throw new Error("Forbidden value (" + this.creationDate + ") on element of GuildFactsMessage.creationDate.");
        }
    }

}