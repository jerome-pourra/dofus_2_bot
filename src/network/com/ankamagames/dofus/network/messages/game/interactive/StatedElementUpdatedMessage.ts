import { StatedElement } from "./../../../types/game/interactive/StatedElement";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class StatedElementUpdatedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7859;

	public statedElement: StatedElement;

    public constructor()
    {
        super();
        this.statedElement = new StatedElement();
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
        this.deserializeAs_StatedElementUpdatedMessage(input);
    }

    private deserializeAs_StatedElementUpdatedMessage(input: ICustomDataInput)
    {
        this.statedElement = new StatedElement();
        this.statedElement.deserialize(input);
    }

}