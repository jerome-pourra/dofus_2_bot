import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class PlayerNote
{

	public static readonly protocolId: number = 3703;

	public content: string = "";
	public lastEditDate: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PlayerNote(input);
    }

    private deserializeAs_PlayerNote(input: ICustomDataInput)
    {
        this._contentFunc(input);
        this._lastEditDateFunc(input);
    }

    private _contentFunc(input: ICustomDataInput)
    {
        this.content = input.readUTF();
    }

    private _lastEditDateFunc(input: ICustomDataInput)
    {
        this.lastEditDate = input.readDouble();
        if(this.lastEditDate < -9007199254740992 || this.lastEditDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.lastEditDate + ") on element of PlayerNote.lastEditDate.");
        }
    }

}