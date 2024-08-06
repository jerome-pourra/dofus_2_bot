import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class OrnamentLostMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2799;

	public ornamentId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return OrnamentLostMessage.protocolId;
    }

    public initOrnamentLostMessage(ornamentId: number = 0): OrnamentLostMessage
    {
        this.ornamentId = ornamentId;
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
        this.serializeAs_OrnamentLostMessage(output);
    }

    public serializeAs_OrnamentLostMessage(output: ICustomDataOutput)
    {
        if(this.ornamentId < 0)
        {
            throw new Error("Forbidden value (" + this.ornamentId + ") on element ornamentId.");
        }
        output.writeShort(this.ornamentId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_OrnamentLostMessage(input);
    }

    private deserializeAs_OrnamentLostMessage(input: ICustomDataInput)
    {
        this._ornamentIdFunc(input);
    }

    private _ornamentIdFunc(input: ICustomDataInput)
    {
        this.ornamentId = input.readShort();
        if(this.ornamentId < 0)
        {
            throw new Error("Forbidden value (" + this.ornamentId + ") on element of OrnamentLostMessage.ornamentId.");
        }
    }

}