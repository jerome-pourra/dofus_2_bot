import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class ProtectedEntityWaitingForHelpInfo implements INetworkType
{

	public static readonly protocolId: number = 9739;

	public timeLeftBeforeFight: number = 0;
	public waitTimeForPlacement: number = 0;
	public nbPositionForDefensors: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return ProtectedEntityWaitingForHelpInfo.protocolId;
    }

    public initProtectedEntityWaitingForHelpInfo(timeLeftBeforeFight: number = 0, waitTimeForPlacement: number = 0, nbPositionForDefensors: number = 0): ProtectedEntityWaitingForHelpInfo
    {
        this.timeLeftBeforeFight = timeLeftBeforeFight;
        this.waitTimeForPlacement = waitTimeForPlacement;
        this.nbPositionForDefensors = nbPositionForDefensors;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ProtectedEntityWaitingForHelpInfo(output);
    }

    public serializeAs_ProtectedEntityWaitingForHelpInfo(output: ICustomDataOutput)
    {
        output.writeInt(this.timeLeftBeforeFight);
        output.writeInt(this.waitTimeForPlacement);
        if(this.nbPositionForDefensors < 0)
        {
            throw new Error("Forbidden value (" + this.nbPositionForDefensors + ") on element nbPositionForDefensors.");
        }
        output.writeByte(this.nbPositionForDefensors);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ProtectedEntityWaitingForHelpInfo(input);
    }

    private deserializeAs_ProtectedEntityWaitingForHelpInfo(input: ICustomDataInput)
    {
        this._timeLeftBeforeFightFunc(input);
        this._waitTimeForPlacementFunc(input);
        this._nbPositionForDefensorsFunc(input);
    }

    private _timeLeftBeforeFightFunc(input: ICustomDataInput)
    {
        this.timeLeftBeforeFight = input.readInt();
    }

    private _waitTimeForPlacementFunc(input: ICustomDataInput)
    {
        this.waitTimeForPlacement = input.readInt();
    }

    private _nbPositionForDefensorsFunc(input: ICustomDataInput)
    {
        this.nbPositionForDefensors = input.readByte();
        if(this.nbPositionForDefensors < 0)
        {
            throw new Error("Forbidden value (" + this.nbPositionForDefensors + ") on element of ProtectedEntityWaitingForHelpInfo.nbPositionForDefensors.");
        }
    }

}