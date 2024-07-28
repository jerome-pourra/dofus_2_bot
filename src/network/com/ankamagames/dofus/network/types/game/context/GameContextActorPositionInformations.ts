import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { EntityDispositionInformations } from "./EntityDispositionInformations";

export class GameContextActorPositionInformations
{

	public static readonly protocolId: number = 3056;

	public contextualId: number = 0;
	public disposition: EntityDispositionInformations;

    public constructor()
    {
        this.disposition = new EntityDispositionInformations();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameContextActorPositionInformations(input);
    }

    private deserializeAs_GameContextActorPositionInformations(input: ICustomDataInput)
    {
        this._contextualIdFunc(input);
        let _id2: number = input.readUnsignedShort();
        this.disposition = ProtocolTypeManager.getInstance(EntityDispositionInformations,_id2);
        this.disposition.deserialize(input);
    }

    private _contextualIdFunc(input: ICustomDataInput)
    {
        this.contextualId = input.readDouble();
        if(this.contextualId < -9007199254740992 || this.contextualId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.contextualId + ") on element of GameContextActorPositionInformations.contextualId.");
        }
    }

}