import { DebugInClientMessage } from "./../debug/DebugInClientMessage";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";

export class ClientYouAreDrunkMessage extends DebugInClientMessage
{

	public static readonly protocolId: number = 3498;

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
        this.deserializeAs_ClientYouAreDrunkMessage(input);
    }

    private deserializeAs_ClientYouAreDrunkMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}