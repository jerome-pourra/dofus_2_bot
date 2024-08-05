import { MountClientData } from "./../../../../types/game/mount/MountClientData";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeMountsStableAddMessage } from "./ExchangeMountsStableAddMessage";

export class ExchangeMountsStableBornAddMessage extends ExchangeMountsStableAddMessage
{

	public static readonly protocolId: number = 2861;

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
        this.deserializeAs_ExchangeMountsStableBornAddMessage(input);
    }

    private deserializeAs_ExchangeMountsStableBornAddMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}