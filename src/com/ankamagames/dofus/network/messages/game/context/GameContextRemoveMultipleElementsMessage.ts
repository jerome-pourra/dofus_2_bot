import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameContextRemoveMultipleElementsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5405;

	public elementsIds: Array<number>;

    public constructor()
    {
        super();
        this.elementsIds = Array<number>();
    }

    public getMessageId()
    {
        return GameContextRemoveMultipleElementsMessage.protocolId;
    }

    public initGameContextRemoveMultipleElementsMessage(elementsIds: Array<number> = null): GameContextRemoveMultipleElementsMessage
    {
        this.elementsIds = elementsIds;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameContextRemoveMultipleElementsMessage(output);
    }

    public serializeAs_GameContextRemoveMultipleElementsMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.elementsIds.length);
        for(var _i1: number = 0; _i1 < this.elementsIds.length; _i1++)
        {
            if(this.elementsIds[_i1] < -9007199254740992 || this.elementsIds[_i1] > 9007199254740992)
            {
                throw new Error("Forbidden value (" + this.elementsIds[_i1] + ") on element 1 (starting at 1) of elementsIds.");
            }
            output.writeDouble(this.elementsIds[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameContextRemoveMultipleElementsMessage(input);
    }

    private deserializeAs_GameContextRemoveMultipleElementsMessage(input: ICustomDataInput)
    {
        let _val1: number = NaN;
        let _elementsIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _elementsIdsLen; _i1++)
        {
            _val1 = Number(input.readDouble());
            if(_val1 < -9007199254740992 || _val1 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of elementsIds.");
            }
            this.elementsIds.push(_val1);
        }
    }

}