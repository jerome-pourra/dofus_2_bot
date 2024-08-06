import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MapFightCountMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2838;

	public fightCount: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MapFightCountMessage.protocolId;
    }

    public initMapFightCountMessage(fightCount: number = 0): MapFightCountMessage
    {
        this.fightCount = fightCount;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_MapFightCountMessage(output);
    }

    public serializeAs_MapFightCountMessage(output: ICustomDataOutput)
    {
        if(this.fightCount < 0)
        {
            throw new Error("Forbidden value (" + this.fightCount + ") on element fightCount.");
        }
        output.writeVarShort(this.fightCount);
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