import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { EntityDispositionInformations } from "./EntityDispositionInformations";

export class FightEntityDispositionInformations extends EntityDispositionInformations
{

	public static readonly protocolId: number = 3736;

	public carryingCharacterId: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightEntityDispositionInformations(input);
    }

    private deserializeAs_FightEntityDispositionInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._carryingCharacterIdFunc(input);
    }

    private _carryingCharacterIdFunc(input: ICustomDataInput)
    {
        this.carryingCharacterId = input.readDouble();
        if(this.carryingCharacterId < -9007199254740992 || this.carryingCharacterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.carryingCharacterId + ") on element of FightEntityDispositionInformations.carryingCharacterId.");
        }
    }

}