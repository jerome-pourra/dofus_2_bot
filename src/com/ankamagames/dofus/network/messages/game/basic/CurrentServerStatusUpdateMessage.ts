import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class CurrentServerStatusUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9599;

	public status: number = 1;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CurrentServerStatusUpdateMessage.protocolId;
    }

    public initCurrentServerStatusUpdateMessage(status: number = 1): CurrentServerStatusUpdateMessage
    {
        this.status = status;
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
        this.serializeAs_CurrentServerStatusUpdateMessage(output);
    }

    public serializeAs_CurrentServerStatusUpdateMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.status);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CurrentServerStatusUpdateMessage(input);
    }

    private deserializeAs_CurrentServerStatusUpdateMessage(input: ICustomDataInput)
    {
        this._statusFunc(input);
    }

    private _statusFunc(input: ICustomDataInput)
    {
        this.status = input.readByte();
        if(this.status < 0)
        {
            throw new Error("Forbidden value (" + this.status + ") on element of CurrentServerStatusUpdateMessage.status.");
        }
    }

}