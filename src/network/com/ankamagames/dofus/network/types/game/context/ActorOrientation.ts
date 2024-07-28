import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class ActorOrientation
{

	public static readonly protocolId: number = 2066;

	public id: number = 0;
	public direction: number = 1;

    public constructor()
    {

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