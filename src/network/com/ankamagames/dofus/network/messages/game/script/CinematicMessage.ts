import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class CinematicMessage extends NetworkMessage
{

	public static readonly protocolId: number = 991;

	public cinematicId: number = 0;

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
        this.deserializeAs_CinematicMessage(input);
    }

    private deserializeAs_CinematicMessage(input: ICustomDataInput)
    {
        this._cinematicIdFunc(input);
    }

    private _cinematicIdFunc(input: ICustomDataInput)
    {
        this.cinematicId = input.readVarUhShort();
        if(this.cinematicId < 0)
        {
            throw new Error("Forbidden value (" + this.cinematicId + ") on element of CinematicMessage.cinematicId.");
        }
    }

}