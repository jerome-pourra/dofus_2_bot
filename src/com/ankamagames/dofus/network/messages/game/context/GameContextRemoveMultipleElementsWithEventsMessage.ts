import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { GameContextRemoveMultipleElementsMessage } from "./GameContextRemoveMultipleElementsMessage";

export class GameContextRemoveMultipleElementsWithEventsMessage extends GameContextRemoveMultipleElementsMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1167;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public elementEventIds: Array<number>;

    public constructor()
    {
        super();
        this.elementEventIds = Array<number>();
    }

    public getMessageId()
    {
        return GameContextRemoveMultipleElementsWithEventsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameContextRemoveMultipleElementsWithEventsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameContextRemoveMultipleElementsWithEventsMessage.endpointServer;
    }

    public initGameContextRemoveMultipleElementsWithEventsMessage(elementsIds: Array<number> = null, elementEventIds: Array<number> = null): GameContextRemoveMultipleElementsWithEventsMessage
    {
        super.initGameContextRemoveMultipleElementsMessage(elementsIds);
        this.elementEventIds = elementEventIds;
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
        this.serializeAs_GameContextRemoveMultipleElementsWithEventsMessage(output);
    }

    public serializeAs_GameContextRemoveMultipleElementsWithEventsMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GameContextRemoveMultipleElementsMessage(output);
        output.writeShort(this.elementEventIds.length);
        for(var _i1: number = 0; _i1 < this.elementEventIds.length; _i1++)
        {
            if(this.elementEventIds[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.elementEventIds[_i1] + ") on element 1 (starting at 1) of elementEventIds.");
            }
            output.writeByte(this.elementEventIds[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameContextRemoveMultipleElementsWithEventsMessage(input);
    }

    private deserializeAs_GameContextRemoveMultipleElementsWithEventsMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        super.deserialize(input);
        let _elementEventIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _elementEventIdsLen; _i1++)
        {
            _val1 = input.readByte();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of elementEventIds.");
            }
            this.elementEventIds.push(_val1);
        }
    }

}