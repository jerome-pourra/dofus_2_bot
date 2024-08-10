import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class StartExchangeTaxCollectorEquipmentMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 878;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public uid: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return StartExchangeTaxCollectorEquipmentMessage.protocolId;
    }

    public isEndpointClient()
    {
        return StartExchangeTaxCollectorEquipmentMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return StartExchangeTaxCollectorEquipmentMessage.endpointServer;
    }

    public initStartExchangeTaxCollectorEquipmentMessage(uid: number = 0): StartExchangeTaxCollectorEquipmentMessage
    {
        this.uid = uid;
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
        this.serializeAs_StartExchangeTaxCollectorEquipmentMessage(output);
    }

    public serializeAs_StartExchangeTaxCollectorEquipmentMessage(output: ICustomDataOutput)
    {
        if(this.uid < 0 || this.uid > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.uid + ") on element uid.");
        }
        output.writeDouble(this.uid);
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