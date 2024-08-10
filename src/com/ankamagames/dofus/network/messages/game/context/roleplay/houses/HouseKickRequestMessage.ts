import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HouseKickRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7559;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public id: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HouseKickRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return HouseKickRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return HouseKickRequestMessage.endpointServer;
    }

    public initHouseKickRequestMessage(id: number = 0): HouseKickRequestMessage
    {
        this.id = id;
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
        this.serializeAs_HouseKickRequestMessage(output);
    }

    public serializeAs_HouseKickRequestMessage(output: ICustomDataOutput)
    {
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarLong(this.id);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseKickRequestMessage(input);
    }

    private deserializeAs_HouseKickRequestMessage(input: ICustomDataInput)
    {
        this._idFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhLong();
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of HouseKickRequestMessage.id.");
        }
    }

}