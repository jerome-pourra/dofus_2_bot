import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ProtocolRequired extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1939;

	public version: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ProtocolRequired.protocolId;
    }

    public initProtocolRequired(version: string = ""): ProtocolRequired
    {
        this.version = version;
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
        this.serializeAs_ProtocolRequired(output);
    }

    public serializeAs_ProtocolRequired(output: ICustomDataOutput)
    {
        output.writeUTF(this.version);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ProtocolRequired(input);
    }

    private deserializeAs_ProtocolRequired(input: ICustomDataInput)
    {
        this._versionFunc(input);
    }

    private _versionFunc(input: ICustomDataInput)
    {
        this.version = input.readUTF();
    }

}