import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameContextCreateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1595;

	public context: number = 1;

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
        this.deserializeAs_GameContextCreateMessage(input);
    }

    private deserializeAs_GameContextCreateMessage(input: ICustomDataInput)
    {
        this._contextFunc(input);
    }

    private _contextFunc(input: ICustomDataInput)
    {
        this.context = input.readByte();
        if(this.context < 0)
        {
            throw new Error("Forbidden value (" + this.context + ") on element of GameContextCreateMessage.context.");
        }
    }

}