import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CompassResetMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5999;

	public type: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CompassResetMessage.protocolId;
    }

    public initCompassResetMessage(type: number = 0): CompassResetMessage
    {
        this.type = type;
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
        this.serializeAs_CompassResetMessage(output);
    }

    public serializeAs_CompassResetMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.type);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CompassResetMessage(input);
    }

    private deserializeAs_CompassResetMessage(input: ICustomDataInput)
    {
        this._typeFunc(input);
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of CompassResetMessage.type.");
        }
    }

}