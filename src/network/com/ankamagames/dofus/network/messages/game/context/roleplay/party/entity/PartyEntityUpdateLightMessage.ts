import { PartyUpdateLightMessage } from "./../PartyUpdateLightMessage";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";

export class PartyEntityUpdateLightMessage extends PartyUpdateLightMessage
{

	public static readonly protocolId: number = 2046;

	public indexId: number = 0;

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
        this.deserializeAs_PartyEntityUpdateLightMessage(input);
    }

    private deserializeAs_PartyEntityUpdateLightMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._indexIdFunc(input);
    }

    private _indexIdFunc(input: ICustomDataInput)
    {
        this.indexId = input.readByte();
        if(this.indexId < 0)
        {
            throw new Error("Forbidden value (" + this.indexId + ") on element of PartyEntityUpdateLightMessage.indexId.");
        }
    }

}