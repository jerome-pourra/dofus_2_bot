import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameEntityDispositionErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2619;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameEntityDispositionErrorMessage.protocolId;
    }

    public initGameEntityDispositionErrorMessage(): GameEntityDispositionErrorMessage
    {
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
        this.serializeAs_GameEntityDispositionErrorMessage(output);
    }

    public serializeAs_GameEntityDispositionErrorMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameEntityDispositionErrorMessage(input);
    }

    private deserializeAs_GameEntityDispositionErrorMessage(input: ICustomDataInput)
    {

    }

}