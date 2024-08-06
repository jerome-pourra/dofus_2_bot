import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class TreasureHuntFlag implements INetworkType
{

	public static readonly protocolId: number = 8258;

	public mapId: number = 0;
	public state: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return TreasureHuntFlag.protocolId;
    }

    public initTreasureHuntFlag(mapId: number = 0, state: number = 0): TreasureHuntFlag
    {
        this.mapId = mapId;
        this.state = state;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_TreasureHuntFlag(output);
    }

    public serializeAs_TreasureHuntFlag(output: ICustomDataOutput)
    {
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
        output.writeByte(this.state);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TreasureHuntFlag(input);
    }

    private deserializeAs_TreasureHuntFlag(input: ICustomDataInput)
    {
        this._mapIdFunc(input);
        this._stateFunc(input);
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of TreasureHuntFlag.mapId.");
        }
    }

    private _stateFunc(input: ICustomDataInput)
    {
        this.state = input.readByte();
        if(this.state < 0)
        {
            throw new Error("Forbidden value (" + this.state + ") on element of TreasureHuntFlag.state.");
        }
    }

}