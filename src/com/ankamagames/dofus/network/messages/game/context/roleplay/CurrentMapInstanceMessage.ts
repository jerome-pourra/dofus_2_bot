import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { CurrentMapMessage } from "./CurrentMapMessage";

export class CurrentMapInstanceMessage extends CurrentMapMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5476;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public instantiatedMapId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CurrentMapInstanceMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CurrentMapInstanceMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CurrentMapInstanceMessage.endpointServer;
    }

    public initCurrentMapInstanceMessage(mapId: number = 0, instantiatedMapId: number = 0): CurrentMapInstanceMessage
    {
        super.initCurrentMapMessage(mapId);
        this.instantiatedMapId = instantiatedMapId;
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
        this.serializeAs_CurrentMapInstanceMessage(output);
    }

    public serializeAs_CurrentMapInstanceMessage(output: ICustomDataOutput)
    {
        super.serializeAs_CurrentMapMessage(output);
        if(this.instantiatedMapId < 0 || this.instantiatedMapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.instantiatedMapId + ") on element instantiatedMapId.");
        }
        output.writeDouble(this.instantiatedMapId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CurrentMapInstanceMessage(input);
    }

    private deserializeAs_CurrentMapInstanceMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._instantiatedMapIdFunc(input);
    }

    private _instantiatedMapIdFunc(input: ICustomDataInput)
    {
        this.instantiatedMapId = input.readDouble();
        if(this.instantiatedMapId < 0 || this.instantiatedMapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.instantiatedMapId + ") on element of CurrentMapInstanceMessage.instantiatedMapId.");
        }
    }

}