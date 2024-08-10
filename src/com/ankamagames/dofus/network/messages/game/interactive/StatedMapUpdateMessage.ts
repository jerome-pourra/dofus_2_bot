import { StatedElement } from "./../../../types/game/interactive/StatedElement";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class StatedMapUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2054;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public statedElements: Array<StatedElement>;

    public constructor()
    {
        super();
        this.statedElements = Array<StatedElement>();
    }

    public getMessageId()
    {
        return StatedMapUpdateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return StatedMapUpdateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return StatedMapUpdateMessage.endpointServer;
    }

    public initStatedMapUpdateMessage(statedElements: Array<StatedElement> = null): StatedMapUpdateMessage
    {
        this.statedElements = statedElements;
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
        this.serializeAs_StatedMapUpdateMessage(output);
    }

    public serializeAs_StatedMapUpdateMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.statedElements.length);
        for(var _i1: number = 0; _i1 < this.statedElements.length; _i1++)
        {
            (this.statedElements[_i1] as StatedElement).serializeAs_StatedElement(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StatedMapUpdateMessage(input);
    }

    private deserializeAs_StatedMapUpdateMessage(input: ICustomDataInput)
    {
        let _item1: StatedElement;
        let _statedElementsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _statedElementsLen; _i1++)
        {
            _item1 = new StatedElement();
            _item1.deserialize(input);
            this.statedElements.push(_item1);
        }
    }

}