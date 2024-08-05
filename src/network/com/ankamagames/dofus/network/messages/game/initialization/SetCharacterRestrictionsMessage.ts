import { ActorRestrictionsInformations } from "./../../../types/game/character/restriction/ActorRestrictionsInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class SetCharacterRestrictionsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1324;

	public actorId: number = 0;
	public restrictions: ActorRestrictionsInformations;

    public constructor()
    {
        super();
        this.restrictions = new ActorRestrictionsInformations();
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