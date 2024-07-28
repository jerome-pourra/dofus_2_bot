import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class StartExchangeTaxCollectorEquipmentMessage extends NetworkMessage
{

	public static readonly protocolId: number = 878;

	public uid: number = 0;

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
        this.deserializeAs_StartExchangeTaxCollectorEquipmentMessage(input);
    }

    private deserializeAs_StartExchangeTaxCollectorEquipmentMessage(input: ICustomDataInput)
    {
        this._uidFunc(input);
    }

    private _uidFunc(input: ICustomDataInput)
    {
        this.uid = input.readDouble();
        if(this.uid < 0 || this.uid > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.uid + ") on element of StartExchangeTaxCollectorEquipmentMessage.uid.");
        }
    }

}