import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SpellItem } from "./SpellItem";

export class ForgettableSpellItem extends SpellItem implements INetworkType
{

	public static readonly protocolId: number = 2798;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public available: boolean = false;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ForgettableSpellItem.protocolId;
    }

    public isEndpointClient()
    {
        return ForgettableSpellItem.endpointClient;
    }

    public isEndpointServer()
    {
        return ForgettableSpellItem.endpointServer;
    }

    public initForgettableSpellItem(spellId: number = 0, spellLevel: number = 0, available: boolean = false): ForgettableSpellItem
    {
        super.initSpellItem(spellId,spellLevel);
        this.available = available;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ForgettableSpellItem(output);
    }

    public serializeAs_ForgettableSpellItem(output: ICustomDataOutput)
    {
        super.serializeAs_SpellItem(output);
        output.writeBoolean(this.available);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ForgettableSpellItem(input);
    }

    private deserializeAs_ForgettableSpellItem(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._availableFunc(input);
    }

    private _availableFunc(input: ICustomDataInput)
    {
        this.available = input.readBoolean();
    }

}