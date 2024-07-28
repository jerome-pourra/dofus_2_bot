import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ProtocolRequired extends NetworkMessage
{

	public static readonly protocolId: number = 1939;

	public version: string = "";

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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