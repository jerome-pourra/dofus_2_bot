import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { EntityDispositionInformations } from "./EntityDispositionInformations";

export class IdentifiedEntityDispositionInformations extends EntityDispositionInformations
{

	public static readonly protocolId: number = 619;

	public id: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IdentifiedEntityDispositionInformations(input);
    }

    private deserializeAs_IdentifiedEntityDispositionInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._idFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readDouble();
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of IdentifiedEntityDispositionInformations.id.");
        }
    }

}