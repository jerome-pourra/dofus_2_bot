import { InteractiveElement } from "./../../../types/game/interactive/InteractiveElement";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class InteractiveElementUpdatedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8912;

	public interactiveElement: InteractiveElement;

    public constructor()
    {
        super();
        this.interactiveElement = new InteractiveElement();
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
        this.deserializeAs_InteractiveElementUpdatedMessage(input);
    }

    private deserializeAs_InteractiveElementUpdatedMessage(input: ICustomDataInput)
    {
        this.interactiveElement = new InteractiveElement();
        this.interactiveElement.deserialize(input);
    }

}