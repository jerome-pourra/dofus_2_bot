import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { TreasureHuntStep } from "./TreasureHuntStep";

export class TreasureHuntStepFollowDirectionToHint extends TreasureHuntStep implements INetworkType
{

	public static readonly protocolId: number = 8809;

	public direction: number = 1;
	public npcId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return TreasureHuntStepFollowDirectionToHint.protocolId;
    }

    public initTreasureHuntStepFollowDirectionToHint(direction: number = 1, npcId: number = 0): TreasureHuntStepFollowDirectionToHint
    {
        this.direction = direction;
        this.npcId = npcId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_TreasureHuntStepFollowDirectionToHint(output);
    }

    public serializeAs_TreasureHuntStepFollowDirectionToHint(output: ICustomDataOutput)
    {
        super.serializeAs_TreasureHuntStep(output);
        output.writeByte(this.direction);
        if(this.npcId < 0)
        {
            throw new Error("Forbidden value (" + this.npcId + ") on element npcId.");
        }
        output.writeVarShort(this.npcId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TreasureHuntStepFollowDirectionToHint(input);
    }

    private deserializeAs_TreasureHuntStepFollowDirectionToHint(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._directionFunc(input);
        this._npcIdFunc(input);
    }

    private _directionFunc(input: ICustomDataInput)
    {
        this.direction = input.readByte();
        if(this.direction < 0)
        {
            throw new Error("Forbidden value (" + this.direction + ") on element of TreasureHuntStepFollowDirectionToHint.direction.");
        }
    }

    private _npcIdFunc(input: ICustomDataInput)
    {
        this.npcId = input.readVarUhShort();
        if(this.npcId < 0)
        {
            throw new Error("Forbidden value (" + this.npcId + ") on element of TreasureHuntStepFollowDirectionToHint.npcId.");
        }
    }

}