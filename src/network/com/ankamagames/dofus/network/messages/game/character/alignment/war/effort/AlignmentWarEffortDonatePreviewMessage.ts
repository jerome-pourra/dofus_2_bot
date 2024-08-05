import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class AlignmentWarEffortDonatePreviewMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7642;

	public xp: number = 0;

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
        this.deserializeAs_AlignmentWarEffortDonatePreviewMessage(input);
    }

    private deserializeAs_AlignmentWarEffortDonatePreviewMessage(input: ICustomDataInput)
    {
        this._xpFunc(input);
    }

    private _xpFunc(input: ICustomDataInput)
    {
        this.xp = input.readDouble();
        if(this.xp < -9007199254740992 || this.xp > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.xp + ") on element of AlignmentWarEffortDonatePreviewMessage.xp.");
        }
    }

}