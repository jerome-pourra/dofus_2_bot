import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MapFightCountMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2838;

	public fightCount: number = 0;

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
        this.deserializeAs_MapFightCountMessage(input);
    }

    private deserializeAs_MapFightCountMessage(input: ICustomDataInput)
    {
        this._fightCountFunc(input);
    }

    private _fightCountFunc(input: ICustomDataInput)
    {
        this.fightCount = input.readVarUhShort();
        if(this.fightCount < 0)
        {
            throw new Error("Forbidden value (" + this.fightCount + ") on element of MapFightCountMessage.fightCount.");
        }
    }

}