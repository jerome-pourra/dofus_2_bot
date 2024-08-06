import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightStartMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9783;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightStartMessage.protocolId;
    }

    public initGameFightStartMessage(): GameFightStartMessage
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
        this.serializeAs_GameFightStartMessage(output);
    }

    public serializeAs_GameFightStartMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightStartMessage(input);
    }

    private deserializeAs_GameFightStartMessage(input: ICustomDataInput)
    {

    }

}