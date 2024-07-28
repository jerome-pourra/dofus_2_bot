import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ReportResponseMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8138;

	public success: boolean = false;

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
        this.deserializeAs_ReportResponseMessage(input);
    }

    private deserializeAs_ReportResponseMessage(input: ICustomDataInput)
    {
        this._successFunc(input);
    }

    private _successFunc(input: ICustomDataInput)
    {
        this.success = input.readBoolean();
    }

}