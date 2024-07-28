import { Uuid } from "./../../types/game/Uuid";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { AdminCommandMessage } from "./AdminCommandMessage";

export class AdminQuietCommandMessage extends AdminCommandMessage
{

	public static readonly protocolId: number = 8282;

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
        this.deserializeAs_AdminQuietCommandMessage(input);
    }

    private deserializeAs_AdminQuietCommandMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}