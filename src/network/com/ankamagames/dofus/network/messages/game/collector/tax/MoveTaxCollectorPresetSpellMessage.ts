import { Uuid } from "./../../../../types/game/Uuid";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MoveTaxCollectorPresetSpellMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6548;

	public presetId: Uuid;
	public movedFrom: number = 0;
	public movedTo: number = 0;

    public constructor()
    {
        super();
        this.presetId = new Uuid();
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
        this.deserializeAs_MoveTaxCollectorPresetSpellMessage(input);
    }

    private deserializeAs_MoveTaxCollectorPresetSpellMessage(input: ICustomDataInput)
    {
        this.presetId = new Uuid();
        this.presetId.deserialize(input);
        this._movedFromFunc(input);
        this._movedToFunc(input);
    }

    private _movedFromFunc(input: ICustomDataInput)
    {
        this.movedFrom = input.readByte();
        if(this.movedFrom < 0)
        {
            throw new Error("Forbidden value (" + this.movedFrom + ") on element of MoveTaxCollectorPresetSpellMessage.movedFrom.");
        }
    }

    private _movedToFunc(input: ICustomDataInput)
    {
        this.movedTo = input.readByte();
        if(this.movedTo < 0)
        {
            throw new Error("Forbidden value (" + this.movedTo + ") on element of MoveTaxCollectorPresetSpellMessage.movedTo.");
        }
    }

}