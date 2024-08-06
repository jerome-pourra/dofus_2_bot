import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class PlayerNote implements INetworkType
{

	public static readonly protocolId: number = 3703;

	public content: string = "";
	public lastEditDate: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return PlayerNote.protocolId;
    }

    public initPlayerNote(content: string = "", lastEditDate: number = 0): PlayerNote
    {
        this.content = content;
        this.lastEditDate = lastEditDate;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PlayerNote(output);
    }

    public serializeAs_PlayerNote(output: ICustomDataOutput)
    {
        output.writeUTF(this.content);
        if(this.lastEditDate < -9007199254740992 || this.lastEditDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.lastEditDate + ") on element lastEditDate.");
        }
        output.writeDouble(this.lastEditDate);
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