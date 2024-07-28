import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MoveTaxCollectorOrderedSpellMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8918;

	public taxCollectorId: number = 0;
	public movedFrom: number = 0;
	public movedTo: number = 0;

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
        this.deserializeAs_MoveTaxCollectorOrderedSpellMessage(input);
    }

    private deserializeAs_MoveTaxCollectorOrderedSpellMessage(input: ICustomDataInput)
    {
        this._taxCollectorIdFunc(input);
        this._movedFromFunc(input);
        this._movedToFunc(input);
    }

    private _taxCollectorIdFunc(input: ICustomDataInput)
    {
        this.taxCollectorId = input.readDouble();
        if(this.taxCollectorId < 0 || this.taxCollectorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.taxCollectorId + ") on element of MoveTaxCollectorOrderedSpellMessage.taxCollectorId.");
        }
    }

    private _movedFromFunc(input: ICustomDataInput)
    {
        this.movedFrom = input.readByte();
        if(this.movedFrom < 0)
        {
            throw new Error("Forbidden value (" + this.movedFrom + ") on element of MoveTaxCollectorOrderedSpellMessage.movedFrom.");
        }
    }

    private _movedToFunc(input: ICustomDataInput)
    {
        this.movedTo = input.readByte();
        if(this.movedTo < 0)
        {
            throw new Error("Forbidden value (" + this.movedTo + ") on element of MoveTaxCollectorOrderedSpellMessage.movedTo.");
        }
    }

}