import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class ActorOrientation implements INetworkType
{

	public static readonly protocolId: number = 2066;

	public id: number = 0;
	public direction: number = 1;

    public constructor()
    {

    }

    public getTypeId()
    {
        return ActorOrientation.protocolId;
    }

    public initActorOrientation(id: number = 0, direction: number = 1): ActorOrientation
    {
        this.id = id;
        this.direction = direction;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ActorOrientation(output);
    }

    public serializeAs_ActorOrientation(output: ICustomDataOutput)
    {
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeDouble(this.id);
        output.writeByte(this.direction);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ActorOrientation(input);
    }

    private deserializeAs_ActorOrientation(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._directionFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readDouble();
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of ActorOrientation.id.");
        }
    }

    private _directionFunc(input: ICustomDataInput)
    {
        this.direction = input.readByte();
        if(this.direction < 0)
        {
            throw new Error("Forbidden value (" + this.direction + ") on element of ActorOrientation.direction.");
        }
    }

}