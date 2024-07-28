import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7279;

	public allow: boolean = false;

    public constructor()
    {
        super();
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
        this.deserializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage(input);
    }

    private deserializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage(input: ICustomDataInput)
    {
        this._allowFunc(input);
    }

    private _allowFunc(input: ICustomDataInput)
    {
        this.allow = input.readBoolean();
    }

}