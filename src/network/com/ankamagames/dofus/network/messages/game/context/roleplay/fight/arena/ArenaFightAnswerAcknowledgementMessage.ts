import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class ArenaFightAnswerAcknowledgementMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2033;

	public acknowledged: boolean = false;

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
        this.deserializeAs_ArenaFightAnswerAcknowledgementMessage(input);
    }

    private deserializeAs_ArenaFightAnswerAcknowledgementMessage(input: ICustomDataInput)
    {
        this._acknowledgedFunc(input);
    }

    private _acknowledgedFunc(input: ICustomDataInput)
    {
        this.acknowledged = input.readBoolean();
    }

}