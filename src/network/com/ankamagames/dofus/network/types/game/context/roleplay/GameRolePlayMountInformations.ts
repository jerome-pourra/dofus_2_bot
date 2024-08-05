import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameRolePlayNamedActorInformations } from "./GameRolePlayNamedActorInformations";

export class GameRolePlayMountInformations extends GameRolePlayNamedActorInformations
{

	public static readonly protocolId: number = 9212;

	public ownerName: string = "";
	public level: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayMountInformations(input);
    }

    private deserializeAs_GameRolePlayMountInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._ownerNameFunc(input);
        this._levelFunc(input);
    }

    private _ownerNameFunc(input: ICustomDataInput)
    {
        this.ownerName = input.readUTF();
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readUnsignedByte();
        if(this.level < 0 || this.level > 255)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of GameRolePlayMountInformations.level.");
        }
    }

}