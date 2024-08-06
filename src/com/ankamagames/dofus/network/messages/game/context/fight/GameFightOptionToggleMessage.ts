import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightOptionToggleMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5955;

	public option: number = 3;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightOptionToggleMessage.protocolId;
    }

    public initGameFightOptionToggleMessage(option: number = 3): GameFightOptionToggleMessage
    {
        this.option = option;
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
        this.serializeAs_GameFightOptionToggleMessage(output);
    }

    public serializeAs_GameFightOptionToggleMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.option);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightOptionToggleMessage(input);
    }

    private deserializeAs_GameFightOptionToggleMessage(input: ICustomDataInput)
    {
        this._optionFunc(input);
    }

    private _optionFunc(input: ICustomDataInput)
    {
        this.option = input.readByte();
        if(this.option < 0)
        {
            throw new Error("Forbidden value (" + this.option + ") on element of GameFightOptionToggleMessage.option.");
        }
    }

}