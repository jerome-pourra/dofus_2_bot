import { ActorRestrictionsInformations } from "./../../../types/game/character/restriction/ActorRestrictionsInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class SetCharacterRestrictionsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1324;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public actorId: number = 0;
	public restrictions: ActorRestrictionsInformations;

    public constructor()
    {
        super();
        this.restrictions = new ActorRestrictionsInformations();
    }

    public getMessageId()
    {
        return SetCharacterRestrictionsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return SetCharacterRestrictionsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return SetCharacterRestrictionsMessage.endpointServer;
    }

    public initSetCharacterRestrictionsMessage(actorId: number = 0, restrictions: ActorRestrictionsInformations = null): SetCharacterRestrictionsMessage
    {
        this.actorId = actorId;
        this.restrictions = restrictions;
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
        this.serializeAs_SetCharacterRestrictionsMessage(output);
    }

    public serializeAs_SetCharacterRestrictionsMessage(output: ICustomDataOutput)
    {
        if(this.actorId < -9007199254740992 || this.actorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.actorId + ") on element actorId.");
        }
        output.writeDouble(this.actorId);
        this.restrictions.serializeAs_ActorRestrictionsInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SetCharacterRestrictionsMessage(input);
    }

    private deserializeAs_SetCharacterRestrictionsMessage(input: ICustomDataInput)
    {
        this._actorIdFunc(input);
        this.restrictions = new ActorRestrictionsInformations();
        this.restrictions.deserialize(input);
    }

    private _actorIdFunc(input: ICustomDataInput)
    {
        this.actorId = input.readDouble();
        if(this.actorId < -9007199254740992 || this.actorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.actorId + ") on element of SetCharacterRestrictionsMessage.actorId.");
        }
    }

}