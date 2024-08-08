import { CharacterMinimalSocialPublicInformations } from "./../../../types/game/character/CharacterMinimalSocialPublicInformations";
import { GuildFactSheetInformations } from "./../../../types/game/social/GuildFactSheetInformations";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildFactsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5626;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public infos: GuildFactSheetInformations;
	public creationDate: number = 0;
	public members: Array<CharacterMinimalSocialPublicInformations>;

    public constructor()
    {
        super();
        this.infos = new GuildFactSheetInformations();
        this.members = Array<CharacterMinimalSocialPublicInformations>();
    }

    public getMessageId()
    {
        return GuildFactsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildFactsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildFactsMessage.endpointServer;
    }

    public initGuildFactsMessage(infos: GuildFactSheetInformations = null, creationDate: number = 0, members: Array<CharacterMinimalSocialPublicInformations> = null): GuildFactsMessage
    {
        this.infos = infos;
        this.creationDate = creationDate;
        this.members = members;
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
        this.serializeAs_GuildFactsMessage(output);
    }

    public serializeAs_GuildFactsMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.infos.getTypeId());
        this.infos.serialize(output);
        if(this.creationDate < 0)
        {
            throw new Error("Forbidden value (" + this.creationDate + ") on element creationDate.");
        }
        output.writeInt(this.creationDate);
        output.writeShort(this.members.length);
        for(var _i3: number = 0; _i3 < this.members.length; _i3++)
        {
            (this.members[_i3] as CharacterMinimalSocialPublicInformations).serializeAs_CharacterMinimalSocialPublicInformations(output);
        }
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